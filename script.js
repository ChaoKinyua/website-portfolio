// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Hire Me button → open email client
    const hireBtn = document.querySelector(".btn-box a:nth-child(1)");
    hireBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "mailto:ck0155303@gmail.com?subject=Job%20Opportunity&body=Hello%20Charles,";
    });

    // Let's Connect button → link to LinkedIn
    const connectBtn = document.querySelector(".btn-box a:nth-child(2)");
    connectBtn.addEventListener("click", function (event) {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/chao-kinyua-66713521a/", "_blank");
    });

    // Social Media Buttons
    const socialLinks = {
        whatsapp: "https://wa.me/254714390741",  // replace with your WhatsApp number
        instagram: "https://www.instagram.com/_chao.moha/",
        linkedin: "https://www.linkedin.com/in/chao-kinyua-66713521a/",
        twitter: "https://x.com/chao_moha17578"
    };

    document.querySelector(".bxl-whatsapp")?.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(socialLinks.whatsapp, "_blank");
    });

    document.querySelector(".bxl-instagram")?.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(socialLinks.instagram, "_blank");
    });

    document.querySelector(".bxl-linkedin")?.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(socialLinks.linkedin, "_blank");
    });

    document.querySelector(".bxl-twitter")?.parentElement.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(socialLinks.twitter, "_blank");
    });
});
