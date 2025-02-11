import React from 'react'
import { NavLink } from "react-router-dom"
import {path} from '../../ultils/constant'
const Navigation = () => {
  const Categories = [
    {
        title: 'Nhà nguyên căn',
        href: path.NHA_CHO_THUE,
    },
    {
        title: 'Căn hộ chung cư',
        href: path.CAN_HO_CHUNG_CU,
    },
    {
        title: 'Căn hộ mini',
        href: path.CAN_HO_MINI,
    },
    {
        title: 'Căn hộ dịch vụ',
        href: path.CAN_HO_DICH_VU,
    }
  ]
  const active = "flex items-center w-full h-full bg-red-400 text-white'";
  const notActive = "flex items-center h-full ";
  return (
    <div className='w-screen h-[40px] bg-primary text-white flex flex-row'>
      <div className='w-1100 m-auto h-full flex flex-row justify-start items-center gap-3 text-sm font-medium '>
        <div className='h-full flex items-center  hover:bg-red-400 hover:text-white'>
          <NavLink to={path.HOME} className={({isActive}) => isActive ? active : notActive }>
            Trang chủ
          </NavLink>
        </div>

        {Categories.map( Category => {
          return (
            <div className='h-full flex items-center  hover:bg-red-400 hover:text-white'>
            <NavLink to={Category.href} className={({isActive}) => isActive ? active : notActive }>
              {Category.title}
            </NavLink>
          </div>
          )
        })}

      </div>
    </div>
  )
}

export default Navigation
