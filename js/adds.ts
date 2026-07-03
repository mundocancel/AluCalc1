
        // ============================================================
        // ESTADO
        // ============================================================
        let currentProduct = 'ventana_corrediza_estandar';
        let currentAncho = 1500;
        let currentAlto = 2000;

        // ============================================================
        // FUNCIONES DE EVALUACIÓN
        // ============================================================
        function evaluarFormula(formula, ancho, alto) {
            try {
                // Reemplazar variables y evaluar de forma segura
                const expr = formula
                    .replace(/ancho/g, `(${ancho})`)
                    .replace(/alto/g, `(${alto})`);
                const result = Function('"use strict"; return (' + expr + ')')();
                return Math.round(result * 100) / 100;
            } catch (e) {
                console.warn('Error evaluando fórmula:', formula, e);
                return 0;
            }
        }

        function calcularComponentes(producto, ancho, alto) {
            const data = CATALOGO[producto];
            if (!data) return { perfiles: [], vidrios: [] };

            const perfiles = data.perfiles.map(p => ({
                ...p,
                medida: evaluarFormula(p.formula, ancho, alto)
            }));

            const vidrios = (data.vidrio || []).map(v => ({
                ...v,
                medidaAncho: evaluarFormula(v.ancho, ancho, alto),
                medidaAlto: evaluarFormula(v.alto, ancho, alto)
            }));

            return { perfiles, vidrios };
        }

        // ============================================================
        // RENDER
        // ============================================================
        function renderNavegacion() {
            const nav = document.getElementById('navCategorias');
            const categorias = [...new Set(Object.values(CATALOGO).map(p => p.categoria))];
            nav.innerHTML = categorias.map(cat =>
                `<button class="nav-btn" data-categoria="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`
            ).join('');

            nav.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.dataset.categoria;
                    const first = Object.keys(CATALOGO).find(k => CATALOGO[k].categoria === cat);
                    if (first) {
                        currentProduct = first;
                        renderProductos();
                        renderPreview();
                    }
                    nav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });

            // Activar primera categoría
            const firstCat = nav.querySelector('.nav-btn');
            if (firstCat) firstCat.classList.add('active');
        }

        function renderProductos() {
            const container = document.getElementById('productSelector');
            const entries = Object.entries(CATALOGO);
            container.innerHTML = entries.map(([key, val]) =>
                `<button class="product-btn ${key === currentProduct ? 'active' : ''}" data-key="${key}">
                    ${val.icono || '📐'} ${val.nombre.split(' ').slice(0, 2).join(' ')}
                    <span class="sub">${val.categoria}</span>
                </button>`
            ).join('');

            container.querySelectorAll('.product-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentProduct = btn.dataset.key;
                    renderProductos();
                    renderPreview();
                });
            });
        }

        function renderPreview() {
            const data = CATALOGO[currentProduct];
            if (!data) return;

            const ancho = currentAncho;
            const alto = currentAlto;
            const area = (ancho * alto / 1000000).toFixed(2);

            // Actualizar badges
            document.getElementById('productNameBadge').textContent = data.nombre;

            // Datos
            document.getElementById('dataWidth').textContent = ancho;
            document.getElementById('dataHeight').textContent = alto;
            document.getElementById('dataArea').textContent = area;

            // Slider values
            document.getElementById('valWidth').textContent = ancho + ' mm';
            document.getElementById('valHeight').textContent = alto + ' mm';

            // Preview SVG
            const previewBox = document.getElementById('previewContent');
            previewBox.innerHTML = generarSVG(currentProduct, ancho, alto);

            // Componentes
            const { perfiles, vidrios } = calcularComponentes(currentProduct, ancho, alto);
            const list = document.getElementById('componentesList');

            let html = '<div style="font-size:0.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;padding:0 0.5rem 0.5rem;border-bottom:1px solid var(--border);">Perfiles</div>';
            perfiles.forEach(p => {
                html += `<div class="componente-item">
                    <span class="cantidad">${p.cantidad}</span>
                    <span class="nombre">${p.nombre}</span>
                    <span class="tag">${p.corte}</span>
                    <span class="medida">${p.medida} mm</span>
                </div>`;
            });

            if (vidrios.length > 0) {
                html += `<div style="font-size:0.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;padding:0.75rem 0.5rem 0.5rem;border-top:1px solid var(--border);">Vidrios</div>`;
                vidrios.forEach(v => {
                    const medida = v.medidaAncho !== undefined ?
                        `${v.medidaAncho} x ${v.medidaAlto} mm` :
                        `${v.medidaAlto || ''} mm`;
                    html += `<div class="componente-item">
                        <span class="cantidad">${v.cantidad}</span>
                        <span class="nombre">${v.nombre}</span>
                        <span class="tag">vidrio</span>
                        <span class="medida">${medida}</span>
                    </div>`;
                });
            }

            if (data.notas) {
                html += `<div style="padding:0.75rem 0.5rem 0;font-size:0.75rem;color:var(--text-muted);border-top:1px solid var(--border);margin-top:0.5rem;">📌 ${data.notas}</div>`;
            }

            list.innerHTML = html;
        }

        // ============================================================
        // GENERADOR DE SVG
        // ============================================================
        function generarSVG(productKey, ancho, alto) {
            const data = CATALOGO[productKey];
            if (!data) return '<div class="placeholder">Producto no encontrado</div>';

            // Escalamos para que quepa en el preview
            const maxW = 280;
            const maxH = 220;
            const aspect = ancho / alto;
            let w = maxW;
            let h = maxH;
            if (aspect > 1) {
                h = maxW / aspect;
            } else {
                w = maxH * aspect;
            }
            w = Math.min(w, maxW);
            h = Math.min(h, maxH);
            if (w < 40) w = 40;
            if (h < 40) h = 40;

            const color = '#0077B6';
            const light = 'rgba(0,119,182,0.08)';

            // SVG básico según el tipo
            let content = '';
            const cat = data.categoria;

            if (cat === 'ventanas' || cat === 'ventanales') {
                content = `
                    <rect x="4" y="4" width="${w-8}" height="${h-8}" fill="${light}" stroke="${color}" stroke-width="2.5" rx="3"/>
                    <line x1="${w/2}" y1="4" x2="${w/2}" y2="${h-4}" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
                    <circle cx="${w-18}" cy="${h/2}" r="4" fill="${color}" opacity="0.8"/>
                    <circle cx="18" cy="${h/2}" r="4" fill="${color}" opacity="0.8"/>
                `;
                // Si tiene más de 2 hojas, agregar divisiones
                const vidrios = data.vidrio || [];
                if (vidrios.length > 1) {
                    const parts = vidrios.length;
                    for (let i = 1; i < parts; i++) {
                        const x = (i / parts) * w;
                        content += `<line x1="${x}" y1="4" x2="${x}" y2="${h-4}" stroke="${color}" stroke-width="1" opacity="0.3" stroke-dasharray="2 2"/>`;
                    }
                }
            } else if (cat === 'puertas') {
                content = `
                    <rect x="4" y="4" width="${w-8}" height="${h-8}" fill="${light}" stroke="${color}" stroke-width="2.5" rx="3"/>
                    <rect x="${w*0.08}" y="${h*0.08}" width="${w*0.84}" height="${h*0.84}" fill="none" stroke="${color}" stroke-width="1.5" rx="2" opacity="0.4"/>
                    <circle cx="${w-20}" cy="${h/2}" r="5" fill="${color}" opacity="0.7"/>
                `;
            } else if (cat === 'canceles') {
                content = `
                    <rect x="4" y="4" width="${w-8}" height="${h-8}" fill="${light}" stroke="${color}" stroke-width="2.5" rx="3"/>
                    <line x1="${w/2}" y1="4" x2="${w/2}" y2="${h-4}" stroke="${color}" stroke-width="2" opacity="0.5" stroke-dasharray="6 4"/>
                    <circle cx="${w-16}" cy="${h/2}" r="3.5" fill="${color}" opacity="0.8"/>
                    <circle cx="16" cy="${h/2}" r="3.5" fill="${color}" opacity="0.8"/>
                    <rect x="${w/2+6}" y="8" width="${w/2-14}" height="${h-16}" fill="none" stroke="${color}" stroke-width="1" opacity="0.3" rx="2"/>
                    <rect x="6" y="8" width="${w/2-14}" height="${h-16}" fill="none" stroke="${color}" stroke-width="1" opacity="0.3" rx="2"/>
                `;
            } else {
                content = `
                    <rect x="4" y="4" width="${w-8}" height="${h-8}" fill="${light}" stroke="${color}" stroke-width="2" rx="4"/>
                    <text x="${w/2}" y="${h/2+4}" text-anchor="middle" font-size="${Math.min(w,h)*0.12}" fill="${color}" opacity="0.4" font-family="Inter, sans-serif">${data.icono || '📐'}</text>
                `;
            }

            // Añadir etiqueta de medidas
            const fontSize = Math.min(w, h) * 0.06;
            content += `
                <text x="${w/2}" y="${h-6}" text-anchor="middle" font-size="${Math.max(fontSize, 8)}" fill="${color}" opacity="0.5" font-family="Inter, sans-serif" font-weight="500">${ancho} × ${alto} mm</text>
            `;

            return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Vista previa de ${data.nombre}">${content}</svg>`;
        }

        // ============================================================
        // COTIZAR WHATSAPP
        // ============================================================
        function cotizarWhatsApp() {
            const data = CATALOGO[currentProduct];
            const nombre = data.nombre;
            const ancho = currentAncho;
            const alto = currentAlto;
            const area = (ancho * alto / 1000000).toFixed(2);

            const { perfiles, vidrios } = calcularComponentes(currentProduct, ancho, alto);

            let detalle = '';
            perfiles.forEach(p => {
                detalle += `• ${p.cantidad}x ${p.nombre}: ${p.medida} mm (${p.corte})\n`;
            });
            vidrios.forEach(v => {
                detalle += `• ${v.cantidad}x ${v.nombre}: ${v.medidaAncho} x ${v.medidaAlto} mm\n`;
            });

            const mensaje = `¡Hola! Me interesa cotizar un proyecto con Aluminio&Vidrio:

📋 *Producto:* ${nombre}
📐 *Medidas:* ${ancho} mm (ancho) x ${alto} mm (alto)
📏 *Área:* ${area} m²

📦 *Despiece técnico:*
${detalle}

¿Me podrían proporcionar información sobre precios y disponibilidad? ¡Gracias!`;

            const url = `https://wa.me/523310611338?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
            mostrarToast('📤 Abriendo WhatsApp...');
        }

        // ============================================================
        // TOAST
        // ============================================================
        function mostrarToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            clearTimeout(t._timer);
            t._timer = setTimeout(() => t.classList.remove('show'), 3000);
        }

        // ============================================================
        // INICIALIZACIÓN
        // ============================================================
        document.addEventListener('DOMContentLoaded', () => {
            renderNavegacion();
            renderProductos();

            // Sliders
            const sliderW = document.getElementById('sliderWidth');
            const sliderH = document.getElementById('sliderHeight');

            sliderW.addEventListener('input', () => {
                currentAncho = parseInt(sliderW.value);
                renderPreview();
            });

            sliderH.addEventListener('input', () => {
                currentAlto = parseInt(sliderH.value);
                renderPreview();
            });

            // Botón cotizar
            document.getElementById('btnCotizar').addEventListener('click', cotizarWhatsApp);

            // Render inicial
            renderPreview();
        });