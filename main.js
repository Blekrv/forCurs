


let category = "general",
  language = "ru",
  country = "gb";
  if (country == 'gb' || country == 'us' || country == 'de'){
    language = 'en'
  }
  if (country == 'ua'){
    language = 'ru'
  }
  business.addEventListener('click', change('business'))
  entertaiment.addEventListener('click', ()=>{
    category = 'entertaiment'
    let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-14,2021-05-06`;
    root.innerHTML = ''
    loadNews(url)
  })
  health .addEventListener('click', ()=>{
    category = 'health'
    let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-14,2021-05-06`;
    root.innerHTML = ''
    loadNews(url)
  })
  science  .addEventListener('click', ()=>{
    category = 'science'
    let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-14,2021-05-06`;
    root.innerHTML = ''
    loadNews(url)
  })
  console.log(category)
let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-14,2021-05-06`;
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
    date.textContent = this.date;
    article.append(img, title, date, description, link);
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
function change (ctgr){
  category = ctgr
  let url = `http://api.mediastack.com/v1/news?access_key=34020952329abe304c6319a10c856c74&categories=${category}&countries=${country}&languages=${language}&date=2021-04-14,2021-05-06`;
  root.innerHTML = ''
  loadNews(url)
}
loadNews(url);
