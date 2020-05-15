import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../store/actions'
import { useParams, Link } from 'react-router-dom'

const SingleClass = () => {
  const { classId } = useParams()
  const singleClass = useSelector(state => state.singleClass)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.generalActions.getSingleClass(classId))
  }, [])

  console.log(singleClass)

  return(
    <div id='single-class'>
      <Link to='/'>
        <div id='back-arrow-container'>
          <img id='back-arrow' src={process.env.PUBLIC_URL +  '/icons/arrow-thin.png'} alt=''/>
        </div>
      </Link>
      {singleClass.id === classId ?
      <div id='class-detail-container'>
        <div>
          <div id='class-instructor'>{singleClass.teacher}</div>
          <div id='class-name'>{singleClass.name}</div>
          <div>{singleClass.day}, {singleClass.month}/{singleClass.date}</div>
          <div>{singleClass.hour}:{singleClass.minute} {singleClass.amOrPm} | {singleClass.length}min</div>
        </div>
        <div>
          <div id='class-desc'>{singleClass.desc}</div>
        </div>
        <div>
          <div id='class-price'>{singleClass.price}</div>
        </div>
      </div> :
      'LOADING...' }
    </div>
  )
}

export default SingleClass