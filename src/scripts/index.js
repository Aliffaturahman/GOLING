import 'regenerator-runtime';

// CSS
import '../styles/style.css';

// Toggle Nav
const navbarDrawerElement = document.querySelector('#navigationDrawerId');
const navbarContainerElement = document.querySelector('#navbarContainerId');
const navbarElement = document.querySelector('#navbarId');

navbarDrawerElement.addEventListener('click', event => {
  navbarContainerElement.classList.toggle('open');
  event.stopPropagation();
});

window.addEventListener('scroll', () => {
  const scrollOnPage = window.pageYOffset;

  if (scrollOnPage > 0 ) {
    navbarElement.style.backgroundColor = '#3572EF';
    navbarElement.style.position = 'fixed';
  } else {
    navbarElement.style.backgroundColor = 'transparent';
    navbarElement.style.position = 'absolute';
  }

});

// Booking Info
function showBookingInfo() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const tickets = document.getElementById('tickets').value;
  const date = document.getElementById('date').value;
  const pricePerTicket = 50; // misal harganya 50
  const totalPrice = tickets * pricePerTicket;

  const info = `
      Name: ${name}<br><br>
      Phone Number: ${phone}<br><br>
      Email: ${email}<br><br>
      Tickets: ${tickets}<br><br>
      Date: ${date}<br><br>
      Total Price: $${totalPrice}
  `;

  document.getElementById('info').innerHTML = info;
  document.getElementById('bookingInfo').classList.remove('hidden');
}

function redirectToPayment() {
  window.location.href = 'payment.html';
}
