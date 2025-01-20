// 5. Determine if the second string is a rotated version of the first string

function isStringRotated(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(isStringRotated('abc', 'cab')); // -> true
console.log(isStringRotated('abc', 'bac')); // -> false
console.log(isStringRotated('abc', 'bca')); // -> true
