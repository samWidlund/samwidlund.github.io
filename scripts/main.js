window.addEventListener("load", function() {
    const nameText = document.getElementsByClassName("nameHeader")[0];
    const mainContainer = document.getElementById("mainContainer")
    const nameSAMUEL = document.getElementsByClassName("SAMUEL")[0];
    const nameWIDLUND = document.getElementsByClassName("WIDLUND")[0];
    const navigateContainer = document.getElementById("navigateContainer");

    const scrollLimit = mainContainer.offsetHeight;
    const fadeLimit = scrollLimit + navigateContainer.offsetHeight;


    // TESTING
    nameSAMUEL.classList.add("rotaded");
    nameWIDLUND.classList.add("rotaded");

    // TODO: ADD ROTATE NAME ON SMALLER SCREENS LIKE PHONE!

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollLimit) {
            nameText.classList.add("hidden");
            // nameText.classList.add("rotated"); // Add rotation class
            // nameSAMUEL.classList.add("rotaded");
            // nameWIDLUND.classList.add("rotaded");
        } else {
            nameText.classList.remove("hidden");
            // nameText.classList.remove("rotated"); // Remove rotation class
            // nameSAMUEL.classList.remove("rotaded");
            // nameWIDLUND.classList.remove("rotaded");
        }

        if (window.scrollY > scrollLimit) { // CHANGE TO fadeLimit!
            nameText.classList.add("hidden");
        } else {
            nameText.classList.remove("hidden");
        }
    });
});