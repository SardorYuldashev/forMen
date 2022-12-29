const cars = [
  {
    title: "Tracker",
    price: 23200,
    year: 2021,
    color: "White",
    img: "tracker",
    category: "expensive",
  },
  {
    title: "Equinox",
    price: 37000,
    year: 2022,
    color: "White",
    img: "equinox",
    category: "expensive",
  },
  {
    title: "Gentra",
    price: 16500,
    year: 2022,
    color: "Grey",
    img: "gentra",
    category: "medium",
  },
  {
    title: "Malibu",
    price: 32000,
    year: 2021,
    color: "Black",
    img: "malibu",
    category: "expensive",
  },
  {
    title: "Matiz",
    price: 4200,
    year: 2010,
    color: "White",
    img: "matiz",
    category: "inexpensive",
  },
  {
    title: "Nexia r3",
    price: 11500,
    year: 2019,
    color: "Black",
    img: "nexia",
    category: "medium",
  },
  {
    title: "Onix",
    price: 17600,
    year: 2019,
    color: "White",
    img: "onix",
    category: "medium",
  },
  {
    title: "Spark",
    price: 6800,
    year: 2013,
    color: "White",
    img: "spark",
    category: "inexpensive",
  },
  {
    title: "Tahoe",
    price: 84000,
    year: 2022,
    color: "Violet",
    img: "tahoe",
    category: "expensive",
  },
  {
    title: "Cobalt",
    price: 9400,
    year: 2015,
    color: "Grey",
    img: "cobalt",
    category: "medium",
  },
  {
    title: "Labo",
    price: 12500,
    year: 2017,
    color: "White",
    img: "labo",
    category: "medium",
  },
  {
    title: "Москвич",
    price: 1400,
    year: 1989,
    color: "Green",
    img: "moskvich",
    category: "inexpensive",
  },
];

const techs = [
  {
    title: "Airpods",
    price: 275,
    year: "★★★★",
    color: "White",
    img: "airpods",
    category: "inexpensive",
  },
  {
    title: "Quadrocopter",
    price: 640,
    year: "★★★★",
    color: "Black",
    img: "quadrocopter",
    category: "expensive",
  },
  {
    title: "Camera",
    price: 397,
    year: "★★★",
    color: "Black",
    img: "camera",
    category: "medium",
  },
  {
    title: "Computer",
    price: 1150,
    year: "★★★★",
    color: "Black",
    img: "computer",
    category: "expensive",
  },
  {
    title: "iPhone 11",
    price: 530,
    year: "★★★★★",
    color: "Black",
    img: "iphone",
    category: "medium",
  },
  {
    title: "JBL",
    price: 135,
    year: "★★★",
    color: "Grey",
    img: "jbl",
    category: "inexpensive",
  },
  {
    title: "MacBook Pro",
    price: 3600,
    year: "★★★★★",
    color: "Silver",
    img: "macbook",
    category: "expensive",
  },
  {
    title: "Proector",
    price: 470,
    year: "★★★",
    color: "Black",
    img: "proector",
    category: "medium",
  },
  {
    title: "PlayStation",
    price: 820,
    year: "★★★★★",
    color: "White",
    img: "ps",
    category: "expensive",
  },
  {
    title: "TV",
    price: 490,
    year: "★★★",
    color: "Black",
    img: "tv",
    category: "medium",
  },
  {
    title: "Xbox",
    price: 710,
    year: "★★★★★",
    color: "White",
    img: "xbox",
    category: "expensive",
  },
];

const clothes = [
  {
    title: "Hoodie",
    price: 75,
    year: "XXL",
    color: "Black",
    img: "hoodie",
    category: "medium",
  },
  {
    title: "Jacket",
    price: 130,
    year: "M",
    color: "Black",
    img: "jacket",
    category: "expensive",
  },
  {
    title: "Panama",
    price: 23,
    year: "L",
    color: "Black",
    img: "panama",
    category: "inexpensive",
  },
  {
    title: "Sneakers",
    price: 170,
    year: "42",
    color: "Grey & White",
    img: "sneakers",
    category: "expensive",
  },
  {
    title: "Texudo",
    price: 145,
    year: "XS",
    color: "Black",
    img: "texudo",
    category: "expensive",
  },
  {
    title: "T-shirt",
    price: 35,
    year: "XL",
    color: "Black",
    img: "tshirt",
    category: "inexpensive",
  },
  {
    title: "Shorts",
    price: 50,
    year: "M",
    color: "Black",
    img: "shorts",
    category: "medium",
  },
];

const main = document.querySelector(".main__content");
const error = document.querySelector('.error')
const errorTitle = document.querySelector('.error-title')
const errorBtn = document.querySelector('.error-btn')

errorBtn.addEventListener('click', () => {
  error.classList.remove('active')
})

// ------------------ перезагрузка страницы при клике на лого -------------------
const logo = document.querySelector(".wrapper__sidebar-logo");
logo.addEventListener("click", () => {
  location.reload();
});

