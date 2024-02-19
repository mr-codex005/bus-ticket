const availableSeats = document.getElementById("avialable-seats");
const seatsForBuy = document.getElementById("my-tickets");
const totalPriceOfTicket = document.getElementById("gross-price");
const netPriceOfTicket = document.getElementById("net-price");
const couponBox = document.getElementById("coupon-box");
const couponCode = document.getElementById("coupon-code");
const validatorBtn = document.getElementById("validator-btn");
const modalBtn = document.getElementById("enable-desable");
const userPhone = document.getElementById("phone");

const ticketPrice = 550;

function seat(elementName) {
  const mySeat = document.getElementsByClassName(elementName);
  for (const seat of mySeat) {
    seat.addEventListener("click", function () {
      this.classList.add("selected");

      // how many seats I have selected
      const selectedSeatsElement = document.getElementsByClassName("selected");
      const selectedSeats = selectedSeatsElement.length;
      if (selectedSeatsElement.length > 4) {
        alert("You can'n select more then 4 seats");
        this.disabled = true;
        selectedSeatsElement.classList.remove("selected");
      }
      // how many seats are available now
      availableSeats.innerText = mySeat.length - selectedSeats;
      const div = document.createElement("div");
      div.innerHTML = `<section class="flex justify-between mb-3">
      <h4 class="text-base text-[#03071299] font-normal">${this.innerText}</h4>
      <h4 class="text-base text-[#03071299] font-normal">Economy</h4>
      <h4 class="text-base text-[#03071299] font-normal">550</h4>
      </section>`;
      if (selectedSeatsElement.length <= 4) {
        seatsForBuy.appendChild(div);
      }

      totalPriceOfTicket.innerText = selectedSeats * ticketPrice;
      netPriceOfTicket.innerText = selectedSeats * ticketPrice;
    });
  }
}

seat("btn-active");

function valid() {
  const totalPrice = parseFloat(totalPriceOfTicket.innerText);

  if (couponCode.value === "new15") {
    couponBox.classList.add("hidden");
    const discount = 15 / 100;
    const discountPrice = totalPrice * discount;
    const netPrice = totalPrice - discountPrice;
    netPriceOfTicket.innerText = netPrice;
  } else if (couponCode.value === "couple20") {
    couponBox.classList.add("hidden");
    const discount = 20 / 100;
    const discountPrice = totalPrice * discount;
    const netPrice = totalPrice - discountPrice;
    netPriceOfTicket.innerText = netPrice;
  }
}

if(parseInt(availableSeats.innerText) > 0 &&  parseInt(userPhone.value.length) >10
){
  modalBtn.disabled = true;
}