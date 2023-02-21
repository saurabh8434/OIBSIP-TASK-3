let reset = document.querySelector('.btn2');
let convert = document.querySelector('.btn1');
let temp = document.querySelector('.temp');
let result = document.querySelector('.result');
let unit = document.getElementById('unit');

reset.addEventListener("click",()=>{
    temp.value = "";
    result.value = "";
})

convert.addEventListener("click",()=>{
    document.getElementsByClassName('error')[0].textContent = "";
    if(temp.value==""){
        document.getElementsByClassName('error')[0].textContent = "Please enter value in any one box!";
    }
    else if(unit.value == "1"){
        result.value = (temp.value - 32) * (5/9);
    }
    else{
        result.value = (temp.value * (9/5)) + 32;
    }
})