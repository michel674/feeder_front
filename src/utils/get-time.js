// Set the date we're counting down to

// Update the count down every 1 second
export const countdown = function () {
  // Get today's date and time
  const now = new Date().getTime();
  const countDownDate = new Date('Jun 27, 2022 12:37:25').getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const result = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (distance < 0) {
    clearInterval(countdown);
    return 'expired';
  }
  console.log('distance', distance);
  console.log('days', days);
  return result;

  // If the count down is finished, write some text
};
