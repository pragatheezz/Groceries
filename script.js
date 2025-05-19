document.addEventListener("DOMContentLoaded", function() {
document.getElementById("home").addEventListener("click",function(){
    document.getElementById("home-sec").scrollIntoView({behavior:"smooth"})
})

document.getElementById("scrollToSection1").addEventListener("click",function(){
    document.getElementById("section1").scrollIntoView({behavior:"smooth"});
});

document.getElementById("scrollToSection2").addEventListener("click",function(){
    document.getElementById("section2").scrollIntoView({behavior:"smooth"});
});

document.getElementById("scrollToSection3").addEventListener("click",function(){
    document.getElementById("section3").scrollIntoView({behavior:"smooth"});
});

document.getElementById("scrollToSection4").addEventListener("click",function(){
    document.getElementById("section4").scrollIntoView({behavior:"smooth"});
});

document.getElementById("scrollToSection5").addEventListener("click",function(){
    document.getElementById("section5").scrollIntoView({behavior:"smooth"});
});

// let count = 0;
// document.querySelectorAll(".btn").forEach(button =>{
//     button.addEventListener("click",function(){
//         count++;
//         document.getElementById("cartCount").textContent=count;
//     });
// });



document.getElementById("scrollToSection1").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("scrollToSection2").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("scrollToSection3").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("scrollToSection4").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("scrollToSection5").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});

document.getElementById("myIcon").addEventListener("click", function() {
    this.classList.toggle("active");
   
        
});
document.getElementById("myIcon2").addEventListener("click", function() {
    this.classList.toggle("active");
    
});
document.getElementById("myIcon3").addEventListener("click", function() {
    this.classList.toggle("active");
    
});
document.getElementById("myIcon4").addEventListener("click", function() {
    this.classList.toggle("active");
     
});
document.getElementById("myIcon5").addEventListener("click", function() {
    this.classList.toggle("active");
     alert`Thanks for you Ratings`
});


// document.getElementById("addToCart").addEventListener("click", function(event) {
//     event.preventDefault();  // Stop auto-refresh
//     console.log("Button clicked without refresh!");
// });

document.getElementById("loginPage").addEventListener("click", function(event) {
    event.preventDefault();  // Stop auto-refresh
    console.log("Button clicked without refresh!");
});



document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();  // Stop auto-refresh
        console.log("Button Clicked Without Refresh");
    });
});


// document.getElementById("forAutoRefresh").forEach(button => {
//     button.addEventListener("click", function(event) {
//         event.preventDefault();  // Stop auto-refresh
//         console.log("Button Clicked Without Refresh");
//     });
// });

const menu = document.querySelector(".menu")
const menuList = document.querySelector(".nav-links")
menu.addEventListener('click',()=>{
    menuList.classList.toggle('.nav-links li')
})


const homeToLog = document.querySelector(".login-link");
homeToLog.addEventListener('click',()=>{
    window.location.href = "login.html";
});

const buyToPay = document.querySelector(".btn-buy");
buyToPay.addEventListener('click',()=>{
    window.location.href = "payment.html";
});


const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".side-cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));








    
const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button =>{
    button.addEventListener("click",event =>{
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
        
    });
});
const cartContent = document.querySelector(".cart-content");
const addToCart = productBox =>{
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems){
        if(item.textContent === productTitle){
            alert`This item is already added to cart `;
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
         <img class="cart-img" src="${productImgSrc}" alt="">
              <div class="cart-details">
                  <h2 class="cart-product-title">${productTitle}</h2>
                  <span class="cart-price">${productPrice}</span>
                  <div class="cart-quantity">
                      <button id="decrement">-</button>
                      <span class="number">1</span>
                      <button id="increment">+</button>
                  </div>
              </div>
              <i class="fa-solid fa-trash cart-remove"></i>
    
    `;
    cartContent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
        cartBox.remove();

        updateCartCount(-1);

        updateTotalPrice();
    });

    cartBox.querySelector(".cart-quantity").addEventListener("click",event=>{
        const numberElement = cartBox.querySelector(".number");
        const decrementButton = cartBox.querySelector("#decrement");
        let quantity = numberElement.textContent;

        if(event.target.id === "decrement" && quantity > 1){
            quantity--;
            if(quantity === 1){
                decrementButton.style.color = "#999";
            }
        }else if(event.target.id === "increment"){
            quantity++;
            decrementButton.style.color = "#333";
        }

        numberElement.textContent = quantity;

        updateTotalPrice();
        
    });

    updateCartCount(1);

    updateTotalPrice();
    
};

const updateTotalPrice = ()=>{
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox=>{
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price =  parseFloat(priceElement.textContent.replace("$",""));
        const quantity = parseInt(quantityElement.textContent,10);
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  

    const paymentTotalElement = document.querySelector(".total-price");
    if (paymentTotalElement) {
        paymentTotalElement.textContent = `$${total.toFixed(2)}`;
    }
  
    
};




let cartItemCount = 0;
const updateCartCount = change =>{
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if(cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    }else{
            cartItemCountBadge.style.visibility = "hidden";
            cartItemCountBadge.textContent = ""; 
        }
    
}



document.getElementById('buy-now').addEventListener('click', () => {
    const totalAmount = updateTotalPrice();
    // Save the total amount to local storage
    localStorage.setItem('cartTotal', totalAmount);
    // Redirect to payment page
    window.location.href = "./payment.html";
  });
  












































});