let path = new URLSearchParams(location.search);
let id = path.get("id")
let item = products.filter((el) => el.id == id)
let singleMaps = document.querySelector(".single-maps")
let checkSingle = document.querySelector(".check-single")
let miniDesc = document.querySelector(".mini-desc")
let singleDesc = document.querySelector(".single-desc")
let singleRating = document.querySelector(".single-rating")
let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let badge_2 = document.getElementById("badge-24")
let likeBadge = document.getElementById("like-badge");




let new_vse_novinki = document.getElementById("vseNovinki");
let new_vse_novinkis = products.filter((el) => el.discount > 0);
let vse_novinki = products.splice(products.length - 4, products.length - 4);



singleMaps.innerHTML = ""
checkSingle.innerHTML = ""
miniDesc.innerHTML = ""
singleDesc.innerHTML = ""
singleRating.innerHTML = ""
item.map((el) => {
  singleMaps.innerHTML += `
    <div id="changes-img" class="hidden sm:flex flex flex-col gap-[15px]">
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[0]}
                                    alt="item">
                                    
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[1]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[2]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group">
                                <img class="hover:scale-110 object-cover duration-400 w-[90px] h-[90px]" src=${el.images[3]}
                                    alt="item">
                            </div>
                        </div>
                        <div class="relative w-full  sm:w-[445px] h-[200px] sm:h-[400px]">
                            <img id="main-img" class="w-full h-full object-cover" src=${el.images[0]}
                                alt="item">
                        </div>
                        <div id="changes-img2"
                            class="flex sm:hidden items-center justify-between gap-[12px] overflow-x-scroll whitespace-nowrap">
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[0]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[1]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[2]}
                                    alt="item">
                            </div>
                            <div class="cursor-pointer group max-w-[90px] h-[90px]  w-full">
                                <img class="hover:scale-110 duration-400 w-full" src=${el.images[3]}
                                    alt="item">
                            </div>

                        </div>
  `
  checkSingle.innerHTML += `
       <div class=" flex items-end justify-between">
                            <div class="flex flex-col">
                                <p class="text-[18px] sm:text-[24px]">${el.price}₽</p>
                                <p class="text-[10px] text-[12px] text-[#BFBFBF]">Обычная цена</p>
                            </div>
                            <div class="flex flex-col gap-[0px]">
                                <p class="text-[26px] sm:text-[36px] font-bold">${(el.price - (el.price * 43.4 / 100)).toFixed(2)}₽</p>
                                <div class="flex items-center relative gap-[7px]">
                                    <p class="text-[10px] sm:text-[12px] text-[#BFBFBF]">С картой Северяночки</p>
                                    <svg class="w-[17px] sm:w-[20px] h-[17px] sm:h-[20px]" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                                            fill="#414141" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V12C11.5 11.7239 11.7239 11.5 12 11.5Z"
                                            fill="#414141" />
                                        <path
                                            d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                                            fill="#414141" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center pt-[16px]">
                           ${carts.find((cart) => cart.id === el.id) ?
      ` <div class="w-full  max-w-[207px] sm:max-w-[277] max-w-[207px] sm:max-w-[277px]  grid grid-cols-3 mb-[8px] mt-[2px] bg-[#d3d3d3]/30 cursor-pointer h-[35px] sm:h-[40px]">
                   <button
                   onClick="decraese(${el.id})"
                   class="w-full  cursor-pointer rounded-tl-[4px] rounded-bl-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" src="../assets/header/minus.svg" alt="minus" /></button>
                   <span class="w-full text-[black] text-[14px] sm:text-[18px] flex items-center justify-center">
                   ${carts.find((cart) => cart.id === el.id).number}
                   </span>
                   <button onClick={increase(${el.id})}       
                   class=" w-full  cursor-pointer rounded-br-[4px] rounded-tr-[4px] bg-[#FF6633] flex items-center justify-center"><img class="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px]" src="../assets/header/plus.svg" alt="minus" /></button>
                   </div>` :
      `<button onClick="addToCart(${el.id})"
                    class="flex items-center justify-center gap-[14px] border border-[#70C05B] max-w-[207px] sm:max-w-[277] max-w-[207px] sm:max-w-[277px] w-full mb-[8px] mt-[2px]  rounded-[4px] text-[#70C05B] px-[8px] hover:text-[white] duration-[0.5s] hover:bg-[#FF6633] hover:border-none cursor-pointer h-[35px] sm:h-[40px] border-[1px] border-[#70C05B]">
                    <svg class="group-hover:fill=[white] width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 21C5.5 19.6193 6.61929 18.5 8 18.5C9.38071 18.5 10.5 19.6193 10.5 21C10.5 22.3807 9.38071 23.5 8 23.5C6.61929 23.5 5.5 22.3807 5.5 21ZM8 19.5C7.17157 19.5 6.5 20.1716 6.5 21C6.5 21.8284 7.17157 22.5 8 22.5C8.82843 22.5 9.5 21.8284 9.5 21C9.5 20.1716 8.82843 19.5 8 19.5Z" fill="#414141"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 21C17.5 19.6193 18.6193 18.5 20 18.5C21.3807 18.5 22.5 19.6193 22.5 21C22.5 22.3807 21.3807 23.5 20 23.5C18.6193 23.5 17.5 22.3807 17.5 21ZM20 19.5C19.1716 19.5 18.5 20.1716 18.5 21C18.5 21.8284 19.1716 22.5 20 22.5C20.8284 22.5 21.5 21.8284 21.5 21C21.5 20.1716 20.8284 19.5 20 19.5Z" fill="#414141"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5H4.58051C5.33783 5.79147 6.10333 10.0643 6.74931 14.3709C6.93288 15.5947 7.98416 16.5 9.22165 16.5H19.3597C20.5514 16.5 21.5774 15.6588 21.8111 14.4903L23.2503 7.29417C23.436 6.36599 22.726 5.5 21.7795 5.5H7.16046C6.8575 5.5 6.57797 5.58901 6.34436 5.74093L5.49239 0.913107C5.45023 0.674179 5.24262 0.5 5 0.5H1ZM6.666 7.07417C6.62065 6.77187 6.85478 6.5 7.16046 6.5H21.7795C22.095 6.5 22.3316 6.78866 22.2698 7.09806L20.8305 14.2942C20.6903 14.9953 20.0747 15.5 19.3597 15.5H9.22165C8.47916 15.5 7.84839 14.9568 7.73825 14.2225L6.666 7.07417Z" fill="#414141"/>
                    </svg>
                    В корзину
                    </button>`
    }      
                        </div>
                        <div class="pt-[28px] flex flex-col gap-[2px] sm:gap-[10px] pb-[16px]">
                            <div
                                class="flex items-center gap-[155px] sm:gap-[162px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Бренд</p>
                                <p class="text-[12px] font-bold">${el.brand}</p>
                            </div>
                            <div
                                class="flex items-center gap-[63px] sm:gap-[70px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Страна производителя</p>
                                <p class="text-[12px] font-bold">${el.origin}</p>
                            </div>
                            <div
                                class="flex items-center gap-[137px] sm:gap-[144px] w-full cursor-pointer duration-200 group hover:bg-[#F3F2F1] py-[4px] px-[5px] rounded-[4px]">
                                <p class="text-[12px]">Упаковка</p>
                                <p class="text-[12px] font-bold">180 г</p>
                            </div>
                        </div>               
    `
  miniDesc.innerHTML += `
     <a class="whitespace-nowrap" href="./single.html">
                            <p class="text-[#8F8F8F] text-[12px]">${el.description}</p>
                        </a>
    `
  singleDesc.innerHTML += `
    <h1 class="text-[20px] font-bold py-[18px] sm:py-[24px] leading-150%">${el.description}</h1>
    `
  singleRating.innerHTML += `
                    <div>
                        <p class="text-[14px]">арт. ${el.art}</p>
                    </div>
           <div class="flex items-center gap-[4px]">
                         ${el.rating === 5 ? `
                           <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                   ` : el.rating === 4.5 ? `
                          <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                   `: el.rating === 4 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                            <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star"
                           </div>
                           
                   `: el.rating === 3.5 ? `
                              <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                     <img src="../assets/stars/star.png" alt="Rating star">
              <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 3 ? `
                             <div class="flex gap-[4px] px-[8px] pt-[2px] sm:pt-[4px]">
                                            <img src="../assets/stars/star.png" alt="Rating star">
             <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 2.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                            <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 2 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[4px]">
                           <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 1.5 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                         <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 1 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                               <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 0.5 ? `
                           <div class="flex gap-[4px] px-[8px] pt-[4px]">
                               <img src="../assets/stars/star(2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: el.rating === 0 ? `
                            <div class="flex gap-[4px] px-[8px] pt-[4px]">
                          <img src="../assets/stars/star(1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                           </div>
                   `: ""
            }
                    <p class="text-[14px]">3 отзыва</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
                                fill="#414141" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
                                fill="#414141" />
                        </svg>
                        <p class="text-[12px]">Поделиться</p>
                 <div class="flex items-center gap-[8px] cursor-pointer">
                     ${like.find((item) => item.id === el.id) ? `<svg " 
                    class="bg-[#FF6633] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff">
                    <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q84 0 153 59t69 160q0 14-2 29.5t-6 31.5h-85q5-18 8-34t3-30q0-75-50-105.5T620-760q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm160-280v-80h320v80H600Z"/>
                    </svg>` : `<svg
                    "
                    class=" bg-[#F3F2F1] p-[3px] rounded-[50%] sm:rounded-[4px]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f#1f1f1f#1f1f1f"><path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg>`
    }
                        <p class="text-[12px]">В избраное</p>
                    </div>
    `
})
    

