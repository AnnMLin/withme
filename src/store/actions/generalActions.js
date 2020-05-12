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
  db.collection('allClasses').get()
  .then(snapshot => {
    const allClasses = {}
    snapshot.forEach(doc => {
      const date = doc.data().time.slice(0, 10)
      const classObj = doc.data()
      classObj.id = doc.id
      // console.log(classObj)
      if(allClasses[date]){
        allClasses[date].push(classObj)
      }else{
        allClasses[date] = [classObj]
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