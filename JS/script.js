'use strict';
// ===== CLOSE MENU WHEN CLICK LINK =====
document.querySelectorAll('.sidebar-menu a').forEach(link =>
    link.addEventListener('click', () => document.getElementById('sidebar').hidePopover())
);

// Auto close menu when it's change size
window.addEventListener('resize', () => {
    if (window.innerWidth >= 376) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.matches(':popover-open')) {
            sidebar.hidePopover();
        }
    }
})