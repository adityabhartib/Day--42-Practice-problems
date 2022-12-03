const name = document.querySelector('#text')
const textError = document.querySelector('.text-error')
text.addEventListener('input',function () {
let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
if (nameRegex.test(name.value))
   {
       textError.textContent = ""}
else
   {
       textError.textContent = "Invalid Name !!"
   } 
});
const email = document.querySelector('#email')
const emailError = document.querySelector('.email-error')
email.addEventListener('input' , function(){
   let emailRegex = RegExp("^[A-Za-z]{3,}[.]*[A-Za-z]*[@]{1}[A-Za-z]{2,}[.]{1}[A-Za-z]{2,}$")
if (emailRegex.test(email.value)) {
   emailError.textContent =""}
else{
   emailError.textContent = "Invalid Email---!!!"}
});
const tel = document.querySelector('#tel')
const telError = document.querySelector('.tel-error')
tel.addEventListener('input',function () {
let telRegex = RegExp("^[0-9]{2}[ ][0-9]{10}$")
if (telRegex.test(tel.value))
   {
       telError.textContent = ""}
else
   {
       telError.textContent = "Invalid Phone Number !!"
   } 
});

const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input', function () {
   output.textContent = salary.value
});    