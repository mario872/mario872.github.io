function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "block";
}

function showElementWithFade(element) {
    element.classList.add("fade-in");
    showElement(element);
}

function revealLanguages() {
    let languagesListLanguages = document.querySelectorAll('[id^="languages-list-"]');
    let timer = 0;
    languagesListLanguages.forEach(language => {
        setTimeout(() => showElementWithFade(language), timer);
        timer += 200;
    });
    
    let revealButton = document.getElementById("reveal-languages-list-button");
    hideElement(revealButton);

    boredSequence();

}
