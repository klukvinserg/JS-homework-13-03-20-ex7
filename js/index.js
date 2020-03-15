let q = confirm("Would you like to know: 'What time is now?'");

let time;

if (q === true) {
  time = new Date();
  document.write(`Time: ${timeResult(time.getHours(), time.getMinutes(), time.getSeconds())}`);
} else {
  document.write("You don't want to know a time");
}

function timeResult(a, b, c) {
  if (a < 10) {
    a = "0" + a;
  }
  if (b < 10) {
    b = "0" + b;
  }
  if (c < 10) {
    c = "0" + c;
  }
  return `${a}:${b}:${c}`;
}
