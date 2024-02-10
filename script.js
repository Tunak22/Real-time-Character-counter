const textareaEl = document.getElementById ('textarea')
const totalCounter = document.getElementById ('counter')
const remainingEl = document.getElementById ('remaining')


textareaEl.addEventListener('keyup',()=>{
    updateCounter()
});
updateCounter()
function updateCounter(){
    totalCounter.innerText = textareaEl.value.length
    remainingEl.innerText=textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}