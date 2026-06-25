// ============================================================
//  MUNDOCANCEL - CALCULADORA MODERNA v2.0
//  Script de actualización automática
//  Inyecta diseño moderno, modo oscuro, cálculos en tiempo real
// ============================================================

(function() {
    'use strict';

    // ---------- ESTILOS DINÁMICOS ----------
    const styles = `
        /* Reset y base */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #f0f4f8;
            transition: background 0.3s, color 0.3s;
            padding: 20px;
            min-height: 100vh;
        }

        /* Contenedor principal */
        .calculator-modern {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 20px;
        }

        /* Tarjetas */
        .card-modern {
            background: #ffffff;
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.06);
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .card-modern:hover {
            box-shadow: 0 20px 60px rgba(0,0,0,0.08);
            transform: translateY(-2px);
        }

        .card-modern h2 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #1a1a2e;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
            letter-spacing: -0.3px;
        }

        .card-modern h2 i {
            font-size: 1.5rem;
            color: #4f46e5;
        }

        /* Campos de entrada */
        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 500;
            color: #4b5563;
            margin-bottom: 6px;
            letter-spacing: 0.3px;
        }

        .input-group input,
        .input-group select {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.2s;
            background: #fafbfc;
            color: #1a1a2e;
        }

        .input-group input:focus,
        .input-group select:focus {
            border-color: #4f46e5;
            outline: none;
            box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
            background: #ffffff;
        }

        .input-group input[type="number"] {
            -moz-appearance: textfield;
        }

        .input-group input[type="number"]::-webkit-outer-spin-button,
        .input-group input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

        /* Resultados */
        .result-display {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            border-radius: 16px;
            padding: 24px;
            color: white;
            margin-bottom: 25px;
            text-align: center;
        }

        .result-display .total-label {
            font-size: 0.9rem;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .result-display .total-amount {
            font-size: 3rem;
            font-weight: 700;
            margin: 8px 0;
            letter-spacing: -1px;
        }

        .result-display .total-sub {
            font-size: 0.85rem;
            opacity: 0.8;
        }

        /* Lista de materiales */
        .material-list {
            list-style: none;
            padding: 0;
            margin: 15px 0;
        }

        .material-list li {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #f1f5f9;
            font-size: 0.95rem;
        }

        .material-list li:last-child {
            border-bottom: none;
        }

        .material-list .material-name {
            color: #1a1a2e;
        }

        .material-list .material-qty {
            color: #6b7280;
            font-weight: 500;
        }

        /* Botones */
        .btn-modern {
            padding: 12px 28px;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-primary {
            background: #4f46e5;
            color: white;
        }

        .btn-primary:hover {
            background: #4338ca;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
        }

        .btn-secondary {
            background: #f1f5f9;
            color: #1a1a2e;
        }

        .btn-secondary:hover {
            background: #e2e8f0;
        }

        .btn-success {
            background: #10b981;
            color: white;
        }

        .btn-success:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }

        /* Toggle modo oscuro */
        .theme-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: white;
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            font-size: 1.3rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .theme-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        /* Modo oscuro */
        body.dark-mode {
            background: #0f0f1a;
        }

        body.dark-mode .card-modern {
            background: #1a1a2e;
            border-color: #2a2a4a;
        }

        body.dark-mode .card-modern h2 {
            color: #e2e8f0;
        }

        body.dark-mode .input-group label {
            color: #94a3b8;
        }

        body.dark-mode .input-group input,
        body.dark-mode .input-group select {
            background: #252540;
            border-color: #3a3a5a;
            color: #e2e8f0;
        }

        body.dark-mode .input-group input:focus,
        body.dark-mode .input-group select:focus {
            background: #2a2a4a;
            border-color: #4f46e5;
        }

        body.dark-mode .material-list li {
            border-color: #2a2a4a;
        }

        body.dark-mode .material-list .material-name {
            color: #e2e8f0;
        }

        body.dark-mode .btn-secondary {
            background: #2a2a4a;
            color: #e2e8f0;
        }

        body.dark-mode .btn-secondary:hover {
            background: #3a3a5a;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .calculator-modern {
                grid-template-columns: 1fr;
                gap: 20px;
                padding: 10px;
            }

            .card-modern {
                padding: 20px;
            }

            .result-display .total-amount {
                font-size: 2.2rem;
            }

            .theme-toggle {
                top: 10px;
                right: 10px;
                width: 40px;
                height: 40px;
                font-size: 1.1rem;
            }
        }

        @media (max-width: 480px) {
            .result-display .total-amount {
                font-size: 1.8rem;
            }

            .btn-modern {
                padding: 10px 20px;
                font-size: 0.85rem;
                width: 100%;
                justify-content: center;
            }

            .card-modern h2 {
                font-size: 1.1rem;
            }
        }

        /* Animaciones */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card-modern {
            animation: fadeInUp 0.5s ease-out;
        }

        .card-modern:nth-child(2) {
            animation-delay: 0.1s;
        }

        /* Badge de guardado */
        .save-badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-left: 10px;
        }

        /* Tooltip */
        .tooltip-trigger {
            cursor: help;
            border-bottom: 1px dashed #94a3b8;
        }

        /* Grid de botones */
        .button-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 15px;
        }

        .button-group .btn-modern {
            flex: 1;
            min-width: 120px;
            justify-content: center;
        }
    `;

    // ---------- INYECTAR ESTILOS ----------
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // ---------- INYECTAR ESTRUCTURA HTML ----------
    function injectStructure() {
        // Buscar el contenedor principal existente
        const mainContainer = document.querySelector('.container, main, #app, .calculator-container') || document.body;
        
        // Crear el nuevo wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'calculator-modern';
        wrapper.id = 'modernCalculator';

        wrapper.innerHTML = `
            <!-- Tarjeta Izquierda: Entradas -->
            <div class="card-modern">
                <h2>
                    <span>📐</span> Dimensiones
                    <span class="save-badge" id="saveStatus">Auto-guardado</span>
                </h2>
                
                <div class="input-group">
                    <label for="windowType">Tipo de ventana</label>
                    <select id="windowType">
                        <option value="corrediza">Corrediza</option>
                        <option value="abatible">Abatible</option>
                        <option value="pivotante">Pivotante</option>
                        <option value="fija">Fija</option>
                        <option value="proyectante">Proyectante</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="widthInput">Ancho (mm)</label>
                    <input type="number" id="widthInput" value="1200" step="10" min="100">
                </div>

                <div class="input-group">
                    <label for="heightInput">Alto (mm)</label>
                    <input type="number" id="heightInput" value="1500" step="10" min="100">
                </div>

                <div class="input-group">
                    <label for="wasteFactor">Factor de desperdicio (%)</label>
                    <input type="number" id="wasteFactor" value="10" step="1" min="0" max="50">
                </div>

                <div class="button-group">
                    <button class="btn-modern btn-secondary" id="resetBtn">🔄 Reiniciar</button>
                    <button class="btn-modern btn-success" id="saveProjectBtn">💾 Guardar proyecto</button>
                </div>

                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
                    <small style="color: #94a3b8; font-size: 0.8rem;">
                        ⚡ Los cálculos se actualizan automáticamente
                    </small>
                </div>
            </div>

            <!-- Tarjeta Derecha: Resultados -->
            <div class="card-modern">
                <h2>
                    <span>💰</span> Presupuesto
                    <button class="btn-modern btn-primary" id="exportPdfBtn" style="margin-left: auto; padding: 6px 16px; font-size: 0.8rem;">
                        📄 PDF
                    </button>
                </h2>

                <div class="result-display">
                    <div class="total-label">Costo total estimado</div>
                    <div class="total-amount" id="totalAmount">$0.00</div>
                    <div class="total-sub" id="projectSummary">Ventana: Corrediza · 1200 x 1500 mm</div>
                </div>

                <h3 style="font-size: 1rem; color: #1a1a2e; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <span>📦</span> Materiales necesarios
                    <span style="margin-left: auto; font-size: 0.8rem; font-weight: 400; color: #6b7280;" id="materialCount">0 items</span>
                </h3>

                <ul class="material-list" id="materialList">
                    <li><span class="material-name">Cargando...</span><span class="material-qty">—</span></li>
                </ul>

                <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
                    <button class="btn-modern btn-secondary" id="copyResultBtn" style="flex:1; justify-content:center;">
                        📋 Copiar resultado
                    </button>
                </div>
            </div>
        `;

        // Reemplazar contenido existente o añadir al final
        if (document.querySelector('.calculator-modern')) {
            document.querySelector('.calculator-modern').replaceWith(wrapper);
        } else {
            // Si hay un contenedor principal, vaciarlo y poner el nuevo
            if (mainContainer !== document.body) {
                mainContainer.innerHTML = '';
                mainContainer.appendChild(wrapper);
            } else {
                document.body.appendChild(wrapper);
            }
        }
    }

    // ---------- LÓGICA DE CÁLCULO ----------
    function calculateProject() {
        const width = parseInt(document.getElementById('widthInput').value) || 0;
        const height = parseInt(document.getElementById('heightInput').value) || 0;
        const type = document.getElementById('windowType').value;
        const waste = parseInt(document.getElementById('wasteFactor').value) || 0;

        if (width < 100 || height < 100) {
            document.getElementById('totalAmount').textContent = '$0.00';
            document.getElementById('materialList').innerHTML = '<li style="color: #ef4444;">⚠️ Ingresa medidas válidas (mínimo 100mm)</li>';
            return;
        }

        // Cálculo de área (m²)
        const areaM2 = (width * height) / 1000000;
        
        // Precios base por tipo (simulados)
        const basePrices = {
            corrediza: 450,
            abatible: 520,
            pivotante: 680,
            fija: 380,
            proyectante: 590
        };

        const pricePerM2 = basePrices[type] || 450;
        
        // Cálculo de costo base
        let baseCost = areaM2 * pricePerM2;
        
        // Ajuste por tamaño (descuento por volumen)
        if (areaM2 > 5) baseCost *= 0.9;
        else if (areaM2 > 3) baseCost *= 0.95;
        
        // Aplicar desperdicio
        const wasteMultiplier = 1 + (waste / 100);
        const totalCost = baseCost * wasteMultiplier;

        // Generar lista de materiales
        const materials = generateMaterials(type, areaM2, waste);
        
        // Actualizar UI
        document.getElementById('totalAmount').textContent = `$${totalCost.toFixed(2)}`;
        document.getElementById('projectSummary').textContent = `Ventana: ${type.charAt(0).toUpperCase() + type.slice(1)} · ${width} x ${height} mm`;
        
        // Actualizar lista de materiales
        const materialList = document.getElementById('materialList');
        materialList.innerHTML = materials.map(m => `
            <li>
                <span class="material-name">${m.name}</span>
                <span class="material-qty">${m.qty}</span>
            </li>
        `).join('');
        
        document.getElementById('materialCount').textContent = `${materials.length} items`;
        
        // Guardar en localStorage automáticamente
        autoSave({ width, height, type, waste, totalCost, materials });
    }

    function generateMaterials(type, areaM2, waste) {
        const baseMaterials = {
            corrediza: [
                { name: 'Perfil de aluminio (m)', qty: (areaM2 * 4.5).toFixed(1) },
                { name: 'Vidrio templado (m²)', qty: (areaM2 * (1 + waste/100)).toFixed(2) },
                { name: 'Rodamientos (unidad)', qty: Math.ceil(areaM2 * 2) },
                { name: 'Manijas (unidad)', qty: 2 },
                { name: 'Sellos de goma (m)', qty: (areaM2 * 3).toFixed(1) },
            ],
            abatible: [
                { name: 'Perfil de aluminio (m)', qty: (areaM2 * 5).toFixed(1) },
                { name: 'Vidrio templado (m²)', qty: (areaM2 * (1 + waste/100)).toFixed(2) },
                { name: 'Bisagras (unidad)', qty: Math.ceil(areaM2 * 3) },
                { name: 'Manijas (unidad)', qty: 1 },
                { name: 'Sellos de goma (m)', qty: (areaM2 * 4).toFixed(1) },
            ],
            pivotante: [
                { name: 'Perfil de aluminio (m)', qty: (areaM2 * 6).toFixed(1) },
                { name: 'Vidrio templado (m²)', qty: (areaM2 * (1 + waste/100)).toFixed(2) },
                { name: 'Pivotes (unidad)', qty: 2 },
                { name: 'Manijas (unidad)', qty: 1 },
                { name: 'Sellos de goma (m)', qty: (areaM2 * 4.5).toFixed(1) },
            ],
            fija: [
                { name: 'Perfil de aluminio (m)', qty: (areaM2 * 3).toFixed(1) },
                { name: 'Vidrio templado (m²)', qty: (areaM2 * (1 + waste/100)).toFixed(2) },
                { name: 'Sellos de goma (m)', qty: (areaM2 * 2.5).toFixed(1) },
            ],
            proyectante: [
                { name: 'Perfil de aluminio (m)', qty: (areaM2 * 5.5).toFixed(1) },
                { name: 'Vidrio templado (m²)', qty: (areaM2 * (1 + waste/100)).toFixed(2) },
                { name: 'Bisagras (unidad)', qty: Math.ceil(areaM2 * 2) },
                { name: 'Manijas (unidad)', qty: 1 },
                { name: 'Sellos de goma (m)', qty: (areaM2 * 4).toFixed(1) },
                { name: 'Sistema de apertura', qty: '1 kit' },
            ]
        };

        return baseMaterials[type] || baseMaterials.corrediza;
    }

    // ---------- AUTO-GUARDADO ----------
    function autoSave(data) {
        const projects = JSON.parse(localStorage.getItem('mundocancel_projects') || '[]');
        const newProject = {
            id: Date.now(),
            date: new Date().toLocaleDateString('es-ES'),
            ...data
        };
        
        // Mantener últimos 10 proyectos
        projects.unshift(newProject);
        if (projects.length > 10) projects.pop();
        
        localStorage.setItem('mundocancel_projects', JSON.stringify(projects));
        
        // Mostrar badge de guardado
        const badge = document.getElementById('saveStatus');
        if (badge) {
            badge.textContent = '✅ Guardado';
            badge.style.background = '#10b981';
            setTimeout(() => {
                badge.textContent = 'Auto-guardado';
                badge.style.background = '#4f46e5';
            }, 1500);
        }
    }

    // ---------- CARGAR ÚLTIMO PROYECTO ----------
    function loadLastProject() {
        const projects = JSON.parse(localStorage.getItem('mundocancel_projects') || '[]');
        if (projects.length > 0) {
            const last = projects[0];
            document.getElementById('widthInput').value = last.width || 1200;
            document.getElementById('heightInput').value = last.height || 1500;
            document.getElementById('windowType').value = last.type || 'corrediza';
            document.getElementById('wasteFactor').value = last.waste || 10;
            calculateProject();
        }
    }

    // ---------- EXPORTAR PDF (simulado) ----------
    function exportPDF() {
        const total = document.getElementById('totalAmount').textContent;
        const summary = document.getElementById('projectSummary').textContent;
        const materials = document.querySelectorAll('.material-list li');
        
        let materialText = '';
        materials.forEach(li => {
            const name = li.querySelector('.material-name')?.textContent || '';
            const qty = li.querySelector('.material-qty')?.textContent || '';
            materialText += `${name}: ${qty}\n`;
        });

        // Crear contenido para PDF (usando ventana de impresión)
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        printWindow.document.write(`
            <html>
                <head><title>Presupuesto MundoCancel</title></head>
                <body style="font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: auto;">
                    <h1 style="color: #4f46e5;">MundoCancel</h1>
                    <h2>Presupuesto de ventana</h2>
                    <hr>
                    <p><strong>${summary}</strong></p>
                    <h3 style="font-size: 2rem; color: #4f46e5;">${total}</h3>
                    <h4>Materiales:</h4>
                    <pre style="background: #f8fafc; padding: 15px; border-radius: 8px;">${materialText}</pre>
                    <p style="color: #64748b; font-size: 0.8rem;">Generado el ${new Date().toLocaleString('es-ES')}</p>
                    <hr>
                    <p style="text-align: center; color: #94a3b8;">www.mundocancel.com</p>
                </body>
            </html>
        `);
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
        }, 500);
    }

    // ---------- COPIAR RESULTADO ----------
    function copyResult() {
        const total = document.getElementById('totalAmount').textContent;
        const summary = document.getElementById('projectSummary').textContent;
        const materials = document.querySelectorAll('.material-list li');
        
        let text = `MUNDOCANCEL - Presupuesto\n${summary}\nTotal: ${total}\n\nMateriales:\n`;
        materials.forEach(li => {
            const name = li.querySelector('.material-name')?.textContent || '';
            const qty = li.querySelector('.material-qty')?.textContent || '';
            text += `- ${name}: ${qty}\n`;
        });
        
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('copyResultBtn');
            const originalText = btn.textContent;
            btn.textContent = '✅ ¡Copiado!';
            btn.style.background = '#10b981';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);
        }).catch(() => {
            alert('Presiona Ctrl+C para copiar el resultado');
        });
    }

    // ---------- MODO OSCURO ----------
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const icon = document.querySelector('.theme-toggle');
        if (icon) {
            icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        }
        localStorage.setItem('mundocancel_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    }

    function initTheme() {
        const savedTheme = localStorage.getItem('mundocancel_theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        // Crear botón de tema
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        toggleBtn.onclick = toggleTheme;
        document.body.appendChild(toggleBtn);
    }

    // ---------- REINICIAR ----------
    function resetProject() {
        document.getElementById('widthInput').value = 1200;
        document.getElementById('heightInput').value = 1500;
        document.getElementById('windowType').value = 'corrediza';
        document.getElementById('wasteFactor').value = 10;
        calculateProject();
    }

    // ---------- GUARDAR PROYECTO MANUAL ----------
    function saveProjectManually() {
        calculateProject(); // Ya guarda automáticamente
        const badge = document.getElementById('saveStatus');
        if (badge) {
            badge.textContent = '💾 Guardado manual';
            badge.style.background = '#10b981';
            setTimeout(() => {
                badge.textContent = 'Auto-guardado';
                badge.style.background = '#4f46e5';
            }, 2000);
        }
    }

    // ---------- INICIALIZAR EVENTOS ----------
    function initEvents() {
        // Eventos en tiempo real
        document.getElementById('widthInput').addEventListener('input', calculateProject);
        document.getElementById('heightInput').addEventListener('input', calculateProject);
        document.getElementById('windowType').addEventListener('change', calculateProject);
        document.getElementById('wasteFactor').addEventListener('input', calculateProject);

        // Botones
        document.getElementById('resetBtn').addEventListener('click', resetProject);
        document.getElementById('saveProjectBtn').addEventListener('click', saveProjectManually);
        document.getElementById('exportPdfBtn').addEventListener('click', exportPDF);
        document.getElementById('copyResultBtn').addEventListener('click', copyResult);
    }

    // ---------- EJECUTAR ----------
    function init() {
        // Inyectar estructura
        injectStructure();
        
        // Inicializar tema
        initTheme();
        
        // Cargar último proyecto o calcular por defecto
        if (localStorage.getItem('mundocancel_projects')) {
            loadLastProject();
        } else {
            calculateProject();
        }
        
        // Inicializar eventos
        initEvents();
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();