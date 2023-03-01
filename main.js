//4.Design a method to return how many palindrome are there in the array.

let poly = [1221, 334, 45, 676, 19, 131];
let count = 0;
for (let i = 0; i < poly.length; i++) {
    let num = poly[i];
    let reverse = 0;
    while (num > 0) {
        let digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = Math.floor(num / 10);
    }
    if (reverse === poly[i]) {
        count++;
    }
}
console.log(count);