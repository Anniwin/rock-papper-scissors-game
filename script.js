
    const CHOICES = ['rock','paper','scissors']
    let computerChoice = CHOICES[Math.floor(Math.random() *CHOICES.length)]
    console.log(computerChoice)
    let userChoice

    const submit = function () {
 userChoice = document.querySelector('.radio:checked').value    
}

const checkWinner = () =>{
let isUserWinner
if(userChoice === 'rock' && computerChoice === 'scissors') {
    isUserWinner = true
} else if (userChoice === 'paper' && computerChoice === 'rock') {
    isUserWinner = true
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
    isUserWinner = true
} else if (userChoice === computerChoice) {
    is isUserWinner = false
} else {
    isUserWinner = false
}
return isUserWinner
}