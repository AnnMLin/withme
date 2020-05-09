import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'


const AllClasses = () => {

  const allClasses = useSelector(state => state.allClasses)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.getClasses())
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
//   componentDidMount() {
//     // db.collection('classes').get()
//     // .then((snapshot) => {
//     //   const classes = {}
//     //   snapshot.forEach((doc) => {
//     //     classes[doc.id] = doc.data()
//     //   })
//     //   console.log('HERE!!')
//     //   this.props.displayClasses(classes)
//     // })
//     // .catch((err) => {
//     //   console.log('Error getting documents', err)
//     // })
//     console.log('DID MOUNT')
//     // console.log('TYPEOF THUNK:', typeof this.props.getClasses())
//     console.log('TYPEOF THUNK:', typeof getClasses())
//   }
//   render() {
//     const allClasses = this.props.allClasses
//     return(
//       <div id='classes'>
//         {allClasses ?
//         Object.keys(allClasses).map((classDate) => (
//           <div key={classDate} className='class-item'>
//             <div>{classDate}</div>
//             <div>{allClasses[classDate].name}</div>
//           </div>
//         )):
//         'NO CLASS TO DISPLAY'}
//       </div>
//     )
//   }
// }

// // const Classes = props => {
// //   const allClasses = props.allClasses

// //   useEffect(() => {
// //     db.collection('classes').get()
// //   .then((snapshot) => {
// //     const classes = {}
// //     snapshot.forEach((doc) => {
// //       classes[doc.id] = doc.data()
// //     })
// //     console.log('HERE!!')
// //     props.displayClasses(classes)
// //   })
// //   .catch((err) => {
// //     console.log('Error getting documents', err)
// //   })
// //   }, [])

// //   return (
// //     <div id='classes'>
// //       {allClasses ?
// //       Object.keys(allClasses).map((classDate) => (
// //         <div key={classDate} className='class-item'>
// //           <div>{classDate}</div>
// //           <div>{allClasses[classDate].name}</div>
// //         </div>
// //       )):
// //       'NO CLASS TO DISPLAY'}
// //     </div>
// //   )
// // }

// const mapState = state => ({
//   allClasses: state.allClasses
// })

// const mapDispatch = dispatch => ({
//   // getClasses: () => dispatch(allActions.generalActions.getClasses()),
//   displayClasses: (classes) => dispatch(allActions.generalActions.displayClassesOnSchedule(classes))
// })

// export default connect(mapState, mapDispatch)(Classes)