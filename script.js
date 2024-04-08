let bulb = document.querySelector('.bulb');
let button = document.querySelector('.switch');
// let onoff = document.querySelector('.on-off');
let text = document.querySelector('.input-field')

// let bg = window.getComputedStyle(bulb);
// console.log(`${bg.backgroundColor} and  ${bg.boxShadow}`);

// bulb.style.backgroundColor = 'green';
// bulb.style.boxShadow = '0px -30px 150px green';



// const changeState = () =>{
//     if(onoff.innerText == 'Off'){
//         onoff.innerText = 'On';
//         changeColor();
//     }
//     else{
//         onoff.innerText = 'Off';
//         bulb.style.backgroundColor = '#3e3e42';
//         bulb.style.boxShadow = '0px -30px 150px #3e3e42'
//     }
// }

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