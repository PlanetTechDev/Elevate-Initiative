document.querySelectorAll('.join-waitlist-button, .learn-more-button').forEach(function(button) {
  button.addEventListener('mouseup', function(event) {
    var x = event.clientX - button.offsetLeft;
    var y = event.clientY - button.offsetTop;
    var ripple = button.querySelector(':before');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
  });
});



const joinWaitlistButton = document.querySelector('.join-waitlist-button');
const waitlistModal = document.querySelector('.waitlist-modal');
const closeModalButton = document.querySelector('.close-modal');

joinWaitlistButton.addEventListener('click', function() {
  waitlistModal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  waitlistModal.style.display = 'none';
});