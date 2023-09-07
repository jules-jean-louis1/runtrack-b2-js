function myChangeBackgroundColor() {
    const html = document.querySelector("html");
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1337) {
        html.style.backgroundColor = "#ffb703";
    } else if (screenWidth >= 505) {
        html.style.backgroundColor = "#d90429";
    } else {
        html.style.backgroundColor = "#003049";
    }
}
myChangeBackgroundColor();
window.addEventListener("resize", myChangeBackgroundColor);