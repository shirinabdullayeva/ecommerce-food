let toggle = document.getElementById("toggle");
let toggleCategories = document.getElementById("toggle-categories");

categoriesData.map((el) => {
    toggleCategories.innerHTML += `
        <a href="../pages/kategori.html?categoryName=${el.name}" class="flex items-center gap-[5px]">
          <img class="w-[30px] h-[30px] rounded-[50%]" src=${el.imageUrl} alt="">
          <h1 class="text-[18px] font-Rubik text-black">${el.name}</h1>
        </a>
    `;
});

toggle.addEventListener("click", function () {
    toggleCategories.classList.toggle("translate-y-[80px]");
});
