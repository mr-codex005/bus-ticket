const availableSeats = document.getElementById("avialable-seats");
console.log(availableSeats.innerHTML);

const seatsForBuy = document.getElementById("my-tickets");
console.log(seatsForBuy);

const totalPriceOfTicket = document.getElementById("gross-price");
console.log(totalPriceOfTicket.innerText);

const netPriceOfTicket = document.getElementById("net-price");
console.log(netPriceOfTicket.innerText);

const couponBox = document.getElementById("coupon-box");
const couponCode = document.getElementById("coupon-code");
const validatorBtn = document.getElementById("validator-btn");

const ticketPrice = 550;

function seat(elementName) {
  const mySeat = document.getElementsByClassName(elementName);
  for (const seat of mySeat) {
    seat.addEventListener("click", function (e) {
      e.target.classList.add("selected");

      // how many I have selected
      const selectedSeats = document.getElementsByClassName("selected").length;

      console.log(mySeat.length, selectedSeats);

      // how many seats are available now
      availableSeats.innerText = mySeat.length - selectedSeats;
      const div = document.createElement("div");
      div.innerHTML = `<section class="flex justify-between mb-3">
          <h4 class="text-base text-[#03071299] font-normal">${e.target.innerText}</h4>
          <h4 class="text-base text-[#03071299] font-normal">Economy</h4>
          <h4 class="text-base text-[#03071299] font-normal">550</h4>
        </section>`;
      seatsForBuy.appendChild(div);

      totalPriceOfTicket.innerText = selectedSeats * ticketPrice;
      netPriceOfTicket.innerText = selectedSeats * ticketPrice;
    });
  }
}

seat("btn-active");

function valid() {
  console.log(couponCode.value, "coupone code");
  const totalPrice = parseFloat(totalPriceOfTicket.innerText);
  console.log(totalPrice, "totalPrice");

  if (couponCode.value === "new15") {
    couponBox.classList.add("hidden");
    const discount = 15 / 100;
    const discountPrice = totalPrice * discount;
    console.log(discountPrice, "discounted taka");
    const netPrice = totalPrice - discountPrice;
    console.log(netPrice, "total tk after discount");
    netPriceOfTicket.innerText = netPrice;
  } else if (couponCode.value === "couple20") {
    couponBox.classList.add("hidden");
    const discount = 20 / 100;
    const discountPrice = totalPrice * discount;
    console.log(discountPrice, "discounted taka");
    const netPrice = totalPrice - discountPrice;
    console.log(netPrice, "total tk after discount");
    netPriceOfTicket.innerText = netPrice;
  }
}
