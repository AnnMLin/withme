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
                const {id, name, time} = classObj
                const date = new Date(time)
                const {hour, amOrPm} = get12HourDisplay(date.getHours())
                const minute = get2DigitsMinute(date.getMinutes())
                return(
                  <div key={classObj.id} className='a-class'>
                    <div className='a-time'>{`${hour}:${minute}${amOrPm}`}</div>
                    <Link to={`/${id}`} className='a-name'>{name}</Link>
                    <div className='btn' type='sign-up'>BOOK</div>
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