
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#helloBtn");
    const year = document.querySelector("#year");

    if (button) {
        button.addEventListener("click", () => {
            alert("Вітаємо у Coffee Test! ☕");
        });
    }

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
