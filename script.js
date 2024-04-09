let bulb = document.querySelector('.bulb');
let color = document.querySelector('.input-field')

setInterval(()=>{
bulb.style.backgroundColor = color.value;
bulb.style.boxShadow = `0px -35px 120px ${color.value}`
}, 100)
