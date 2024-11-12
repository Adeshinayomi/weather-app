let calculation =  JSON.parse(localStorage.getItem('calculus'));
function calculator(calculus){
 if (calculus === '7'){
   calculation += '7'
 }else if(calculus === '8'){
   calculation += '8'
 }else if(calculus === '9' ){
   calculation += '9'
 }else if(calculus === '/'){
   calculation += ' / '
 }else if(calculus === '4'){
   calculation += '4'
 }else if(calculus === '5'){
   calculation += '5'
 }else if(calculus === '6'){
   calculation += '6'
 }else if(calculus === '*'){
   calculation += ' * '
 }else if(calculus === '1'){
   calculation += '1'
 }else if(calculus === '2'){
   calculation += '2'
 }else if(calculus === '3'){
   calculation += '3'
 }else if(calculus === '+'){
   calculation += ' + '
 }else if(calculus === '0'){
   calculation += '0'
 }else if(calculus === '-'){
   calculation += ' - '
 }else if(calculus === ' . '){
   calculation += '.'
 }else if(calculus === '='){
   calculation = eval(calculation);
 }else if(calculus === 'A.C'){
   calculation = ``
 }else if(calculus === 'del'){
   calculation -= ``
 }
 
 localStorage.setItem('calculus',JSON.stringify(calculation))
 document.querySelector('#js-inputarea').innerHTML= calculation
 
}
function showOnLoad(){
 document.querySelector('#js-inputarea').innerHTML= calculation
}
