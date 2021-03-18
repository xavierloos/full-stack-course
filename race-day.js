let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true
let runnerAge = 18

if (registeredEarly && runnerAge >= 18) {
  raceNumber+= 1000
}

if (registeredEarly && runnerAge >= 18) {
  console.log(`You will race at 9:30 am.Race number ${raceNumber}`)
}else if(!registeredEarly && runnerAge >=18){
  console.log(`You will race at 11:00 am.Race number ${raceNumber}`)
}

