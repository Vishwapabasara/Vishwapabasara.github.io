const submitBtn = document.getElementById('submitBtn');
const purchaseButton = document.getElementById('purchase-button');
const summaryDate = document.getElementById('summary-date');
const summaryTimeSlot = document.getElementById('summary-time-slot');
const summaryDuration = document.getElementById('summary-duration');
const summaryTickets = document.getElementById('summary-tickets');
const summaryTotal = document.getElementById('summary-total');


submitBtn.addEventListener('click', function () {
    const reservationDate = document.getElementById('reservation-date').value;
    localStorage.setItem('reservationDate',JSON.stringify(reservationDate) );
    const timeSlot = document.getElementById('time').value;
    const slAdultTickets = parseInt(document.getElementById('slAdult').value);
    const slChildTickets = parseInt(document.getElementById('slChild').value);
    const foreignerAdultTickets = parseInt(document.getElementById('foreignerAdult').value);
    const foreignerChildTickets = parseInt(document.getElementById('foreignerChild').value);
    const infantTickets = parseInt(document.getElementById('infant').value);

    // Calculate total payable based on ticket prices
    const slAdultCharge = 4;
    const slChildCharge = 2;
    const foreignerAdultCharge = 10;
    const foreignerChildCharge = 5;

    const slAdultTotal = slAdultTickets * slAdultCharge;
    const slChildTotal = slChildTickets * slChildCharge;
    const foreignerAdultTotal = foreignerAdultTickets * foreignerAdultCharge;
    const foreignerChildTotal = foreignerChildTickets * foreignerChildCharge;

    const totalPayable = slAdultTotal + slChildTotal + foreignerAdultTotal + foreignerChildTotal;
    localStorage.setItem('totalPayable',totalPayable);
    // Save data to local storage
    localStorage.setItem('reservationDate', reservationDate);
    localStorage.setItem('slAdultTotal', slAdultTotal);
    localStorage.setItem('timeSlot', timeSlot);
    localStorage.setItem('slAdultTickets', slAdultTickets);
    localStorage.setItem('slChildTickets', slChildTickets);
    localStorage.setItem('slChildTotal', slChildTotal);
    localStorage.setItem('foreignerAdultTickets', foreignerAdultTickets);
    localStorage.setItem('foreignerAdultTotal', foreignerAdultTotal);
    localStorage.setItem('foreignerChildTickets', foreignerChildTickets);
    localStorage.setItem('foreignerChildTotal',foreignerChildTotal);
    localStorage.setItem('infantTickets', infantTickets)
   
    // Display summary table
    summaryDate.textContent = reservationDate;
    summaryTimeSlot.textContent = timeSlot;
    summaryDuration.textContent = "1 hour"; // Assuming the duration is fixed at 1 hour
    summaryTickets.innerHTML = `
        <li>Local Adult: $${slAdultTotal}</li>
        <li>Local Child: $${slChildTotal}</li>
        <li>Foreigner Adult: $${foreignerAdultTotal}</li>
        <li>Foreigner Child: $${foreignerChildTotal}</li>
        <li>Infant: $0</li> <!-- Assuming infants are free -->
    `;
    summaryTotal.textContent = `Total Payable: $${totalPayable}`;

    // Enable the purchase button
    purchaseButton.disabled = false;
});

