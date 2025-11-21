// Features Page - Services Grid with Show More functionality
document.addEventListener('DOMContentLoaded', function() {
    const servicesGrid = document.getElementById('servicesGrid');
    const showMoreBtn = document.getElementById('showMoreBtn');
    
    const allServices = [
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Web Design", image: "images/blablabla.jpeg" },
        { name: "Coming Soon", image: null }
    ];
    
    let showAll = false;
    const initialServices = allServices.slice(0, 3);
    const additionalServices = allServices.slice(3);
    
    function renderServices(services) {
        servicesGrid.innerHTML = '';
        
        services.forEach((service, index) => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'service-item';
            
            if (service.image) {
                serviceElement.innerHTML = `
                    <div class="service-image">
                        <img src="${service.image}" alt="${service.name}" class="service-img">
                        <div class="service-overlay">
                            <span class="service-name">${service.name}</span>
                        </div>
                    </div>
                `;
            } else {
                serviceElement.innerHTML = `
                    <div class="service-coming-soon">
                        <span>${service.name}</span>
                    </div>
                `;
            }
            
            servicesGrid.appendChild(serviceElement);
        });
    }
    
    function toggleServices() {
        showAll = !showAll;
        
        if (showAll) {
            renderServices(allServices);
            showMoreBtn.innerHTML = `
                <span>Show Less</span>
                <img src="images/icons/below.svg" alt="Arrow" class="btn-icon">
            `;
        } else {
            renderServices(initialServices);
            showMoreBtn.innerHTML = `
                <span>Show More</span>
                <img src="images/icons/below.svg" alt="Arrow" class="btn-icon rotated">
            `;
        }
    }
    
    // Initialize
    renderServices(initialServices);
    showMoreBtn.addEventListener('click', toggleServices);
});