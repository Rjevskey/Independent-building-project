//burger-menu-start//
document
    .querySelector(".burger-menu-line")
    .addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector(".navigation-menu").classList.toggle("open");
    });
//burger-menu-end//

//Modal start//
document
    .getElementById("open-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal").classList.add("open");
    });

document
    .getElementById("close-my-modal-btn")
    .addEventListener("click", function () {
        document.getElementById("my-modal").classList.remove("open");
    });

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open");
    }
});

document
    .querySelector("#my-modal .modal-box")
    .addEventListener("click", (event) => {
        event._isClickWithInModal = true;
    });
document.getElementById("my-modal").addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});
//Modal end//

//Slider start//
const images = document.querySelectorAll(".slider-img");
const controlls = document.querySelectorAll(".controlls");
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove("active");
    images[index].classList.add("active");
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener("click", (event) => {
        if (event.target.classList.contains("prev")) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.lenght - 1;
            }
            show(index);
        } else if (event.target.classList.contains("next")) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});
show(imageIndex);
//Slider end//
