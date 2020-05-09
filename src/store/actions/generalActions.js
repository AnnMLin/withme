import db from "../../firebase";

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
export const getClasses = () => dispatch => {
  db.collection('classes').get()
  .then((snapshot) => {
    const classes = {}
    snapshot.forEach((doc) => {
      classes[doc.id] = doc.data()
    })
    dispatch(displayClassesOnSchedule(classes))
  })
  .catch((err) => {
    console.log('Error getting documents', err)
  })
}


const generalActions = {
  displayClassesOnSchedule,
  getClasses
}

export default generalActions