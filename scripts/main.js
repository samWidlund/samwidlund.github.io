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

function teaseScrollButton() {
    scrollDownButton.classList.add("shake");
    
    setTimeout(() => {
        scrollDownButton.classList.remove("shake");
    }, 500); // match the duration of the shake animation (0.5s)
}

setInterval(teaseScrollButton, 5000);

    // fetch all navigateMenu links
    document.querySelectorAll('#navigateMenu a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault()
            
            // find the target container
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // scroll to container
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
