const options=["rock","scissor","paper"]
let randomValue=Math.floor(Math.random() *options.length)
const getComputerChoice=()=>{
    return options[randomValue]
}
const Player=(user,computer)=>{
let result=""
if(user && computer){
if(user===computer){
    result=" Tie happen"
}else if(user=="rock"){
    if(computer=="paper"){
        result="You have lost"
    }else if(computer=="scissor"){
        result="you have win"
    }
}
else if(user=="paper"){
    if(computer=="rock"){
        result="you have win"
    }else if(computer=="scissor"){
    result=" you have lost"
    }
}
else if (user=="scissor"){
    if(computer=="paper"){
        result=" you have lost"
    }
    else if(computer=="rock"){
        result="you have lost"
    }
}
else {
    alert("please  provider user value")
}
}
return result
}

function game(){
    let userScore=0
    let computerScore=0
    for(let i=1;i<=5;i++){
     let userCaption=prompt(" choose btn rock,scissor,paper")
     let computerChoice=getComputerChoice()
     let finalResult=Player(userCaption,computerChoice)

     if(finalResult.includes("win")){
        userScore++
     }else{
        computerScore++
     }
    }
    if(userScore > computerScore){
        console.log("You have win" +"you have "+userScore +"and computer score are "+computerScore);
    }else{
        console.log("you have lost , you have " +userScore +"where computer have" + computerScore);
    }

}
game()