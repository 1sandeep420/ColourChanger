
document.addEventListener('DOMContentLoaded', ()=>
{
const Disco =  document.getElementById('Disco')
const Click = document.getElementById('click')
const Colourcode = document.getElementById('Value');
const image = document.getElementById('image')
const Timedelay = document.getElementById('Input');
const Stopbut = document.getElementById('Stop')
Click.addEventListener('click',()=>
{   
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
Colourcode.innerText =(`rgb(${r}, ${g}, ${b})`)
console.log(`rgb(${r}, ${g}, ${b})`)
})



let i = true
if(i=true)
{
    Disco.addEventListener('click', ()=>
        {
        time=Timedelay.value;
        image.src= "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDE4ZDdnZ2x3MnA4azB3Y2x3YWNhZzNmdDl1N2JiMnVyd3FxaGh2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z1lJAjRaB1ZwZ3kE9e/giphy.gif"   
        clear = setInterval(()=>
        {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } ,time)
        })

}

Stopbut.addEventListener('click',()=>
    {
       clearInterval(clear)
    })

})


