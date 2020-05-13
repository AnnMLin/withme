import React from 'react'
import { useParams } from 'react-router-dom'

const SingleClass = () => {
  const { classId } = useParams()
  return(
    <div>SingleClass, id={classId}</div>
  )
}

export default SingleClass