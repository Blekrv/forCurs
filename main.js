let category = "general",
  language = "ru",
  country = "gb";
if (country == "gb" || country == "us" || country == "de") {
  language = "en";
}
if (country == "ua") {
  language = "ru";
}
business.addEventListener("click", () => {
  changeCtg("business");
});
entertaiment.addEventListener("click", () => {
  changeCtg("entertaiment");
});
health.addEventListener("click", () => {
  changeCtg("health");
});
science.addEventListener("click", () => {
  changeCtg("science");
});
sport.addEventListener("click", () => {
  changeCtg("sports");
});
technology.addEventListener("click", () => {
  changeCtg("technology");
});
ua.addEventListener("click", () => {
  category = "general";
  changeCountry("ua");
});
gb.addEventListener("click", () => {
  category = "general";
  changeCountry("gb");
});
de.addEventListener("click", () => {
  category = "general";
  changeCountry("de");
});
us.addEventListener("click", () => {
  category = "general";
  changeCountry("us");
});
console.log(category);
let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-25,2021-05-06`;
class News {
  constructor(title, description, img, link, date) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.link = link;
    this.date = date;
  }
  print() {
    let article = document.createElement("ARTICLE");
    article.style.marginBottom = "10px";
    article.style.display = "flex";
    let title = document.createElement("h3");
    title.textContent = this.title;
    let description = document.createElement("P");
    description.textContent = this.description;
    let descAll = document.createElement("DIV");
    descAll.classList.add("col-4");
    let img = document.createElement("DIV");
    img.style.width = "600px";
    img.style.height = "300px";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "cover";
    img.style.backgroundImage = this.img
      ? `url(${this.img})`
      : "url(./images/placeholder.jpg)";
    let link = document.createElement("a");
    link.textContent = "Read more";
    link.setAttribute("href", this.link);
    link.setAttribute("target", "_blank");
    let date = document.createElement("i");
    date.textContent = this.date;
    descAll.append(title, date, description, link);
    article.append(img, descAll);
    return article;
  }
}

async function loadNews(url) {
  const response = await fetch(url);
  const data = await response.json();
  addNews(data.data);
}
function addNews(articles) {
  for (element of articles) {
    let article = new News(
      element.title,
      element.description,
      element.image,
      element.url,
      element.published_at
    );
    document.querySelector("#root").append(article.print());
  }
}
function changeCtg(ctgr) {
  category = ctgr;
  let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-25,2021-05-06`;
  root.innerHTML = "";
  loadNews(url);
}
function changeCountry(x) {
  country = x;
  let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-25,2021-05-06`;
  root.innerHTML = "";
  loadNews(url);
}
loadNews(url);
let x = document.querySelector("#root");
x.style.ba;
function refreshTime() {
  let dateString = new Date().toLocaleString("ua-UA", {
    timeZone: "Europe/Kiev",
  });
  let formattedString = dateString.replace(", ", " ");
  time.innerHTML = formattedString;
}
setInterval(refreshTime, 1000);
