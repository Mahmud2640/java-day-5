// for (let i = 1; i < 6; i++) console.log(i);
function rendomNumber(i) {
  if (i > 10) {
    return;
  }
  console.log(i);
  rendomNumber(i + 1);
}
rendomNumber(1);
