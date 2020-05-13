import db from '../../firebase';

//ACTION TYPES
const DISPLAY_CLASSES_ON_SCHEDULE = 'DISPLAY_CLASSES_ON_SCHEDULE'

// const classes = {
//   '202005041800': {
//     name: 'Core Conditioning',
//     description: 'This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class. This is a conditioning class.',
//     price: 15,
//     link: 'zoom/j/123456789'
//   },
//   '202005071400': {
//     name: 'Floor Fluidity',
//     description: 'This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class. This is a dance class.',
//     price: 25,
//     link: 'zoom/j/987654321'
//   }
// }

//ACTION CREATOR
export const displayClassesOnSchedule = (classes) => ({type: DISPLAY_CLASSES_ON_SCHEDULE, classes})

//THUNK CREATOR
export const getAllClasses = () => dispatch => {
  // receive time zones of all places
  // convert to user time zone (either 1. convert to UTC then convert to local, or 2. local - original and add up the difference)
  // slice year month date
  db.collection('allClasses').get()
  .then(snapshot => {
    const allClasses = {}
    snapshot.forEach(doc => {
      const timeStamp = doc.data().time
      console.log('timeStamp', timeStamp)
      const localTime = new Date(timeStamp)
      console.log('timeStampAfterDate', localTime)

      // get year, month, day to put classes into objects by dates
      const classDate = new Date()
      classDate.setFullYear(localTime.getFullYear())
      classDate.setMonth(localTime.getMonth())
      classDate.setDate(localTime.getDate())

      // ORGANIZING CLASS OBJECT
      // Grab class data
      const classObj = doc.data()
      // add auto id to id key
      classObj.id = doc.id

      // allClasses(obj) > classDate(key) > (value)classObj(obj) > {name, price, desc, link, id} 
      if(allClasses[classDate]){
        allClasses[classDate].push(classObj)
      }else{
        allClasses[classDate] = [classObj]
      }
    })
    console.log(allClasses)
    dispatch(displayClassesOnSchedule(allClasses))
  })
  .catch(err => {
    console.log('Error getting documents', err)
  })
}

export const getClassesByInstructor = (instructor) => dispatch => {
  db.collection('allClasses').where('teacher', '==', instructor).get()
    .then(snapshot => {
      const classes = {}
      snapshot.forEach(doc => {
        classes[doc.data().time] = doc.data()
        classes[doc.data().time].id = doc.id
      })
      dispatch(displayClassesOnSchedule(classes))
    })
    .catch(err => {
      console.log('Error getting documents', err)
    })
}


const generalActions = {
  displayClassesOnSchedule,
  getAllClasses,
  getClassesByInstructor
}

export default generalActions