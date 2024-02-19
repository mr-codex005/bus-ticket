const availableSeats = document.getElementById("avialable-seats");
console.log(availableSeats.innerHTML);

const seatsForBuy = document.getElementById("my-tickets");
console.log(seatsForBuy);

function seat(elementName) {
  const mySeat = document.getElementsByClassName(elementName);
  for (const seat of mySeat) {
    seat.addEventListener("click", function (e) {
      e.target.classList.add("selected");
      const selectedSeats = document.getElementsByClassName("selected");
      console.log(mySeat.length, selectedSeats.length);
      availableSeats.innerText = mySeat.length - selectedSeats.length;
      const div = document.createElement("div");
      div.innerHTML = `<section class="flex justify-between mb-3">
          <h4 class="text-base text-[#03071299] font-normal">${e.target.innerText}</h4>
          <h4 class="text-base text-[#03071299] font-normal">Economy</h4>
          <h4 class="text-base text-[#03071299] font-normal">550</h4>
        </section>`;
      seatsForBuy.appendChild(div);
    });
  }
}

seat("btn-active");
