const contentCard = document.querySelector(".content-card");
const title = document.querySelector(".content-header");
const intro = document.querySelector(".intro");
const link = document.querySelector(".submit-btn");

const loadDiv = () => {
  fetch(`${window.origin}/getArticle`, {}).then(function (response) {
    response.json().then(function (data) {
      if (contentCard.style.display !== "block") {
        contentCard.style.display = "block";
      }
      title.innerHTML = data.title;
      intro.innerHTML = data.intro;
      link.href = data.link;
    });
  });
};
