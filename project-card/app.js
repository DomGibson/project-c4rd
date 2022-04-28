const cardWrapper = document.querySelector(".cardWrapper");
const card = document.querySelector(".card");
const highlight = document.querySelector(".highlight");

const mostX = 10;
const mostY = 10;

cardWrapper.addEventListener("mousemove", (e) => {
    card.style.transition = "none";
    highlight.style.transition = "none";

    const x = e.offsetX;
    const y = e.offsetY;
    const {width, height} = cardWrapper.getBoundingClientRect();
    const halfWidth = width/2;
    const halfHeight = height/2;

    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY;

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`

    highlight.style.left = `${(rotationY / mostY * 100) * -1}%`
    highlight.style.top = `${(rotationX / mostX * 100) * -1}%`
})