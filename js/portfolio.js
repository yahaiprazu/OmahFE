// Portfolio Gallery Scroll Enhancements
document.addEventListener('DOMContentLoaded', function() {
    const galleryRows = document.querySelectorAll('.gallery-row');
    
    // Add hover effects to gallery items
    galleryRows.forEach(row => {
        const items = row.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    });
});