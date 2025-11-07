let innermodal = document.getElementById("inner-modal");
let form  = document.getElementById("form");
let formmodal = document.getElementById("form-modal");
let profilObj = JSON.parse(localStorage.getItem("profil")  || "{}")
let profiltitle = document.getElementById("profil-title");
let profilimg = document.getElementById("profil-img");
let cardlar = document.querySelector(".cardlar");
let profil = document.getElementById("profile");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let badge = document.getElementById("badge");
localStorage.setItem("carts", JSON.stringify(cart));
badge.textContent = cart.length;



profil.addEventListener("click", function(){
  formmodal.classList.remove("hidden")
})
formmodal.addEventListener("click", function(){
  formmodal.classList.add("hidden")
})
innermodal.addEventListener("click", function(e){
  e.stopImmediatePropagation();
})

form.addEventListener("submit", function(e){
e.preventDefault();
console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
  profilimg.src = e.target[0].value;
  profiltitle.textContent = e.target[1].value;
  profilObj.urlPhoto = e.target[0].value;
  profilObj.name = e.target[1].value;
  profilObj.phone = e.target[2].value;
  localStorage.setItem("profil", JSON.stringify(profilObj))
  formmodal.classList.add("hidden");
})

let likeBadge = document.getElementById("like-badge");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
localStorage.setItem("likes", JSON.stringify(like));
likeBadge.textContent = like.length;

let sliceProducts = products.slice(products.length - 4, products.length);


let NewProducts = document.querySelector(".NewProducts");
let NewsliceProduct = products.slice(products.length - 4, products.length);


let newpromise = document.querySelector(".RecentlyPurchasedProducts");
let NewsliceProducts = products.slice(products.length - 4, products.length);


let aksiyaProduct = products.filter((el) => el.discount > 1);
let proCard = aksiyaProduct.slice(aksiyaProduct.length - 4, aksiyaProduct.length);


function showProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    content.innerHTML += `
   <div class="ProductAksiya  relative max-[650px]:max-w-[400px] max-[400px]:w-[100%]  h-[475px]  mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500  shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
   ${like.find((item) => item.id === el.id) ? `
      <img 
            onClick = "removeToLike (${el.id})"
          class= " bg-[red]  w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "./img/Button.png" alt = " " />` : `
      <img 
            onClick = "addToLike (${el.id})"
          class= "w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "./img/Button.png" alt = " " />`
      }
   

                      <a href="../pages/tovar.html?id=${el.id}">
                      <img class=" w-full object-cover  h-[240px] mx-auto" src="${el.images[0]}" alt=""/>
                      </a>
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
        ${
      el.rating === 5 ? `
        
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
                        <span class= " flex px-[15px] items-center justify-center text-[black]  text-[20px] font-bold  ">${cart.find((item) => item.id === el.id).numbers}</span>
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

showProducts(cardlar, proCard);
showProducts(NewProducts, NewsliceProduct);
showProducts(newpromise, NewsliceProducts);



// localStorage.setItem("carts", JSON.stringify(cart));
function addToCart(id) {
  let item = products.find((el) => el.id === id);
  item.numbers = 1;
  cart.push(item);
  badge.textContent = cart.length;
  showProducts(cardlar, proCard);
  showProducts(NewProducts, NewsliceProduct);
  showProducts(newpromise, NewsliceProducts);
  localStorage.setItem("carts", JSON.stringify(cart))

}



// localStorage.setItem("carts", JSON.stringify(cart));
function increase(id) {
  cart = cart.map((item) => {
    if (item.id === id) {
      item.numbers += 1
    }
    return item;
  });
  showProducts(cardlar, proCard);
  showProducts(NewProducts, NewsliceProduct);
  showProducts(newpromise, NewsliceProducts);
  localStorage.setItem("carts", JSON.stringify(cart))

}


// localStorage.setItem("carts", JSON.stringify(cart));

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

  showProducts(cardlar, proCard);
  showProducts(NewProducts, NewsliceProduct)
  showProducts(newpromise, NewsliceProducts)
  localStorage.setItem("carts", JSON.stringify(cart))

}


localStorage.setItem("likes", JSON.stringify(like));

function addToLike(id) {
  let likeItem = products.find((el) => el.id === id);
  like.push(likeItem);
  likeBadge.textContent = like.length;
  showProducts(cardlar, proCard);
  showProducts(NewProducts, NewsliceProduct);
  showProducts(newpromise, NewsliceProducts);
  localStorage.setItem("carts", JSON.stringify(cart))

}

// localStorage.setItem("likes", JSON.stringify(like));

function removeToLike(id) {
  like = like.filter((el) => el.id !== id);
  likeBadge.textContent = like.length;
  showProducts(cardlar, proCard);
  showProducts(NewProducts, NewsliceProduct);
  showProducts(newpromise, NewsliceProducts);
  localStorage.setItem("carts", JSON.stringify(cart))

}





