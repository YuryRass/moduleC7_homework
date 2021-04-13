export function reverseStr(s) {
  let resultString = '';
  s = s.trim();
  if (s.length != 0) {
    for (let i = s.length - 1; i >= 0; i--) {
      resultString += s[i]
    }
  } else {
    resultString = 'Пустая строка!'
  }
  return resultString;
};

export function concatAndUpperTwoStr(s1 = '', s2 = '') {
  let resultString = '';
  s1 = s1.trim();
  s2 = s2.trim();
  if (s1.length != 0 && s2.length != 0) {
    resultString = s1[0].toUpperCase() + s1.slice(1) + ' ' + s2[0].toUpperCase() + s2.slice(1)
  } else {
    resultString = 'Необходимо ввести 2 строки!'
  }
  return resultString;
}