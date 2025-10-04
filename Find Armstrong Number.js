let num = 153;
let sum = 0, temp = num;
let digits = num.toString().length;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** digits;
  temp = Math.floor(temp / 10);
}
console.log(sum === num ? "Armstrong Number" : "Not Armstrong");
