import React from 'react'
import SearchItem from '../../components/SearchItem'
import Button from '../../components/Button'
import { MdNavigateNext, MdOutlineAddHomeWork} from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiArea } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className='w-[1100px] h-[55px] px-2 py-2 flex flex-row justify-between gap-2 bg-yellow-400 rounded-lg'>
      <SearchItem fistIcon={<MdOutlineAddHomeWork/>} secondIcon={<MdNavigateNext/>} text={'Phòng trọ, nhà trọ'}></SearchItem>
      <SearchItem fistIcon={<CiLocationOn />} secondIcon={<MdNavigateNext/>} text={'Toàn quốc'}></SearchItem>
      <SearchItem fistIcon={<IoPricetagOutline/>} secondIcon={<MdNavigateNext/>} text={'Chọn giá'}></SearchItem>
      <SearchItem fistIcon={<BiArea/>} secondIcon={<MdNavigateNext/>} text={'Chọn diện tích'}></SearchItem>
      {/* <Button 
                text= {'Search'} 
                textColor='text-color-white' 
                bgColor='bg-blue-300' 
                isFullWirth={true}
                // onClick={}
      /> */}
      <button
        type='button'
        className='bg-blue-600 py-2 px-4 w-full rounded-md outline-none text-white font-semibold flex justify-center items-center gap-2'
      >
        <IoIosSearch></IoIosSearch>
        Tìm kiếm  
      </button>
    </div>
  )
}

export default Search