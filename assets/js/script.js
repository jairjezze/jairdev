const translations = {
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-desc": "Hi, I'm Jair, a young computer programmer and instructor with hybrid knowledge. I love to innovate, simplify work, and transform complex code into maintainable solutions.",
        "hero-quote": '"Most things in life don\'t need force, they need direction"',
        "skills-title": "TECH STACK",
        "title-projects": "Featured Projects",
        "p1-desc": "Santos app is a web application that helps you find out the prices of products from registered stores. It allows anyone to have an account and register as a store or customer in a free and efficient experience.",
        "title-contact": "Get in touch",
        "info-loc": "Location: Puerto Cortes, Honduras",
        "btn-send": "Send Message"
    },
    es: {
        "nav-home": "Inicio",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-desc": "Hola soy Jair, un joven programador e instructor con conocimiento híbrido. Me gusta innovar, facilitar el trabajo y transformar código complejo en soluciones mantenibles.",
        "hero-quote": '"La mayoría de cosas en la vida no necesitan fuerza, sino dirección"',
        "skills-title": "TECNOLOGÍAS",
        "title-projects": "Proyectos Destacados",
        "p1-desc": "Santos app es una aplicacion web que ayuda a saber los precios de los productos de las tiendas registradas, permite que todos puedan tener una cuenta, registrarse como tienda o clientes en una experiencia gratuita y eficiente.",
        "title-contact": "Contacto",
        "info-loc": "Ubicación: Puerto Cortes, Honduras",
        "btn-send": "Enviar Mensaje"
    }
};

let currentLang = 'en'; // Predeterminado Inglés

const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Ejecutar al cargar para asegurar que empiece en inglés
document.addEventListener('DOMContentLoaded', updateLanguage);

// Animación simple de aparición al hacer scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});