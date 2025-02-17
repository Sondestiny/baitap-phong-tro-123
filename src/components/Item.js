import React, { useState } from 'react'
import icons from '../ultils/icons'
const {BsFillBookmarkStarFill, FaStar, RiHeartLine} = icons
const Item = ({images, star, title, price, acreage, address, description, username, phone, zalo}) => {
  // const [isHoverHeart, setIsHoverHeart] = useState(false)
  // console.log(isHoverHeart)
  let newStar = []
  for (let i = 1; i <= star; i++) {
    newStar.push(<FaStar className='star-icon' color='yellow' size={16}></FaStar>)
  };
  let newImage = []
  for (let i = 0; i < 4; i++) {
    newImage.push(<img className='object-cover w-[150px] h-[120px]' key={i} src={images[i]} alt='image'/>)
  };
  return (
    <div className='flex gap-2 bg-white p-2 shadow-md my-2 h-[280px] rounded-md'>
      <div className='w-2/5 grid grid-cols-2 grid-rows-2 gap-1 relative'>
            {newImage}
            <span className='bg-gray-500 text-white opacity-75 rounded-md px-1 absolute left-2 bottom-4' > {images.length} ảnh </span>
            <span 
              className='text-white absolute right-2 bottom-4'
              // onClick={setIsHoverHeart(true)}
            >
              <RiHeartLine size={24} color='red'></RiHeartLine>
            </span>
      </div>
      <div className='w-3/5 p-2 flex flex-col justify-around'>
        <div className='flex justify-between gap-3 items-center h-1/6'> 
          <a className=' text-red-600 font-bold truncate'>
            {newStar}
            {title}
          </a>
          <div className=' w-1/10 flex justify-end'> 
              <BsFillBookmarkStarFill color='orange' size={24}></BsFillBookmarkStarFill>
          </div> 
        </div>

        <div className='flex justify-between items-center my-2 h-1/6'>
          <span className='font-bold text-green-600 text-sm'>{price}</span>
          <span className='text-sm'>{acreage}</span>
          <span className='w-1/3 h-full text-sm overflow-hidden text-ellipsis'>{address}</span>
        </div>

        <p className='text-gray-400 overflow-hidden text-ellipsis h-1/2'>
        {description}
        </p>

        <div className='flex justify-between my-2 h-1/6'>
          <div className='flex items-center gap-2'>
            <img className='w-[36px] h-[36px] object-cover rounded-full' src='https://mastodon.sdf.org/system/accounts/avatars/000/108/313/original/035ab20c290d3722.png' alt='user-img'/>
            <p>{username}</p>
          </div>
          <div className=' flex gap-2'>
            <button type='button' className='bg-blue-400 text-white rounded-lg px-3 py-2'>{phone.replace('tel:','')}</button>
            <button type='button' className='border-4 border-indigo-500 text-blue-500 font-bold rounded-lg px-3 py-2 text-sm' number={zalo.replace('https://zalo.me/','')} >Zalo</button>
          </div>
        </div>     
      </div>
    </div>
  )
}
export default Item
