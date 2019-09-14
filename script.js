
    const CHOICES = ['rock','paper','scissors']

    let computerChoice
    let userChoice
    let isUserWinner

    const submit = function () {
        computerChoice = CHOICES[Math.floor(Math.random() *CHOICES.length)]
 userChoice = document.querySelector('.radio:checked').value   
 checkWinner() 
 console.log(userChoice, computerChoice,isUserWinner)
 showResults()
}

const checkWinner = () =>{
if(userChoice === 'rock' && computerChoice === 'scissors') {
    isUserWinner = true
} else if (userChoice === 'paper' && computerChoice === 'rock') {
    isUserWinner = true
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
    isUserWinner = true
} else if (userChoice === computerChoice) {
    isUserWinner = false
} else {
    isUserWinner = false
}
return isUserWinner
}

const showResults = function () {
    switch (isUserWinner) {
        case true:
            document.querySelector('.winner').style.display = 'block'
            document.querySelector('.looser').style.display = 'none'
            break
            case false:
                    document.querySelector('.winner').style.display = 'none'
                    document.querySelector('.looser').style.display = 'block'
            break
    
        default:
            break;
            document.querySelector('.winner').style.display = 'none'
            document.querySelector('.winner').style.display = 'none'
        
    }

}