import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import { getWeekDay, getMonthInLetters, get12HourDisplay, get2DigitsMinute } from '../helperFunctions'
import { Link } from 'react-router-dom'

const AllClasses = () => {

  const allClasses = useSelector(state => state.allClasses)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.getClasses())
  }, [])

  return (
    <div id='classes'>
      {allClasses ?
      Object.keys(allClasses).map((id) => {
        const classDate = new Date(id)
        const month = getMonthInLetters(classDate.getMonth())
        const date = classDate.getDate()
        const day = getWeekDay(classDate.getDay())
        const {hour, amOrPm} = get12HourDisplay(classDate.getHours())
        const minute = get2DigitsMinute(classDate.getMinutes())
        
        return (
          <div key={id} className='a-class-item'>
          <div className='a-date'>{`${day}, ${month}/${date}`}</div>
          <div className='a-class'>
            <div className='a-time'>{`${hour}:${minute}${amOrPm}`}</div>
            <Link to={`/${id}`} className='a-name'>{allClasses[id].name}</Link>
            <div className='btn' type='sign-up' /*onClick={}*/>BOOK</div>
          </div>
        </div>
        )
      }) :
      'NO CLASS TO DISPLAY'}
    </div>
  )
}

export default AllClasses