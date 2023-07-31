let root = document.getElementById("root");

// function
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

// event
window.addEventListener("load", () => {
  render(librarys);
});
