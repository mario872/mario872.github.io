const photos = [ // The path is ../ because when it loads inside the HTML page it will be a folder outside of it, even though in the JS it is not
    {"url": "../assets/images/carousel-photos/classroom.jpg", "description": "Caringbytes members participating in the Cupcake competition run by UNSW"},
    {"url": "../assets/images/carousel-photos/group-1.jpg", "description": "Three students surprisingly excited after one and a half hours of coding problems"},
    {"url": "../assets/images/carousel-photos/group-2.jpg", "description": "Two students obviously too far behind to be able to take a break to snap a photo"},
    {"url": "../assets/images/carousel-photos/group-3.jpg", "description": "Three competitors honestly revealing how they felt this far into the competition"},
    {"url": "../assets/images/carousel-photos/group-4.jpg", "description": "Two competitors trying to be upbeat while also still trying to focus on coding"},
];
let currentPhoto = 0;

function loadPhoto(num, fade) {
    if (fade == false) {
        let photo = document.getElementById("photo");
        photo.src = photos[num]["url"];
        photo.alt = photos[num]["description"]

        let photoMobile = document.getElementById("photo-mobile");
        photoMobile.src = photos[num]["url"];
        photoMobile.alt = photos[num]["description"]

        document.getElementById("photo-description").textContent = photos[num]["description"];
    } else {
        let photo = document.getElementById("photo");
        let photoMobile = document.getElementById("photo-mobile")

        photo.alt = photos[num]["description"]
        photoMobile.alt = photos[num]["description"]

        document.getElementById("photo-description").textContent = photos[num]["description"];

        photo.classList.add("hidden");
        setTimeout(() => {
            photo.src = photos[num]["url"];
            photoMobile.src = photos[num]["url"];
            photo.onload = () => photo.classList.remove('hidden');
        }, 100);
    }
}

function backwardPhoto() {
    if (currentPhoto - 1 < 0) {
        currentPhoto = photos.length - 1;
    } else {
        currentPhoto--;
    }


    loadPhoto(currentPhoto);
}

function forwardPhoto() {
    if (currentPhoto + 2 > photos.length) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    }

    loadPhoto(currentPhoto);
}

function showSuccessForm() {
    document.getElementById("success-form-text").style.display = "block";
}

function includeHTML() {
    let element, filename // Define the variable
    const allElements = document.getElementsByTagName("*"); // Get every element on the page
    // Iterate through every element in the list
    for (let i = 0; i < allElements.length; i++) {
        element = allElements[i];
        filename = element.getAttribute("w3-include-html");
        if (filename != null) {
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4) { // Make sure the requesrt is ready to proceed
                if (this.status == 200) {element.innerHTML = this.responseText} // If the request was successful, set the html of the element to the response
                if (this.status == 404) {element.innerHTML = "Page not found.";} // If the request was not successful, error out
                // Remove the attribute
                element.removeAttribute("w3-include-html");
                // Call the function recursively to include any other HTML files
                includeHTML();
            }
        }
        xhttp.open("GET", filename, true);
        xhttp.send();
        /* Exit the function: */
        return;
        }
    };
}

function openInNewTab(url) {
    window.open(url, '_blank').focus(); // There's no reason not to blatantly plagarise this, it's perfect.
}