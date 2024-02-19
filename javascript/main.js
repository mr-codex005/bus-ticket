const availableSeats = document.getElementById("avialable-seats");
const seatsForBuy = document.getElementById("my-tickets");
const totalPriceOfTicket = document.getElementById("gross-price");
const netPriceOfTicket = document.getElementById("net-price");
const couponBox = document.getElementById("coupon-box");
const couponCode = document.getElementById("coupon-code");
const couponApplyBtn = document.getElementById("coupon-apply-btn");
const modalBtn = document.getElementById("enable-desable");
console.log(modalBtn);
const userPhone = document.getElementById("phone");
const countSelectedSeats = document.getElementById("count-seat");

const ticketPrice = 550;

function seat(elementName) {
  const mySeat = document.getElementsByClassName(elementName);
  for (const seat of mySeat) {
    seat.addEventListener("click", function () {
      this.classList.add("selected");

      // how many seats I have selected
      const selectedSeatsElement = document.getElementsByClassName("selected");
      if (selectedSeatsElement.length > 4) {
        alert("You can'n select more then 4 seats");
        seat.disabled = true;
      }

      const div = document.createElement("div");
      div.innerHTML = `<section class="flex justify-between mb-3">
      <h4 class="text-base text-[#03071299] font-normal">${this.innerText}</h4>
      <h4 class="text-base text-[#03071299] font-normal">Economy</h4>
      <h4 class="text-base text-[#03071299] font-normal">550</h4>
      </section>`;
      if (selectedSeatsElement.length <= 4) {
        seatsForBuy.appendChild(div);
      }
      const countNumberOfSeatBuy = seatsForBuy.children.length;
      // how many seats are available now
      availableSeats.innerText = mySeat.length - countNumberOfSeatBuy;

      countSelectedSeats.innerText = countNumberOfSeatBuy;
      totalPriceOfTicket.innerText = countNumberOfSeatBuy * ticketPrice;
      netPriceOfTicket.innerText = countNumberOfSeatBuy * ticketPrice;
    });
  }
}

seat("btn-active");

function valid() {
  const totalPrice = parseFloat(totalPriceOfTicket.innerText);
  if (parseFloat(countSelectedSeats.innerText) === 4) {
    if (couponCode.value === "NEW15") {
      couponBox.classList.add("hidden");
      const discount = 15 / 100;
      const discountPrice = totalPrice * discount;
      const netPrice = totalPrice - discountPrice;
      netPriceOfTicket.innerText = netPrice;
    } else if (couponCode.value === "Couple20") {
      couponBox.classList.add("hidden");
      const discount = 20 / 100;
      const discountPrice = totalPrice * discount;
      const netPrice = totalPrice - discountPrice;
      netPriceOfTicket.innerText = netPrice;
    }
  } else {
    alert("You are not able to get discount. To get discount buy 4 ticket");
  }
}

userPhone.addEventListener("keyup", function (e) {
  const phoneNumberStringValue = e.target.value.toString();

  console.log(phoneNumberStringValue.length, "phone number length");
  console.log(parseFloat(countSelectedSeats.innerText), "selected seats");
  // console.log(modalBtn.attributes);
  if (
    phoneNumberStringValue.length < 1 &&
    parseFloat(countSelectedSeats.innerText) < 1
  ) {
    console.log("true  ");
    modalBtn.style.color = "red";
  }
});
