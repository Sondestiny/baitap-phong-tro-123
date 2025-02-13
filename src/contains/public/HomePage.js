import React from 'react'
import { Button, Item } from '../../components'
const HomePage = () => {
  return (
    <div className='flex justify-between gap-3' >
      <div className='w-[70%] bg-white rounded-md p-2'>
        
        <div className='w-full flex justify-between my-3'>
          <h4 className='text-2xl font-semibold'>Danh sách tin bài đăng</h4>
          <h3 className='align-text-bottom'>Cập nhật lúc 22 giờ 10 phút ngày 20/10/2023 </h3>
        </div>
        
        <div className='flex  items-center gap-3 my-2'>
        Sắp xếp: 
        <Button bgColor={'bg-gray-400'} text={'Mặc định'}></Button>
        <Button bgColor={'bg-gray-400'} text={'Mới nhất'}></Button>
        
        </div>
        
        <Item></Item>
      </div>
      <div className=' w-[30%] bg-white rounded-md'>
        siteBar
      </div>
    </div>
  )
}

export default HomePage
