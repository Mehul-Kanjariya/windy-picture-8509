let arr = JSON.parse(localStorage.getItem("details"))
console.log(arr);

let paybtn = document.getElementById("button");
paybtn.onclick = () => {
  document.getElementById("paymentdiv").style.display = "block";
  document.getElementById("divs").style.display = "none";
};
let obj;
let submitbtn = document.getElementById("submit");
submitbtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById("form");
  let name = form.card_name.value;

  let cvv = form.card_cvv.value;
  let otp = "123456";
  let cardnum = form.card_number.value;

  obj = { name, cvv, otp, cardnum };
  console.log(obj);
  localStorage.setItem("card", JSON.stringify(obj));

  document.getElementById("paymentdiv").style.display = "none";
  document.getElementById("otpdiv").style.display = "block";
};

document.getElementById("otpbtn").onclick = () => {
  let otpnum = document.getElementById("otp").value;
  if (otpnum == "123456" && otpnum.length == 6) {
    otpnum.innertext = null;
    alert("Payment Success & Order Placed successfully");
    window.location.href = "bag.html";
    localStorage.removeItem("details");

    document.getElementById("subtotal-left").style.display = "none";
  } else {
    alert("Wrong OTP");
  }
};

document.getElementById("otpdiv").style.display = "none";
