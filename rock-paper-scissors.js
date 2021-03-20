// 1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// 2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
// 3. When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
// 4. Test the function by calling it with valid and invalid input, and printing the results to the console. You can delete this when you know your function works.
// 5. Now we need to have the computer make a choice.
// 6. Test the function by calling it multiple times and printing the results to the console. You can delete this when you know your function works.
// 7. Now it’s time to determine a winner.
// 8. If the game is not a tie, you’ll need to determine a winner.
// 9. Next, write another if statement for if the userChoice is 'paper'.
// 10. Next, write yet another if statement for if the userChoice is 'scissors'. 
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper'|| userInput==='scissors'){
    return userInput
  }
  console.log('Invalid option')
}

const getComputerChoice =()=>{
  let random = Math.floor(Math.random()*3)
  switch(random){
    case 0:
      return 'rock'
      break
    case 1:
      return 'paper'
      break
    case 2:
      return 'scissors'
      break
  }
}

const dermineWinner=(userChoice, computerChoice)=>{
  if(userChoice===computerChoice){
    return 'The game was a tie'
  }else if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'Computer won'
    }else{
      return 'User won'
    }
  }else if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'Computer won'
    }else{
      return 'User won'
    }
  }else if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'Computer won'
    }else{
      return 'User won'
    }
  }
}