// 1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// 2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
}