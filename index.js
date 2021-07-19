let flashsaletime = 7200;

function paddingtime(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}
function setCountDownFlashSale(second) {
  if (second == 0) {
    clearInterval(countDown);
  }
  var hours = Math.floor(second / 3600);
  var minutes = Math.floor((second % 3600) / 60);
  var seconds = second - hours * 3600 - minutes * 60;

  $("#hour").text(paddingtime(hours));
  $("#minute").text(paddingtime(minutes));
  $("#second").text(paddingtime(seconds));
}
let countDown = setInterval(function () {
  setCountDownFlashSale(flashsaletime--);
}, 1000);
console.log('olala')