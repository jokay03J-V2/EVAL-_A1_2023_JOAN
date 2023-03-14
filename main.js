import "./style.css";
const darkBtn = document.getElementById("dark-btn");
const foodsContainer = document.getElementById("foods");
const plats = [
  {
    imgSrc: "./assets/img-01.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-02.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-03.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-04.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-05.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
  {
    imgSrc: "./assets/img-06.jpg",
    title: "un titre super",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architectominima assumenda perferendisqui consequatur dicta, a cumque cupiditate, rerum voluptates animi illo corrupti modi esse at. Ipsum,ducimus delectus.",
  },
];

for (let indexPlats = 0; indexPlats < plats.length; indexPlats++) {
  const plat = plats[indexPlats];
  foodsContainer.innerHTML += `<article class="food"><img src=${plat.imgSrc} alt="food 1" class="food--img">
        <div class="food--infos">
          <h3 class="food--title">${plat.title}</h3>
          <p class="food--description">${plat.text}</p>
        </div>
      </article>`;
}

darkBtn.addEventListener("click", () => {
  document.body.classList.add("easter--egg--container");
  document.body.innerHTML = `<h1>c'est une blague...rechargez la page !</h1>`;
});

