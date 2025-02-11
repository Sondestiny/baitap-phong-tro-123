import React from 'react'

const SearchItem = ({text, fistIcon, secondIcon, fontWeight}) => {
  return (
    <div className='bg-white rounded-md w-full items-center px-3 py-2 flex justify-between'>
      
      <div className='flex items-center gap-1 justify-start'>
        {fistIcon}
        <span className={ `${ fontWeight && 'font-medium' } overflow-hidden whitespace-nowrap text-ellipsis` }>{text}</span>
      </div>
      
      {secondIcon}
    </div>
  )
}

export default SearchItem
