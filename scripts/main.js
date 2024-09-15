window.addEventListener("load", function() {
    const nameText = document.getElementsByClassName("nameHeader")[0];
    const mainContainer = document.getElementById("mainContainer")
    const nameSAMUEL = document.getElementsByClassName("SAMUEL")[0];
    const nameWIDLUND = document.getElementsByClassName("WIDLUND")[0];
    const navigateContainer = document.getElementById("navigateContainer");

    const scrollLimit = mainContainer.offsetHeight;
    const fadeLimit = scrollLimit + navigateContainer.offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollLimit) {
            nameText.classList.add("hidden");
        } else {
            nameText.classList.remove("hidden");
        }
    });
});