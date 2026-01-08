document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    const getLanguageFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    };

    const updateUrlLanguage = (lang) => {
        const url = new URL(window.location.href);
        if (lang === 'tig') { // Tigrigna as default, removes lang parameter
            url.searchParams.delete('lang');
        } else {
            url.searchParams.set('lang', lang);
        }
        // Only push state if the URL actually changed to avoid unnecessary history entries
        if (url.href !== window.location.href) {
            window.history.pushState({ path: url.href }, '', url.href);
        }
    };

    const translations = {
        'tig': {
            // Header Menu Items (Common)
            'home': 'መእተዊ',
            'services': 'ግልጋሎታትና',
            'doctors': 'ሓኻይምና',
            'news': 'ሓድሽ ሓበሬታ',
            'gallery': 'ጋለሪ',
            'contact': 'ምትእስሳር',
            'logo-alt': 'ግዕዝ ሆስፒታል ሎጎ',
            'contact-us-btn': 'ምትእስሳር',
            'our-location-map': 'ኣብ ካርታ ርኣዩና',
            'view-on-map': 'ኣብ ካርታ ርኣይ',

            // Index.html Specific Content
            'hero-h2': 'ብሓልዮትና ንምረጽ፡ብሞያዊ ብቕዓትና ንእመን',
            'hero-p': 'ግዕዝ ሆስፒታል - ንጥዕናኹም ቀዳምነት ብምሃብ፣ ብሉፃት ስፔሻሊስትን ሳብስፔሻሊስትታትን ሓኻይም ምስ ዘመናዊ ቴክኖሎጂ መሳርሕታት(ማሽን) ኣዋዲድንና ንፅበየኩም ኣለና። በይዞም ቆፀሮ ንምሓዝ ኣብዚ ይመዝገቡ።',
            'hero-btn-appointment': 'ቆፀሮ ንምሓዝ',
            'hero-btn-services': 'ግልጋሎታትና ርኣዩ',
            'about-h2': 'ብዛዕባና (About Us)',
            'about-p1': 'ብ2011 ኣ.ግ ዝተመስረተ ሆስፒታል ግዕዝ፣ ኣብ ማእኸላይ ዞባ ኢሉ እዉን ኣብ ትግራይ ካብቶም ቀዳሞት ዝስርዑ፣ ዓለምለኻዊ ፅሬት ዘለዎ ዘመናዊን ስሉጥን ሕክምናዊ ግልጋሎት ዝህቡ ትካላት ሓደ እዩ። ኣብ መላእ እቲ ዞባን ጎረባብቲን ሓደ ካብቶም ዝዓበዩን ዝእመኑን ናይ ሕክምና ትካል ኮይኑ ዓለምለኻዊ ፅሬት ዘለዎ ሕክምና ንነፍሲ-ወከፍ ዜጋ ተበፃሒ ንምግባር ዝዓለመ እዩ።ብፍላይ ሓልዮት ዝተመልኦ ክንክን፣ ላዕለዋይ ሞያዊ ብቕዓትን ዘመናዊ መሳርሒታትን ብምቕራብ ዝተመስረተ ትካል እዩ። ንድሕንነት ሕሙማትን ንብሉፅ ግልጋሎትን ዓብዪ ቆላሕታ ይህብ።',
            'vision-h3': 'ራእይ (Vision)',
            'vision-p': 'ብምኽንያት እቲ እንህቦ ብሉፅ ሞያዊ ብቕዓትን ንሕሙም ማእከል ዝገበረ ሓልዮቱን፣ ዓለምለኻዊ ደረጃ ዘለዎ ናይ ሕክምና ግልጋሎት ብምቕራብ ኣብ ኣፍሪካ ክብሪ ዝተጎናፀፈ ናይ ሕክምና ትካል ምዃን።',
            'mission-h3': 'ልእኽቶ (Mission)', // Corrected 'ልእኽ' to 'ልእኽቶ'
            'mission-p': 'ብሉፅ ፅሬት፣ ተመጣጣኒ፣ ተበፃሒን ተሓታትነት ዘለዎን ሕክምና ንኹሉ ዜጋ ብምቕራብ፤ ብሉፅ ሞያዊ ክእለትን ርህራሄ ዝመልኦ ሓልዮትን ዘወሃሃደ፣ተበፃሒ፣ ፅሬቱ ዝሓለወን ተመጣጣኒ ዋጋ ዘለዎን ሕክምና ንማሕበረሰብ ብምቕራብ፤ ዓለምለኻዊ ደረጃኡ ዝሓለወ ናይ ሕክምና ኣሰራርሓ ምፍጣር ከምኡውን ዝለዓለ ናይ ሕክምና ስነ-ምግባር ምኽባርን እዩ።',
            'services-h3': 'ግልጋሎታት (Our Services)',
            'services-p-about': 'ብርክት ዝበሉ ናይ ስፔሻሊስትን ሳብ ስፔሻሊስትን ዓውድታት (ንኣብነት፦ ልቢ፣ ካንሰር፣ ሓንጎልን መትኒታትን፣ ዓፅሚ፣ካብ ክሳድ ንላዕሊ፣ዓይኒ፣ናይ ቆርበትን ስነጽባቐን፣ ናይ ኣዴታትን ህፃናትን ክንክን መርመራታትን ከምኡውን ናይ ህፁፅ ሓደጋን ግልጋሎትሎት ብዘመናዊ ቴክኖሎጂን ብሞያዊ ብቕዓትን ነቕርብ።ንዝርዝር እንህቦም ግልጋሎታት ኣብ ግልጋሎታትና ዝብል ኣርእስቲ የንቢቡ።',
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
            'address-text': 'ከተማ ኣኽሱም፣ ጣብያ ክንደያ ፊትንፊት ኢትዮቴሌኮም ዉርድ ኢልካ፣ ድሕሪ ሴንትራል ካፌ',
            'phone-strong': 'ቴለፎን:',
            'email-strong': 'ኢሜይል:',
            'facebook-strong': 'ፌስቡክ:',

            // Contact Form specific translations
            'contact-form-title': 'መልእኽቲ ስደዱልና',
            'form-full-name': 'ምሉእ ሽም:',
            'form-email': 'ኢሜይል:',
            'form-subject': 'ኣርእስቲ:',
            'form-phone': 'ቁጽሪ ስልኪ:',
            'form-address': 'ኣድራሻ:',
            'form-age': 'ዕድመ:',
            'form-gender': 'ጾታ:',
            'form-select-gender': 'ጾታ ምረጽ',
            'form-gender-male': 'ተባዕታይ',
            'form-gender-female': 'ኣንስተይቲ',
            'form-gender-other': 'ካልእ',
            'form-message': 'መልእኽቲ:',
            'form-submit-btn': 'ልኣኽ',
            'our-location': 'ኣድራሻና',

            // Services.html Specific Content
            'services-page-h2': 'ግልጋሎታትና',
            'services-page-intro-p': 'ግዕዝ ሆስፒታል ዝተፈላለዩን ዘመናዊን ግልጋሎታት ብስፔሻሊስትን ብፍሉይ ስፔሻሊስትን(sub specialist)ብቕዓትት ዘለዎም ሓኻይም ግልጋሎት ይህብ።',

            'service1-h3': 'ስፔሻሊስት ሕክምና ውሽጣዊ ሕማማት',
            'service1-p': 'ምሉእ ናይ ውሽጣዊ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ። እዚ ግልጋሎት ንዝተፈላለዩ ሕማማት ከም ሕማም ደም፣ ሕማም ኩላሊት፣ ሕማም ሳንቡእ፣ ሕማም ሆርሞን፣ ወዘተ ዘጠቓለለ እዩ።',
            'service2-h3': 'ፍሉይ ስፔሻሊስት ሕክምና ሕማማት ልቢ',
            'service2-p': 'ፍሉይ ናይ ልቢ ሕማማት መርመራን ሕክምናን ብልዑል ተመኩሮን ሞያን ዘለዎም ሳብ ስፔሻሊስት ሓኻይም ይወሃብ። ECG፣ Echocardiography፣ Stress Test ዝኣመሰሉ ዘመናዊ መሳርሒታትን ኣገባባትን ንጥቀም።',
            'service3-h3': 'ስፔሻሊስት ሓፈሻዊ መጥባሕቲ',
            'service3-p': 'ስፔሻሊስት ሓፈሻዊ መጥባሕቲ ብዘመናዊ መሳርሒታትን ኣገባባትን ይወሃብ። እዚ ንዝተፈላለዩ ንኣብነት ን appendices, hernias, gallbladder, ወዘተ መጥባሕቲ ዝሓቖፈ እዩ።',
            'service4-h3': 'ስፔሻሊስት ሕክምና ህፃውንቲን ኣባፅሕን',
            'service4-p': 'ናይ ህፃውንቲን ኣባፅሕን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ንህጻናት ዝምጥን ፍሉይ ክንክን ንህብ።',
            'service5-h3': 'ስፔሻሊስት ሕክምና ማህፀንን ጥንስን',
            'service5-p': 'ምሉእ ናይ ማህፀንን ጥንስን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ቅድሚ ሕርሲ፣ ኣብ ሕርሲን ድሕሪ ሕርሲን ዘድሊ ክንክን ይህብ።',
            'service6-h3': 'ስፔሻሊስት ሕክምና ካብ ክሳድ ንላዕሊ(ENT)',
            'service6-p': 'ናይ ክሳድ፣ እዝንን ኣፍንጫን መርመራን ሕክምናን ብስፔሻሊስት ሓኪም ይወሃብ። ንዝተፈላለዩ ሕማማት ENT ብዘመናዊ መሳርሒታት(Endoscopy) መርመራን ሕክምናን ንህብ።',
            'service7-h3': 'ስፔሻሊስት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን)',
            'service7-p': 'ዘመናዊ ግልጋሎት ራድዮሎጂ (ኣልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECGን) ብስፔሻሊስት ሓኪም ይወሃብ። ትክክለኛ መርመራ ንምሃብ ዝሕግዝ ዘመናዊ ቴክኖሎጂ ንጥቀም።',
            'service8-h3': 'ስፔሻሊስት ሕክምና ስኒ',
            'service8-p': 'ምሉእ ናይ ስኒ ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ። ካብ ንጹህ ስኒ ክሳብ ኮሮናን ስኒ ምልዋጥን ዝሓቖፈ ግልጋሎት ንህብ።',
            'service9-h3': 'ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን',
            'service9-p': 'ስፔሻሊስት መጥባሕቲ መትኒ፣ ዓንዲ ሑቐን ሓንጎልን ብልዑል ተመኩሮ ዘለዎም ስፔሻሊስት ሓኻይም ይወሃብ። ንዝተፈላለዩ ነርቫዊ ሕማማት ፍሉይ ሕክምና ንህብ።',
            'service10-h3': 'ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ነርቭን ዓንዲሑቐን',
            'service10-p': 'ስፔሻሊስት ሕክምና ዓፅምን መገጣጠምን፣ ነርቭን ዓንዲ ሑቐን ብስፔሻሊስት ሓኪም ይወሃብ። ንስባራት፣ ቁስልን ሕማማት መገጣጠምን ሕክምና ንህብ።',
            'service11-h3': 'ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን',
            'service11-p': 'ስፔሻሊስት ሕክምና ቆርበት፣ ኣበላዘርን ስነ-ፅባቐን ብስፔሻሊስት ሓኪም ይወሃብ። ንዝተፈላለዩ ሕማማት ቆርበትን ውሽጣዊን ክንክን ንህብ።',
            'service12-h3': 'ስፔሻሊስት መደቀስን ቃንዛን',
            'service12-p': 'ስፔሻሊስት መደቀስን ቃንዛን ሕክምና ብስፔሻሊስት ሓኪም ይወሃብ። ቅድሚን ድሕሪን መጥባሕቲ ዘድሊ ክንክን ንህብ።',
            'service13-h3': 'ምሉእ ዘመናዊ ላቦራቶሪ',
            'service13-p': 'ምሉእ ዘመናዊ ላቦራቶሪ ግልጋሎት ይወሃብ። ንኹሎም ዓይነታት መርመራ ደምን ሽንትን ካልኦት ባዮሎጂካዊ መርመራታትን ብዘመናዊ መሳርሒታትን ግልጋሎት ንህብ።',
            'service14-h3': 'መርመራን ሕክምናን ፊዝዮቴራፒ',
            'service14-p': 'ምሉእ መርመራን ሕክምናን ብፊዝዮቴራፒ ሓኪም ግልጋሎት ይወሃብ። ንዝተፈላለዩ ዓይነት ሕማማት ቅርጺ ኣካልን ምንቅስቓስን ሕክምና ንህብ።',
            'service15-h3': 'ስፔሻሊስት ሕክምና ስነ ኣእምሮ',
            'service15-p': 'ስፔሻሊስት ሕክምና ስነ ኣእምሮ ግልጋሎት ይወሃብ። ንዝተፈላለዩ ኣእምሮኣዊ ሕማማት ምኽሪን ሕክምናን ንህብ።',
            'service16-h3': 'ናይ መዋልዳን ምሉእ ግልጋሎት',
            'service16-p': 'ምሉእ ግልጋሎት መዋልዳን፣ ካብ ቅድሚ ሕርሲ ክሳብ ድሕሪ ሕርሲ፣ ብልዑል ልምዲን ተሞኩሮን ዘለዎም ሰብ ሞያን ብስፔሻሊስት ሓኪምን ብዘመናዊ መሳርሒታትን ይወሃብ።',
            'service17-h3': 'ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን',
            'service17-p': 'ምሉእ ኣቕሪቦት መድሓኒት(Pharmacy)ን ኣምቡላንስን ግልጋሎት ይወሃብ። 24 ሰዓት ግልጋሎት ፋርማሲን ኣምቡላንስን ድሉው እዩ።',
            'service18-h3': 'ካልኦት ግልጋሎትን ይረኽቡ',
            'service18-p': 'ግዕዝ ሆስፒታል ካልኦት ዘይተዘርዘሩ ግልጋሎት ንሕብረተሰብ ነቕርብ። ንዝኾነ ሕቶ ወይ ተወሳኺ ሓበሬታ ምሕታት ይከኣል እዩ።',
            'footer-text': 'Copyright © 2026 Geez Hospital. All rights reserved. Developed By Aser Teklu Gebrekidan'
        },
        'eng': {
            // Header Menu Items (Common)
            'home': 'Home',
            'services': 'Services',
            'doctors': 'Doctors',
            'news': 'News',
            'gallery': 'Gallery',
            'contact': 'Contact',
            'logo-alt': 'Geez Hospital Logo',
            'contact-us-btn': 'Contact Us',
            'our-location-map': 'View Us on Map',
            'view-on-map': 'View on Map',

            // Index.html Specific Content
            'hero-h2': 'Chosen for our care, trusted for our expertise',
            'hero-p': 'Geez Hospital - Prioritizing your health above all, we have brought together the finest specialist and sub-specialist doctors, equipped with state-of-the-art technology and modern medical equipment, and we await your visit. Please register here to book an appointment.',
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
            'address-text': 'Aksum City, Kindeya Kebele, In front of Ethiotelecom, behind Central Cafe',
            'phone-strong': 'Phone:',
            'email-strong': 'Email:',
            'facebook-strong': 'Facebook:',

            // Contact Form specific translations
            'contact-form-title': 'Send Us a Message',
            'form-full-name': 'Full Name:',
            'form-email': 'Email:',
            'form-subject': 'Subject:',
            'form-phone': 'Phone Number:',
            'form-address': 'Address:',
            'form-age': 'Age:',
            'form-gender': 'Gender:',
            'form-select-gender': 'Select Gender',
            'form-gender-male': 'Male',
            'form-gender-female': 'Female',
            'form-gender-other': 'Other',
            'form-message': 'Message:',
            'form-submit-btn': 'Send Message',
            'our-location': 'Our Location',

            // Services.html Specific Content
            'services-page-h2': 'Our Services',
            'services-page-intro-p': 'Geez Hospital offers various modern services provided by specialist and sub-specialist doctors with high proficiency.',

            'service1-h3': 'Specialist Internal Medicine',
            'service1-p': 'Complete examination and treatment of internal diseases by highly experienced and qualified specialist doctors. This service includes various diseases such as blood pressure, kidney disease, lung disease, hormonal imbalance, etc.',
            'service2-h3': 'Sub-Specialist Cardiology',
            'service2-p': 'Specialized examination and treatment of heart diseases by highly experienced sub-specialist doctors. We use modern equipment and techniques such as ECG, Echocardiography, and Stress Test.',
            'service3-h3': 'Specialist General Surgery',
            'service3-p': 'Specialist general surgery is provided with modern equipment and techniques. This includes surgeries for conditions such as appendices, hernias, gallbladder, etc.',
            'service4-h3': 'Specialist Pediatrics and Adolescents Medicine',
            'service4-p': 'Examination and treatment of children and adolescents by a specialist doctor. We provide special care suitable for children.',
            'service5-h3': 'Specialist Obstetrics and Gynecology',
            'service5-p': 'Complete examination and treatment for obstetrics and gynecology by a specialist doctor. We provide necessary care before, during, and after childbirth.',
            'service6-h3': 'Specialist ENT (Ear, Nose, Throat)',
            'service6-p': 'Examination and treatment of throat, ear, and nose conditions by a specialist doctor. We provide examination and treatment for various ENT diseases using modern equipment (Endoscopy).',
            'service7-h3': 'Specialist Radiology (Ultrasound, X-ray, CT Scan, ECG)',
            'service7-p': 'Modern radiology services (Ultrasound, X-ray, CT Scan, ECG) are provided by a specialist doctor. We use modern technology to provide accurate diagnoses.',
            'service8-h3': 'Specialist Dental Treatment',
            'service8-p': 'Complete dental treatment by a specialist doctor. We offer services ranging from dental cleaning to crowns and tooth replacement.',
            'service9-h3': 'Specialist Neurosurgery (Nerves, Spine, Brain)',
            'service9-p': 'Specialist surgery for nerves, spine, and brain is provided by highly experienced specialist doctors. We offer specialized treatment for various neurological diseases.',
            'service10-h3': 'Specialist Orthopedics and Traumatology (Bones, Joints, Nerves, Spine)',
            'service10-p': 'Specialist treatment for bones, joints, nerves, and spine by a specialist doctor. We provide treatment for fractures, injuries, and joint diseases.',
            'service11-h3': 'Specialist Dermatology, Laser, and Cosmetology',
            'service11-p': 'Specialist treatment for skin, laser, and cosmetology by a specialist doctor. We provide care for various skin and internal conditions.',
            'service12-h3': 'Specialist Anesthesia and Pain Management',
            'service12-p': 'Specialist anesthesia and pain management treatment by a specialist doctor. We provide necessary care before and after surgery.',
            'service13-h3': 'Full Modern Laboratory',
            'service13-p': 'Full modern laboratory services are provided. We offer services for all types of blood, urine, and other biological tests using modern equipment.',
            'service14-h3': 'Physiotherapy Examination and Treatment',
            'service14-p': 'Complete examination and treatment by a physiotherapy doctor. We provide treatment for various types of body form and movement disorders.',
            'service15-h3': 'Specialist Psychiatry',
            'service15-p': 'Specialist psychiatry services are provided. We offer counseling and treatment for various mental illnesses.',
            'service16-h3': 'Complete Maternity Services',
            'service16-p': 'Complete maternity services, from pre-natal to post-natal care, are provided by highly experienced and skilled professionals and specialist doctors, using modern equipment.',
            'service17-h3': 'Full Pharmacy and Ambulance Services',
            'service17-p': 'Full pharmacy and ambulance services are provided. 24-hour pharmacy and ambulance services are available.',
            'service18-h3': 'Other Services Available',
            'service18-p': 'Geez Hospital also offers other unlisted services to the community. Inquiries for any questions or additional information are welcome.',
            'footer-text': 'Copyright © 2026 Geez Hospital. All rights reserved. Developed By Aser Teklu G'
        },
        'amh': {
            // Header Menu Items (Common) - TEMPORARILY USING ENGLISH
            'home': 'መነሻ', // Home
            'services': 'አገልግሎቶች', // Services
            'doctors': 'ሐኪሞች', // Doctors
            'news': 'ዜና', // News
            'gallery': 'ጋለሪ', // Gallery
            'contact': 'እውቂያ', // Contact
            'logo-alt': 'ግዕዝ ሆስፒታል አርማ', // Geez Hospital Logo
            'contact-us-btn': 'እውቂያ', // Contact Us
            'our-location-map': 'በካርታ እኛን ይመልከቱ', // View Us on Map
            'view-on-map': 'በካርታ ይመልከቱ', // View on Map

            // Index.html Specific Content
            'hero-h2': 'በእንክብካቤአችን ተመራጭ፣ በሙያዊ ብቃታችን የታመን', // Chosen for our care, trusted for our expertise
            'hero-p': 'ግዕዝ ሆስፒታል - ጤናዎ ቅድሚያ በሚሰጥበት፣ ምርጥ ልዩ ባለሙያዎችን እና ንዑስ-ልዩ ባለሙያ ሐኪሞችን ከዘመናዊ ቴክኖሎጂ መሳሪያዎች ጋር አዋህደን እንጠብቀዎታለን። ቀጠሮ ለማስያዝ እዚህ ይመዝገቡ።', // Geez Hospital - Prioritizing your health above all, we have brought together the finest specialist and sub-specialist doctors, equipped with state-of-the-art technology and modern medical equipment, and we await your visit. Please register here to book an appointment.
            'hero-btn-appointment': 'ቀጠሮ ያስይዙ', // Book Appointment
            'hero-btn-services': 'አገልግሎቶቻችንን ይመልከቱ', // View Our Services
            'about-h2': 'ስለ እኛ (About Us)', // About Us
            'about-p1': 'በ2011 ዓ.ም የተመሰረተው ግዕዝ ሆስፒታል በማዕከላዊ ዞን እና በትግራይ ከቀዳሚዎቹ አንዱ ሲሆን አለም አቀፍ ደረጃውን የጠበቀ ዘመናዊና ቀልጣፋ የህክምና አገልግሎት የሚሰጥ ተቋም ነው። በመላው ዞኑ እና በአጎራባች አካባቢዎች ካሉት ትልልቅና ታማኝ የህክምና ተቋማት አንዱ በመሆን አለም አቀፍ ደረጃውን የጠበቀ ህክምና ለሁሉም ዜጋ ተደራሽ ለማድረግ ያለመ ነው።በተለይ ታላቅ እንክብካቤን፣ ከፍተኛ ሙያዊ ብቃትን እና ዘመናዊ መሳሪያዎችን በማቅረብ የተመሰረተ ተቋም ነው። ለታካሚዎች ደህንነት እና ለላቀ አገልግሎት ከፍተኛ ትኩረት ይሰጣል።', // Established in 2011 E.C., Geez Hospital is one of the leading healthcare institutions in Central Zone and Tigray, providing modern and efficient medical services with international standards. It aims to make world-class medical care accessible to every citizen in the entire zone and neighboring areas. It is particularly founded on providing compassionate care, high professional competence, and modern equipment. It places great emphasis on patient safety and excellent service.
            'vision-h3': 'ራዕይ (Vision)', // Vision
            'vision-p': 'በምንሰጠው የላቀ ሙያዊ ብቃት እና በታካሚዎች ላይ ባተኮረው እንክብካቤ ምክንያት አለም አቀፍ ደረጃውን የጠበቀ የህክምና አገልግሎት በማቅረብ በአፍሪካ ውስጥ የተከበረ የህክምና ተቋም መሆን።', // To become a renowned medical institution in Africa by providing world-class medical services, known for its excellent professional competence and patient-centered care.
            'mission-h3': 'ተልዕኮ (Mission)', // Mission
            'mission-p': 'ለሁሉም ዜጋ የላቀ ጥራት ያለው፣ ተመጣጣኝ፣ ተደራሽ እና ተጠያቂነት ያለው የህክምና አገልግሎት መስጠት፤ ከፍተኛ ሙያዊ ክህሎትን እና ርኅራኄ የተሞላበት እንክብካቤን የሚያጣምር፣ ተደራሽ፣ ጥራት ያለው እና በተመጣጣኝ ዋጋ የሚቀርብ የህክምና አገልግሎት ለህብረተሰቡ ማቅረብ፤ አለም አቀፍ ደረጃውን የጠበቀ የህክምና አሰራር መፍጠር እንዲሁም ከፍተኛ የህክምና ስነ-ምግባርን ማክበር ነው።', // To provide excellent quality, affordable, accessible, and accountable medical care to all citizens; to offer the community medical care that combines outstanding professional skill and compassionate care, which is accessible, quality-assured, and reasonably priced; to create a medical practice that adheres to international standards and upholds the highest medical ethics.
            'services-h3': 'አገልግሎቶቻችን (Our Services)', // Our Services
            'services-p-about': 'በርካታ የልዩ እና ንዑስ ልዩ ባለሙያ መስኮች (ለምሳሌ፡ የልብ ህክምና፣ ካንሰር፣ አእምሮና ነርቭ፣ የአጥንት ህክምና፣ አይንና ጆሮ-አፍንጫ-ጉሮሮ፣ የቆዳና ውበት፣ የወሊድና የህጻናት እንክብካቤ፣ እና ድንገተኛ አገልግሎቶችን) በዘመናዊ ቴክኖሎጂና በሙያዊ ብቃት እናቀርባለን። ዝርዝር አገልግሎቶቻችንን ለማየት እባክዎን "አገልግሎቶች" የሚለውን ክፍል ይመልከቱ።', // We offer a wide range of specialist and sub-specialist fields (for example: cardiology, oncology, neurology, orthopedics, ENT, ophthalmology, dermatology and cosmetology, maternal and child care, and emergency services) with modern technology and professional competence. For a detailed list of our services, please refer to the "Services" section.
            'our-services-h2': 'አገልግሎቶቻችን', // Our Services
            'all-services-btn': 'ሁሉንም አገልግሎቶቻችንን ይመልከቱ', // All Our Services
            'doctors-h2': 'ሐኪሞቻችን', // Our Doctors
            'doctors-p': 'ግዕዝ ሆስፒታል ሰፊ ልምድና ሙያዊ ብቃት ባላቸው ልዩ ባለሙያ ሐኪሞች አገልግሎት ይሰጣል።', // Geez Hospital provides services with specialist doctors who have extensive experience and expertise.
            'dr-tesfay-name': 'ዶ/ር ተስፋይ አጽብሃ', // Dr. Tesfay Atsbeha
            'dr-tesfay-specialty': 'የልብ ሕክምና ንዑስ-ልዩ ባለሙያ', // Sub-Specialist, Heart Diseases
            'dr-higus-name': 'ዶ/ር ሕጉስ ተክሉ', // Dr. Higus Teklu
            'dr-higus-specialty': 'የውስጥ ደዌ ህክምና ልዩ ባለሙያ', // Specialist, Internal Medicine
            'appointment-btn': 'ቀጠሮ', // Appointment
            'testimonials-h2': 'የታካሚዎች ምስክርነት', // Patient Testimonials
            'testimonial-p': '"ግዕዝ ሆስፒታል በእንክብካቤያቸው እና በሙያዊ ብቃታቸው ልዩ ናቸው። ሐኪሞቹ እጅግ በጣም ደግ እና የላቁ ናቸው። ለሰጡኝ የህክምና እንክብካቤ በጣም አመሰግናለሁ።"', // "Geez Hospital is truly exceptional for its compassion and professional competence. The doctors are incredibly kind and excellent. I am very grateful for the medical care they provided."
            'testimonial-span': '- አቶ ገብረመድህን ካህሳይ', // - Mr. Gebremedhin Kahsay
            'contact-h2': 'እውቂያ', // Contact Us
            'contact-p': 'ለማንኛውም ጥያቄ ወይም አስተያየት፣ ሊያገኙን ይችላሉ።', // For any questions or comments, you can reach us.
            'address-strong': 'አድራሻ:', // Address:
            'address-text': 'አክሱም ከተማ፣ ቅንደያ ቀበሌ፣ ኢትዮቴሌኮም ፊት ለፊት፣ ከሴንትራል ካፌ ጀርባ', // Aksum City, Kindeya Kebele, In front of Ethiotelecom, behind Central Cafe
            'phone-strong': 'ስልክ:', // Phone:
            'email-strong': 'ኢሜይል:', // Email:
            'facebook-strong': 'ፌስቡክ:', // Facebook:

            // Contact Form specific translations
            'contact-form-title': 'መልዕክት ይላኩልን', // Send Us a Message
            'form-full-name': 'ሙሉ ስም:', // Full Name:
            'form-email': 'ኢሜይል:', // Email:
            'form-subject': 'ርዕስ:', // Subject:
            'form-phone': 'ስልክ ቁጥር:', // Phone Number:
            'form-address': 'አድራሻ:', // Address:
            'form-age': 'እድሜ:', // Age:
            'form-gender': 'ጾታ:', // Gender:
            'form-select-gender': 'ጾታ ይምረጡ', // Select Gender
            'form-gender-male': 'ወንድ', // Male
            'form-gender-female': 'ሴት', // Female
            'form-gender-other': 'ሌላ', // Other
            'form-message': 'መልዕክት:', // Message:
            'form-submit-btn': 'ላክ', // Send Message
            'our-location': 'አካባቢያችን', // Our Location

            // Services.html Specific Content
            'services-page-h2': 'አገልግሎቶቻችን', // Our Services
            'services-page-intro-p': 'ግዕዝ ሆስፒታል በልዩ ባለሙያ እና በንዑስ-ልዩ ባለሙያ ሐኪሞች አማካኝነት የተለያዩ ዘመናዊ አገልግሎቶችን ይሰጣል።', // Geez Hospital offers various modern services provided by specialist and sub-specialist doctors with high proficiency.

            'service1-h3': 'የውስጥ ደዌ ህክምና ልዩ ባለሙያ', // Specialist Internal Medicine
            'service1-p': 'የውስጥ ደዌ ሙሉ ምርመራና ህክምና በከፍተኛ ልምድና ሙያዊ ብቃት ባላቸው ልዩ ባለሙያ ሐኪሞች ይሰጣል። ይህ አገልግሎት እንደ የደም ግፊት፣ የኩላሊት ህመም፣ የሳንባ በሽታ፣ የሆርሞን መዛባት፣ ወዘተ የመሳሰሉ የተለያዩ በሽታዎችን ያጠቃልላል።', // Complete examination and treatment of internal diseases by highly experienced and qualified specialist doctors. This service includes various diseases such as blood pressure, kidney disease, lung disease, hormonal imbalance, etc.
            'service2-h3': 'የልብ ሕክምና ንዑስ-ልዩ ባለሙያ', // Sub-Specialist Cardiology
            'service2-p': 'ልዩ የልብ በሽታዎች ምርመራና ህክምና በከፍተኛ ልምድ ባላቸው ንዑስ-ልዩ ባለሙያ ሐኪሞች ይሰጣል። ECG፣ Echocardiography፣ Stress Test የመሳሰሉ ዘመናዊ መሳሪያዎችን እና ዘዴዎችን እንጠቀማለን።', // Specialized examination and treatment of heart diseases by highly experienced sub-specialist doctors. We use modern equipment and techniques such as ECG, Echocardiography, and Stress Test.
            'service3-h3': 'የአጠቃላይ ቀዶ ሕክምና ልዩ ባለሙያ', // Specialist General Surgery
            'service3-p': 'የአጠቃላይ ቀዶ ሕክምና በዘመናዊ መሳሪያዎችና ዘዴዎች ይሰጣል። ይህ ለአፐንዲክስ፣ ሄርኒያ፣ ሐሞት ከረጢት፣ ወዘተ የመሳሰሉ ቀዶ ሕክምናዎችን ያጠቃልላል።', // Specialist general surgery is provided with modern equipment and techniques. This includes surgeries for conditions such as appendices, hernias, gallbladder, etc.
            'service4-h3': 'የህጻናትና ጎረምሶች ህክምና ልዩ ባለሙያ', // Specialist Pediatrics and Adolescents Medicine
            'service4-p': 'የህፃናትና ጎረምሶች ምርመራና ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ለህጻናት ተስማሚ የሆነ ልዩ እንክብካቤ እንሰጣለን።', // Examination and treatment of children and adolescents by a specialist doctor. We provide special care suitable for children.
            'service5-h3': 'የማህጸንና የወሊድ ህክምና ልዩ ባለሙያ', // Specialist Obstetrics and Gynecology
            'service5-p': 'የማህፀንና የወሊድ ሙሉ ምርመራና ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ከወሊድ በፊት፣ በወሊድ ጊዜና ከወሊድ በኋላ የሚያስፈልገውን እንክብካቤ ይሰጣል።', // Complete examination and treatment for obstetrics and gynecology by a specialist doctor. We provide necessary care before, during, and after childbirth.
            'service6-h3': 'የአንገት፣ ጆሮ፣ አፍንጫና ጉሮሮ (ENT) ልዩ ባለሙያ', // Specialist ENT (Ear, Nose, Throat)
            'service6-p': 'የአንገት፣ ጆሮ፣ አፍንጫና ጉሮሮ ምርመራና ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ለተለያዩ የ ENT በሽታዎች በዘመናዊ መሳሪያዎች(Endoscopy) ምርመራና ህክምና እንሰጣለን።', // Examination and treatment of throat, ear, and nose conditions by a specialist doctor. We provide examination and treatment for various ENT diseases using modern equipment (Endoscopy).
            'service7-h3': 'የራዲዮሎጂ ልዩ ባለሙያ (አልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECG)', // Specialist Radiology (Ultrasound, X-ray, CT Scan, ECG)
            'service7-p': 'ዘመናዊ የራዲዮሎጂ አገልግሎት (አልትራሳውንድ፣ ራጂ፣ ሲቲ ስካን ECG) በልዩ ባለሙያ ሐኪም ይሰጣል። ትክክለኛ ምርመራ ለመስጠት የሚያግዝ ዘመናዊ ቴክኖሎጂን እንጠቀማለን።', // Modern radiology services (Ultrasound, X-ray, CT Scan, ECG) are provided by a specialist doctor. We use modern technology to provide accurate diagnoses.
            'service8-h3': 'የጥርስ ህክምና ልዩ ባለሙያ', // Specialist Dental Treatment
            'service8-p': 'ሙሉ የጥርስ ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ከንጹህ ጥርስ እስከ ዘውድ እና የጥርስ መተካት ድረስ ያሉ አገልግሎቶችን እንሰጣለን።', // Complete dental treatment by a specialist doctor. We offer services ranging from dental cleaning to crowns and tooth replacement.
            'service9-h3': 'የነርቭ፣ የአከርካሪ አጥንትና የአእምሮ ቀዶ ሕክምና ልዩ ባለሙያ', // Specialist Neurosurgery (Nerves, Spine, Brain)
            'service9-p': 'የነርቭ፣ የአከርካሪ አጥንትና የአእምሮ ቀዶ ሕክምና በከፍተኛ ልምድ ባላቸው ልዩ ባለሙያ ሐኪሞች ይሰጣል። ለተለያዩ የነርቭ በሽታዎች ልዩ ህክምና እንሰጣለን።', // Specialist surgery for nerves, spine, and brain is provided by highly experienced specialist doctors. We offer specialized treatment for various neurological diseases.
            'service10-h3': 'የአጥንት፣ የመገጣጠሚያ፣ የነርቭና የአከርካሪ አጥንት ህክምና ልዩ ባለሙያ', // Specialist Orthopedics and Traumatology (Bones, Joints, Nerves, Spine)
            'service10-p': 'የአጥንት፣ የመገጣጠሚያ፣ የነርቭና የአከርካሪ አጥንት ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ለአጥንት ስብራት፣ ጉዳቶች እና የመገጣጠሚያ በሽታዎች ህክምና እንሰጣለን።', // Specialist treatment for bones, joints, nerves, and spine by a specialist doctor. We provide treatment for fractures, injuries, and joint diseases.
            'service11-h3': 'የቆዳ ህክምና፣ ሌዘርና የውበት ልዩ ባለሙያ', // Specialist Dermatology, Laser, and Cosmetology
            'service11-p': 'የቆዳ ህክምና፣ ሌዘርና የውበት ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ለተለያዩ የቆዳ እና የውስጥ በሽታዎች እንክብካቤ እንሰጣለን።', // Specialist treatment for skin, laser, and cosmetology by a specialist doctor. We provide care for various skin and internal conditions.
            'service12-h3': 'የማደንዘዣና የህመም ማስታገሻ ልዩ ባለሙያ', // Specialist Anesthesia and Pain Management
            'service12-p': 'የማደንዘዣና የህመም ማስታገሻ ህክምና በልዩ ባለሙያ ሐኪም ይሰጣል። ከቀዶ ሕክምና በፊትና በኋላ የሚያስፈልገውን እንክብካቤ እንሰጣለን።', // Specialist anesthesia and pain management treatment by a specialist doctor. We provide necessary care before and after surgery.
            'service13-h3': 'ሙሉ ዘመናዊ ላቦራቶሪ', // Full Modern Laboratory
            'service13-p': 'ሙሉ ዘመናዊ የላቦራቶሪ አገልግሎት ይሰጣል። ለሁሉም አይነት የደም፣ የሽንት እና ሌሎች ባዮሎጂካል ምርመራዎችን በዘመናዊ መሳሪያዎች አገልግሎት እንሰጣለን።', // Full modern laboratory services are provided. We offer services for all types of blood, urine, and other biological tests using modern equipment.
            'service14-h3': 'የፊዚዮቴራፒ ምርመራና ህክምና', // Physiotherapy Examination and Treatment
            'service14-p': 'ሙሉ ምርመራና ህክምና በፊዚዮቴራፒ ሐኪም አገልግሎት ይሰጣል። ለተለያዩ የአካል ቅርጽና እንቅስቃሴ መዛባት ህክምና እንሰጣለን።', // Complete examination and treatment by a physiotherapy doctor. We provide treatment for various types of body form and movement disorders.
            'service15-h3': 'የአእምሮ ህክምና ልዩ ባለሙያ', // Specialist Psychiatry
            'service15-p': 'የአእምሮ ህክምና ልዩ ባለሙያ አገልግሎት ይሰጣል። ለተለያዩ የአእምሮ ሕመሞች ምክርና ሕክምና እንሰጣለን።', // Specialist psychiatry services are provided. We offer counseling and treatment for various mental illnesses.
            'service16-h3': 'የወሊድ አገልግሎቶች', // Complete Maternity Services
            'service16-p': 'ሙሉ የወሊድ አገልግሎቶች፣ ከወሊድ በፊት እስከ ወሊድ በኋላ፣ ከፍተኛ ልምድና ተሞክሮ ባላቸው ባለሙያዎችና ልዩ ባለሙያ ሐኪሞች፣ ዘመናዊ መሳሪያዎችን በመጠቀም ይሰጣል።', // Complete maternity services, from pre-natal to post-natal care, are provided by highly experienced and skilled professionals and specialist doctors, using modern equipment.
            'service17-h3': 'ሙሉ ፋርማሲና አምቡላንስ አገልግሎቶች', // Full Pharmacy and Ambulance Services
            'service17-p': 'ሙሉ ፋርማሲና አምቡላንስ አገልግሎቶች ይሰጣል። 24 ሰዓት የፋርማሲና አምቡላንስ አገልግሎት ይገኛል።', // Full pharmacy and ambulance services are provided. 24-hour pharmacy and ambulance services are available.
            'service18-h3': 'ሌሎች አገልግሎቶች አሉ', // Other Services Available
            'service18-p': 'ግዕዝ ሆስፒታል ሌሎች ያልተዘረዘሩ አገልግሎቶችን ለህብረተሰቡ እናቀርባለን። ለማንኛውም ጥያቄ ወይም ተጨማሪ መረጃ መጠየቅ ይቻላል።', // Geez Hospital also offers other unlisted services to the community. Inquiries for any questions or additional information are welcome.
            'footer-text': 'Copyright © 2026 Geez Hospital. All rights reserved. Developed By Aser Teklu G'
        }
    };

    const applyLanguage = (lang) => {
        const currentTranslations = translations[lang];
        const currentPage = window.location.pathname.split('/').pop();

        // Common elements for all pages (e.g., Header Menu, Logo, Footer)
        // Navigation Links
        document.querySelectorAll('nav ul li a').forEach(link => {
            const key = link.getAttribute('data-translate');
            if (key && currentTranslations && currentTranslations[key]) { // Added currentTranslations check
                link.textContent = currentTranslations[key];
            }
        });

        // Header Logo Alt Text
        const headerLogoImg = document.querySelector('header .logo img');
        if (headerLogoImg && currentTranslations) headerLogoImg.alt = currentTranslations['logo-alt']; // Added currentTranslations check

        // Top Bar Contact Us Button (New Element)
        const topBarContactBtn = document.querySelector('.top-bar .contact-btn');
        if (topBarContactBtn && currentTranslations) { // Added currentTranslations check
            topBarContactBtn.textContent = currentTranslations['contact-us-btn'];
        }

        // Footer Text
        const footerP = document.querySelector('footer #footer-text');
        if (footerP && currentTranslations) footerP.innerHTML = currentTranslations['footer-text']; // Added currentTranslations check

        // HTML Language attribute
        document.documentElement.lang = (lang === 'eng') ? 'en' : (lang === 'amh' ? 'am' : 'ti');

        // Top Bar Info (Address, Phone, Email) - These are common for all pages
        const topBarAddressSpan = document.querySelector('.top-bar .address-info .address-info-span');
        if (topBarAddressSpan && currentTranslations) { // Added currentTranslations check
            topBarAddressSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${currentTranslations['address-text']}`;
        }

        const topBarPhoneSpan = document.querySelector('.top-bar .contact-info span:nth-of-type(1)');
        if (topBarPhoneSpan && currentTranslations) { // Added currentTranslations check
            // Updated phone numbers with tel: links for mobile clickability
            topBarPhoneSpan.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:+251920008338">+251920008338</a> / <a href="tel:+251962333388">+251962333388</a>`;
        }

        const topBarEmailSpan = document.querySelector('.top-bar .contact-info span:nth-of-type(2)');
        if (topBarEmailSpan && currentTranslations) { // Added currentTranslations check
            topBarEmailSpan.innerHTML = `<i class="fas fa-envelope"></i> geezhospital@gmail.com`;
        }

        // --- Page-specific content updates ---
        if (currentPage === 'index.html' || currentPage === '') {
            // Index Page Content
            if (document.querySelector('#hero h2') && currentTranslations) document.querySelector('#hero h2').textContent = currentTranslations['hero-h2'];
            if (document.querySelector('#hero p') && currentTranslations) document.querySelector('#hero p').textContent = currentTranslations['hero-p'];
            if (document.querySelector('#hero .btn.btn-primary') && currentTranslations) document.querySelector('#hero .btn.btn-primary').textContent = currentTranslations['hero-btn-appointment'];
            if (document.querySelector('#hero .btn.btn-secondary') && currentTranslations) document.querySelector('#hero .btn.btn-secondary').textContent = currentTranslations['hero-btn-services'];

            if (document.querySelector('#about h2') && currentTranslations) document.querySelector('#about h2').textContent = currentTranslations['about-h2'];
            if (document.querySelector('#about p:nth-of-type(1)') && currentTranslations) document.querySelector('#about p:nth-of-type(1)').textContent = currentTranslations['about-p1'];
            if (document.querySelector('#about h3:nth-of-type(1)') && currentTranslations) document.querySelector('#about h3:nth-of-type(1)').textContent = currentTranslations['vision-h3'];
            if (document.querySelector('#about p:nth-of-type(2)') && currentTranslations) document.querySelector('#about p:nth-of-type(2)').textContent = currentTranslations['vision-p'];
            if (document.querySelector('#about h3:nth-of-type(2)') && currentTranslations) document.querySelector('#about h3:nth-of-type(2)').textContent = currentTranslations['mission-h3'];
            if (document.querySelector('#about p:nth-of-type(3)') && currentTranslations) document.querySelector('#about p:nth-of-type(3)').textContent = currentTranslations['mission-p'];
            if (document.querySelector('#about h3:nth-of-type(3)') && currentTranslations) document.querySelector('#about h3:nth-of-type(3)').textContent = currentTranslations['services-h3'];
            if (document.querySelector('#about p:nth-of-type(4)') && currentTranslations) document.querySelector('#about p:nth-of-type(4)').textContent = currentTranslations['services-p-about'];

            if (document.querySelector('#services h2') && currentTranslations) document.querySelector('#services h2').textContent = currentTranslations['our-services-h2'];
            if (document.querySelector('#services .btn-secondary') && currentTranslations) document.querySelector('#services .btn-secondary').textContent = currentTranslations['all-services-btn'];

            if (document.querySelector('#doctors h2') && currentTranslations) document.querySelector('#doctors h2').textContent = currentTranslations['doctors-h2'];
            if (document.querySelector('#doctors p') && currentTranslations) document.querySelector('#doctors p').textContent = currentTranslations['doctors-p'];

            const doctorCards = document.querySelectorAll('.doctor-card');
            if (doctorCards[0] && currentTranslations) {
                if (doctorCards[0].querySelector('h3')) doctorCards[0].querySelector('h3').textContent = currentTranslations['dr-tesfay-name'];
                if (doctorCards[0].querySelector('p')) doctorCards[0].querySelector('p').textContent = currentTranslations['dr-tesfay-specialty'];
                if (doctorCards[0].querySelector('.btn-small')) doctorCards[0].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
            }
            if (doctorCards[1] && currentTranslations) {
                if (doctorCards[1].querySelector('h3')) doctorCards[1].querySelector('h3').textContent = currentTranslations['dr-higus-name'];
                if (doctorCards[1].querySelector('p')) doctorCards[1].querySelector('p').textContent = currentTranslations['dr-higus-specialty'];
                if (doctorCards[1].querySelector('.btn-small')) doctorCards[1].querySelector('.btn-small').textContent = currentTranslations['appointment-btn'];
            }

            if (document.querySelector('#testimonials h2') && currentTranslations) document.querySelector('#testimonials h2').textContent = currentTranslations['testimonials-h2'];
            if (document.querySelector('.testimonial-card p') && currentTranslations) document.querySelector('.testimonial-card p').textContent = currentTranslations['testimonial-p'];
            if (document.querySelector('.testimonial-card span') && currentTranslations) document.querySelector('.testimonial-card span').textContent = currentTranslations['testimonial-span'];

            // Updated selector to target the contact section by its new ID
            if (document.querySelector('#contact-section h2') && currentTranslations) document.querySelector('#contact-section h2').textContent = currentTranslations['contact-h2'];
            if (document.querySelector('#contact-section p:nth-of-type(1)') && currentTranslations) document.querySelector('#contact-section p:nth-of-type(1)').textContent = currentTranslations['contact-p'];

            // Dynamic Services Loading for index.html (This part should only run if serviceGridIndexPage exists)
            const serviceGridIndexPage = document.querySelector('#services .service-grid');
            if (serviceGridIndexPage && currentTranslations) { // Added currentTranslations check
                const servicesForIndexPage = [
                    { name: currentTranslations["service1-h3"], icon: "fas fa-stethoscope", description: currentTranslations["service1-p"] },
                    { name: currentTranslations["service2-h3"], icon: "fas fa-heartbeat", description: currentTranslations["service2-p"] },
                    { name: currentTranslations["service3-h3"], icon: "fas fa-surgical-mask", description: currentTranslations["service3-p"] },
                    { name: currentTranslations["service4-h3"], icon: "fas fa-baby", description: currentTranslations["service4-p"] },
                    { name: currentTranslations["service5-h3"], icon: "fas fa-venus-mars", description: currentTranslations["service5-p"] },
                    { name: currentTranslations["service6-h3"], icon: "fas fa-ear", description: currentTranslations["service6-p"] },
                    { name: currentTranslations["service7-h3"], icon: "fas fa-x-ray", description: currentTranslations["service7-p"] },
                    { name: currentTranslations["service8-h3"], icon: "fas fa-tooth", description: currentTranslations["service8-p"] },
                    { name: currentTranslations["service9-h3"], icon: "fas fa-brain", description: currentTranslations["service9-p"] },
                    { name: currentTranslations["service10-h3"], icon: "fas fa-bone", description: currentTranslations["service10-p"] },
                    { name: currentTranslations["service11-h3"], icon: "fas fa-spa", description: currentTranslations["service11-p"] },
                    { name: currentTranslations["service12-h3"], icon: "fas fa-syringe", description: currentTranslations["service12-p"] },
                    { name: currentTranslations["service13-h3"], icon: "fas fa-flask", description: currentTranslations["service13-p"] },
                    { name: currentTranslations["service14-h3"], icon: "fas fa-wheelchair", description: currentTranslations["service14-p"] },
                    { name: currentTranslations["service15-h3"], icon: "fas fa-brain", description: currentTranslations["service15-p"] },
                    { name: currentTranslations["service16-h3"], icon: "fas fa-baby-carriage", description: currentTranslations["service16-p"] },
                    { name: currentTranslations["service17-h3"], icon: "fas fa-ambulance", description: currentTranslations["service17-p"] },
                    { name: currentTranslations["service18-h3"], icon: "fas fa-plus-circle", description: currentTranslations["service18-p"] }
                ];
                serviceGridIndexPage.innerHTML = ''; // Clear existing content before adding new
                servicesForIndexPage.forEach(service => {
                    const serviceCard = document.createElement('div');
                    serviceCard.classList.add('service-card');
                    serviceCard.innerHTML = `
                        <i class="${service.icon} fa-3x"></i>
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                    `;
                    serviceGridIndexPage.appendChild(serviceCard);
                });
            }
        }
        else if (currentPage === 'services.html') {
            // Services Page Content
            const pageHeroH2 = document.getElementById('services-page-h2');
            if (pageHeroH2 && currentTranslations) pageHeroH2.textContent = currentTranslations['services-page-h2'];

            const pageHeroP = document.getElementById('services-page-intro-p');
            if (pageHeroP && currentTranslations) pageHeroP.textContent = currentTranslations['services-page-intro-p'];

            for (let i = 1; i <= 18; i++) {
                const serviceItem = document.getElementById(`service-item-${i}`);
                if (serviceItem && currentTranslations) { // Added currentTranslations check
                    const h3Element = serviceItem.querySelector('h3');
                    const pElement = serviceItem.querySelector('p');
                    if (h3Element) h3Element.textContent = currentTranslations[`service${i}-h3`];
                    if (pElement) pElement.textContent = currentTranslations[`service${i}-p`];
                }
            }
        }
        else if (currentPage === 'contact.html') {
            // Contact Page Content
            if (document.getElementById('contact-page-h2') && currentTranslations) document.getElementById('contact-page-h2').textContent = currentTranslations['contact-h2'];
            if (document.querySelector('#contact-page-hero p') && currentTranslations) document.querySelector('#contact-page-hero p').textContent = currentTranslations['contact-p'];
            if (document.querySelector('.contact-form-section h2') && currentTranslations) document.querySelector('.contact-form-section h2').textContent = currentTranslations['contact-form-title'];

            // Form Labels
            document.querySelectorAll('label[data-translate]').forEach(label => {
                const key = label.getAttribute('data-translate');
                if (key && currentTranslations && currentTranslations[key]) { // Added currentTranslations check
                    label.textContent = currentTranslations[key];
                }
            });

            // Gender Options
            const genderSelect = document.getElementById('gender');
            if (genderSelect && currentTranslations) { // Added currentTranslations check
                if (genderSelect.options[0]) genderSelect.options[0].textContent = currentTranslations['form-select-gender'];
                if (genderSelect.options[1]) genderSelect.options[1].textContent = currentTranslations['form-gender-male']; // Corrected syntax
                if (genderSelect.options[2]) genderSelect.options[2].textContent = currentTranslations['form-gender-female']; // Corrected syntax
                if (genderSelect.options[3]) genderSelect.options[3].textContent = currentTranslations['form-gender-other']; // Corrected syntax
            }

            // Submit Button
            if (document.querySelector('.contact-form-section button[type="submit"]') && currentTranslations) document.querySelector('.contact-form-section button[type="submit"]').textContent = currentTranslations['form-submit-btn'];

            // Our Location section title
            const ourLocationMapTitle = document.querySelector('.contact-map-section h2');
            if (ourLocationMapTitle && currentTranslations) { // Added currentTranslations check
                ourLocationMapTitle.textContent = currentTranslations['our-location-map'];
            }

            // View on Map button
            const viewOnMapBtn = document.querySelector('.contact-map-section .btn');
            if (viewOnMapBtn && currentTranslations) { // Added currentTranslations check
                viewOnMapBtn.textContent = currentTranslations['view-on-map'];
            }

            // Update page title
            const pageTitle = document.querySelector('title');
            if (pageTitle && currentTranslations) pageTitle.textContent = currentTranslations['contact'];
        }
    };

    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        if (selectedLang === 'tig' || selectedLang === 'eng' || selectedLang === 'amh') {
            localStorage.setItem('selectedLanguage', selectedLang);
            updateUrlLanguage(selectedLang);
            window.location.reload();
        }
    });

    const savedLanguage = localStorage.getItem('selectedLanguage');
    const langInUrl = getLanguageFromUrl();

    let initialLang = 'tig';

    if (langInUrl && (langInUrl === 'tig' || langInUrl === 'eng' || langInUrl === 'amh')) {
        initialLang = langInUrl;
    } else if (savedLanguage && (savedLanguage === 'tig' || savedLanguage === 'eng' || savedLanguage === 'amh')) {
        initialLang = savedLanguage;
    }

    if (languageSwitcher) {
        languageSwitcher.value = initialLang;
    }
    applyLanguage(initialLang);
    updateUrlLanguage(initialLang);

    // Smooth scroll logic for internal anchor links (e.g., #section-id)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's not an empty hash link or a link that would reload the page
            if (href && href.startsWith('#') && href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});