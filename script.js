document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    // ንኹሉ እቲ ኣብ ገጽ ዘሎ ትግርኛ ጽሑፍን ናይ እንግሊዝኛ ትርጉሙን ዝሓዘ object
    const translations = {
        'tig': {
            'home': 'መእተዊ',
            'services': 'ግልጋሎታትና',
            'doctors': 'ሓኻይምና',
            'news': 'ሓድሽ ሓበሬታ',
            'gallery': 'ጋለሪ',
            'contact': 'ምትእስሳር',
            'logo-h1': 'ግዕዝ ሆስፒታል',
            'hero-h2': 'ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን',
            'hero-p': 'ግዕዝ ሆስፒታል - ዘመናዊ ሆስፒታል!',
            'hero-btn-appointment': 'ቆፀሮ ንምሓዝ',
            'hero-btn-services': 'ግልጋሎታትና ርኣዩ',
            'about-h2': 'ብዛዕባና (About Us)',
            'about-p1': 'ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ኢሉ እዉን ኣብ ትግራይ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።',
            'vision-h3': 'ራእይ (Vision)',
            'vision-p': 'ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',
            'mission-h3': 'ልእኽ (Mission)',
            'mission-p': 'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
            'services-h3': 'ግልጋሎታት (Our Services)',
            'services-p-about': 'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትንታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።ንዝርዝር እንህቦም ግልጋሎታት ኣብ ግልጋሎታትና ዝብል ኣርእስቲ የንቢቡ።',
            'our-services-h2': 'ግልጋሎታትና',
            'all-services-btn': 'ኩሎም ግልጋሎታትና',
            'doctors-h2': 'ሓኻይምና',
            'doctors-p': 'ግዕዝ ሆስፒታል ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ግልጋሎት ይህብ።',
            'dr-tesfay-name': 'ዶ/ር ተስፋይ ኣጽብሃ',
            'dr-tesfay-specialty': 'ሳብ-ስፔሻሊስት ሕማማት ልቢ',
            'dr-higus-name': 'ዶ/ር ሕጉስ ተኽሉ',
            'dr-higus-specialty': 'ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት',
            'appointment-btn': 'ቆፀሮ',
            'testimonials-h2': 'ናይ ሕሙማት ምስክርነት',
            'testimonial-p': '"ግዕዝ ሆስፒታል ብሓልዮቶምን ሞያዊ ብቕዓቶምን ብጣዕሚ ፍሉያት እዮም። እቶም ሓኻይም ኣዝዮም ለዋሃትን ብሉፃትን እዮም። ንዝገበሩለይ ሕክምናዊ ክንክን ኣዝየ የመስግን"',
            'testimonial-span': '- ኣይተ ገብረመድህን ካሕሳይ',
            'contact-h2': 'ምትእስሳር',
            'contact-p': 'ንዝኾነ ሕቶ ወይ ሓሳብ፣ ክትረኽቡና ትኽእሉ ኢኹም።',
            'address-strong': 'ኣድራሻ:',
            'address-text': 'ከተማ ኣኽሱም፣ ጣብያ ክንደያ ትሕቲ ኢትዮቴሌኮም ዉርድ ኢልካ፣ ድሕሪ ሴንትራል ካፌ',
            'phone-strong': 'ቴለፎን:',
            'email-strong': 'ኢሜይል:',
            'facebook-strong': 'ፌስቡክ:',
            'footer-text': '&copy; 2024 ግዕዝ ሆስፒታል. ኩሉ መሰላት ዝተሓለወ እዩ።'
        },
        'eng': {
            'home': 'Home',
            'services': 'Services',
            'doctors': 'Doctors',
            'news': 'News',
            'gallery': 'Gallery',
            'contact': 'Contact',
            'logo-h1': 'Geez Hospital',
            'hero-h2': 'Chosen for our care, trusted for our expertise',
            'hero-p': 'Geez Hospital - A Modern Hospital!',
            'hero-btn-appointment': 'Book Appointment',
            'hero-btn-services': 'View Our Services',
            'about-h2': 'About Us',
            'about-p1': 'Established in 2011 E.C., Geez Hospital is one of the leading healthcare institutions in Central Zone and Tigray, providing modern and efficient medical services with international standards. It aims to make world-class medical care accessible to every citizen in the entire zone and neighboring areas. It is particularly founded on providing compassionate care, high professional competence, and modern equipment. It places great emphasis on patient safety and excellent service.',
            'vision-h3': 'Vision',
            'vision-p': 'To become a renowned medical institution in Africa by providing world-class medical services, known for its excellent professional competence and patient-centered care.',
            'mission-h3': 'Mission',
            'mission-p': 'To provide excellent quality, affordable, accessible, and accountable medical care to all citizens; to offer the community medical care that combines outstanding professional skill and compassionate care, which is accessible, quality-assured, and reasonably priced; to create a medical practice that adheres to international standards and upholds the highest medical ethics.',
            'services-h3': 'Our Services',
            'services-p-about': 'We offer a wide range of specialist and sub-specialist fields (for example: cardiology, oncology, neurology, orthopedics, ENT, ophthalmology, dermatology and cosmetology, maternal and child care, and emergency services) with modern technology and professional competence. For a detailed list of our services, please refer to the "Services" section.',
            'our-services-h2': 'Our Services',
            'all-services-btn': 'All Our Services',
            'doctors-h2': 'Our Doctors',
            'doctors-p': 'Geez Hospital provides services with specialist doctors who have extensive experience and expertise.',
            'dr-tesfay-name': 'Dr. Tesfay Atsbeha',
            'dr-tesfay-specialty': 'Sub-Specialist, Heart Diseases',
            'dr-higus-name': 'Dr. Higus Teklu',
            'dr-higus-specialty': 'Specialist, Internal Medicine',
            'appointment-btn': 'Appointment',
            'testimonials-h2': 'Patient Testimonials',
            'testimonial-p': '"Geez Hospital is truly exceptional for its compassion and professional competence. The doctors are incredibly kind and excellent. I am very grateful for the medical care they provided."',
            'testimonial-span': '- Mr. Gebremedhin Kahsay',
            'contact-h2': 'Contact Us',
            'contact-p': 'For any questions or comments, you can reach us.',
            'address-strong': 'Address:',
            'address-text': 'Aksum City, Kindeya Kebele, below Ethiotelecom, behind Central Cafe',
            'phone-strong': 'Phone:',
            'email-strong': 'Email:',
            'facebook-strong': 'Facebook:',
            'footer-text': '&copy; 2024 Geez Hospital. All rights reserved.'
        }
    };

    // ነቲ ቋንቋ ዝቕይር function
    const applyLanguage = (lang) => {
        const currentTranslations = translations[lang];

        // Header Menu Items
        document.querySelector('nav ul li a[href="index.html"]').textContent = currentTranslations['home'];
        document.querySelector('nav ul li a[href="services.html"]').textContent = currentTranslations['services'];
        document.querySelector('nav ul li a[href="doctors.html"]').textContent = currentTranslations['doctors'];
        document.querySelector('nav ul li a[href="news.html"]').textContent = currentTranslations['news'];
        document.querySelector('nav ul li a[href="gallery.html"]').textContent = currentTranslations['gallery'];
        document.querySelector('nav ul li a[href="contact.html"]').textContent = currentTranslations['contact'];
        
        // Logo H1
        document.querySelector('.logo h1').textContent = currentTranslations['logo-h1'];

        // Hero Section
        document.querySelector('#hero h2').textContent = currentTranslations['hero-h2'];
        document.querySelector('#hero p').textContent = currentTranslations['hero-p'];
        document.querySelector('#hero .btn:nth-of-type(1)').textContent = currentTranslations['hero-btn-appointment'];
        document.querySelector('#hero .btn:nth-of-type(2)').textContent = currentTranslations['hero-btn-services'];

        // About Us Section
        document.querySelector('#about h2').textContent = currentTranslations['about-h2'];
        document.querySelector('#about p:nth-of-type(1)').textContent = currentTranslations['about-p1'];
        document.querySelector('#about h3:nth-of-type(1)').textContent = currentTranslations['vision-h3'];
        document.querySelector('#about p:nth-of-type(2)').textContent = currentTranslations['vision-p'];
        document.querySelector('#about h3:nth-of-type(2)').textContent = currentTranslations['mission-h3'];
        document.querySelector('#about p:nth-of-type(3)').textContent = currentTranslations['mission-p'];
        document.querySelector('#about h3:nth-of-type(3)').textContent = currentTranslations['services-h3'];
        document.querySelector('#about p:nth-of-type(4)').textContent = currentTranslations['services-p-about'];

        // Services Section
        document.querySelector('#services h2').textContent = currentTranslations['our-services-h2'];
        document.querySelector('#services .btn-secondary').textContent = currentTranslations['all-services-btn'];

        // Doctors Section
        document.querySelector('#doctors h2').textContent = currentTranslations['doctors-h2'];
        document.querySelector('#doctors p').textContent = currentTranslations['doctors-p'];
        
        // ንነፍሲ ወከፍ ሓኪም ብንጹር ምቕያር
        const doctorCards = document.querySelectorAll('.doctor-card');
        if (doctorCards[0]) {
            doctorCards[0].querySelector('h3').textContent = currentTranslations['dr-tesfay-name'];
            doctorCards[0].querySelector('p').textContent = currentTranslations['dr-tesfay-specialty'];
            doctorCards[0].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
        }
        if (doctorCards[1]) {
            doctorCards[1].querySelector('h3').textContent = currentTranslations['dr-higus-name'];
            doctorCards[1].querySelector('p').textContent = currentTranslations['dr-higus-specialty'];
            doctorCards[1].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
        }

        // Testimonials Section
        document.querySelector('#testimonials h2').textContent = currentTranslations['testimonials-h2'];
        document.querySelector('.testimonial-card p').textContent = currentTranslations['testimonial-p'];
        document.querySelector('.testimonial-card span').textContent = currentTranslations['testimonial-span'];

        // Contact Section
        document.querySelector('#contact h2').textContent = currentTranslations['contact-h2'];
        document.querySelector('#contact p:nth-of-type(1)').textContent = currentTranslations['contact-p'];
        
        // Contact Info (strong tagsን ጽሑፋትን ብሓደ ምቕያር)
        const addressP = document.querySelector('.contact-info p:nth-of-type(1)');
        if (addressP) {
            addressP.innerHTML = `<strong>${currentTranslations['address-strong']}</strong> ${currentTranslations['address-text']}`;
        }
        const phoneP = document.querySelector('.contact-info p:nth-of-type(2)');
        if (phoneP) {
            phoneP.innerHTML = `<strong>${currentTranslations['phone-strong']}</strong> +251920008338 / +251962333388`;
        }
        const emailP = document.querySelector('.contact-info p:nth-of-type(3)');
        if (emailP) {
            emailP.innerHTML = `<strong>${currentTranslations['email-strong']}</strong> geezhospital@gmail.com`;
        }
        const facebookP = document.querySelector('.contact-info p:nth-of-type(4)');
        if (facebookP) {
            facebookP.innerHTML = `<strong>${currentTranslations['facebook-strong']}</strong> <a href="https://www.facebook.com/profile.php?id=61572930304902" target="_blank">Geez Hospital Facebook Page</a>`;
        }
        
        // Footer
        document.querySelector('footer p').innerHTML = currentTranslations['footer-text'];

        // ንHTML tag `lang` ንምቕያር
        document.documentElement.lang = (lang === 'eng') ? 'en' : 'ti'; // 'ti' ንትግርኛ
    };

    // ኣብቲ ቋንቋ ተቐያሪ ለውጢ ምስ ዝመጽእ
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        if (selectedLang === 'tig' || selectedLang === 'eng') {
            applyLanguage(selectedLang);
            // ነቲ ዝተመርጸ ቋንቋ ኣብ Local Storage ኣቐምጦ
            localStorage.setItem('selectedLanguage', selectedLang);
        }
    });

    // እቲ ገጽ ምስ ተጻዕነ (loaded) ነቲ ዝተመርጸ ቋንቋ ኣውጽእ
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === 'tig' || savedLanguage === 'eng')) {
        languageSwitcher.value = savedLanguage; // ነቲ dropdown ኣስተካኽሎ
        applyLanguage(savedLanguage);
    } else {
        // ምንም ቋንቋ እንተዘይተረኺቡ፣ ብdefault ትግርኛ ይኹን
        languageSwitcher.value = 'tig'; // ነቲ dropdown ናብ ትግርኛ የስተካኽሎ
        applyLanguage('tig');
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
        { name: "ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን", icon: "fas fa-ambulance", description: "ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ።" },
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});