export const getWeekDay = (num) => {
  switch(num){
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return 'ERROR!'
  }
}

export const getMonthInLetters = (num) => {
  switch(num){
    case 1:
      return 'Jan'
    case 2:
      return 'Feb'
    case 3:
      return 'Mar'
    case 4:
      return 'Apr'
    case 5:
      return 'May'
    case 6:
      return 'Jun'
    case 7:
      return 'Jul'
    case 8:
      return 'Aug'
    case 9:
      return 'Sep'
    case 10:
      return 'Oct'
    case 11:
      return 'Nov'
    case 12:
      return 'Dec'
  }
}

export const get12HourDisplay = (num) => {
  let amOrPm = 'AM'
  let hour = num
  if(num >= 12){
    amOrPm = 'PM'
  }
  if(num > 12){
    hour = num%12
  }
  return {hour, amOrPm}  
}

export const get2DigitsMinute = (num) => {
  if(num < 10){
    num = '0'+ num
  }
  return num + ''
}