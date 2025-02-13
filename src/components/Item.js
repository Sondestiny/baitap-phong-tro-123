import React from 'react'
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
  return (
    <div className='flex gap-2'>
      <div className='w-2/5 grid grid-cols-2 grid-rows-2 gap-1'>
            <img className='object-cover w-full h-full' src={images[0]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[1]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[2]} alt='image'/>
            <img className='object-cover w-full h-full' src={images[3]} alt='image'/>
      </div>
      <div className='w-3/5'>
      
      
      </div>
    </div>
  )
}

export default Item
