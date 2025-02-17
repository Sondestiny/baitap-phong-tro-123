import { Home, Login, WholeHouse, Apartment, MiniApartment, ServicedApartment, HomePage} from './contains/public';
import { Routes, Route } from 'react-router-dom';
import {path} from './ultils/constant';
function App() {
  return (
    <div className="w-screen bg-gray-200">
      <Routes>
        <Route path={path.HOME || '/'} element={<Home/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path={path.NHA_CHO_THUE} element={<WholeHouse/>}/>
          <Route path={path.CAN_HO_CHUNG_CU} element={<Apartment/>}/>
          <Route path={path.CAN_HO_MINI} element={<MiniApartment/>}/>
          <Route path={path.CAN_HO_DICH_VU} element={<ServicedApartment/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
