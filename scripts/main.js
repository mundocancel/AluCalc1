// =========================================
// main.js - Toda la lógica de la página
// =========================================

import { PRECIOS, WHATSAPP_NUMBER, COTIZACION_MSG, IVA, DESCUENTO_VOLUMEN } from './config.js';

// =========================================
// DATOS DE CATEGORÍAS (igual que antes)
// =========================================
const categorias = [
    { 
        id: 'canceles', 
        nombre: 'Canceles de Baño',
        tag: 'Baños',
        descripcion: 'Diseños modernos en vidrio templado con herrajes de alta calidad para tu baño.',
        images: [
            'https://images.unsplash.com/photo-1552321554-5f4080da6337?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1620626011761-996316b5f023?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'barandales', 
        nombre: 'Barandales',
        tag: 'Seguridad',
        descripcion: 'Barandales en vidrio templado y acero inoxidable para escaleras y balcones.',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'pasamanos', 
        nombre: 'Pasamanos',
        tag: 'Accesorios',
        descripcion: 'Pasamanos personalizados en vidrio y aluminio para escaleras interiores y exteriores.',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'mamparas', 
        nombre: 'Mamparas',
        tag: 'Oficinas',
        descripcion: 'Mamparas divisorias para oficinas y espacios comerciales con máxima funcionalidad.',
        images: [
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'vidrio', 
        nombre: 'Vidrio Templado',
        tag: 'Materiales',
        descripcion: 'Vidrio templado de seguridad para todo tipo de aplicaciones arquitectónicas.',
        images: [
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'espejos', 
        nombre: 'Espejos',
        tag: 'Decoración',
        descripcion: 'Espejos a medida con acabados premium para baños, salas y comercios.',
        images: [
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'aluminio', 
        nombre: 'Estructuras de Aluminio',
        tag: 'Construcción',
        descripcion: 'Ventanería y estructuras en aluminio de alta resistencia y durabilidad.',
        images: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80'
        ]
    },
    { 
        id: 'accesorios', 
        nombre: 'Herrajes y Accesorios',
        tag: 'Complementos',
        descripcion: 'Herrajes, bisagras y accesorios de la mejor calidad para tus proyectos.',
        images: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
        ]
    }
];

// =========================================
// ESTADO GLOBAL
// =========================================
let currentType = 'cancel';

// =========================================
// INICIALIZACIÓN
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initCategories();
    initCotizador();
    initScrollAnimations();
});

// =========================================
// HEADER SCROLL
// =========================================
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// =========================================
// MOBILE MENU
// =========================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const close = document.getElementById('mobileMenuClose');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const links = menu.querySelectorAll('a');
    
    function openMenu() {
        menu.classList.add('open');
        overlay.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    toggle.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            closeMenu();
            toggle.focus();
        }
    });
}

// =========================================
// CATEGORÍAS (con slideshow)
// =========================================
function initCategories() {
    const grid = document.getElementById('categories-grid');
    categorias.forEach((cat, index) => {
        const card = document.createElement('a');
        card.href = '#cotizador';
        card.className = 'category-card';
        card.dataset.category = cat.id;
        card.style.transitionDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="category-card-slideshow" data-images='${JSON.stringify(cat.images)}'></div>
            <div class="category-card-content">
                <span class="category-card-tag">${cat.tag}</span>
                <h3 class="category-card-title">${cat.nombre}</h3>
                <p class="category-card-description">${cat.descripcion}</p>
                <span class="category-card-cta">
                    Cotizar ahora
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            e.preventDefault();
            selectCategoryFromCard(cat.id);
            document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth' });
        });
        
        grid.appendChild(card);
    });
    
    // Slideshows
    const containers = document.querySelectorAll('.category-card-slideshow');
    containers.forEach(container => {
        const images = JSON.parse(container.getAttribute('data-images'));
        images.forEach((imgUrl, index) => {
            const div = document.createElement('div');
            div.classList.add('category-card-slide');
            div.style.backgroundImage = `url('${imgUrl}')`;
            if (index === 0) div.classList.add('active');
            container.appendChild(div);
        });

        let currentSlide = 0;
        const slides = container.querySelectorAll('.category-card-slide');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4500);
    });
}

// =========================================
// SCROLL ANIMATIONS
// =========================================
function initScrollAnimations() {
    const cards = document.querySelectorAll('.category-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => card.classList.add('visible'));
    }
}

