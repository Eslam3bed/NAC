const test = require('tape');
const roman=require('./romanN.js');

test('Checking Roman Converter Funcation',(test)=>{
  test.equal('I',roman(1),'Should resalt I');
  test.end();

})
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('II',roman(2),'Should resalt II');
  test.end();

})
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('III',roman(3),'Should resalt III');
  test.end();

})
