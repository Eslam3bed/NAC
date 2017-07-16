module.exports=function RomanNum(num) {

var numStr=num.toString();
var normanAlpha='';
//reversing the string to correct the index
numStr = numStr.reverse();

//for ones
if(numStr.length == 1)
    normanAlpha += ones(parseInt(numStr));


if(numStr.length == 2){
    normanAlpha += ones(parseInt(numStr.charAt(0)));
    normanAlpha += tens(parseInt(numStr.charAt(1)));

  }
if(numStr.length == 3){
  normanAlpha += ones(parseInt(numStr.charAt(0)));
  normanAlpha += tens(parseInt(numStr.charAt(1)));
  normanAlpha += hundreds(parseInt(numStr.charAt(2)));}

if(numStr.length == 4){
    normanAlpha += ones(parseInt(numStr.charAt(0)));
    normanAlpha += tens(parseInt(numStr.charAt(1)));
    normanAlpha += hundreds(parseInt(numStr.charAt(2)));
    normanAlpha += thousnds(parseInt(numStr.charAt(3)));
  }

  return normanAlpha;
}
function ones(num) {
  for(var i == 1 ;i < num ; i++){
    if(num < 4)
      return repeat(num , 'I');
    if(num == 4)
      return 'IV';
    if(num == 5 )
      return 'V';
    if(num > 5)
      return 'V'+repeat(num-5 , 'I');
    if(num == 9)
      return  repeat(num , 'I');

  }
}
function tens(num) {

}
function hundreds(num) {

}
function thousnds(num) {

}

function repeat(times ,sympol) {
  var result='';
  for(var i =1 ,i < times ;i++)
    result +=sympol;
    return result;
}
