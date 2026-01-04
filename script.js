document.addEventListener('DOMContentLoaded', () => {
    // Language switcher functionality
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (event) => {
            const selectedLang = event.target.value;
            // Here you would implement logic to change the site's language
            // This could involve:
            // 1. Reloading the page with a language parameter (e.g., geezhospital.com?lang=eng)
            // 2. Dynamically changing content on the page (more complex)
            // For now, we'll just log it.
            console.log(`Language switched to: ${selectedLang}`);
            alert(`Language switching is not fully implemented yet. Selected: ${selectedLang}`);
        });
    }

    // Dynamic Services Loading (Example - you'll expand this)
    const services = [
        { name: "ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት", icon: "fas fa-stethoscope", description: "ምሉእ ናይ ውሽጣዊ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ፍሉይ ስፔሻሊስት ሕክምና ሕማማት ልቢ", icon: "fas fa-heartbeat", description: "ፍሉይ ናይ ልቢ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ሳብ ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ስፔሻሊስት ሓፈሻዊ መጥባሕቲ", icon: "fas fa-surgical-mask", description: "ስፔሻሊስት ሓፈሻዊ መጥባሕቲ ብዘመናዊ መሳርሒታትን ኣገባባትን ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ህፃውንቲን ኣባፅሕን", icon: "fas fa-baby", description: "ናይ ህፃውንቲን ኣባፅሕን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ማህፀንን ጥንስን", icon: "fas fa-venus-mars", description: "ምሉእ ናይ ማህፀንን ጥንስን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ካብ ክሳድ ንላዕሊ(ENT)", icon: "fas fa-ear", description: "ናይ ክሳድ፣ እዝንን ኣፍንጫን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን)", icon: "fas fa-x-ray", description: "ዘመናዊ ግልጋሎት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን) ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ስኒ", icon: "fas fa-tooth", description: "ምሉእ ናይ ስኒ ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን", icon: "fas fa-brain", description: "ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን ብልዑል ተመኩሮ ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ነርቭን ዓንዲሑቐን", icon: "fas fa-bone", description: "ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ ነርቭን ዓንዲ ሑቐን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን", icon: "fas fa-spa", description: "ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ስፔሻሊስት መደቀስን ቃንዛን", icon: "fas fa-syringe", description: "ስፔሻሊስት መደቀስን ቃንዛን ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ።" },
        { name: "ምሉእ ዘመናዊ ላቦራቶሪ", icon: "fas fa-flask", description: "ምሉእ ዘመናዊ ላቦራቶሪ ግልጋሎት ይወሃብ።" },
        { name: "መርመራን ሕክምናን ፊዝዮቴራፒ", icon: "fas fa-wheelchair", description: "ምሉእ መርመራን ሕክምናን ብፊዝዮቴራፒ ሓኪም ግልጋሎት ይወሃብ።" },
        { name: "ስፔሻሊስት ሕክምና ስነ ኣእምሮ", icon: "fas fa-brain", description: "ስፔሻሊስት ሕክምና ስነ ኣእምሮ ግልጋሎት ይወሃብ።" },
        { name: "ናይ መዋልዳን ምሉእ ግልጋሎት", icon: "fas fa-baby-carriage", description: "ምሉእ ግልጋሎት መዋልዳን፣ ካብ ቅድሚ ሕርሲ ክሳብ ድሕሪ ሕርሲ፣ ብልዑል ልምዲን ተሞኩሮን ዘለዎም ሰብ ሞያን ብዘመናዊ መሳርሒታትን ይወሃብ።" },
        { name: "ምሉእ ኣቕሪቦት መድሃኒት(Pharmacy)ን ኣምቡላንስን", icon: "fas fa-ambulance", description: "ምሉእ ኣቕሪቦት መድሃኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ።" },
        { name: "ካልኦት ግልጋሎትን ይረኽቡ", icon: "fas fa-plus-circle", description: "ካልኦት ዘይተዘርዘሩ ግልጋሎት ኣብ ግዕዝ ሆስፒታል ይረኽቡ።" }
    ];

    const serviceGrid = document.querySelector('.service-grid');
    if (serviceGrid) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card');
            serviceCard.innerHTML = `
                <i class="${service.icon} fa-3x"></i>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            `;
            serviceGrid.appendChild(serviceCard);
        });
    }

    // You might also want to add a simple smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});