import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines", "Love Songs", "Game Shows", "Gadgets"];

const ButtonList = () => {
  return (
    <div className='flex w-screen overflow-x-scroll '>
      {list.map((item) => ( <Button name={item}/>))}
    </div>
      
  )
}

export default ButtonList