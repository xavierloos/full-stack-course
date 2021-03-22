// 1. The first problem to solve is determining how many hours of sleep you got each night of the week. You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
// 2.The function should accept a day as an argument and return the number of hours you slept that night. For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8. Use an if / else or switch statement to implement this.
// 3. Test the function by calling it multiple times and printing the results to the console. You can remove the tests when you know you function works.
// 4. Now that you’ ve written a function to get the sleep hours for each night, we need to do three things:
// - Get the total sleep hours that you actually slept
// - Get the ideal sleep hours that you prefer
// - Calculate the sleep debt, if any.
// 5. Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week.Add the results together and return the sum using an implicit return.
// 6. To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters. You’ll want to multiply by 7 to get the total hours you prefer per week.
// 7. Test your two new functions by calling them and printing the results to the console. You can remove the tests when you know your functions works.
// 8.Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
// 9.Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
// - If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// - If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// - If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

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
const getActualSleepHours = () => {
  let sum = getSleepHours('monday')
  sum += getSleepHours('tuesday')
  sum += getSleepHours('wednesday')
  sum += getSleepHours('thurday')
  sum += getSleepHours('friday')
  sum += getSleepHours('saturday')
  sum += getSleepHours('sunday')
  return sum
}
const getIdealSleepHours = () => {
  const idealHours = 9
  return idealHours * 7
}
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get  some rest.`)
  }
}