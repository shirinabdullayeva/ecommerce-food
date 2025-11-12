// let cart = JSON.parse(localStorage.getItem("carts") || "[]");
// let badge = document.getElementById("badge");
// localStorage.setItem("carts", JSON.stringify(cart));
// // badge.textContent = cart.length;
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let filteredProductsData = products;

// let likeBadge = document.getElementById("like-badge");
// let like = JSON.parse(localStorage.getItem("likes") || "[]");
// localStorage.setItem("likes", JSON.stringify(like));
// likeBadge.textContent = like.length;

// let new_vse_producti = document.getElementById("vseProducti");
// let new_vse_productis = products.filter((el) => el.discount > 0);
// let vse_producti = products.splice(products.length - 72  , products.length  );


// let new_vse_novinki = document.getElementById("vseNovinki");
// let new_vse_novinkis = products.filter((el) => el.discount > 0);
// let vse_novinki = products.splice(products.length  - 4 , products.length  );




// function showproducts(content, data) {
//     content.innerHTML = "";
//     data.map((el) => {
//         content.innerHTML += `
//    <div class="ProductAksiya  relative max-[650px]:max-w-[400px] max-[400px]:w-[100%]  h-[475px]  mt-[20px]  mb-3 rounded-[4px] bg-[white]  transition-transform duration-500  shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75]">
//    ${like.find((item) => item.id === el.id) ? `
//       <img 
         
//           class= " bg-[red]  w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "" alt = " " />` : `
//       <img 
           
//           class= "w-[40px] h-[40px] hover:cursor-pointer p-[3px] bg-[] rounded-[5px] absolute top-[15px] right-[15px]" src = "../img/Button.png" alt = " " />`
//             }
   

//                       <a href="../pages/single.html?id=${el.id}">
// <img
//     src="${el.images[2]}"
//     class="bg-[red] w-full h-[200px] object-cover"
//     alt=""
// />
//           </a >
//     <div class="flex justify-between py-[5px]">
//         <h2 class="text-[20px] font-bold">
//             $${el.price - (el.price * el.discount) / 100}
//         </h2>
//         <h2 class="text-[20px] font-bold text-[gray] line-through">
//             $${el.price}
//         </h2>
//         ${el.rating === 5 ? `
        
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                       <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
                    
//             `
//                 : el.rating === 4.5 ? `
//                   <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (2).png" alt="Rating star">
//             `
//                     : el.rating === 4 ? `
//               <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                         : el.rating === 3.5 ? `
//                          <img src="../assets/stars/star.png" alt="Rating star">
//               <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (2).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                             : el.rating === 3 ? `
//                              <img src="../assets/stars/star.png" alt="Rating star">
//              <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                 : el.rating === 2.5 ? `
//                <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (2).png" alt="Rating star">
//                         <img src="../assets/stars/star (2).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                     : el.rating === 2 ? `
//               <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                         : el.rating === 1.5 ? `
//               <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (2).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                             : el.rating === 1 ? `
//                  <img src="../assets/stars/star.png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                                 : el.rating === 0.5 ? `
//               <img src="../assets/stars/star(2).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//                                                     : `
//                <img src="../assets/stars/star(1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//                         <img src="../assets/stars/star (1).png" alt="Rating star">
//             `
//             }
//         </div class="mt-5">

                        
//                         ${cart.find((items) => items.id === el.id)

//                 ? `
//                             <div class= "w-full grid grid-cols-3 w-full px-3 pt-2 absolute left-0 bottom-2 ">
//                         <button
//                           onClick = "decrease (${el.id})"
//                         class= "bg-[#FF6633] p-[5px]  rounded-[5px] flex items-center justify-center text-white  text-[20px] font-bold  ">-</button>
//                         <span class= " flex px-[15px] items-center justify-center text-[black]  text-[20px] font-bold  ">${cart.find((item) => item.id === el.id).numbers}</span>
//                         <button
//                           onClick = "increase (${el.id})"
//                         class= "bg-[#FF6633] p-[5px] flex items-center rounded-[5px] justify-center text-white  text-[20px] font-bold  ">+</button>
//                         </div` : `
//                          <div class="w-full px-3 pt-2 absolute left-0 bottom-2 ">
//                       <button 
//                      onClick  = "addToCart (${el.id})"
//                     class=" w-full text-[20px] rounded-[5px] border border-[#70C05B] hover:bg-[#70C05B] hover:text-[white] font-[rubik] font-[400] text-[#70C05B] cursor-pointer hover:border-[#FF6633] hover:bg-[#FF6633] ">
//                     В корзину</button> 
//                 </div>      `
//             }
                              
//                 </div>`
//     });

// }

// showproducts(new_vse_novinki, vse_novinki);
// showproducts(new_vse_producti, vse_producti );


