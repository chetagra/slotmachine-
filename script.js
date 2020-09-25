let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
let inpspeed=document.getElementById('inpspeed')


let values=[
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

function getrandomval() {
    return values[Math.floor(Math.random()*7)]
}

let animationId

function updateAnimation(speed) {
    if(animationId) clearInterval(animationId)
    
    setInterval(() => {
        value1.innerText=getrandomval()
        value2.innerText=getrandomval()
         value3.innerText=getrandomval()
    }, 1000/speed);
}

inpspeed.onchange=(ev)=>{
    document.documentElement.style.setProperty('--speed', ev.target.value)
  
    updateAnimation(ev.target.value)
}
