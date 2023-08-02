// Select Dom Node
let root = document.getElementById("root");
let buttons = document.querySelectorAll(".buttons > button");
let AllBook = document.getElementById("AllBook");


// Function
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
                    <button onclick="addToCard(${library.id})">اضافه به سبد خرید </button>
                </div>
      `;
    root.innerHTML += template;
  }
};

// Filter Genre
function FilterGenre(genre){
  let filterBook = librarys.filter((item) => item.genre === genre);
  render(filterBook);
  AllBook.style.display = "inline";
};

function allBook(){
  render(librarys)
}



// Event
window.addEventListener("load", () => {
  render(librarys);
});

for (const btn of buttons) {
  btn.addEventListener("click" , function() {
      FilterGenre(this.textContent)
  });
};
AllBook.addEventListener("click", allBook)