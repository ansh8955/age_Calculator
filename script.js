let button  = document.querySelector("button");
let input = document.querySelector("input");
let p = document.getElementById("age");

button.addEventListener("click",(e)=>{

    e.preventDefault();

    const today_Date = new Date();

    const Bday = new Date(input.value);

    let age = today_Date.getFullYear() - Bday.getFullYear();

    // const diffInMill = today_Date.getTime() - Bday.getTime();

    // const milliSecondinyear = 365 * 24 * 60 * 60 *1000;

    if(input.value ==""){
        alert("Please enter your birthday");
    }
    else if(age < 0 || (age === 0 && today_Date.getMonth() < Bday.getMonth()) || (age ===0 && today_Date.getDate() < Bday.getDate())){
        alert("Please enter valid birthdate");
        console.error("Please enter valid birthdate")
    } 
    else {
        if(today_Date.getMonth() < Bday.getMonth() || today_Date.getDate() < Bday.getDate()){
            age--;
        }
    }


    
    p.innerText = `Your age is ${age} years old` ;
});