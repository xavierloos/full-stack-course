// 1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// 2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
// 3. When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
// 4.Test the function by calling it with valid and invalid input, and printing the results to the console. You can delete this when you know your function works.
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper'|| userInput==='scissors'){
    return userInput
  }
  console.log('Invalid option')
}