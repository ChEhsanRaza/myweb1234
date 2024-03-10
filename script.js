// script.js
document.getElementById("language-toggle").addEventListener("click", function() {
    var languageButton = document.getElementById("language-toggle");
    var currentLanguage = languageButton.textContent.trim();
    
    if (currentLanguage === "اردو") {
        // Change to English
        languageButton.textContent = "Urdu";
        translateToEnglish();
    } else {
        // Change to Urdu
        languageButton.textContent = "اردو";
        translateToUrdu();
    }
});

function translateToUrdu() {
    // Replace English text with Urdu translations
    document.getElementById("biography").innerHTML = "<h2>ذاتی سرگرمی</h2><p>میں چھٹی کی ششویں کلاس کا طالب علم ہوں جو نیا سیکھنے اور جانچنے کے حوالے سے پرجوش ہوں۔ میرے فارغ وقت میں مذہب، سائنس اور زبانوں کا مطالعہ کرنا مجھے بہت پسند ہے۔</p>";
    document.getElementById("resume").innerHTML = "<h2>سیرت نامہ</h2><p>جلد ہی آرہا ہے...</p>";
    document.getElementById("contact").innerHTML = "<h2>رابطہ</h2><p>ای میل: ehsan.raza@example.com</p><p>فون: +92 123 4567890</p>";
}

function translateToEnglish() {
    // Replace Urdu translations with English text
    document.getElementById("biography").innerHTML = "<h2>Biography</h2><p>I am a sixth-grade student passionate about learning and exploring new things. I enjoy studying religion, science, and languages in my free time.</p>";
    document.getElementById("resume").innerHTML = "<h2>Resume</h2><p>Coming soon...</p>";
    document.getElementById("contact").innerHTML = "<h2>Contact</h2><p>Email: ehsan.raza@example.com</p><p>Phone: +92 123 4567890</p>";
}
