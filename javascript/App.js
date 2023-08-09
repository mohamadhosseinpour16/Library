// Select Dom Node
let root = document.getElementById("root");
let buttons = document.querySelectorAll(".buttons > button");
let spanValue = document.getElementById("value");
let allBookIcon = document.getElementById("AllBook");
let basketIcon = document.getElementById("basket");
let h1 = document.getElementById("h1");
const Basket = [];

// Function
// function render
const render = (librarys) => {
  root.innerHTML = "";
  for (const library of librarys) {
    let template = `
                <div class="card">
                     <img src="${library.imgSrc}" alt="${library.title}">
                     <h2> نام کتاب: ${library.title}</h2>
                     <h2>نویسنده: ${library.author}</h2>
                     <h3>سال انتشار: ${library.published_date}</h3>
                     <h3>ژانر: ${library.genre}</h3>
                    ${
                      (Basket.find(phrchase => phrchase.id === library.id))
                        ? `<button class="isBasket">موجود در سبد خرید</button>`
                        : `<button onclick="addToCard(${library.id})">اضافه به سبد خرید </button>`
                    }   
                </div>
      `;
    root.innerHTML += template;
  }
  // css
  for (const btn of buttons) {
    btn.style.display = "inline";
  }
 
};

// function filter Genre
function filterGenre(genre) {
  let filterBook = librarys.filter((item) => item.genre === genre);
  render(filterBook);
  // css inline
  allBookIcon.style.display = "inline";
  spanValue.style.position = "absolute";
  spanValue.style.top = "-20%";
  spanValue.style.left = "-14%";
}
// End

// function allBook
function allBook() {
  render(librarys);
  // css inline
  allBookIcon.style.display = "none";
  spanValue.style.position = "absolute";
  spanValue.style.top = "-19%";
  spanValue.style.left = "-26%";
  h1.textContent = 'Library'
}
// End

// function addToCard
const addToCard = (id) => {
  let selectedBooks = librarys.find((library) => library.id === id);
  Basket.push(selectedBooks);
  UpdateSpanValue();
  render(librarys);
  // css inline
  allBookIcon.style.display = "none";
  spanValue.style.position = "absolute";
  spanValue.style.top = "-19%";
  spanValue.style.left = "-26%";
};
// End

// function UpdateSpanValue
const UpdateSpanValue = () => {
  spanValue.textContent = Basket.length;
};
// End

// function renderBasket
const renderBasket = () => {
  root.innerHTML = "";
  for (const library of Basket) {
    let template = `
                <div class="card">
                     <img src="${library.imgSrc}" alt="${library.title}">
                     <h2> نام کتاب: ${library.title}</h2>
                     <h2>نویسنده: ${library.author}</h2>
                     <h3>سال انتشار: ${library.published_date}</h3>
                     <h3>ژانر: ${library.genre}</h3>
                     <button onclick="removeBasket(${library.id})">حذف از سبد خرید</button>
                </div>
      `;
    root.innerHTML += template;
  }
  // css
  for (const btn of buttons) {
    btn.style.display = "none";
  }
  allBookIcon.style.display = "inline";
  spanValue.style.position = "absolute";
  spanValue.style.top = "-20%";
  spanValue.style.left = "-14%";
  h1.textContent = 'Basket'
};

// End

// function removeBasket
const removeBasket = (id) => {
  let index = librarys.find((library) => library.id === id);
  Basket.splice(index, 1);
  UpdateSpanValue();
  renderBasket();
};
// End

// Event
window.addEventListener("load", () => {
  render(librarys);
});

for (const btn of buttons) {
  btn.addEventListener("click", function () {
    filterGenre(this.textContent);
  });
}
allBookIcon.addEventListener("click", allBook);
basketIcon.addEventListener("click", renderBasket);
