document.addEventListener('DOMContentLoaded', function() {

    // 1. DARK MODE / LIGHT MODE avec data-theme
    const toggleBtn = document.getElementById('toggle-dark');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if(toggleBtn) toggleBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';

    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            let theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            toggleBtn.innerText = theme === 'dark' ? '☀️' : '🌙';
        });
    }


    // 2. NAVBAR DYNAMIQUE + MENU HAMBURGER
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }


    // 3. ANIMATIONS FADE-IN AU SCROLL avec IntersectionObserver
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));


    // 4. ONGLETS DU PROGRAMME
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });


    // 5. FILTRAGE DYNAMIQUE INTERVENANTS
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.intervenant-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                if(filter === 'all' || card.dataset.categorie === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // 6. VALIDATION DE FORMULAIRE
    const form = document.getElementById('form-inscription');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            // ... colle ici le code de validation que je t'ai donné avant
        });
    }


    // 7. BOUTON RETOUR EN HAUT
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    if(backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // 8. ANNÉE DYNAMIQUE DANS FOOTER
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }

});






document.addEventListener('DOMContentLoaded', function() {
    console.log("JS chargé OK"); // Pour vérifier

    // 1. MODE SOMBRE
    const toggleBtn = document.getElementById('toggle-dark');
    const html = document.documentElement;
    
    if(toggleBtn) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        toggleBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';

        toggleBtn.addEventListener('click', () => {
            let newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggleBtn.innerText = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }


    // 2. COMPTEURS QUI BOUGENT
    const compteurs = document.querySelectorAll('.chiffre');
    let started = false;

    function animateCompteurs() {
        if(started) return;
        started = true;
        compteurs.forEach(compteur => {
            const target = +compteur.getAttribute('data-target');
            let count = 0;
            const increment = target / 120;

            const update = () => {
                count += increment;
                if(count < target) {
                    compteur.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                } else {
                    compteur.innerText = target + '+';
                }
            };
            update();
        });
    }

    // Lancer quand on arrive sur la section
    const sectionCompteur = document.querySelector('.compteurs');
    if(sectionCompteur) {
        window.addEventListener('scroll', () => {
            if(sectionCompteur.getBoundingClientRect().top < window.innerHeight - 100) {
                animateCompteurs();
            }
        });
    }
});



// COMMIT 4: ONGLETS PROGRAMME
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});




