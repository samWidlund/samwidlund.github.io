window.addEventListener("load", function() {
    const nameText = document.getElementsByClassName("nameHeader")[0];
    const mainContainer = document.getElementById("mainContainer")

    const scrollLimit = mainContainer.offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollLimit) {
            nameText.classList.add("hidden");
        } else {
            nameText.classList.remove("hidden");
        }
    });
});

const scrollDownButton = document.getElementById("scrollDownButton");

scrollDownButton.addEventListener("click", function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

function teaseScroll() {
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight/10,
            behavior: "smooth"
        });
    }, 0);

    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight/6,
            behavior: "smooth"
        });
    }, 800);

    setTimeout(() => {
        window.scrollTo({
            top: 0, // scroll back to top
            behavior: "smooth"
        });
    }, 1000);
}

setInterval(teaseScroll, 5000);
