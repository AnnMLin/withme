import db from '../../firebase';
import { allClassesObjCreator, getWeekDay, getMonthInLetters, get2DigitsMinute, get12HourDisplay,  } from '../../helperFunctions'

//ACTION TYPES
const DISPLAY_CLASSES_ON_SCHEDULE = 'DISPLAY_CLASSES_ON_SCHEDULE'
const DISPLAY_SINGLE_CLASS = 'DISPLAY_SINGLE_CLASS'

//ACTION CREATOR
export const displayClassesOnSchedule = (classes) => ({type: DISPLAY_CLASSES_ON_SCHEDULE, classes})
export const displaySingleClass = (singleClass) => ({type: DISPLAY_SINGLE_CLASS, singleClass})

//THUNK CREATOR
export const getSingleClass = classId => dispatch => {
  db.collection('allClasses').doc(classId).get()
    .then(doc => {
      if(!doc.exists){
        console.log('No such Document!')
      }else{
        const singleClass = doc.data()
        const time = new Date(singleClass.time)
        singleClass.day = getWeekDay(time.getDay())
        singleClass.month = getMonthInLetters(time.getMonth())
        singleClass.date = time.getDate()
        const {hour, amOrPm} = get12HourDisplay(time.getHours())
        singleClass.hour = hour
        singleClass.amOrPm = amOrPm
        singleClass.minute = get2DigitsMinute(time.getMinutes())
        singleClass.id = doc.id
        dispatch(displaySingleClass(singleClass))
      }
    })
    .catch(err => {
      console.log('Error getting document', err)
    })
}

export const getAllClasses = () => dispatch => {
  
  db.collection('allClasses').get()
    .then(snapshot => {
      const allClasses = allClassesObjCreator(snapshot)
      dispatch(displayClassesOnSchedule(allClasses))
    })
    .catch(err => {
      console.log('Error getting documents', err)
    })
}

export const getClassesByInstructor = (instructor) => dispatch => {
  db.collection('allClasses').where('teacher', '==', instructor).get()
    .then(snapshot => {
      const classes = allClassesObjCreator(snapshot)
      dispatch(displayClassesOnSchedule(classes))
    })
    .catch(err => {
      console.log('Error getting documents', err)
    })
}


const generalActions = {
  displayClassesOnSchedule,
  getAllClasses,
  getClassesByInstructor,
  getSingleClass
}

export default generalActions