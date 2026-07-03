// =========================================
// CONFIGURACIÓN GLOBAL (editable)
// =========================================

// Precios base por tipo de trabajo
export const PRECIOS = {
    cancel: { 
        base: 2500,        // costo fijo por instalación
        precio_m2: 1200,   // costo por metro cuadrado
        descripcion: 'Vidrio templado + herrajes de acero inoxidable'
    },
    barandal: { 
        base: 1800, 
        precio_m2: 900,
        descripcion: 'Vidrio templado + pasamanos de aluminio'
    },
    pasamano: { 
        base: 1500, 
        precio_m2: 750,
        descripcion: 'Vidrio y aluminio de primera calidad'
    },
    mampara: { 
        base: 2000, 
        precio_m2: 1100,
        descripcion: 'Vidrio + perfiles de aluminio anodizado'
    },
    espejo: { 
        base: 800, 
        precio_m2: 500,
        descripcion: 'Espejo de 6 mm con biselado'
    },
    especial: { 
        base: 0, 
        precio_m2: 0,
        descripcion: 'Proyecto completamente personalizado'
    }
};

// Número de WhatsApp
export const WHATSAPP_NUMBER = '523310611338';

// Mensaje base para cotización
export const COTIZACION_MSG = 
    '¡Hola! Me interesa cotizar un proyecto con El Mundo de los Canceles:%0A%0A';

// Otros datos editables (por ejemplo, impuestos, descuentos)
export const IVA = 0.16; // 16%
export const DESCUENTO_VOLUMEN = 0.05; // 5% de descuento para áreas > 5 m²