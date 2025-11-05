let cartCards = document.querySelector(".cart-cards");
let allPrice = document.getElementById("all-price");
let allSkitka = document.getElementById("all-skitka");
let allPaid = document.getElementById("all-paid");
let sumPrice = 0;
let discountPrice = 0;
let paidPrice = 0;
let allchicked = document.getElementById("checked-all");
let allchickedProducts = []
allPrice.textContent = sumPrice;
allSkitka.textContent =discountPrice;
allPaid.textContent = paidPrice;

let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let badge = document.getElementById("badge");
localStorage.setItem("carts", JSON.stringify(cart))
badge.textContent = cart.length;

function showCartProducts(content, data) {
    content.innerHTML = ""
allPrice.textContent = sumPrice;
    allPaid.textContent = paidPrice;
    allPrice.textContent = sumPrice;
    allSkitka.textContent = discountPrice
    data.map((el) => {
        content.innerHTML += `
         <div
                class="bg-white w-full rounded-lg p-2 gap-3 max-[700px]:gap-5 shadow-lg shadow-[#4a4a4a42] hover:shadow-[#eab84c75] mb-2 flex justify-between max-[700px]:flex-col px-5 items-center max-w-[876px] transition-transform duration-500 hover:scale-105"
              >
                <div class="flex gap-5 items-center w-full">
                  <div class="relative">
                    <img
                      class="rounded-lg object-cover w-[80px] h-[60px]"
                      src="${el.images[0]}"
                      alt=""
                    />

                    <input onClick="checkedInput(this, ${el.id})" class="absolute top-1 left-1 w-[25px] h-[25px] cursor-pointer border border-gray-400 rounded"
                      type="checkbox"
                    />
                  </div>

                  <div class="flex-1">
                  <h2 class="font-semibold sm:text-sm md:text-md lg:text-lg">
                      ${el.name}
                    </h2>
                    <h2 class="font-semibold sm:text-sm md:text-md lg:text-lg">
                      ${el.description}
                    </h2>
                                      <a class="flex items-center gap-[20px]" href="">
                    <p class="font-bold text-sm">${el.price} ₽</p>
                    <p class="text-[#606060]">${el.discount} ₽</p>
                  </a>
                  </div>
                </div>

                
                <div
                  class="flex"
                >
                  <div class="cursor-pointer w-[200px] flex gap-[5px]">
                    <button
                     onClick="decrease(${el.id})"
                      class="minus bg-green-600 text-white px-2 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span class="qty font-medium">${el.numbers}</span>
                    <button
                                         onClick="increase(${el.id})"

                      class="plus bg-green-600 text-white px-2 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <p
                    class="font-semibold sm:text-sm w-[60px] lg:text-md text-gray-700 text-right"
                  >
                    ${el.price * el.numbers}
                  </p>
                </div>
              </div>
        `
    })
}

showCartProducts(cartCards, cart)

function countPrices(){
    sumPrice = 0;
    discountPrice = 0;
    paidPrice = 0;
    cart.map((el) => {
        sumPrice += el.price * el.numbers;
        discountPrice += el.price * el.discount * el.numbers / 100;
        paidPrice = sumPrice - discountPrice
        allPaid.textContent = paidPrice;
        allPrice.textContent = sumPrice;
        allSkitka.textContent = discountPrice

    });
    allPrice.textContent = sumPrice;
    allSkitka.textContent =discountPrice
    showCartProducts(cartCards, cart);
}
countPrices()


function checkedInput(obj, id){
    let item = cart.find((el) =>el.id === id);
    if(obj.checked === true){
        allchickedProducts.push(id)
    } else{
        allchickedProducts = allchickedProducts.filter((el) => el.id !== id)
    }
}

allchicked.addEventListener("click",function() {
cart =cart.filter((el) => !allchickedProducts.includes(el.id));
allchickedProducts = [];
countPrices();
    localStorage.setItem("carts", JSON.stringify(cart))
    showCartProducts(cartCards, cart)
    badge.textContent = cart.length;
})



function increase(id) {
    cart = cart.map((item) => {
        if (item.id === id) {
            item.numbers += 1
        }
        return item;
    });
    countPrices()
    allPrice.textContent = sumPrice;

    localStorage.setItem("carts", JSON.stringify(cart))
    showCartProducts(cartCards, cart)

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


    localStorage.setItem("carts", JSON.stringify(cart))
    showCartProducts(cartCards, cart)


}