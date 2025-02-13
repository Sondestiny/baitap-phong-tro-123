import React from 'react'

const ProvinceBtn = ({text, imgSrc, onClickHandler}) => {
  return (
    <div 
        className=' object-contain text-blue-600 shadow-md hover:text-orange-600 hover:shadow-lg'
        onClick={onClickHandler}
        >
      <img
        className='w-[190px] h-[110px] rounded-t-md'
        src={imgSrc}
        alt= {text}>
      </img>
      <div className='w-full font-medium text-center items-center'>
        {text}
      </div>
    </div>
  )
}

export default ProvinceBtn
