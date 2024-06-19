//дана строка. Нужно найти наибольшую по длинне подстроку, в которой символы не будут повторяться
// Пример: abcabcabc = abc
// Пример: abtaasdgbtty = asdgbt

console.log(findLongerUniqSubstr("abtaasdgbtty"));

function findLongerUniqSubstr(str) {
  const hash = {};
  let left = 0,
    right = 0;
  let maxSubStr = "";

  while (right <= str.length) {
    const currChar = str[right];

    if (currChar in hash && hash[currChar] >= left) {
      left = hash[currChar] + 1;
    }

    hash[currChar] = right;
    const curSubStr = str.slice(left, right + 1);
    if (maxSubStr.length < curSubStr.length) {
      maxSubStr = curSubStr;
    }

    right++;
  }

  return maxSubStr;
}
