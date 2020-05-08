import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import db from '../firebase'

const AllClasses = () => {
  console.log('ENV:', process.env)
  console.log('DB:', db)
  const allClasses = useSelector(state => state.allClasses)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.displayClassesOnSchedule())
  }, [])

  return (
    <div id='classes'>
      {allClasses ?
      Object.keys(allClasses).map((classDate) => (
        <div key={classDate} className='class-item'>
          <div>{classDate}</div>
          <div>{allClasses[classDate].name}</div>
        </div>
      )):
      'NO CLASS TO DISPLAY'}
    </div>
  )
}

export default AllClasses

// class Classes extends React.Component {
//   render() {
//     console.log(this.props.classes)
//     return(
//       <div id='classes'>
//         {Object.keys(this.props.classes).map((classDate) => (
//           <div>
//             <div>{classDate}</div>
//             <div>{this.props.classes[classDate].name}</div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }


// const mapState = state => ({
//   classes: state.classes
// })

// const mapDispatch = dispatch => ({
//   addClass: classObj => dispatch(addClass(classObj))
// })

// export default connect(mapState, mapDispatch)(Classes)