allSingle()
  

let changesImg = document.getElementById("changes-img")
let mainImg = document.getElementById("main-img")
let changesImg2 = document.getElementById("changes-img2")

changesImg.addEventListener("click", (e) => {
  mainImg.src = e.target.src
})
changesImg2.addEventListener("click", (e) => {
  mainImg.src = e.target.src
})

function addToCart(id) {
  let item = products.find((el) => el.id === id)
  item.number = 1;
  carts.push(item)
  badge_2.textContent = carts.length
  localStorage.setItem("carts", JSON.stringify(carts));
  allSingle()

}

function increase(id) {
  carts = carts.map((el) => {
    if (el.id === id) {
      el.number += 1
    }
    return el
  })
  badge_2.textContent = carts.length
  localStorage.setItem("carts", JSON.stringify(carts));
  allSingle()
}
function decraese(id) {
  let item = carts.find((el) => el.id === id)
  carts = carts.map((el) => {
    if (el.id === id) {
      el.number -= 1
    }
    return el
  })
  if (item.number < 1) {
    carts = carts.filter((el) => el.id !== id)
  }
  badge_2.textContent = carts.length
  localStorage.setItem("carts", JSON.stringify(carts));
  allSingle()
}













   function showProducts(content, data) {
     content.innerHTML = "";
    data.map((el) => {
    content.innerHTML += `
   <div class="ProductAksiya  relative max-[650px]:max-w-[400px] max-[400px]:w-[100%]  h-[475px]  mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500  shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
  
                      <img class=" w-full object-cover  h-[240px] mx-auto" src="${el.images[0]}" alt=""/>
                     <p class=" relative bottom-10 ml-[15px]  max-w-[70px] h-[36px] rounded-[10px] bg-[#FF6633] text-white flex items-center justify-center transition-transform duration-500 hover:scale-110">-${el.discount}%</p>
                    <div class="flex items-center justify-between px-3 mt-[-20px]" href="">
                       <h1 class="text-[20px] font-bold">${el.price}₽</h1>
                       <h1 class="text-[20px] font-bold">${el.discount}₽</h1>
                    </div>
                    <div>
                        <p class=" font-bold  text-[black] px-3">${el.name}</p>
                        <p class = "px-3 mt-[5px] ml-[5px]">${el.description}</p>
                        </div>
                                          <div class="flex items-center mt-3 my-1 space-x-2 ml-3">
        ${el.rating === 5 ? `
        
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                    
            `
                                            : el.rating === 4.5 ? `
                  <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
            `
                                              : el.rating === 4 ? `
              <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                : el.rating === 3.5 ? `
                         <img src="../assets/stars/star.png" alt="Rating star">
              <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">

<img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                  : el.rating === 3 ? `
                             <img src="../assets/stars/star.png" alt="Rating star">
             <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                    : el.rating === 2.5 ? `
               <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                      : el.rating === 2 ? `
              <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                        : el.rating === 1.5 ? `
              <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                          : el.rating === 1 ? `
                 <img src="../assets/stars/star.png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                            : el.rating === 0.5 ? `
              <img src="../assets/stars/star(2).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                                              : `
               <img src="../assets/stars/star(1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
                        <img src="../assets/stars/star (1).png" alt="Rating star">
            `
                                          }
        </div class="mt-5">

                        
                        ${carts.find((items) => items.id === el.id)

                                        ? `
                                        <div class="w-full grid grid-cols-3 w-full px-3 pt-2 absolute left-0 bottom-2 ">
                                          <button
                                            onClick="decrease (${el.id})"
                                            class="bg-[#FF6633] p-[5px]  rounded-[5px] flex items-center justify-center text-white  text-[20px] font-bold  ">-</button>
                                          <span class=" flex px-[15px] items-center justify-center text-[black]  text-[20px] font-bold  ">${carts.find((items) => items.id === el.id).numbers}</span>
                                          <button
                                            onClick="increase (${el.id})"
                                            class="bg-[#FF6633] p-[5px] flex items-center rounded-[5px] justify-center text-white  text-[20px] font-bold  ">+</button>
                                        </div` : `
                                        <div class="w-full px-3 pt-2 absolute left-0 bottom-2 ">
                                          <button
                                            onClick="addToCart (${el.id})"
                                            class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">
                                            В корзину</button>
                                        </div>      `
            }

                                      </div>`
    });

}


showProducts(new_vse_novinki, vse_novinki);



function addToCart(id) {
    let item = products.find((el) => el.id === id);
    item.numbers = 1;
    carts.push(item);
    badge.textContent = carts.length;
    showProducts(new_vse_novinki, vse_novinki);
   localStorage.setItem("carts", JSON.stringify(cart))

}



function increase(id) {
    carts = carts.map((item) => {
        if (item.id === id) {
            item.numbers += 1
        }
        return item;
    });
    showProducts(new_vse_novinki, vse_novinki);
    localStorage.setItem("carts", JSON.stringify(cart))

}




function decrease(id) {
    let item = carts.find((el) => el.id === id);
    carts = carts.map((item) => {
        if (item.id === id) {
            item.numbers -= 1
        }
        return item;
    });


    if (item.numbers === 0) {
        carts = carts.filter((el) => el.id !== id);

    }

    showProducts(new_vse_novinki, vse_novinki);
    localStorage.setItem("carts", JSON.stringify(cart))

}




