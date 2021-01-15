import validator from './validator.js';

const inputs=document.querySelectorAll(".inputs");
const label=document.querySelectorAll(".label");


eventoLabels();
function eventoLabels(){
    for(let i=0;i<inputs.length;i++){
        
        inputs[i].addEventListener('focus',function(){
            label[i].classList.add('focus');
        });
            inputs[i].addEventListener('blur',function(){
                if(inputs[i].value==""){
                    label[i].classList.remove('focus');
                }
            });
    }
}

console.log(validator);