// =========================================
// COTIZADOR
// =========================================
function initCotizador() {
    const selectorButtons = document.querySelectorAll('.type-btn');
    const widthSlider = document.getElementById('slider-width');
    const heightSlider = document.getElementById('slider-height');
    const cotizarBtn = document.getElementById('btn-cotizar');
    
    selectorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectorButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-checked', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-checked', 'true');
            currentType = btn.dataset.type;
            updateQuote();
        });
    });
    
    widthSlider.addEventListener('input', updateQuote);
    heightSlider.addEventListener('input', updateQuote);
    cotizarBtn.addEventListener('click', cotizarWhatsApp);
    
    updateQuote();
}

function selectCategoryFromCard(catId) {
    const typeMap = {
        'canceles': 'cancel',
        'barandales': 'barandal',
        'pasamanos': 'pasamano',
        'mamparas': 'mampara',
        'espejos': 'espejo',
        'vidrio': 'cancel',
        'aluminio': 'cancel',
        'accesorios': 'especial'
    };
    const type = typeMap[catId] || 'cancel';
    currentType = type;
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
        if (btn.dataset.type === type) {
            btn.classList.add('active');
            btn.setAttribute('aria-checked', 'true');
        }
    });
    updateQuote();
}

function generateSVG(type, w, h) {
    const baseSize = 220;
    const aspect = w / h;
    let boxWidth = baseSize;
    let boxHeight = baseSize;

    if (aspect > 1) {
        boxHeight = baseSize / aspect;
    } else {
        boxWidth = baseSize * aspect;
    }

    let svgContent = '';

    switch(type) {
        case 'cancel':
            svgContent = `
                <rect x="5" y="5" width="${boxWidth-10}" height="${boxHeight-10}" fill="rgba(0, 119, 182, 0.05)" stroke="#0077B6" stroke-width="3" rx="4"/>
                <line x1="${boxWidth/2}" y1="5" x2="${boxWidth/2}" y2="${boxHeight-5}" stroke="#0077B6" stroke-width="2" stroke-dasharray="4 2"/>
                <circle cx="${boxWidth - 20}" cy="${boxHeight/2}" r="5" fill="#0077B6"/>
                <circle cx="20" cy="${boxHeight/2}" r="5" fill="#0077B6"/>
            `;
            break;
        case 'barandal':
            svgContent = `
                <line x1="5" y1="${boxHeight - 15}" x2="${boxWidth-5}" y2="${boxHeight - 15}" stroke="#0077B6" stroke-width="4" stroke-linecap="round"/>
                <line x1="5" y1="${boxHeight - 15}" x2="5" y2="5" stroke="#0077B6" stroke-width="3" stroke-linecap="round"/>
                <line x1="${boxWidth-5}" y1="${boxHeight - 15}" x2="${boxWidth-5}" y2="5" stroke="#0077B6" stroke-width="3" stroke-linecap="round"/>
                <line x1="5" y1="5" x2="${boxWidth-5}" y2="5" stroke="#0077B6" stroke-width="3" stroke-linecap="round"/>
                <line x1="${boxWidth/3}" y1="5" x2="${boxWidth/3}" y2="${boxHeight - 15}" stroke="#0077B6" stroke-width="1.5" opacity="0.5"/>
                <line x1="${boxWidth*2/3}" y1="5" x2="${boxWidth*2/3}" y2="${boxHeight - 15}" stroke="#0077B6" stroke-width="1.5" opacity="0.5"/>
            `;
            break;
        case 'pasamano':
            svgContent = `
                <path d="M 5 ${boxHeight - 10} Q ${boxWidth/2} ${boxHeight/2} ${boxWidth-5} ${boxHeight - 10}" fill="none" stroke="#0077B6" stroke-width="5" stroke-linecap="round"/>
                <line x1="${boxWidth/2}" y1="${boxHeight/2 + 15}" x2="${boxWidth/2}" y2="${boxHeight - 10}" stroke="#0077B6" stroke-width="2"/>
                <circle cx="${boxWidth/2}" cy="${boxHeight/2 + 15}" r="4" fill="#0077B6"/>
            `;
            break;
        case 'mampara':
            svgContent = `
                <rect x="5" y="5" width="${boxWidth-10}" height="${boxHeight-10}" fill="rgba(0, 119, 182, 0.08)" stroke="#0077B6" stroke-width="2" rx="2"/>
                <line x1="${boxWidth/3}" y1="5" x2="${boxWidth/3}" y2="${boxHeight-5}" stroke="#0077B6" stroke-width="2"/>
                <line x1="${boxWidth*2/3}" y1="5" x2="${boxWidth*2/3}" y2="${boxHeight-5}" stroke="#0077B6" stroke-width="2"/>
            `;
            break;
        case 'espejo':
            svgContent = `
                <rect x="10" y="10" width="${boxWidth-20}" height="${boxHeight-20}" fill="rgba(0, 119, 182, 0.1)" stroke="#0077B6" stroke-width="2" rx="4"/>
                <ellipse cx="${boxWidth/2}" cy="${boxHeight/2}" rx="${boxWidth/4}" ry="${boxHeight/3}" fill="none" stroke="#0077B6" stroke-width="1" opacity="0.5"/>
                <line x1="${boxWidth/4}" y1="${boxHeight/4}" x2="${boxWidth*3/4}" y2="${boxHeight*3/4}" stroke="#0077B6" stroke-width="0.5" opacity="0.3"/>
            `;
            break;
        default:
            svgContent = `<rect x="5" y="5" width="${boxWidth-10}" height="${boxHeight-10}" fill="rgba(0,119,182,0.05)" stroke="#0077B6" stroke-width="2"/>`;
    }

    return `<svg width="${boxWidth}" height="${boxHeight}" viewBox="0 0 ${boxWidth} ${boxHeight}" role="img" aria-label="Vista previa de ${type}">${svgContent}</svg>`;
}

