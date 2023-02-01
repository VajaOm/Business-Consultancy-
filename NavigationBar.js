

const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbar = document.getElementsByClassName("item")[0];
const container_two = document.getElementsByClassName("first-container-two")[0]; 
let list_items = document.querySelectorAll(".list")[0];
let flag=false;
var root = document.querySelector(':root');

toggleButton.addEventListener("click",() =>{
    // console.log("Hello")
    // console.log(list_items);
    if(flag)
    {
        root.style.setProperty('--top','clamp(33em,100vw + 0em,55em)');
    container_two.style.display = "inline-block";
    flag = false;
    }
    else{
        root.style.setProperty('--top','clamp(25em,100vw + 0em,55em)');
        container_two.style.display = "none";
        flag = true;
    }
});
