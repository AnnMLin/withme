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
      <div>
        <div>{singleClass.name}</div>
        <div>{singleClass.teacher}</div>
        <div>{singleClass.price}</div>
      </div> :
      'LOADING...' }
    </div>
  )
}

export default SingleClass