function updateQuote() {
    const widthSlider = document.getElementById('slider-width');
    const heightSlider = document.getElementById('slider-height');
    const w = parseFloat(widthSlider.value);
    const h = parseFloat(heightSlider.value);
    const area = w * h;

    document.getElementById('val-width').textContent = `${w.toFixed(2)} m`;
    document.getElementById('val-height').textContent = `${h.toFixed(2)} m`;
    document.getElementById('data-w').textContent = `${w.toFixed(2)} m`;
    document.getElementById('data-h').textContent = `${h.toFixed(2)} m`;
    document.getElementById('data-area').textContent = `${area.toFixed(2)} m²`;

    // Calcular costo usando PRECIOS
    let costo = 0;
    if (currentType !== 'especial') {
        const info = PRECIOS[currentType];
        if (info) {
            costo = info.base + (info.precio_m2 * area);
            // Aplicar descuento por volumen si aplica
            if (area > 5) {
                costo = costo * (1 - DESCUENTO_VOLUMEN);
            }
            // Aplicar IVA (opcional)
            // costo = costo * (1 + IVA);
            costo = Math.round(costo);
        }
    }

    // Mostrar costo
    const costoElement = document.getElementById('costo-estimado');
    if (costoElement) {
        if (currentType === 'especial') {
            costoElement.textContent = 'Cotizar especial';
        } else {
            costoElement.textContent = `$${costo.toFixed(2)} MXN`;
        }
    }

    // Mostrar/ocultar elementos según tipo
    const croquisContainer = document.getElementById('croquis-container');
    const specialContainer = document.getElementById('special-container');
    const standardControls = document.getElementById('standard-controls');
    const dataPanel = document.getElementById('data-panel');

    if (currentType === 'especial') {
        croquisContainer.style.display = 'none';
        dataPanel.style.display = 'none';
        standardControls.style.display = 'none';
        specialContainer.classList.add('visible');
    } else {
        croquisContainer.style.display = 'flex';
        dataPanel.style.display = 'grid';
        standardControls.style.display = 'block';
        specialContainer.classList.remove('visible');
        croquisContainer.innerHTML = generateSVG(currentType, w, h);
    }
}

function cotizarWhatsApp() {
    const w = document.getElementById('slider-width').value;
    const h = document.getElementById('slider-height').value;
    const area = (parseFloat(w) * parseFloat(h)).toFixed(2);
    
    // Obtener costo actual
    let costoTexto = '';
    const costoElement = document.getElementById('costo-estimado');
    if (costoElement) {
        costoTexto = costoElement.textContent;
    }
    
    const typeNames = {
        'cancel': 'Cancel de Baño',
        'barandal': 'Barandal',
        'pasamano': 'Pasamano',
        'mampara': 'Mampara',
        'espejo': 'Espejo',
        'especial': 'Trabajo Especial'
    };
    
    const message = `${COTIZACION_MSG}*Tipo:* ${typeNames[currentType]}%0A*Ancho:* ${w} m%0A*Alto:* ${h} m%0A*Área:* ${area} m²%0A*Costo estimado:* ${costoTexto}%0A%0A¿Me podrían proporcionar más información y precio final? ¡Gracias!`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    showToast('Abriendo WhatsApp...');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}