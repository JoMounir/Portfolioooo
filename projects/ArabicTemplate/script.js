// Script to handle language switch between Arabic and English
document.getElementById('languageSwitch').addEventListener('change', function () {
    const lang = this.value;
    if (lang === 'ar') {
        document.documentElement.lang = 'ar';
        document.body.setAttribute('lang', 'ar');
        translateToArabic();
    } else {
        document.documentElement.lang = 'en';
        document.body.setAttribute('lang', 'en');
        translateToEnglish();
    }
});

function translateToArabic() {
    document.getElementById('home-link').textContent = 'الرئيسية';
    document.getElementById('about-link').textContent = 'معلومات عنا';
    document.getElementById('services-link').textContent = 'خدماتنا';
    document.getElementById('contact-link').textContent = 'اتصل بنا';
    
    document.getElementById('home-title').textContent = 'مرحبا بكم في بنكنا';
    document.getElementById('home-text').textContent = 'نحن نقدم أفضل الخدمات المالية لاحتياجاتك.';
    document.getElementById('about-title').textContent = 'معلومات عنا';
    document.getElementById('about-text').textContent = 'يخدم بنكنا العملاء منذ أكثر من 50 عامًا بالثقة والتميز.';
    document.getElementById('services-title').textContent = 'خدماتنا';
    document.getElementById('services-text').textContent = 'نحن نقدم مجموعة واسعة من الخدمات المصرفية بما في ذلك القروض وبطاقات الائتمان والخدمات المصرفية عبر الإنترنت.';
    document.getElementById('contact-title').textContent = 'اتصل بنا';
    document.getElementById('contact-text').textContent = 'لا تتردد في الاتصال بنا عبر الهاتف أو البريد الإلكتروني لأي استفسار.';
}

function translateToEnglish() {
    document.getElementById('home-link').textContent = 'Home';
    document.getElementById('about-link').textContent = 'About';
    document.getElementById('services-link').textContent = 'Services';
    document.getElementById('contact-link').textContent = 'Contact';
    
    document.getElementById('home-title').textContent = 'Welcome to Our Bank';
    document.getElementById('home-text').textContent = 'We offer the best financial services for your needs.';
    document.getElementById('about-title').textContent = 'About Us';
    document.getElementById('about-text').textContent = 'Our bank has been serving customers for over 50 years with trust and excellence.';
    document.getElementById('services-title').textContent = 'Our Services';
    document.getElementById('services-text').textContent = 'We provide a wide range of banking services, including loans, credit cards, and online banking.';
    document.getElementById('contact-title').textContent = 'Contact Us';
    document.getElementById('contact-text').textContent = 'Feel free to reach out to us via phone or email for any inquiries.';
}
