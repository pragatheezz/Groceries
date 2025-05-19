document.addEventListener("DOMContentLoaded", function() {
  let totalPrice = localStorage.getItem("totalPrice"); // Get stored price
  if (totalPrice) {
      document.getElementById("display-total").innerText = totalPrice;
  }
});

// Payment form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
  event.preventDefault();

  setTimeout(function() {
    alert `payment successful!`;
    window.location.href = "animation.html";
      document.getElementById("payment-status").innerText = "Payment Successful!";
      document.getElementById("payment-status").style.color = "green";

      // Clear total price from storage after payment
      localStorage.removeItem("totalPrice");
  }, 1000);
});

updateTotalPrice();


 // Google Pay API Integration
 function onGooglePayLoaded() {
  const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
  const button = paymentsClient.createButton({ onClick: () => alert("Google Pay Clicked!") });
  document.getElementById('gpay-button').appendChild(button);
}

// PhonePe Payment
function payWithPhonePe() {
  const phonePeUPI = "upi://pay?pa=your-merchant-vpa@upi&pn=MerchantName&mc=1234&tid=TXN123456&tr=123456789&tn=PaymentForOrder&am=10&cu=INR";
  alert `payment successful!`
  window.location.href = "animation.html";
}

window.onload = onGooglePayLoaded;