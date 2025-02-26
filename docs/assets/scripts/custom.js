document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerHTML = "↑";
    button.id = "scrollToTop";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.fontSize = "18px";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.display = "none";
    button.style.background = "#007bff";
    button.style.color = "white";
    document.body.appendChild(button);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});