const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbar = document.getElementsByClassName("item")[0];
const container_two = document.getElementsByClassName("container-two")[0]; 
let flag=false;

toggleButton.addEventListener("click",() =>{
    // console.log("Hello")
    if(flag)
    {
    container_two.style.display = "inline-block";
    flag = false;
    }
    else{
        container_two.style.display = "none";
        flag = true;
    }
})