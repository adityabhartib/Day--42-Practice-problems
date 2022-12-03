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