// // localStorage.setItem("carts", JSON.stringify(cart));
// function addToCart(id) {
//     let item = products.find((el) => el.id === id);
//     item.numbers = 1;
//     cart.push(item);
//     badge.textContent = cart.length;
//     showproducts(new_vse_novinki, vse_novinki);
//     showproducts(new_vse_producti, vse_producti);
//     localStorage.setItem("carts", JSON.stringify(cart))

// }



// // localStorage.setItem("carts", JSON.stringify(cart));
// function increase(id) {
//     cart = cart.map((item) => {
//         if (item.id === id) {
//             item.numbers += 1
//         }
//         return item;
//     });
//     showproducts(new_vse_novinki, vse_novinki);
//     showproducts(new_vse_producti, vse_producti);
//     localStorage.setItem("carts", JSON.stringify(cart))

// }


// // localStorage.setItem("carts", JSON.stringify(cart));

// function decrease(id) {
//     let item = cart.find((el) => el.id === id);
//     cart = cart.map((item) => {
//         if (item.id === id) {
//             item.numbers -= 1
//         }
//         return item;
//     });


//     if (item.numbers === 0) {
//         cart = cart.filter((el) => el.id !== id);

//     }

//     showproducts(new_vse_novinki, vse_novinki);
//     showproducts(new_vse_producti, vse_producti);
//     localStorage.setItem("carts", JSON.stringify(cart))

// }


// localStorage.setItem("likes", JSON.stringify(like));

// function addToLike(id) {
//     let likeItem = products.find((el) => el.id === id);
//     like.push(likeItem);
//     likeBadge.textContent = like.length;
//     showproducts(new_vse_novinki, vse_novinki);
//     showproducts(new_vse_producti, vse_producti);
//     localStorage.setItem("carts", JSON.stringify(cart))

// }


// filterProducts(filterCards, products);

// input1.addEventListener("input", function (e) {
//     let price = e.target.value;
//     filteredProductsData = products.filter(
//         (el) => el.price - (el.price * el.discount) / 100 > price
//     );
//     filterProducts(filterCards, filteredProductsData);
// });

// input2.addEventListener("input", function (e) {
//     let price = e.target.value;
//     console.log(filteredProductsData);
//     let filteredProductsData2;
//     if (price === "") {
//         filteredProductsData2 = products;
//     } else {
//         filteredProductsData2 = filteredProductsData.filter(
//             (el) => el.price < price
//         );
//     }

//     filterProducts(filterCards, filteredProductsData2);
// });





let filterCards = document.querySelector(".cards");
let like = JSON.parse(localStorage.getItem("likes") || "[]");
let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let filteredProductsData = products;

function filterProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML += `
 <div  class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div class="relative">
                    <img class="w-full h-[140px] rounded-t-2xl sm:h-[202px]" src=${el.images[2]} alt="img">

                     ${el.discount ? (
            `<span class="absolute left-4 bottom-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md font-semibold"> -${el.discount}%</span>`
          ) : (
            ""
          )
          }
                    <img src="../img/Button.png" alt="heart" class="absolute top-3 right-3 w-6 h-6 cursor-pointer">
                </div>
                   <div class="flex items-center justify-between pt-[8px]">
                            <div class="flex items-center justify-between w-full">
                                <p class="font-bold text-[14px] px-[8px] sm:text-[18px]">${el.price}₽</p>
                                 <p class="font-bold text-[14px] px-[8px] sm:text-[18px]">${el.price - el.price * el.discount / 100}₽</p>
                            </div>
                        </div>
                      <div>
                                <p class="text-[12px] px-[8px] sm:text-[14px]">${el.name}</p>
                            </div>
                    <div class="flex flex-col gap-[5px] sm:gap-[8px]  pt-[4px] sm:pt-[8px] ">
                        <p class="text-[12px] sm:text-[16px] px-[8px] line-clamp-2">${el.description}</p>
                        </div>
                         <div class="flex items-center my-1 space-x-2 px-2">
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
                       
                 </div>
                 <div class="px-2 py-3"  >
                   <button
                    onClick = "addToCart(${el.id})"  
                    class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white"> В корзину
                   </button>
                 </div>

                   
     </div>
     
    `;
    });
}
filterProducts(filterCards, products);

input1.addEventListener("input", function (e) {
    let price = e.target.value;
    filteredProductsData = products.filter(
        (el) => el.price - (el.price * el.discount) / 100 > price
    );
    filterProducts(filterCards, filteredProductsData);
});

input2.addEventListener("input", function (e) {
    let price = e.target.value;
    console.log(filteredProductsData);
    let filteredProductsData2;
    if (price === "") {
        filteredProductsData2 = products;
    } else {
        filteredProductsData2 = filteredProductsData.filter(
            (el) => el.price < price
        );
    }

    filterProducts(filterCards, filteredProductsData2);
});
