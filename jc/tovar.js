
let path = new URLSearchParams(location.search);
let id = path.get("id");
let singlePge = document.getElementById("single-page");
let singleProducts = document.getElementById("single-products")
let item = products.filter((el) => el.id == id);

item.map((el) => {
  singlePge.innerHTML += `
        <div id="single-cards">
                        <div class="grid  flex-col   lg:grid-cols-2  gap-[15px]">
                            <div class="flex flex-col  gap-[15px]">
                                <div id="change-images" class="flex sm:flex gap-[5px]">
                                    <img class="max-w-[90px] sm:max-w-[126px] w-full max-h-[90px] sm:max-h-[126px] h-full object-cover" src="${el.images[0]}" alt="">
                                    <img class="max-w-[90px] sm:max-w-[126px] w-full max-h-[90px] sm:max-h-[126px] h-full object-cover" src="${el.images[1]}" alt="">
                                    <img class="max-w-[90px] sm:max-w-[126px] w-full max-h-[90px] sm:max-h-[126px] h-full object-cover" src="${el.images[2]}" alt="">
                                    <img class="max-w-[90px] sm:max-w-[126px] w-full max-h-[90px] sm:max-h-[126px] h-full object-cover" src="${el.images[3]}" alt="">
                                </div>
                                <img id="main-image" class="max-w-[526px] w-full  object-cover" src=${el.images[0]}
                                    alt="">
                            </div>
                           
                        </div>
                    </div>

       `
})



let cardlar = document.querySelector(".cardlar");

let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let badge = document.getElementById("badge");
localStorage.setItem("carts", JSON.stringify(cart))
badge.textContent = cart.length;


let likeBadge = document.getElementById("like-badge");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
localStorage.setItem("likes", JSON.stringify(like));
likeBadge.textContent = like.length;

let sliceProducts = products.slice(products.length - 4, products.length);


let NewProducts = document.querySelector(".NewProducts");
let NewsliceProduct = products.slice(products.length - 4, products.length);


let newpromise = document.querySelector(".RecentlyPurchasedProducts");
let NewsliceProducts = products.slice(products.length - 4, products.length);









let new_vse_novinki = document.getElementById("vseNovinki");
let new_vse_novinkis = products.filter((el) => el.discount > 0);
let vse_novinki = products.splice(products.length - 4, products.length - 4);

let new_vse_producti = document.getElementById("vseProducti");
let new_vse_productis = products.filter((el) => el.discount > 0);
let vse_producti = products.splice(products.length - 4, products.length);


function showProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    content.innerHTML += `
   <div class="ProductAksiya  relative max-[650px]:max-w-[400px] max-[400px]:w-[100%]  h-[475px]  mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500  shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
   ${like.find((item) => item.id === el.id) ? `
      <img 
            
          class= " bg-[red]  w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "../img/Button.png" alt = " " />` : `
      <img 
            
          class= "w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "../img/Button.png" alt = " " />`
      }

   
                    
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

                        
                        ${cart.find((items) => items.id === el.id)

        ? `
                            <div class= "w-full grid grid-cols-3 w-full px-3 pt-2 absolute left-0 bottom-2 ">
                        <button
                          onClick = "decrease (${el.id})"
                        class= "bg-[#FF6633] p-[5px]  rounded-[5px] flex items-center justify-center text-white  text-[20px] font-bold  ">-</button>
                        <span class= " flex px-[15px] items-center justify-center text-[black]  text-[20px] font-bold  ">${cart.find((items) => items.id === el.id).numbers}</span>
                        <button
                          onClick = "increase (${el.id})"
                        class= "bg-[#FF6633] p-[5px] flex items-center rounded-[5px] justify-center text-white  text-[20px] font-bold  ">+</button>
                        </div` : `
                         <div class="w-full px-3 pt-2 absolute left-0 bottom-2 ">
                      <button 
                     onClick  = "addToCart (${el.id})"
                    class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">
                    В корзину</button> 
                </div>      `
      }
                              
                </div>`
  });

}


showProducts(new_vse_novinki, vse_novinki);
showProducts(new_vse_producti, vse_producti);


function addToCart(id) {
  let item = products.find((el) => el.id === id);
  item.numbers = 0;
  cart.push(item);
  badge.textContent = cart.length;
  showProducts(new_vse_novinki, vse_novinki);
  showProducts(new_vse_producti, vse_producti)
  localStorage.setItem("carts", JSON.stringify(cart))

}



function increase(id) {
  cart = cart.map((item) => {
    if (item.id === id) {
      item.numbers += 1
    }
    return item;
  });
  showProducts(new_vse_novinki, vse_novinki);
  showProducts(new_vse_producti, vse_producti);
  localStorage.setItem("carts", JSON.stringify(cart))

}




function decrease(id) {
  let item = cart.find((el) => el.id === id);
  cart = cart.map((item) => {
    if (item.id === id) {
      item.numbers -= 1
    }
    return item;
  });


  if (item.numbers === 0) {
    cart = cart.filter((el) => el.id !== id);

  }

  showProducts(new_vse_novinki, vse_novinki);
  showProducts(new_vse_producti, vse_producti);
  localStorage.setItem("carts", JSON.stringify(cart))

}


// localStorage.setItem("likes", JSON.stringify(like));

function addToLike(id) {
  let likeItem = products.find((el) => el.id === id);
  like.push(likeItem);
  likeBadge.textContent = like.length;
  showProducts(new_vse_novinki, vse_novinki);
  showProducts(new_vse_producti, vse_producti);
  localStorage.setItem("carts", JSON.stringify(cart))

}


function removeToLike(id) {
  like = like.filter((el) => el.id !== id);
  likeBadge.textContent = like.length;
  showProducts(new_vse_novinki, vse_novinki);
  showProducts(new_vse_producti, vse_producti);
  localStorage.setItem("carts", JSON.stringify(cart))

}


let mainImage = document.getElementById("main-image");
let changeimages = document.getElementById("change-images");
changeimages.addEventListener("click", (e) => {
  mainImage.src = e.target.src
})
