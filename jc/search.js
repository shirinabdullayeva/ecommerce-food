let newsearch = document.getElementById("input")
let searchCards = document.getElementById("search-cards")
newsearch.addEventListener("input" , function(el){
   let searchValue = el.target.value;
   console.log(searchValue);
   
    let newsearch = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
if (searchValue) {
    searchCards.classList.remove("hidden")
} else {
    searchCards.classList.add("hidden")
    searchCards.innerHTML = ""
}
searchCards.innerHTML = ""
newsearch.length > 0 ?
    newsearch.map((el) => {
        searchCards.innerHTML += `
        <div class="mx-6 max-w-[700px] mx-auto relative w-full flex items-center px-[15px] gap-[15px] border-[1px] border-[#BFBFBF] py-[5px] rounded-[8px] ">
            <img class="max-w-[55px] w-full h-[35px] rounded-[5px]" src=${el.images[0]} alt="img">
                <div class="flex flex-col justify-between">
                    <h1 class="">${el.name}</h1>
                    <p class="text-[14px] text-[#BFBFBF] line-clamp-1">${el.description}</p>
                </div>
        </div>
`
    }) : searchCards.innerHTML = `<div class="text-center">Bunday mahsulot mavjud emas </div>`
})




