import React, { useEffect } from 'react'
import { useState } from 'react'
import InputForm from './inputForm'
import Button from '../../components/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'
const Login = () => {
  const location = useLocation()
  const{ from } = location.state
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {isLoggedIn} = useSelector(state => state.auth)
  console.log(isLoggedIn)
  const [isRegister, setIsRegister] = useState(from)
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({
    username: '',
    password: '',
    phone: ''
  })
  useEffect(() => {
    setIsRegister(from)
  },[from])
  
  useEffect(() => {
    isLoggedIn && navigate("/")
  }, [isLoggedIn])

  const checkValid = (payload) => {
    console.log(payload)
    setInvalidFields([])
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach(field => {
      if(field[1] === '') {setInvalidFields((prev)=> [...prev, {
        name: field[0],
        message: 'Bạn không được bỏ trống trường này'
      }])
      invalids++;
      console.log(`lỗi tăng lên ${invalids} do `, field)}
      
    })
    fields.forEach(field => {
      switch(field[0]) {
        case 'password': if (field[1].length < 6) {
          setInvalidFields((prev)=> [...prev, {
            name: field[0],
            message: 'Mật khẩu phải có tối thiểu 6 ký tự'
          }])
          invalids++;
          console.log(`lỗi tăng lên ${invalids} do `, field)
        }
          break;
        case 'phone': if (!+field[1]) {
          setInvalidFields((prev)=> [...prev, {
            name: field[0],
            message: 'Số điện thoại không hợp lệ'
          }])
          invalids++;
          console.log(`lỗi tăng lên ${invalids} do `, field)
        }
          break;
        default: break;
      }
    })
    return invalids;
  }
  const handlerSubmit = async function () {
    const finalPayload = isRegister ? payload : {phone: payload.phone, password: payload.password}
    let invalids = await checkValid(finalPayload)
    console.log(finalPayload)
    if (invalids === 0) {isRegister ? dispatch(actions.register(finalPayload)) : dispatch(actions.login(finalPayload))}
  }
  return (
    <div className='bg-white w-[600px] p-[30px] mx-auto rounded-md shadow-sm'>
      <h3 className='text-2xl font-semibold mx-auto'>{isRegister ? 'Đăng ký tài khoản mới': 'Đăng nhập'}</h3>
      <div className='w-full flex flex-col gap-3 mt-2'>
        {isRegister && <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'HỌ VÀ TÊN'} value={payload.username} setValue={setPayload} type={'username'}/>}
        <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'SỐ ĐIỆN THOẠI'} value={payload.phone} setValue={setPayload} type={'phone'}/>
        <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'MẬT KHẨU'} value={payload.password} setValue={setPayload} type={'password'}/>
          
        <Button 
          text= {isRegister ? 'ĐĂNG KÝ' : 'ĐĂNG NHẬP'} 
          textColor='text-color-white' 
          bgColor='bg-blue-300' 
          isFullWirth={true}
          onClick={handlerSubmit}
        />
      </div>
      <div className='mt-7 flex  item-center justify-between' >
        {isRegister 
        ?<small>Bạn đã có tài khoản ?<span className='text-sm text-[blue] hover:text-[orange] hover:underline cursor-pointer'
          onClick={()=> {setIsRegister(false)}}
          >Đăng nhập ngay
          </span>
          </small> 
        :<>
        <small className='text-sm text-[blue] hover:text-[orange] hover:underline cursor-pointer'>Bạn quên mật khẩu</small>
        <small 
          className='text-sm text-[blue] hover:text-[orange] hover:underline cursor-pointer' 
          onClick={()=> {setIsRegister(true)}}>
            Tạo tài khoản mới
        </small>
        </>}
        
      </div>
    </div>
  )
}

export default Login