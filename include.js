
document.addEventListener("DOMContentLoaded", function() {
    const headerEl = document.querySelector("header.gnb");
    const footerEl = document.querySelector("footer.footer");

    if (headerEl) {
        fetch("header.html")
            .then(res => res.text())
            .then(data => { headerEl.innerHTML = data; });
    }
    if (footerEl) {
        fetch("footer.html")
            .then(res => res.text())
            .then(data => { footerEl.innerHTML = data; });
    }
});
