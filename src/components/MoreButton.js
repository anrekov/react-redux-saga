import React from 'react'
import { useDispatch } from 'react-redux'
import { loadJoke } from '../redux/jokes/actions'

export const MoreButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(loadJoke())
  }

  return (
    <div className='block more' onClick={handleClick}>
      MORE!!!!
    </div>
  )
}
