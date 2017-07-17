function romanN(num) {
//check if it's valid or not
  if(num < 1)
    return 'The Romans had no representation for less than 1';
  if(num >= 10000)
    return 'There\'s no easy way to represent numbers over 9999 in Roman numerals, sorry!';
  var numStr = num.toString();
  var normanAlpha = '';
  //reversing the string to correct the index
  numStr = numStr.split('').reverse().join('');
  //for ones
  if (numStr.length == 1)
    normanAlpha += ones(parseInt(numStr));
//for tens
  if (numStr.length == 2) {
    normanAlpha += tens(parseInt(numStr.charAt(1)));
    normanAlpha += ones(parseInt(numStr.charAt(0)));
  }
  //for hundereds
  if (numStr.length == 3) {
    normanAlpha += hundreds(numStr.charAt(2));
    normanAlpha += tens(numStr.charAt(1));
    normanAlpha += ones(numStr.charAt(0));
  }
//for thousnds
  if (numStr.length == 4) {
    normanAlpha += thousnds(numStr.charAt(3));
    normanAlpha += hundreds(parseInt(numStr.charAt(2)));
    normanAlpha += tens(parseInt(numStr.charAt(1)));
    normanAlpha += ones(parseInt(numStr.charAt(0)));
  }
  return normanAlpha;
}

function ones(num) {
  num = parseInt(num);
    if (num < 4)
      return repeat(num, 'I');
    if (num == 4)
      return 'IV';
    if (num == 5)
      return 'V';
    if (num > 5 &&  num < 9)
      return 'V' + repeat(num - 5, 'I');
    if (num == 9)
      return 'IX';

}

function tens(num) {
  num = parseInt(num);
    if (num < 4)
      return repeat(num, 'X');
    if (num == 4)
      return 'XL';
    if (num == 5)
      return 'L';
    if (num > 5 &&  num < 9)
      return 'L' + repeat(num - 5, 'X');
    if (num == 9)
      return 'XC';
}

function hundreds(num) {
  num = parseInt(num);
    if (num < 4)
      return repeat(num, 'C');
    if (num == 4)
      return 'CD';
    if (num == 5)
      return 'D';
    if (num > 5 &&  num < 9)
      return 'D' + repeat(num - 5, 'C');
    if (num == 9)
      return 'CM';
}

function thousnds(num) {

  num = parseInt(num);

    if (num <= 4)
      return repeat(num,'M');
    if (num == 5)
      return '⊽';
    if (num > 5 &&  num < 9)
      return '⊽' + repeat(num - 5, 'Ī');
    if (num == 9)
      return 'Īⴳ';

  //  num = parseInt(num);
//      if (num < 5)
  //      return repeat(num, 'M');

        //thousnds ⊽ Ṽ  ⊽ ㄡ ⴳ
}

function tenThousnds(num) {

}
function hundredThousnds(num) {

}
function repeat(times, sympol) {
  var result = '';
  for (var i = 0; i < times; i++)
    result += sympol;
  return result;
}
module.exports = romanN
