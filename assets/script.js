class MenuController {
    constructor(buttonId, sidebarId) {
        this.menuBtn = document.getElementById(buttonId);
        this.sidebar = document.getElementById(sidebarId);
        
        // Csak akkor inicializál, ha a DOM elemek léteznek
        if (this.menuBtn && this.sidebar) {
            this.initEvents();
        }
    }

    initEvents() {
        // Eseményfigyelő hozzáadása (arrow function a 'this' kontextus megtartása miatt)
        this.menuBtn.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        // Állapotok kapcsolása (Tailwind classok)
        this.sidebar.classList.toggle('hidden');
        this.sidebar.classList.toggle('absolute');
        this.sidebar.classList.toggle('z-30');
        this.sidebar.classList.toggle('h-full');
        
        this.updateIcon();
    }

    updateIcon() {
        const icon = this.menuBtn.querySelector('i');
        
        if (this.sidebar.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    }
}

// Példányosítás az oldal teljes betöltése után
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = new MenuController('mobile-menu-btn', 'sidebar');
});