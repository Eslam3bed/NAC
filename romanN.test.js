const test = require('tape');
const roman=require('./romanN.js');

test('Checking Roman Converter Funcation',(test)=>{
  test.equal('X',roman(10),'Should resalt X');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XI',roman(11),'Should resalt XI');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XII',roman(12),'Should resalt XII');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XIII',roman(13),'Should resalt XIII');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XIV',roman(14),'Should resalt XIV');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XVI',roman(16),'Should resalt VI');
  test.end();

});

test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XVII',roman(17),'Should resalt XVII');
  test.end();

});

test('Checking Roman Converter Funcation',(test)=>{
  test.equal('XVIII',roman(18),'Should resalt XVIII');
  test.end();

});
test('Checking Roman Converter Funcation',(test)=>{
  test.equal(roman(19),'XIX','Should resalt XIX');
  test.end();

})
