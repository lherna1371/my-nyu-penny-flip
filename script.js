//click flip the penny btn to random choose heads/tails for img
let pennyImg = document.querySelector("#flip-penny");

let countHeads = 0;
let countTails = 0;

pennyImg.addEventListener("click",function(){
    let outcome = Math.random();
    console.log(outcome)
    if (outcome < 0.5){
        document.querySelector("img").src = "./penny-heads.jpg"
        document.querySelector(".outcome-header").textContent = "You Landed on Heads!"
        countHeads++
        console.log("heads")
    } else {
        document.querySelector("img").src = "./penny-tails.jpg"
        document.querySelector(".outcome-header").textContent = "You Landed on Tails!"
        countTails++
        console.log("tails")
    }
    console.log(countHeads);
    console.log(countTails);
    updateTable()
})


//when clear scoreboard button is clicked clear the table (all table content set to 0) and set 
//img to the original heads picture 

document.querySelector('#clear-score').addEventListener('click', function() {
    document.querySelector("img").src = "./penny-heads.jpg";
    document.querySelector(".outcome-header").textContent = "Let's get Rolling!";
    countHeads = 0;
    countTails = 0;
    updateTable(); 

})

function updateTable(){
    
    document.querySelector("#num-heads").textContent = countHeads
    document.querySelector("#num-tails").textContent = countTails

    if((countHeads + countTails) !== 0 ){
        document.querySelector("#head-percent").textContent = Math.round(countHeads/(countHeads+countTails)*100) + '%'
        document.querySelector("#tails-percent").textContent = Math.round(countTails/(countHeads+countTails)*100) + '%'
    } else {
        document.querySelector("#head-percent").textContent ='0%'
        document.querySelector("#tails-percent").textContent = '0%'
    }

}