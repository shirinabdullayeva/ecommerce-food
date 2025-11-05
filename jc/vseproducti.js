

//1 section vseProducti

let new_vse_producti = document.getElementById("vseProducti");
let new_vse_productis = products.filter((el) => el.discount > 0);
let vse_producti = products.splice(products.length - 72  , products.length  );


// vse_producti.map((el) => {
//     new_vse_producti.innerHTML += `
//               <div
//                     class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
//                     <div class="relative">
//                         <img src=${el.images[0]} alt="product" class="w-full h-44 object-contain mx-auto mt-[25px]">
//                         <img src="../img/Button.png" alt="heart" class="absolute top-3 right-3 w-6 h-6 cursor-pointer">
//                     </div>

//                     <div class="p-4 flex flex-col gap-2">
//                         <div class="flex items-baseline gap-2">
//                             <span class="text-lg font-semibold text-gray-900 pb-[20px]">599,99 ₽</span>

//                         </div>
//                         <h3 class="text-base font-semibold text-gray-900 leading-tight">Комбайн КЗС-1218 <br> «ДЕСНА-ПОЛЕСЬЕ
//                             GS12»</h3>
//                         <div class="flex gap-1 mb-3">
//                             <img src="../img/star.png" alt="star" class="w-4 h-4">
//                             <img src="../img/star.png" alt="star" class="w-4 h-4">
//                             <img src="../img/star (1).png" alt="star" class="w-4 h-4">
//                             <img src="../img/star (1).png" alt="star" class="w-4 h-4 opacity-40">
//                             <img src="../img/star (1).png" alt="star" class="w-4 h-4 opacity-40">
//                         </div>

//                         <button
//                             class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
//                             В корзину
//                         </button>
//                     </div>

//                 </div>
//     `;
// })

//2 vseNovinki

let new_vse_novinki = document.getElementById("vseNovinki");
let new_vse_novinkis = products.filter((el) => el.discount > 0);
let vse_novinki = products.splice(products.length  - 4 , products.length  );


// vse_novinki.map((el) => {
//     new_vse_novinki.innerHTML += `
//                <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
//                     <div class="relative">
//                         <img src=${el.images[0]} alt="product" class="w-full h-44 object-contain mx-auto mt-[25px]">
//                         <img src="../img/Button.png" alt="heart" class="absolute top-3 right-3 w-6 h-6 cursor-pointer">
//                     </div>

//                     <div class="p-4 flex flex-col gap-2">
//                         <div class="flex items-baseline ">
//                             <span class="text-lg font-semibold text-gray-900 pb-[20px]">${el.price}</span>
                            
//                         </div>
//                         ${
//                             el.discount ? (
//          `<span class="text-lg font-semibold text-gray-900 pb-[20px]"> ${el.discount}%
//         -${el.discount}%
//         </span>`
//          ) : (
//             ""
//          )
//         }
                        
//    <h3 class="text-base font-semibold text-gray-900 leading-tight">-${el.name}</h3>
    
//     <button
//                            class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
//                             В корзину
//                         </button>
//                     </div>


//                 </div>
//     `;
// })

function showproducts(content, data){
    data.map((el) => {
        content.innerHTML += `
           <div  class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div class="relative">
                    <img class="w-full h-[140px] sm:h-[202px]" src=${el.images[0]} alt="img">

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
                          <div class="flex items-center my-1 space-x-2">
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
        </div>
                    <button class=" mb-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white"> В корзину</button>
                </div>

            </div>
    `;
    }) 
}
showproducts(new_vse_novinki, vse_novinki);
showproducts(new_vse_producti, vse_producti );

