import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import { getWeekDay, getMonthInLetters, get12HourDisplay, get2DigitsMinute } from '../helperFunctions'
import { Link } from 'react-router-dom'

const AllClasses = () => {

  const allClasses = useSelector(state => state.allClasses)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.getAllClasses())
    // dispatch(allActions.generalActions.getClassesByInstructor('Rachele Ribera'))
  }, [])

  return (
    <div id='all-classes'>
      {allClasses ? 
      Object.keys(allClasses).map(d => {
        const classDate = new Date(d)
        const month = getMonthInLetters(classDate.getMonth())
        const date = classDate.getDate()
        const day = getWeekDay(classDate.getDay())
        return(
          <div key={d} className='a-class-item'>
            <div className='a-date'>{`${day}, ${month}/${date}`}</div>
            {allClasses[d]
              .sort((a, b) => {
                const aDate = new Date(a.time)
                const bDate = new Date(b.time)
                return aDate - bDate
              })
              .map(classObj => {
                const {id, name, time, teacher} = classObj
                const date = new Date(time)
                const {hour, amOrPm} = get12HourDisplay(date.getHours())
                const minute = get2DigitsMinute(date.getMinutes())
                return(
                  <div key={classObj.id} className='a-class'>
                    <div className='a-time'>{`${hour}:${minute}${amOrPm}`}</div>
                    <div className='a-name-container'>
                      <div>{name}</div>
                      <div className='a-teacher'>{teacher}</div>
                      <Link to={`/class/${id}`} className='a-view-details-container'>
                        <div className='a-view-details'>View details ></div>
                      </Link>
                    </div>
                    <Link to='/stripe' className='btn a-class-book' type='book'>BOOK</Link>
                  </div>
                )
              })}
          </div>
        )
      }) :
      'NO CLASS TO DISPLAY'}
    </div>
  )
}

export default AllClasses