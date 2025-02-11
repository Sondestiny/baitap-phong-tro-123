import {Header, Navigation, Search} from '../public';
import { Outlet } from 'react-router-dom';
import { text } from '../../ultils/constant'
const Home = () => {
  return (
    <div className='w-screen h-full mx-auto border-red-500 flex flex-col items-center justify-start gap-2'>
      <Header></Header>
      <Navigation></Navigation>
      
      <Search></Search>
      
      <div className='w-[1100px]'>
        <h1 className='text-[28px] font-bold'>{text.HOME_TITLE}</h1>
        <h3>{text.HOME_DESCRIPTION}</h3>
      </div>
      <div className='w-full flex flex-col items-center pt-3'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Home
