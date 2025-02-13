
import { text, location } from '../ultils/constant'
import {ProvinceBtn} from '../components';
const Province = () => {
  return (
    <div className='w-[1100px]'>
        <h1 className='text-[28px] font-bold'>{text.HOME_TITLE}</h1>
        <h3>{text.HOME_DESCRIPTION}</h3>
        <div className='flex flex-row justify-center gap-3 mt-2 py-2'>
          {location.map(item => 
            <ProvinceBtn
              key={item.id}
              text= {item.text} 
              imgSrc= {item.imgSrc} 
          />)}
        </div>
    </div>
  )
}

export default Province
