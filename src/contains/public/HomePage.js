import React, { useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useSearchParams} from 'react-router-dom';
import * as actions from '../../store/actions'
import { Button, Item } from '../../components'
import {NavigationPage} from '../public'
const HomePage = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page')
  const {count, rows} = useSelector(state => state.post).post

  useEffect( () => {
    
    dispatch(actions.GetLimit(page ? page : 1))
    
  } ,[page])
  
  
  return (
    <div className='flex justify-between gap-3' >
      <div className='w-[70%] rounded-md p-2'>
        
        <div className='w-full flex justify-between my-3'>
          <h4 className='text-2xl font-semibold'>Danh sách tin bài đăng</h4>
          <h3 className='align-text-bottom'>Cập nhật lúc 22 giờ 10 phút ngày 20/10/2023 </h3>
        </div>
        
        <div className='flex  items-center gap-3 my-2'>
        Sắp xếp: 
        <Button bgColor={'bg-gray-400'} text={'Mặc định'}></Button>
        <Button bgColor={'bg-gray-400'} text={'Mới nhất'}></Button>
        
        </div>
        
          {rows ? rows.map((item) => {
              const {images, star, title, description, attribute, address, user} = item;
              return (
                <Item
                  images={JSON.parse(images.images)}
                  // images={images} 
                  star={+star.charAt(5)}
                  title={title} 
                  price = {attribute.price}
                  acreage = {attribute.acreage}
                  address={address}
                  description = {description}
                  username={user.username}
                  phone={user.phone}
                  zalo={user.zalo}
                />
              )
            }) : ''}
        <NavigationPage currentPage={page ? page : 1} totalPage={Math.floor(count ? count/5 : 0)} ></NavigationPage>
        <div className='h-[100px]'></div>
      </div>
      <div className=' w-[30%] bg-white rounded-md'>
        siteBar
      </div>
    </div>
  )
}

export default HomePage
