let PRECIOS = {};
fetch('data/precios.json')
    .then(res => res.json())
    .then(data => { PRECIOS = data; updateQuote(); });    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-inner">
                <a href="#" class="logo">
                    <div class="logo-mark">AC</div>
                    <div class="logo-text">
                        Aluminio&Vidrio
                        <span>Catálogo técnico</span>
                    </div>
                </a>
                <nav class="nav" id="navCategorias">
                    <!-- Generado por JS -->
                </nav>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="container">
            <div class="grid-2">
                <!-- Panel izquierdo: Controles -->
                <div class="card fade-in">
                    <div class="card-title">
                        📐 Cotizador
                        <span class="badge">medidas en mm</span>
                    </div>

                    <div id="productSelector" class="product-grid">
                        <!-- Generado por JS -->
                    </div>

                    <div id="standardControls">
                        <div class="control-group">
                            <label class="control-label" for="sliderWidth">
                                <span>Ancho</span>
                                <span class="control-value" id="valWidth">1500 mm</span>
                            </label>
                            <input type="range" id="sliderWidth" class="slider" min="300" max="5000" step="10" value="1500">
                            <div class="slider-range">
                                <span>300 mm</span>
                                <span>5000 mm</span>
                            </div>
                        </div>

                        <div class="control-group">
                            <label class="control-label" for="sliderHeight">
                                <span>Alto</span>
                                <span class="control-value" id="valHeight">2000 mm</span>
                            </label>
                            <input type="range" id="sliderHeight" class="slider" min="300" max="3500" step="10" value="2000">
                            <div class="slider-range">
                                <span>300 mm</span>
                                <span>3500 mm</span>
                            </div>
                        </div>
                    </div>

                    <div class="special-card hidden" id="specialCard">
                        <div class="icon">🔧</div>
                        <h4>Trabajo Personalizado</h4>
                        <p>Para proyectos especiales, contáctanos directamente. Nuestro equipo te asesorará con la mejor solución.</p>
                    </div>

                    <button class="btn-whatsapp" id="btnCotizar">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Enviar cotización por WhatsApp
                    </button>
                </div>

                <!-- Panel derecho: Vista previa y despiece -->
                <div class="card fade-in">
                    <div class="card-title">
                        🔍 Despiece técnico
                        <span class="badge" id="productNameBadge">Ventana corrediza</span>
                    </div>

                    <div class="preview-box" id="previewBox">
                        <div id="previewContent">
                            <!-- Generado por JS -->
                        </div>
                    </div>

                    <div class="data-grid" id="dataGrid">
                        <div class="data-item">
                            <strong id="dataWidth">1500</strong>
                            <span>Ancho (mm)</span>
                        </div>
                        <div class="data-item">
                            <strong id="dataHeight">2000</strong>
                            <span>Alto (mm)</span>
                        </div>
                        <div class="data-item">
                            <strong id="dataArea">3.00</strong>
                            <span>Área (m²)</span>
                        </div>
                    </div>

                    <div class="componentes-list" id="componentesList">
                        <!-- Generado por JS -->
                    </div>
                </div>
            </div>
        </div>
    </main>

    <div class="toast" id="toast"></div>

    <script>
        // ============================================================
        // CATÁLOGO MAESTRO (basado en el JSON normalizado)
        // ============================================================
        const CATALOGO = {
            "ventana_corrediza_estandar": {
                "nombre": "Ventana corrediza estándar",
                "categoria": "ventanas",
                "icono": "🚪",
                "perfiles": [
                    { "nombre": "Riel / Jamba cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas verticales", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal", "cantidad": 2, "formula": "(ancho - 185) / 2", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo", "cantidad": 1, "ancho": "(ancho - 151) / 2", "alto": "alto - 125" },
                    { "nombre": "Vidrio corredizo", "cantidad": 1, "ancho": "(ancho - 151) / 2", "alto": "alto - 135" }
                ]
            },
            "ventana_3_hojas_telescopica": {
                "nombre": "Ventana 3 hojas telescópica",
                "categoria": "ventanas",
                "icono": "🪟",
                "perfiles": [
                    { "nombre": "Riel de 3\"", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jamba de 3\" (cabezal)", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Adaptador paloma", "cantidad": 1, "formula": "ancho - 65", "corte": "90°" },
                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 3, "formula": "(ancho - 167) / 3", "corte": "90°" },
                    { "nombre": "Cerco chapa fijo", "cantidad": 1, "formula": "alto", "corte": "90°" },
                    { "nombre": "Cerco chapa corredizo", "cantidad": 1, "formula": "alto - 40", "corte": "90°" },
                    { "nombre": "Traslape fijo", "cantidad": 1, "formula": "alto", "corte": "90°" },
                    { "nombre": "Traslape corredizo", "cantidad": 3, "formula": "alto - 40", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo", "cantidad": 1, "ancho": "(ancho - 117) / 3", "alto": "alto - 95" },
                    { "nombre": "Vidrio corredizo", "cantidad": 2, "ancho": "(ancho - 117) / 3", "alto": "alto - 135" }
                ]
            },
            "ventanal_oxxo": {
                "nombre": "Ventanal OXXO",
                "categoria": "ventanales",
                "icono": "🏪",
                "perfiles": [
                    { "nombre": "Riel / Jamba c/mosquitero", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 8, "formula": "(ancho - 330) / 4", "corte": "90°" },
                    { "nombre": "Cerco chapa / Traslape fijo", "cantidad": 4, "formula": "alto - 30", "corte": "90°" },
                    { "nombre": "Cerco chapa / Traslape corredizo", "cantidad": 4, "formula": "alto - 40", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo", "cantidad": 2, "ancho": "(ancho - 265) / 4", "alto": "alto - 125" },
                    { "nombre": "Vidrio corredizo", "cantidad": 2, "ancho": "(ancho - 265) / 4", "alto": "alto - 135" }
                ]
            },
            "puerta_batiente_estandar": {
                "nombre": "Puerta batiente estándar",
                "categoria": "puertas",
                "icono": "🚪",
                "perfiles": [
                    { "nombre": "Bolsa lisa cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Batiente cabezal", "cantidad": 1, "formula": "ancho - 64", "corte": "90°" },
                    { "nombre": "Bolsas / Batientes verticales", "cantidad": 2, "formula": "alto - 32", "corte": "90°" },
                    { "nombre": "Cercos chapa", "cantidad": 2, "formula": "alto - 47", "corte": "90°" },
                    { "nombre": "Zoclo / Intermedio / Cabezal", "cantidad": 3, "formula": "ancho - 181", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio", "cantidad": 2, "ancho": "ancho - 191", "alto": "(alto - 205) / 2" }
                ]
            },
            "puerta_ligera": {
                "nombre": "Puerta ligera",
                "categoria": "puertas",
                "icono": "🚪",
                "perfiles": [
                    { "nombre": "Batiente cabezal", "cantidad": 1, "formula": "ancho - 25", "corte": "90°" },
                    { "nombre": "Batientes", "cantidad": 2, "formula": "alto", "corte": "90°" },
                    { "nombre": "Cercos chapa", "cantidad": 2, "formula": "alto - 27", "corte": "90°" },
                    { "nombre": "Zoclo / Intermedio", "cantidad": 2, "formula": "ancho - 139", "corte": "90°" }
                ],
                "vidrio": []
            },
            "puerta_bano": {
                "nombre": "Puerta de baño",
                "categoria": "puertas",
                "icono": "🚿",
                "perfiles": [
                    { "nombre": "Silla cabezal", "cantidad": 1, "formula": "ancho - 30", "corte": "90°" },
                    { "nombre": "Silla", "cantidad": 2, "formula": "alto", "corte": "90°" },
                    { "nombre": "Marco semilujo ancho", "cantidad": 2, "formula": "ancho - 42", "corte": "90°" },
                    { "nombre": "Marco semilujo alto", "cantidad": 2, "formula": "alto - 30", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Plastico/Vidrio", "cantidad": 1, "ancho": "ancho - 112", "alto": "alto - 100" }
                ]
            },
            "cancel_plastico_bano": {
                "nombre": "Cancel de baño plástico",
                "categoria": "canceles",
                "icono": "🚿",
                "perfiles": [
                    { "nombre": "Riel / Guía", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas", "cantidad": 2, "formula": "alto - 30", "corte": "90°" },
                    { "nombre": "Horizontales", "cantidad": 4, "formula": "(ancho + 30) / 2", "corte": "90°" },
                    { "nombre": "Marcos económicos", "cantidad": 4, "formula": "alto - 50", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Hojas plástico", "cantidad": 2, "ancho": "(ancho - 30) / 2", "alto": "alto - 80" }
                ]
            },
            "ventana_abatible_estandar": {
                "nombre": "Ventana abatible estándar",
                "categoria": "ventanas",
                "icono": "🪟",
                "perfiles": [
                    { "nombre": "Marco ventana (ancho)", "cantidad": 2, "formula": "ancho", "corte": "45°" },
                    { "nombre": "Marco ventana (alto)", "cantidad": 2, "formula": "alto", "corte": "45°" },
                    { "nombre": "Hoja ventana (ancho)", "cantidad": 2, "formula": "ancho - 42", "corte": "45°" },
                    { "nombre": "Hoja ventana (alto)", "cantidad": 2, "formula": "alto - 42", "corte": "45°" },
                    { "nombre": "Junquillo redondo (ancho)", "cantidad": 2, "formula": "ancho - 114", "corte": "45°" },
                    { "nombre": "Junquillo redondo (alto)", "cantidad": 2, "formula": "alto - 114", "corte": "45°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio 6mm", "cantidad": 1, "ancho": "ancho - 127", "alto": "alto - 127" }
                ],
                "notas": "Se recomienda que el junquillo se ensamble en la hoja antes de cortarla."
            },
            "ventana_1_1_2_corrediza": {
                "nombre": "Ventana 1 1/2 corrediza",
                "categoria": "ventanas",
                "icono": "🪟",
                "perfiles": [
                    { "nombre": "Riel / Jamba cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas verticales", "cantidad": 2, "formula": "alto - 20", "corte": "90°" },
                    { "nombre": "Cabezales", "cantidad": 3, "formula": "(ancho - 100) / 2", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo", "cantidad": 1, "ancho": "(ancho - 70) / 2", "alto": "alto - 45" },
                    { "nombre": "Vidrio corredizo", "cantidad": 1, "ancho": "(ancho - 70) / 2", "alto": "alto - 75" }
                ]
            },
            "ventana_fija_1_1_2": {
                "nombre": "Ventana fija 1 1/2",
                "categoria": "ventanas",
                "icono": "🪟",
                "perfiles": [
                    { "nombre": "Bolsa / Escalonado cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Bolsas verticales", "cantidad": 2, "formula": "alto - 40", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio", "cantidad": 1, "ancho": "ancho - 48", "alto": "alto - 42" }
                ]
            }
        };

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
    </script>
</body>