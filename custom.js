const seats = document.querySelectorAll('.seat');
const countSeat = document.getElementById('count-seat');
const tracketPrice = document.getElementById('tracket-price');
const tracketPrice2 = document.getElementById('tracket-price2');
const totalSeat = document.getElementById("selected-seats");
const seatLeft = document.getElementById("seat-left");
const selectItemWrap = document.querySelector('.select-item-wrap');
const maxSelectedSeats = 4;
const seatNum = seats.length;
const nextBtn = document.getElementById("next-btn");
const phoneInput = document.getElementById("phone");

seats.forEach(function(seat){
    seat.addEventListener('click', function(){
        if(this.classList.toggle('selected') && document.querySelectorAll('.selected').length > maxSelectedSeats){
            this.classList.remove('selected');
        }
        updateTotalSeats();
        updateSelectedSeatsDisplay();
    })
});

function updateTotalSeats() {
    const selectedSeats = document.querySelectorAll('.selected');
    const remainingSeats =seatNum - selectedSeats.length;
    countSeat.textContent = selectedSeats.length;
    seatLeft.textContent = remainingSeats;
    tracketPrice.textContent = selectedSeats.length * 550;
    tracketPrice2.textContent = selectedSeats.length * 550;
}
function updateSelectedSeatsDisplay() {
    const selectedSeats = document.querySelectorAll(".selected");
    selectItemWrap.innerHTML = '';
    selectedSeats.forEach(function(seat){
        const pElement = document.createElement("p");
        const classElement = document.createElement("span");
        const PriceElement = document.createElement("span");
        PriceElement.classList.add("width-controll1");
        classElement.classList.add("width-controll2");
        pElement.classList.add("width-controll3");
        classElement.textContent = "Economoy";
        PriceElement.textContent = "550";
        pElement.textContent = seat.textContent;
        selectItemWrap.appendChild(pElement)
        selectItemWrap.appendChild(classElement);
        selectItemWrap.appendChild(PriceElement);

    })
}



phoneInput.addEventListener('input', function(){
  checkConditions();
})

function checkConditions(){
 const isAnySeatSelected = document.querySelector('.seat.selected') !== null;
 const isPhoneFilled = phoneInput.value.trim() !== " ";
 if( isAnySeatSelected && isPhoneFilled){
  nextBtn.removeAttribute('disabled');
 }
 else {
  nextBtn.setAttribute('disabled', 'disabled')
 }
}