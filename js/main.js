a//tmp/AluCalc1/js/main.js → b//tmp/AluCalc1/js/main.js
@@ -1,695 +1,655 @@
-
-        // ============================================================
-        // CATÁ LOGO MAESTRO AMPLIADO
-        // ============================================================
-        const CATÁLOGO = {
-            "ventana_corrediza_estandar": {
-                "nombre": "Ventana corrediza estándar",
-                "categoria": "ventanas",
-                "icono": "ðŸªŸ",
-                "tipoVidrio": "4mm",
-                "perfiles": [
-                    { "nombre": "Riel / Jamba cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
-                    { "nombre": "Jambas verticales", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
-                    { "nombre": "Zoclo / Cabezal", "cantidad": 2, "formula": "(ancho - 185) / 2", "corte": "90°" }
-                ],
-                "vidrio": [
-                    { "nombre": "Vidrio fijo 4mm", "cantidad": 1, "ancho": "(ancho - 151) / 2", "alto": "alto - 125",
-                        "tipo": "4mm" },
-                    { "nombre": "Vidrio corredizo 4mm", "cantidad": 1, "ancho": "(ancho - 151) / 2",
-                    "alto": "alto - 135", "tipo": "4mm" }
-                ],
-                "notas": "ðŸ”§ Usar felpa en zoclo y cabezal para deslizamiento suave. Revisar escuadra antes de ensamblar.",
-                "porcentajeHerrajesOverride": nulo
-            },
-            "ventana_3_hojas_telescópica": {
-                "nombre": "Ventana 3 hojas telescópica",
-                "categoria": "ventanas",
-                "icono": "ðŸªŸ",
-                "tipoVidrio": "6mm",
-                "perfiles": [
-                    { "nombre": "Riel de 3\"", "cantidad": 1, "formula": "ancho", "corte": "90°" },
-                    { "nombre": "Jamba de 3\" (cabezal)", "cantidad": 1, "formula": "ancho", "corte": "90°" },
-                    { "nombre": "Adaptador paloma", "cantidad": 1, "formula": "ancho - 65", "corte": "90°" },
-                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
-                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 3, "formula": "(ancho - 167) / 3",
-                    "corte": "90°" },
-                    { "nombre": "Cerco chapa fija", "cantidad": 1, "formula": "alto", "corte": "90°" },
-                    { "nombre": "Cerco chapa corredizo", "cantidad": 1, "formula": "alto - 40", "corte": "90°" },
-                    { "nombre": "Traslape fijo", "cantidad": 1, "formula": "alto", "corte": "90°" },
-                    { "nombre": "Traslape corredizo", "cantidad": 3, "formula": "alto - 40", "corte": "90°" }
-                ],
-                "vidrio": [
-                    { "nombre": "Vidrio fijo 6mm", "cantidad": 1, "ancho": "(ancho - 117) / 3", "alto": "alto - 95",
-                        "tipo": "6mm" },
-                    { "nombre": "Vidrio corredizo 6mm", "cantidad": 2, "ancho": "(ancho - 117) / 3",
-                    "alto": "alto - 135", "tipo": "6mm" }
-                ],
-                "notas": "âš ï¸ Requiere riel de 3 servicios. El adaptador paloma debe quedar centrado. Usar rodajas de nylon.",
-                "porcentajeHerrajesOverride": 20
-            },
-            "ventanal_oxxo": {
-                "nombre": "Ventanal OXXO",
-                "categoria": "ventanales",
-                "icono": "ðŸ ª",
-                "tipoVidrio": "6mm",
-                "perfiles": [
-                    { "nombre": "Riel / Jamba c/mosquitero", "cantidad": 1, "formula": "ancho", "corte": "90°" },
-                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
-                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 8, "formula": "(ancho - 330) / 4",
-                    "corte": "90°" },
-                    { "nombre": "Cerco chapa / Traslape fijo", "cantidad": 4, "formula": "alto - 30", "corte": "90°" },
-                    { "nombre": "Cerco chapa / Traslape corredizo", "cantidad": 4, "formula": "alto - 40",
-                    "corte": "90°" }
-                ],
-                "vidrio": [
-                    { "nombre": "Vidrio fijo 6mm", "cantidad": 2, "ancho": "(ancho - 265) / 4", "alto": "alto - 125",
-                        "tipo": "6mm" },
-                    { "nombre": "Vidrio corredizo 6mm", "cantidad": 2, "ancho": "(ancho - 265) / 4",
-                    "alto": "alto - 135", "tipo": "6mm" }
-                ],
-                "notas": "ðŸ —ï¸ Para vanos grandes, reforzar el riel inferior. Considere dilatación térmica en climas extremos.",
-                "porcentajeHerrajesOverride": 22
-            },
-            "puerta_batente_estandar": {
-                "nombre": "Puerta batiente estÃ¡ndar",
-                "categoría": "puertas",
-                "icono": "ðŸšª",
-                "tipoVidrio": "6mm",
… omitted 1271 diff line(s) across 1 additional file(s)/section(s)
        // ============================================================
        // CATÁ LOGO MAESTRO AMPLIADO
        // ============================================================
        const CATÁLOGO = {
            "ventana_corrediza_estandar": {
                "nombre": "Ventana corrediza estándar",
                "categoria": "ventanas",
                "icono": "ðŸªŸ",
                "tipoVidrio": "4mm",
                "perfiles": [
                    { "nombre": "Riel / Jamba cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas verticales", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal", "cantidad": 2, "formula": "(ancho - 185) / 2", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo 4mm", "cantidad": 1, "ancho": "(ancho - 151) / 2", "alto": "alto - 125",
                        "tipo": "4mm" },
                    { "nombre": "Vidrio corredizo 4mm", "cantidad": 1, "ancho": "(ancho - 151) / 2",
                    "alto": "alto - 135", "tipo": "4mm" }
                ],
                "notas": "ðŸ”§ Usar felpa en zoclo y cabezal para deslizamiento suave. Revisar escuadra antes de ensamblar.",
                "porcentajeHerrajesOverride": nulo
            },
            "ventana_3_hojas_telescópica": {
                "nombre": "Ventana 3 hojas telescópica",
                "categoria": "ventanas",
                "icono": "ðŸªŸ",
                "tipoVidrio": "6mm",
                "perfiles": [
                    { "nombre": "Riel de 3\"", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jamba de 3\" (cabezal)", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Adaptador paloma", "cantidad": 1, "formula": "ancho - 65", "corte": "90°" },
                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 3, "formula": "(ancho - 167) / 3",
                    "corte": "90°" },
                    { "nombre": "Cerco chapa fija", "cantidad": 1, "formula": "alto", "corte": "90°" },
                    { "nombre": "Cerco chapa corredizo", "cantidad": 1, "formula": "alto - 40", "corte": "90°" },
                    { "nombre": "Traslape fijo", "cantidad": 1, "formula": "alto", "corte": "90°" },
                    { "nombre": "Traslape corredizo", "cantidad": 3, "formula": "alto - 40", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo 6mm", "cantidad": 1, "ancho": "(ancho - 117) / 3", "alto": "alto - 95",
                        "tipo": "6mm" },
                    { "nombre": "Vidrio corredizo 6mm", "cantidad": 2, "ancho": "(ancho - 117) / 3",
                    "alto": "alto - 135", "tipo": "6mm" }
                ],
                "notas": "âš ï¸ Requiere riel de 3 servicios. El adaptador paloma debe quedar centrado. Usar rodajas de nylon.",
                "porcentajeHerrajesOverride": 20
            },
            "ventanal_oxxo": {
                "nombre": "Ventanal OXXO",
                "categoria": "ventanales",
                "icono": "ðŸ ª",
                "tipoVidrio": "6mm",
                "perfiles": [
                    { "nombre": "Riel / Jamba c/mosquitero", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas de 3\"", "cantidad": 2, "formula": "alto - 26", "corte": "90°" },
                    { "nombre": "Zoclo / Cabezal de 3\"", "cantidad": 8, "formula": "(ancho - 330) / 4",
                    "corte": "90°" },
                    { "nombre": "Cerco chapa / Traslape fijo", "cantidad": 4, "formula": "alto - 30", "corte": "90°" },
                    { "nombre": "Cerco chapa / Traslape corredizo", "cantidad": 4, "formula": "alto - 40",
                    "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio fijo 6mm", "cantidad": 2, "ancho": "(ancho - 265) / 4", "alto": "alto - 125",
                        "tipo": "6mm" },
                    { "nombre": "Vidrio corredizo 6mm", "cantidad": 2, "ancho": "(ancho - 265) / 4",
                    "alto": "alto - 135", "tipo": "6mm" }
                ],
                "notas": "ðŸ —ï¸ Para vanos grandes, reforzar el riel inferior. Considere dilatación térmica en climas extremos.",
                "porcentajeHerrajesOverride": 22
            },
            "puerta_batente_estandar": {
                "nombre": "Puerta batiente estÃ¡ndar",
                "categoría": "puertas",
                "icono": "ðŸšª",
                "tipoVidrio": "6mm",
                "perfiles": [
                    { "nombre": "Bolsa lisa cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Batiente cabezal", "cantidad": 1, "formula": "ancho - 64", "corte": "90°" },
                    { "nombre": "Bolsas / Batientes verticales", "cantidad": 2, "formula": "alto - 32",
                    "corte": "90°" },
                    { "nombre": "Cercos chapa", "cantidad": 2, "formula": "alto - 47", "corte": "90°" },
                    { "nombre": "Zoclo / Intermedio / Cabezal", "cantidad": 3, "formula": "ancho - 181",
                    "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio 6mm", "cantidad": 2, "ancho": "ancho - 191", "alto": "(alto - 205) / 2",
                        "tipo": "6mm" }
                ],
                "notas": "ðŸ”' La chapa se coloca a 950 mm del piso. Usar 3 bisagras para puertas de más de 2m de alto.",
                "porcentajeHerrajesOverride": 25
            },
            "puerta_ligera": {
                "nombre": "Puerta ligera",
                "categoría": "puertas",
                "icono": "ðŸšª",
                "tipoVidrio": null,
                "perfiles": [
                    { "nombre": "Batiente cabezal", "cantidad": 1, "formula": "ancho - 25", "corte": "90°" },
                    { "nombre": "Batientes", "cantidad": 2, "formula": "alto", "corte": "90°" },
                    { "nombre": "Cercos chapa", "cantidad": 2, "formula": "alto - 27", "corte": "90°" },
                    { "nombre": "Zoclo / Intermedio", "cantidad": 2, "formula": "ancho - 139", "corte": "90°" }
                ],
                "vidrio": [],
                "notas": "ðŸ“Œ Puerta ciega sin vidrio. Ideal para closets o áreas de servicio. Usar panel de aluminio compuesto.",
                "porcentajeHerrajesOverride": 15
            },
            "puerta_bano": {
                "nombre": "Puerta de baño",
                "categoría": "puertas",
                "icono": "ðŸš¿",
                "tipoVidrio": "4mm",
                "perfiles": [
                    { "nombre": "Silla cabezal", "cantidad": 1, "formula": "ancho - 30", "corte": "90°" },
                    { "nombre": "Silla", "cantidad": 2, "formula": "alto", "corte": "90°" },
                    { "nombre": "Marco semilujo ancho", "cantidad": 2, "formula": "ancho - 42", "corte": "90°" },
                    { "nombre": "Marco semilujo alto", "cantidad": 2, "formula": "alto - 30", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Plástico/Vidrio 4mm", "cantidad": 1, "ancho": "ancho - 112", "alto": "alto - 100",
                        "tipo": "4mm" }
                ],
                "notas": "ðŸš¿ Asegurar ventilación inferior. Se puede usar plástico corrugado o vidrio esmerilado.",
                "porcentajeHerrajesOverride": 18
            },
            "cancel_plastico_bano": {
                "nombre": "Cancelar baño plástico",
                "categoria": "canceles",
                "icono": "ðŸš¿",
                "tipoVidrio": null,
                "perfiles": [
                    { "nombre": "Riel / Guía", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas", "cantidad": 2, "formula": "alto - 30", "corte": "90°" },
                    { "nombre": "Horizontales", "cantidad": 4, "formula": "(ancho + 30) / 2", "corte": "90°" },
                    { "nombre": "Marcos económicos", "cantidad": 4, "formula": "alto - 50", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Hojas plástico", "cantidad": 2, "ancho": "(ancho - 30) / 2", "alto": "alto - 80",
                        "tipo": null }
                ],
                "notas": "ðŸ› El plástico se corta con navaja. Dejar 3mm de holgura por lado para dilatación.",
                "porcentajeHerrajesOverride": 12
            },
            "cancel_templado_estandar": {
                "nombre": "Cancelar temperatura estándar",
                "categoria": "canceles",
                "icono": "ðŸªž",
                "tipoVidrio": "templado8mm",
                "perfiles": [
                    { "nombre": "Riel inferior de piso", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jamba guía superior", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Jambas verticales", "cantidad": 2, "formula": "alto - 20", "corte": "90°" },
                    { "nombre": "Perfil tapajunta vertical", "cantidad": 1, "formula": "alto - 30", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Hoja fija templada 8mm", "cantidad": 1, "ancho": "(ancho - 40) / 2",
                        "alto": "alto - 25", "tipo": "templado8mm", "perforaciones": [
                            { "descripcion": "Perforación para corona superior",
                                "distanciaBordeSuperior": 60, "distanciaBordeLateral": 40, "diametro": 12 },
                            { "descripcion": "Perforación para corona inferior",
                                "distanciaBordeSuperior": 60, "distanciaBordeLateral": 40, "diámetro": 12,
                                "desdeAbajo": verdadero }
                        ] },
                    { "nombre": "Hoja corrediza templada 8mm", "cantidad": 1, "ancho": "(ancho - 40) / 2",
                        "alto": "alto - 35", "tipo": "templado8mm", "perforaciones": [
                            { "descripcion": "Perforación para corona superior",
                                "distanciaBordeSuperior": 60, "distanciaBordeLateral": 40, "diametro": 12 },
                            { "descripcion": "Perforación para corona inferior",
                                "distanciaBordeSuperior": 60, "distanciaBordeLateral": 40, "diámetro": 12,
                                "desdeAbajo": verdadero },
                            { "descripcion": "Perforación para jaladera", "distanciaBordeSuperior": null,
                                "distanciaBordeLateral": null, "diametro": 25, "centroHorizontal": true,
                                "alturaJaladera": 1000 }
                        ] }
                ],
                "notas": "âš ï¸ VIDRIO TEMPLADO: Las perforaciones deben realizarse ANTES del templado. Diámetro estándar de corona: 12mm. La jaladera se centra horizontalmente a ~1000mm de altura. No se puede cortar ni perforar después del templado.",
                "porcentajeHerrajesOverride": 28,
                "esTemplado": true
            },
            "ventana_abatible_estandar": {
                "nombre": "Ventana abatible estándar",
                "categoria": "ventanas",
                "icono": "ðŸªŸ",
                "tipoVidrio": "6mm",
                "perfiles": [
                    { "nombre": "Marco ventana (ancho)", "cantidad": 2, "formula": "ancho", "corte": "45°" },
                    { "nombre": "Marco ventana (alto)", "cantidad": 2, "formula": "alto", "corte": "45°" },
                    { "nombre": "Hoja ventana (ancho)", "cantidad": 2, "formula": "ancho - 42", "corte": "45°" },
                    { "nombre": "Hoja ventana (alto)", "cantidad": 2, "formula": "alto - 42", "corte": "45°" },
                    { "nombre": "Junquillo redondo (ancho)", "cantidad": 2, "formula": "ancho - 114", "corte": "45°" },
                    { "nombre": "Junquillo redondo (alto)", "cantidad": 2, "formula": "alto - 114", "corte": "45°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio 6mm", "cantidad": 1, "ancho": "ancho - 127", "alto": "alto - 127", "tipo": "6mm" }
                ],
                "notas": "ðŸ“ Cortes a 45° con ingletadora. Ensamble el junquillo en la hoja antes de cortar. Usar escuadras de alineación.",
                "porcentajeHerrajesOverride": 20
            },
            "ventana_fija_1_1_2": {
                "nombre": "Ventana fija 1 1/2",
                "categoria": "ventanas",
                "icono": "ðŸªŸ",
                "tipoVidrio": "4mm",
                "perfiles": [
                    { "nombre": "Bolsa / Escalonado cabezal", "cantidad": 1, "formula": "ancho", "corte": "90°" },
                    { "nombre": "Bolsas verticales", "cantidad": 2, "formula": "alto - 40", "corte": "90°" }
                ],
                "vidrio": [
                    { "nombre": "Vidrio 4mm", "cantidad": 1, "ancho": "ancho - 48", "alto": "alto - 42", "tipo": "4mm" }
                ],
                "notas": "ðŸªŸ Ventana fija sin apertura. Sellar perimetralmente con silicio neutro.",
                "porcentajeHerrajesOverride": 10
            }
        };

        // ============================================================
        // ESTADO GLOBAL
        // ============================================================
        let productoactual = 'ventana_corrediza_estandar';
        sea ​​currentAncho = 1500;
        sea ​​currentAlto = 2000;
        let preciosCollapsed = false;

        // ============================================================
        // FUNCIONES AUXILIARES
        // ============================================================
        función evaluarFormula(formula, ancho, alto) {
            intentar {
                const expr = formula.replace(/ancho/g, `(${ancho})`).replace(/alto/g, `(${alto})`);
                const result = Function('"use strict"; return (' + expr + ')')();
                devolver Math.round(resultado * 100) / 100;
            } capturar (e) {
                console.warn('Error al evaluar la fórmula:', fórmula, e);
                devolver 0;
            }
        }

        function calcularComponentes(producto, ancho, alto) {
            datos const = CATALOGO[producto];
            if (!data) return { perfiles: [], vidrios: [] };
            const perfiles = data.perfiles.map(p => ({ ...p, medida: evaluarFormula(p.formula, ancho, alto) }));
            const vidrios = (data.vidrio || []).map(v => ({
                ...v,
                medidaAncho: evaluarFormula(v.ancho, ancho, alto),
                medidaAlto: evaluarFormula(v.alto, ancho, alto),
                perforaciones: v.perforaciones ? v.perforaciones.map(perf => ({ ...perf })) : indefinido
            }));
            devolver { perfiles, vidrios };
        }

        función obtenerPrecioVidrio(tipo) {
            const mapa = {
                '4mm': parseFloat(document.getElementById('precioVidrio4mm')?.value || 450),
                '6mm': parseFloat(document.getElementById('precioVidrio6mm')?.value || 620),
                'templado8mm': parseFloat(document.getElementById('precioVidrioTemplado8mm')?.value || 980),
                'templado10mm': parseFloat(document.getElementById('precioVidrioTemplado10mm')?.value || 1250),
            };
            devolver mapa[tipo] || 0;
        }

        función obtenerAluminioPrecio() {
            return parseFloat(document.getElementById('precioAluminio')?.value || 180);
        }

        function getPorcentajeHerrajes(producto) {
            datos const = CATALOGO[producto];
            if (datos && datos.porcentajeHerrajesOverride !== null) {
                datos de retorno.porcentajeHerrajesOverride;
            }
            return parseFloat(document.getElementById('porcentajeHerrajes')?.value || 18);
        }

        función obtenerCostoInstalacion() {
            return parseFloat(document.getElementById('costoInstalacion')?.value || 0);
        }

        function calcularCostos(producto, ancho, alto) {
            const { perfiles, vidrios } = calcularComponentes(producto, ancho, alto);
            const precioAl = getPrecioAluminio();
            sea ​​costoAluminio = 0;
            perfiles.forEach(p => {
                const metros = (p.medida * p.cantidad) / 1000;
                costoAluminio += metros * precioAl;
            });
            sea ​​costoVidrio = 0;
            vidrios.forEach(v => {
                si (v.tipo) {
                    const areaM2 = (v.medidaAncho * v.medidaAlto * v.cantidad) / 1000000;
                    costoVidrio += áreaM2 * getPrecioVidrio(v.tipo);
                }
            });
            const subtotal = costoAluminio + costoVidrio;
            const porcHerrajes = getPorcentajeHerrajes(producto);
            const costoHerrajes = subtotal * (porcHerrajes / 100);
            const instalacion = getCostoInstalacion();
            const total = subtotal + costoHerrajes + instalación;

            devolver {
                costoAluminio: Math.round(costoAluminio * 100) / 100,
                costoVidrio: Math.round(costoVidrio * 100) / 100,
                subtotal: Math.round(subtotal * 100) / 100,
                porcentajeHerrajes: porcHerrajes,
                costoHerrajes: Math.round(costoHerrajes * 100) / 100,
                costoInstalacion: instalacion,
                total: Math.round(total * 100) / 100,
                metrosAluminio: Math.round((perfiles.reduce((suma, p) => suma + (p.medida * p.cantidad) / 1000,
                0)) * 100) / 100,
                areaVidrio: Math.round((vidrios.filter(v => v.tipo).reduce((suma, v) => suma + (v
                    .medidaAncho * v.medidaAlto * v.cantidad) / 1000000, 0)) * 100) / 100,
            };
        }

        // ============================================================
        // GENERADOR DE SVG MEJORADO
        // ============================================================
        función generarSVG(productKey, ancho, alto) {
            const datos = CATÁLOGO[claveProducto];
            if (!data) return '<div class="text-muted text-center">Producto no encontrado</div>';

            const maxW = 280;
            const maxH = 220;
            const aspecto = ancho / alto;
            sea ​​w = maxW;
            sea ​​h = maxH;
            if (aspecto > 1) { h = maxW / aspecto; } else { w = maxH * aspecto; }
            w = Math.min(Math.max(w, 60), maxW);
            h = Math.min(Math.max(h, 60), maxH);

            const color = '#0077B6';
            const colorAccent = '#FFB703';
            const light = 'rgba(0,119,182,0.07)';
            const gato = datos.categoría;
            let contenido = '';

            // Marco base
            contenido +=
                `<rect x="3" y="3" width="${w-6}" height="${h-6}" fill="${light}" stroke="${color}" stroke-width="2.5" rx="3"/>`;

            si (data.esTemplado) {
                // --- CROQUIS ESPECIAL PARA CANCELAR TEMPLADO ---
                const mitadAncho = w / 2;
                // Hoja fija (izquierda)
                contenido +=
                    `<rect x="8" y="8" width="${mitadAncho-14}" height="${h-16}" fill="rgba(0,180,216,0.12)" stroke="${color}" stroke-width="1.8" rx="2"/>`;
                contenido +=
                    `<text x="${8+(mitadAncho-14)/2}" y="${h/2-4}" text-anchor="middle" font-size="9" fill="${color}" opacity="0.8" font-family="Inter,sans-serif" font-weight="600">FIJO</text>`;
                // Hoja corrediza (derecha) - ligeramente desplazada
                contenido +=
                    `<rect x="${mitadAncho+4}" y="11" width="${mitadAncho-14}" height="${h-19}" fill="rgba(255,183,3,0.12)" stroke="${colorAccent}" stroke-width="1.8" rx="2" stroke-dasharray="4 2"/>`;
                contenido +=
                    `<text x="${mitadAncho+4+(mitadAncho-14)/2}" y="${h/2-4}" text-anchor="middle" font-size="8" fill="${colorAccent}" opacity="0.9" font-family="Inter,sans-serif" font-weight="600">CORREDIZO</text>`;

                // Perforaciones en hoja fija
                const perfFija = [
                    { x: 8 + 18, y: 8 + 22, d: 8, etiqueta: 'âŒ€12' },
                    { x: 8 + 18, y: h - 8 - 22, d: 8, etiqueta: 'âŒ€12' },
                ];
                perfFija.forEach(p => {
                    contenido +=
                        `<circle cx="${px}" cy="${py}" r="${pd/2}" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="2 1"/>`;
                    contenido +=
                        `<circle cx="${px}" cy="${py}" r="1.5" fill="#EF4444"/>`;
                    contenido +=
                        `<text x="${px}" y="${py-7}" text-anchor="middle" font-size="5" fill="#EF4444" font-family="Inter,sans-serif" font-weight="700">${p.label}</text>`;
                });

                // Perforaciones en hoja corrediza
                const perfCorr = [
                    { x: mitadAncho + 4 + 18, y: 11 + 22, d: 8, etiqueta: 'âŒ€12' },
                    { x: mitadAncho + 4 + 18, y: h - 11 - 22, d: 8, etiqueta: 'âŒ€12' },
                    { x: mitadAncho + 4 + (mitadAncho - 14) / 2, y: h * 0.55, d: 10, etiqueta: 'âŒ€25' },
                ];
                perfCorr.forEach(p => {
                    contenido +=
                        `<circle cx="${px}" cy="${py}" r="${pd/2}" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="2 1"/>`;
                    contenido +=
                        `<circle cx="${px}" cy="${py}" r="1.5" fill="#EF4444"/>`;
                    contenido +=
                        `<text x="${px}" y="${py-7}" text-anchor="middle" font-size="5" fill="#EF4444" font-family="Inter,sans-serif" font-weight="700">${p.label}</text>`;
                });

                // Líneas de cota para perforaciones
                contenido +=
                    `<line x1="3" y1="8+22" x2="8+18" y2="8+22" stroke="#EF4444" stroke-width="0.6" stroke-dasharray="3 2" opacity="0.6"/>`;
                contenido +=
                    `<text x="5" y="8+22-4" font-size="5" fill="#EF4444" font-family="Inter,sans-serif" opacity="0.7">~60mm</text>`;

                // Flecha de deslizamiento
                contenido +=
                    `<line x1="${mitadAncho+4+5}" y1="${h/2}" x2="${mitadAncho+4+(mitadAncho-14)-5}" y2="${h/2}" stroke="${colorAccent}" stroke-width="1" marker-end="url(#arrowhead)" opacity="0.6"/>`;
                contenido += `<defs><marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="${colorAccent}" opacity="0.6"/></marker></defs>`;

                contenido +=
                    `<text x="${w-10}" y="10" text-anchor="end" font-size="5" fill="#EF4444" font-family="Inter,sans-serif" font-weight="700">âŒ€ = diámetro de perforación</text>`;
            } else if (cat === 'ventanas' || cat === 'ventanales') {
                const vidrios = datos.vidrio || [];
                const numHojas = vidrios.length || 2;
                si (numHojas >= 2) {
                    para (sea i = 1; i < numHojas; i++) {
                        const x = (i / numHojas) * w;
                        contenido +=
                            `<line x1="${x}" y1="4" x2="${x}" y2="${h-4}" stroke="${color}" stroke-width="1.2" opacity="0.35" stroke-dasharray="5 3"/>`;
                    }
                }
                contenido +=
                    `<circle cx="${w-16}" cy="${h/2}" r="4" fill="${color}" opacity="0.7"/><circle cx="16" cy="${h/2}" r="4" fill="${color}" opacity="0.7"/>`;
                // Flechas de direcciÃ³n
                contenido +=
                    `<text x="${w/2}" y="${h-8}" text-anchor="middle" font-size="6" fill="${color}" opacity="0.5">â†” corredizo</text>`;
            } else if (cat === 'puertas') {
                contenido +=
                    `<rect x="${w*0.1}" y="${h*0.08}" width="${w*0.8}" height="${h*0.84}" fill="none" stroke="${color}" stroke-width="1.2" rx="2" opacity="0.35"/>`;
                contenido +=
                    `<circle cx="${w-18}" cy="${h/2}" r="5" fill="${color}" opacity="0.6"/><line x1="${w-18}" y1="${h/2}" x2="${w-18}" y2="${h/2+20}" stroke="${color}" stroke-width="1.5" opacity="0.4"/>`;
                contenido +=
                    `<text x="${w/2}" y="${h-8}" text-anchor="middle" font-size="6" fill="${color}" opacity="0.5">abatible â†'</text>`;
            } else if (cat === 'canceles' && !data.esTemplado) {
                contenido +=
                    `<line x1="${w/2}" y1="4" x2="${w/2}" y2="${h-4}" stroke="${color}" stroke-width="1.8" opacity="0.4" stroke-dasharray="6 3"/>`;
                contenido +=
                    `<circle cx="${w-14}" cy="${h/2}" r="3.5" fill="${color}" opacity="0.7"/><circle cx="14" cy="${h/2}" r="3.5" fill="${color}" opacity="0.7"/>`;
                contenido +=
                    `<rect x="${w/2+5}" y="7" width="${w/2-12}" height="${h-14}" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.25" rx="2"/>`;
                contenido +=
                    `<rect x="5" y="7" width="${w/2-12}" height="${h-14}" fill="none" stroke="${color}" stroke-width="0.8" opacity="0.25" rx="2"/>`;
            }

            // Cota de ancho
            contenido +=
                `<line x1="8" y1="${h-2}" x2="${w-8}" y2="${h-2}" stroke="${color}" stroke-width="0.8" opacity="0.5"/><line x1="8" y1="${h-5}" x2="8" y2="${h+1}" stroke="${color}" stroke-width="0.8" opacity="0.5"/><line x1="${w-8}" y1="${h-5}" x2="${w-8}" y2="${h+1}" stroke="${color}" stroke-width="0.8" opacity="0.5"/>`;
            contenido +=
                `<text x="${w/2}" y="${h+3}" text-anchor="middle" font-size="7" fill="${color}" opacity="0.6" font-family="Inter,sans-serif" font-weight="500">${ancho} mm</text>`;

            return `<svg width="${w}" height="${h+14}" viewBox="0 0 ${w} ${h+14}" role="img" aria-label="Croquis de ${data.nombre}">${content}</svg>`;
        }

        // ============================================================
        // RENDER PRINCIPAL
        // ============================================================
        función renderNavegacion() {
            const nav = document.getElementById('navCategorias');
            const categorias = [...new Set(Object.values(CATALOGO).map(p => p.categoria))];
            nav.innerHTML = categorias.map(cat =>
                `<button class="nav-btn" data-categoria="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`
            ).unirse('');
            nav.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.dataset.categoria;
                    const first = Object.keys(CATALOGO).find(k => CATALOGO[k].categoria === cat);
                    si (primero) { productoActual = primero;
                        renderProductos();
                        renderTodo(); }
                    nav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });
            const firstCat = nav.querySelector('.nav-btn');
            if (firstCat) firstCat.classList.add('active');
        }

        función renderProductos() {
            const container = document.getElementById('productSelector');
            const entradas = Object.entries(CATALOGO);
            contenedor.innerHTML = entradas.map(([clave, valor]) =>
                `<button class="product-btn ${key === currentProduct ? 'active' : ''}" data-key="${key}">
                ${val.icono || 'ðŸ“ '} ${val.nombre.split(' ').slice(0,2).join(' ')}
                <span class="sub">${val.categoria}${val.esTemplado ? ' · templado' : ''}</span>
              </button>`
            ).unirse('');
            contenedor.querySelectorAll('.product-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentProduct = btn.dataset.key;
                    renderProductos();
                    renderTodo();
                });
            });
        }

        función renderTodo() {
            renderPreview();
            renderCostos();
        }

        función renderPreview() {
            const datos = CATÁLOGO[productoactual];
            si (!datos) regresar;
            const ancho = currentAncho;
            const alto = currentAlto;
            const area = (ancho * alto / 1000000).toFixed(2);

            document.getElementById('productNameBadge').textContent = data.nombre;
            document.getElementById('dataWidth').textContent = ancho;
            document.getElementById('dataHeight').textContent = alto;
            document.getElementById('dataArea').textContent = área;
            document.getElementById('valWidth').textContent = ancho + ' mm';
            document.getElementById('valHeight').textContent = alto + ' mm';
            document.getElementById('previewContent').innerHTML = generarSVG(currentProduct, ancho, alto);

            const { perfiles, vidrios } = calcularComponentes(productoactual, ancho, alto);
            const lista = document.getElementById('componentesList');
            dejar html =
                '<div style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;padding:0 0.4rem 0.4rem;border-bottom:1px solid var(--border);">ðŸ”© Perfiles</div>';
            perfiles.forEach(p => {
                html += `<div class="componente-item">
                <span class="cantidad">${p.cantidad}x</span>
                <span class="nombre">${p.nombre}</span>
                <span class="tag">${p.corte}</span>
                <span class="medida">${p.medida} mm</span>
              </div>`;
            });
            si (vidrios.length > 0) {
                html +=
                    `<div style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;padding:0.6rem 0.4rem 0.4rem;border-top:1px solid var(--border);">ðŸªž Vidrios</div>`;
                vidrios.forEach(v => {
                    const medida = v.medidaAncho !== undefinido ?
                        `${v.medidaAncho} Ã— ${v.medidaAlto} mm` : `${v.medidaAlto || ''}mm`;
                    let extraInfo = '';
                    if (v.perforaciones && v.perforaciones.longitud > 0) {
                        Información adicional =
                            ` <span style="font-size:0.55rem;color:#EF4444;">(${v.perforaciones.length} perf. âŒ€${v.perforaciones.map(p=>p.diametro).join(',âŒ€')}mm)</span>`;
                    }
                    html += `<div class="componente-item">
                <span class="cantidad">${v.cantidad}x</span>
                <span class="nombre">${v.nombre}${extraInfo}</span>
                <span class="tag">${v.tipo || 'vidrio'}</span>
                <span class="medida">${medida}</span>
              </div>`;
                    // Mostrar detalle de perforaciones si es templado
                    if (v.perforaciones && v.perforaciones.longitud > 0) {
                        v.perforaciones.forEach(perf => {
                            html += `<div class="componente-item" style="padding-left:1.5rem;font-size:0.65rem;background:#FFF5F5;">
                    <span class="cantidad" style="color:#EF4444;">â€¢</span>
                    <span class="nombre" style="font-size:0.65rem;">${perf.descripcion}</span>
                    <span class="tag" style="background:#FEE2E2;color:#991B1B;">âŒ€${perf.diametro}mm</span>
                    <span class="medida" style="font-size:0.6rem;">a ${perf.distanciaBordeSuperior || '~'}mm del borde</span>
                  </div>`;
                        });
                    }
                });
            }
            lista.innerHTML = html;

            // Notas
            const notasBox = document.getElementById('notasBox');
            si (datos.notas) {
                notasBox.innerHTML = `<strong>ðŸ“Œ Notas y recomendaciones:</strong> ${data.notas}`;
                notasBox.classList.remove('hidden');
            } demás {
                notasBox.classList.add('oculto');
            }

            // Fecha y folio para impresión
            const ahora = new Date();
            document.getElementById('printFecha').textContent = ahora.toLocaleDateString('es-MX', { day: 'numeric',
                mes: 'largo', año: 'numérico' });
            document.getElementById('printFolio').textContent = 'COT-' + ahora.getFullYear() + '-' + Math.floor(Math
            .random() * 9000 + 1000);
        }

        función renderCostos() {
            const costos = calcularCostos(currentProduct, currentAncho, currentAlto);
            const container = document.getElementById('costSummary');
            contenedor.innerHTML = `
            <div class="cost-row"><span class="label">ðŸ“ Aluminio (${costos.metrosAluminio.toFixed(2)} m lineales)</span><span class="value">$${costos.costoAluminio.toFixed(2)}</span></div>
            <div class="cost-row"><span class="label">ðŸªž Vidrio (${costos.areaVidrio.toFixed(3)} mÂ²)</span><span class="value">$${costos.costoVidrio.toFixed(2)}</span></div>
            <div class="cost-row"><span class="label">ðŸ“¦ Subtotal materiales</span><span class="value">$${costos.subtotal.toFixed(2)}</span></div>
            <div class="cost-row"><span class="label">ðŸ”§ Herrajes e insumos (${costos.porcentajeHerrajes}%)</span><span class="value">$${costos.costoHerrajes.toFixed(2)}</span></div>
            ${costos.costoInstalacion > 0 ? `<div class="cost-row"><span class="label">ðŸ› ï¸ InstalaciÃ³n</span><span class="value">$${costos.costoInstalacion.toFixed(2)}</span></div>` : ''}
            <div class="cost-row total"><span class="label">ðŸ'° TOTAL ESTIMADO</span><span class="value">$${costos.total.toFixed(2)} MXN</span></div>
          `;
        }

        // ============================================================
        // COTIZAR WHATSAPP
        // ============================================================
        función cotizarWhatsApp() {
            const datos = CATÁLOGO[productoactual];
            const nombre = data.nombre;
            const ancho = currentAncho;
            const alto = currentAlto;
            const area = (ancho * alto / 1000000).toFixed(2);
            const { perfiles, vidrios } = calcularComponentes(productoactual, ancho, alto);
            const costos = calcularCostos(productoactual, ancho, alto);

            let detalle = '';
            perfiles.forEach(p => { detalle +=
                    `â€¢ ${p.cantidad}x ${p.nombre}: ${p.medida} mm (corte ${p.corte})\n`; });
            vidrios.forEach(v => {
                const medida = v.medidaAncho !== undefinido ?
                    `${v.medidaAncho} x ${v.medidaAlto} mm` : `${v.medidaAlto || ''}mm`;
                detalle += `â€¢ ${v.cantidad}x ${v.nombre}: ${medida}\n`;
                si (v.perforaciones) {
                    v.perforaciones.forEach(perf => {
                        detalle +=
                            ` â†³ ${perf.descripcion}: âŒ€${perf.diametro}mm a ~${perf.distanciaBordeSuperior || 'centro'} del borde\n`;
                    });
                }
            });

            const mensaje =
                `¡Hola! Cotización desde Aluminio&Vidrio:

        ðŸ“‹ *Producto:* ${nombre}${data.esTemplado ? ' (VIDRIO TEMPLADO)' : ''}
        ðŸ“ *Medidas:* ${ancho} mm (ancho) Ã— ${alto} mm (alto) | Ã rea: ${area} m²

        ðŸ“¦ *Despiece técnico:*
        ${detalle}
        ðŸ'° *Resumen de costos:*
        â€¢ Aluminio: $${costos.costoAluminio.toFixed(2)}
        â€¢ Vidrio: $${costos.costoVidrio.toFixed(2)}
        â€¢ Herrajes e insumos (${costos.porcentajeHerrajes}%): $${costos.costoHerrajes.toFixed(2)}
        ${costos.costoInstalacion > 0 ? `â€¢ Instalación: $${costos.costoInstalacion.toFixed(2)}\n` : ''}
        ðŸ ·ï¸ *TOTAL ESTIMADO: $${costos.total.toFixed(2)} MXN*

        ${datos.notas ? 'ðŸ“Œ *Notas:* ' + data.notas.split('.')[0] + '.' : ''}

        ¿Me podrÃan confirmar precios y disponibilidad? ¡Gracias!`;

            const url = `https://wa.me/523320827128?text=${encodeURIComponent(mensaje)}`;
            ventana.abrir(url, '_blank');
            mostrarToast('ðŸ“¤ Abriendo WhatsApp con cotización...');
        }

        // ============================================================
        // IMPRIMIR / PDF
        // ============================================================
        función imprimirPDF() {
            mostrarToast('ðŸ–¨ï¸ Preparando impresión / PDF...');
            setTimeout(() => window.print(), 400);
        }

        // ============================================================
        // TOSTADA
        // ============================================================
        función mostrarToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            clearTimeout(t._timer);
            t._timer = setTimeout(() => t.classList.remove('show'), 3000);
        }

        // ============================================================
        // INICIALIZACIÃ“N
        // ============================================================
        document.addEventListener('DOMContentLoaded', () => {
            renderNavegación();
            renderProductos();
            renderTodo();

            // Deslizadores
            const sliderW = document.getElementById('sliderWidth');
            const sliderH = document.getElementById('sliderHeight');
            sliderW.addEventListener('input', () => { currentAncho = parseInt(sliderW.value);
                renderTodo(); });
            sliderH.addEventListener('input', () => { currentAlto = parseInt(sliderH.value);
                renderTodo(); });

            // Botones
            document.getElementById('btnCotizar').addEventListener('click', cotizarWhatsApp);
            document.getElementById('btnImprimir').addEventListener('click', imprimirPDF);
            document.getElementById('btnImprimirTop').addEventListener('click', imprimirPDF);

            // Panel de precios plegable
            const panelPrecios = document.getElementById('panelPrecios');
            const priceHeader = document.getElementById('priceHeader');
            priceHeader.addEventListener('click', () => {
                preciosCollapsed = !preciosCollapsed;
                si (preciosCollapsed) {
                    panelPrecios.classList.add('collapsed');
                } demás {
                    panelPrecios.classList.remove('collapsed');
                }
            });
            document.getElementById('btnTogglePrecios').addEventListener('click', () => {
                preciosCollapsed = !preciosCollapsed;
                si (preciosCollapsed) {
                    panelPrecios.classList.add('collapsed');
                } demás {
                    panelPrecios.classList.remove('collapsed');
                }
                panelPrecios.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            // Actualizar costos cuando cambian los precios
            const priceInputs = document.querySelectorAll('#priceBody input');
            priceInputs.forEach(input => {
                input.addEventListener('input', () => {
                    renderCostos();
                });
            });
        });
