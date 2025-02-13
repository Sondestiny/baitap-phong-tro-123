import { Province } from '../../components';
import {Header, Navigation, Search} from '../public';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-start gap-2'>
      <Header></Header>
      <Navigation></Navigation>
      <Search></Search>
      <Province/>

      <div className='w-1100'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Home