// -----------------Создат карт по заданному массиву-----------------------------
const createCards = (arrImg, arrTitle, arrPrice, arrYear, arrColor) => {
  let card = document.createElement("div");
  card.getAttribute("class");
  card.classList.add("main__content-card");

  let imgBox = document.createElement("div");
  imgBox.getAttribute("class");
  imgBox.classList.add("main__content-card-ImgBox");

  let img = document.createElement("img");
  img.getAttribute("class", "src");
  img.classList.add("main__content-card-Img");
  img.src = `images/${arrImg}.webp`;

  let title = document.createElement("h2");
  title.getAttribute("class");
  title.classList.add("main__content-card-Title");
  title.textContent = arrTitle;

  let price = document.createElement("h2");
  price.getAttribute("class");
  price.classList.add("main__content-card-price");
  price.textContent = `${arrPrice}$`;

  let yearKm = document.createElement("div");
  yearKm.getAttribute("class");
  yearKm.classList.add("main__content-card-yearKm");

  let year = document.createElement("p");
  year.getAttribute("class");
  year.classList.add("main__content-card-year");
  year.textContent = arrYear;

  let color = document.createElement("p");
  color.getAttribute("class");
  color.classList.add("main__content-card-color");
  color.textContent = arrColor;

  imgBox.append(img);
  yearKm.append(year);
  yearKm.append(color);

  card.append(imgBox);
  card.append(title);
  card.append(price);
  card.append(yearKm);

  main.append(card);
};

let array = [];
let newArr = [];
// ----------------- Задать массив для создание карт
const cardFromArr = (arg) => {
  if (arg.length < 1) {
    errorTitle.textContent = 'Select a category to get started'
    error.classList.add('active')
  }

  arg.forEach((e) => {
    let dataImg = e.img,
      dataTitle = e.title,
      dataPrice = e.price,
      dataYear = e.year,
      dataColor = e.color;
    createCards(dataImg, dataTitle, dataPrice, dataYear, dataColor);
  });
  newArr = arg.slice();
};
// -------------------Вывод по категории--------------------------------------

let category = document.querySelectorAll(".wrapper__sidebar-category");

category.forEach((icon) => {
  icon.addEventListener("click", () => {
    main.innerHTML = "";
    if (icon.classList.contains("fa-car")) {
      array = cars.slice();
      cardFromArr(array);
    } else if (icon.classList.contains("fa-microchip")) {
      array = techs.slice();
      cardFromArr(array);
    } else if (icon.classList.contains("fa-shirt")) {
      array = clothes.slice();
      cardFromArr(array);
    }
  });
});

// -------------------Поиск по сигменту---------------------------------------------

let byPriceBtns = document.querySelectorAll(".header__nav-link");

byPriceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.innerHTML = "";
    if (btn.classList.contains("easy")) {
      let byPriceArr = array.filter((item) => item.category === "inexpensive");
      cardFromArr(byPriceArr);
    } else if (btn.classList.contains("norm")) {
      let byPriceArr = array.filter((item) => item.category === "medium");
      cardFromArr(byPriceArr);
    } else if (btn.classList.contains("hard")) {
      let byPriceArr = array.filter((item) => item.category === "expensive");
      cardFromArr(byPriceArr);
    }
  });
});

// ------------------Поиск по названию-------------------------------------------

let searchInput = document.querySelector(".header__nav-searchInput"),
  searchBtn = document.querySelector(".header__nav-searchBtn");

searchBtn.addEventListener("click", () => {
  let value = searchInput.value;

  let searchArr = array.filter((e) => {
    return e.title.toLowerCase().includes(value.toLowerCase());
  });

  if (value === "") {
    errorTitle.textContent = `You didn't enter anything`
    error.classList.add('active')
  } else if (searchArr.length == 0) {
    errorTitle.textContent = `No such product`
    error.classList.add('active')
  } else {
    main.innerHTML = "";
    cardFromArr(searchArr);
  }
  searchInput.value = "";
});
// ------------------Интервал цен-------------------------------------------------
let minPriceInput = document.querySelector(".minInput"),
  maxPriceInput = document.querySelector(".maxInput"),
  priceBtn = document.querySelector(".header__nav-priceBtn");

priceBtn.addEventListener("click", () => {
  let minPrice = minPriceInput.value,
    maxPrice = maxPriceInput.value;

  if (maxPrice === "") {
    maxPrice = Infinity;
  } else if (minPrice === "") {
    minPrice = 0;
  }

  let intervalPrice = array.filter((e) => {
    if (e.price >= minPrice && e.price <= maxPrice) {
      return e;
    }
  });

  if (intervalPrice.length < 1) {
    errorTitle.textContent = `No such product`
    error.classList.add('active')
  } else {
    main.innerHTML = "";
    cardFromArr(intervalPrice);
  }

  
  minPriceInput.value = "";
  maxPriceInput.value = "";
});

// -------------------Сортировать А-Я или Я-А-----------------------------------------
let sortingMinMax = document.querySelectorAll(".header__nav-sorting");

sortingMinMax.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("minMax")) {
      let sortMinMax = newArr.sort((a, b) => a.price - b.price);
      main.innerHTML = "";
      cardFromArr(sortMinMax);
    } else if (btn.classList.contains("maxMin")) {
      let sortMinMax = newArr.sort((a, b) => b.price - a.price);
      main.innerHTML = "";
      cardFromArr(sortMinMax);
    }
  });
});
