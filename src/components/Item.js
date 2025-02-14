import React, { useState } from 'react'
import icons from '../ultils/icons'
const {BsFillBookmarkStarFill, FaStar, RiHeartLine} = icons
const images = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/eca9b02f-1ebe-4f70-8ac5-0aac217e949c-1568169924-1584156094_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/img-20210401-155156-1617952227_1622168155.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/a33d92e7-f83c-48eb-97dc-256eb8242640-1568169934-1584156094_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/dc306b27-c5c3-4103-b128-ce140cfdae12-1568169927-1584156094_1622168155.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/img-20210401-155237-1617952263_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/3f5b6d73-3446-43dd-b0cc-295104f60e44-1568169914-1584156093_1622168157.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/img-20200508-151907-1589090895_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/07b35ce2-2dfc-4c2e-a9fa-7ab35377f4cf-1568169928-1584156094_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/74ede0a1-e618-4640-80ca-ebcb0d5f2f62-1568169916-1584155928_1622168156.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/05/28/8d9f7fb4-b7de-40de-9cec-ae409252f1f2-1568169920-1584156094_1622168157.jpg"
  ]
const Item = () => {
  // const [isHoverHeart, setIsHoverHeart] = useState(false)
  // console.log(isHoverHeart)
  return (
    <div className='flex gap-2 border-t-2 p-2 border-orange-400'>
      <div className='w-2/5 grid grid-cols-2 grid-rows-2 gap-1 relative'>
            <img className='object-cover w-full h-full' src={images[0]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[1]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[2]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[3]} alt='image'/>
            <span className='bg-gray-500 text-white opacity-75 rounded-md px-1 absolute left-2 bottom-2' > 4 ảnh </span>
            <span 
              className='text-white absolute right-2 bottom-2'
              // onClick={setIsHoverHeart(true)}
            >
              {/* {isHoverHeart ? <RiHeartLine size={26} color={ 'red' }/> : <RiHeartLine size={26}/>} */}
              <RiHeartLine size={24} color='red'></RiHeartLine>
            </span>
      </div>
      <div className='w-3/5 p-2'>
        <div className='flex justify-between gap-3 items-center'> 
          <a className=' text-red-600 font-bold'> 
              <FaStar color='yellow' size={18} className=' star-icon'/>
              <FaStar color='yellow' size={18} className=' star-icon'/>
              <FaStar color='yellow' size={18} className=' star-icon'/>
              <FaStar color='yellow' size={18} className=' star-icon'/>
              <FaStar color='yellow' size={18} className=' star-icon'/>
              CHO THUÊ CĂN HỘ HOẶC VĂN PHÒNG LÀM VIỆC
          </a>
          <div className=' w-1/10 flex justify-end'> 
              <BsFillBookmarkStarFill color='orange' size={24}></BsFillBookmarkStarFill>
          </div> 
        </div>

        <div className='flex justify-between items-center my-2'>
          <span className='font-bold text-green-600'> 3.7 triệu / tháng </span>
          <span> 28 m2 </span>
          <span> Quận Tân Bình, Thành phố Hồ Chí Minh </span>
        </div>

        <div className='text-gray-400'>
        Homestay Hoàng Phúc - CAO CẤP - ĐẦY ĐỦ1 TIỆN NGHI - CHUẨN 2 SAO- Trọn gói chỉ 800k tháng đầu - các tháng sau chỉ từ 1tr đã bao gồm: tiền phòng, điện nước,…
        </div>

        <div className='flex justify-between my-2'>
          <div className='flex items-center gap-2'>
            <img className='w-[36px] h-[36px] object-cover rounded-full' src='https://mastodon.sdf.org/system/accounts/avatars/000/108/313/original/035ab20c290d3722.png' alt='user-img'/>
            <p> Tuệ Minh</p>
          </div>

          <div className=' flex gap-2'>
            <button type='button' className='bg-blue-400 text-white rounded-lg px-3 py-2'> Gọi 0465123512 </button>
            <button type='button' className='border-4 border-indigo-500 text-blue-500 font-bold rounded-lg px-3 py-2' > Gọi Zalo </button>
          </div>
        </div>     
      </div>
    </div>
  )
}
export default Item
