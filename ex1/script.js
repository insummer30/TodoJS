const title = document.querySelector('#title');

const CLICKED_CLASS = "clicked";

function handleClicked(event) {
    title.classList.toggle(CLICKED_CLASS);
}

title.addEventListener("click", handleClicked);