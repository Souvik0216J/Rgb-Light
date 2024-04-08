let bulb = document.querySelector('.bulb');
let button = document.querySelector('.switch');
let text = document.querySelector('.input-field');

const changeColor =()=>{
    if(text.value.length > 0)
    {
        bulb.style.backgroundColor = text.value;
        bulb.style.boxShadow = `0px -30px 150px ${text.value}`
    }
    else{
        text.classList.add("error");
        setTimeout(() => {
            text.classList.remove("error");
        }, 1000);
    }
}
