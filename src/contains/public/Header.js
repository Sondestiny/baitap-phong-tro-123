import React, { useMemo } from 'react'
import logo from '../../assets/logo-phongtro.jpg';
import Button from '../../components/Button';
import icons from '../../ultils/icons';
import { useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useCallback } from 'react';
import {path} from '../../ultils/constant';
import * as actions from '../../store/actions'
const {AiOutlinePlusSquare} = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth)
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN,{ state: { from: flag } } )
  },[])
  return (
    <div className='w-1100  flex items-center justify-between px-3'>
      <Link to={{
        pathname: path.HOME,
        state: {},
      }}>
        <img src={logo} alt='logo' className='w-[240px] h-[70px] object-contain'/>
      </Link>
      <div className='flex items-center justify-center gap-2'>
        <span>Phòng trọ 123 số một Việt Nam!</span>
        {!isLoggedIn ? 
          <div className='flex items-center justify-center gap-2'>
            <Button value='login' text='Đăng nhập' textColor='text-color-white' bgColor='bg-blue-300' onClick={()=> {goLogin(false)}}/>
            <Button value='register' text='Đăng ký' textColor='text-color-white' bgColor='bg-blue-300' onClick={()=> {goLogin(true)}}/>
          </div> : 
          <div>
            <Button value='logout' text='Đăng xuất' textColor='text-color-white' bgColor='bg-red-500' onClick={()=> {  dispatch(actions.logout()) }}/>
          </div>}
        
        <Button text='Đăng tin mới' textColor='text-color-white' bgColor='bg-blue-300' IconsAfter={AiOutlinePlusSquare}/>
      </div>
    </div>
  )
}

export default Header