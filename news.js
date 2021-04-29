// Реализовать класс, описывающий новость (заголовок, текст,

//     img, дата публикации, read more). В классе необходимо реализовать

//     один метод print, который выводит всю информацию в таком

//     виде, как на рисунке 1.

//     Обратите внимание на то, как выводится дата:

//     ■ если с даты публикации прошло менее дня, то выводится

//     «сегодня»;

//     ■ если с даты публикации прошло менее недели, то выводится «N дней назад»;

//
class News {
  constructor(title, description, img, link, date) {
    this.title = title;
    this.description = description;
    this.img = img;
    this.link = link;
    this.date = date;
  }
  get printDate() {
    let date = Math.ceil(
      (new Date().getTime() - Date.parse(this.date)) / (1000 * 3600 * 24)
    );
    if (date <= 1) {
      return "today";
    } else if (date <= 7) {
      return `${date} days ago`;
    } else {
      return new Date(Date.parse(this.date)).toLocaleDateString();
    }
  }
  print() {
    let article = document.createElement("ARTICLE");
    let title = document.createElement("h3");
    title.textContent = this.title;
    let description = document.createElement("P");
    description.textContent = this.description;
    let img = document.createElement("IMG");
    img.setAttribute("src", this.img ? this.img : "./img/1");
    let link = document.createElement("a");
    link.textContent = "Read more";
    link.setAttribute("href", this.link);
    link.setAttribute("target", "_blank");
    let date = document.createElement("i");
    date.textContent = this.printDate;
    article.append(img, title, date, description, link);
    return article;
  }
}
let url =
  "http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&countries=ua&date=2021-03-24,2021-04-22";
async function loadNews() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.data);
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
    document.querySelector(".root").append(article.print());
    let dat = Math.ceil(
      (new Date().getTime() - Date.parse(element.published_at)) /
        (1000 * 3600 * 24)
    );
    console.log(dat);
  }
}

loadNews();
