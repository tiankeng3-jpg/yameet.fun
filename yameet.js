// Yameet Unified JavaScript - All Regions

// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    
    function updateNav() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', function() {
        window.requestAnimationFrame(updateNav);
    });

    // Initial check
    updateNav();

    // Smooth scroll for anchor links
    document.querySelectorAll('.toc-list a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Set active state on page load based on URL hash
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            setTimeout(() => {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // RTL detection for Arabic
    const htmlElement = document.documentElement;
    const currentPage = window.location.pathname.split('/').pop() || 'yameetEn.html';
    
    if (currentPage === 'yameetAr.html') {
        htmlElement.setAttribute('dir', 'rtl');
    } else {
        htmlElement.setAttribute('dir', 'ltr');
    }
});

// Region switching function
function switchRegion(pageUrl) {
    window.location.href = pageUrl;
}

// Ensure select shows current region
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('regionSelect');
    if (select) {
        const currentPage = window.location.pathname.split('/').pop() || 'yameetEn.html';
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === currentPage) {
                select.options[i].selected = true;
                break;
            }
        }
    }
});