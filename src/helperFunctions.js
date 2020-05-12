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
    case 0:
      return 'Jan'
    case 1:
      return 'Feb'
    case 2:
      return 'Mar'
    case 3:
      return 'Apr'
    case 4:
      return 'May'
    case 5:
      return 'Jun'
    case 6:
      return 'Jul'
    case 7:
      return 'Aug'
    case 8:
      return 'Sep'
    case 9:
      return 'Oct'
    case 10:
      return 'Nov'
    case 11:
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