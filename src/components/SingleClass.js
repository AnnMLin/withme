import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import { useParams, Link } from 'react-router-dom'

const SingleClass = () => {
  const { classId } = useParams()
  const {id, teacher, name, day, month, date, hour, minute, amOrPm, length, price, desc} = useSelector(state => state.singleClass)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.getSingleClass(classId))
  }, [])

  // console.log(singleClass)

  return(
    <div id='single-class'>
      <Link to='/'>
        <div id='back-arrow-container'>
          <img id='back-arrow' src={process.env.PUBLIC_URL +  '/icons/arrow-thin.png'} alt=''/>
        </div>
      </Link>
      {id === classId ?
      <div id='class-detail-container'>
        <div id='class-header-container'>
          <div id='class-instructor'>{teacher}</div>
          <div id='class-name'>{name}</div>
          <div id='class-date'>{day} | {month} {date} | {hour}:{minute} {amOrPm}</div>
          <div id='class-time'>{length}min | ${price}</div>
        </div>
        <div id='class-desc-container'>
          <div id='class-desc'>{desc}</div>
        </div>
        <div id='book-container'>
          <Link to='/payment-method' className='btn' id='book'>BOOK</Link>
        </div>
      </div> :
      'LOADING...' }
    </div>
  )
}

export default SingleClass