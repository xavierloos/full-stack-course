// 1. The first problem to solve is determining how many hours of sleep you got each night of the week. You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
// 2.The function should accept a day as an argument and return the number of hours you slept that night. For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8. Use an if / else or switch statement to implement this.
// 3. Test the function by calling it multiple times and printing the results to the console. You can remove the tests when you know you function works.
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8
      break
    case 'tuesday':
      return 8
      break
    case 'wednesday':
      return 8
      break
    case 'thurday':
      return 8
      break
    case 'friday':
      return 8
      break
    case 'saturday':
      return 8
      break
    case 'sunday':
      return 8
      break
  }
}