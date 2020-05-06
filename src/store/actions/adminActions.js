// ACTION TYPES
const ADD_CLASS_TO_SCHEDULE = 'ADD_CLASS_TO SCHEDULE'
const REMOVE_CLASS_FROM_SCHEDULE = 'REMOVE_CLASS_FROM_SCHDULE'

// ACTION CREATOR
export const addClassToSchedule = (classObj) => ({type: ADD_CLASS_TO_SCHEDULE, classObj})
export const removeClassFromSchedule = (classDate) => ({type: REMOVE_CLASS_FROM_SCHEDULE, classDate})

const adminActions = {
  addClassToSchedule,
  removeClassFromSchedule
}

export default adminActions