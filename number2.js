function palindrome(str) {
  var hasil = "";
  for (var i = str.length - 1; i >= 0; i--) {
    hasil += str[i];
  }
  if (str.toLowerCase() == hasil.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(palindrome("katak"));
console.log(palindrome("Katak"));
console.log(palindrome("Deleveled"));
console.log(palindrome("deleveled"));
console.log(palindrome("kodak"));
