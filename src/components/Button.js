import React from 'react'
import { memo } from 'react'
const Button = ({text, textColor, bgColor, IconsAfter, onClick, isFullWirth}) => {
    return (
    <button 
      className={`py-2 px-2 ${textColor} ${bgColor} ${isFullWirth && 'w-full'} rounded-md overline-none hover:underline flex justify-center gap-1`} 
      onClick={onClick}>
        
        <span>{text}</span>
        {IconsAfter && <IconsAfter className='my-auto'/>}
    </button>
  ) 
}
export default memo(Button)
