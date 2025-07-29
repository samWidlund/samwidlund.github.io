// fade + slidein header
window.addEventListener('load', () => {
    const wLetter = document.getElementById('wLetter');
    const samuelText = document.getElementById('samuelText');
    
    if (wLetter && samuelText) {
        setTimeout(() => {
            wLetter.classList.remove('-translate-x-full', 'opacity-0');
            wLetter.classList.add('translate-x-0', 'opacity-100');
        }, 300);
        
        setTimeout(() => {
            samuelText.classList.remove('-translate-x-full', 'opacity-0');
            samuelText.classList.add('translate-x-0', 'opacity-100');
        }, 900);
    }
});

// remove name header with scroll
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

    // scroll to navigateMenu
    const navigateMenu = document.getElementById("navigateMenu");
    navigateMenu.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
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

// projects styling
function showTabContent(tabId) {
    const tabs = document.querySelectorAll('.tabContent');
    const buttons = document.querySelectorAll('.tabButton');
    tabs.forEach(tab => tab.style.display = 'none');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
    const idx = ['tabWeb','tabDotnet','tabOther'].indexOf(tabId);
    if (idx !== -1) buttons[idx].classList.add('active');
}