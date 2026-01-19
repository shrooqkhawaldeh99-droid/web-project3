main.js

console.log("مرحباً بك في موقع بير برنت!");
document.addEventListener("DOMContentLoaded", function() {
    const heroButton = document.querySelector(".hero .btn");

    if (heroButton) {
        heroButton.addEventListener("click", function() {
            alert("سيتم تحويلك إلى صفحة المنتجات");
        });
    }
});

function showTip() {
    const tip = document.getElementById('tip');
    tip.textContent = "تأكد من فصل المواد القابلة لإعادة التدوير مثل البلاستيك والزجاج والورق!";
}