import icons from '../../ultils/icons'
import { useNavigate, createSearchParams } from 'react-router-dom'
const {SlArrowRight} = icons
const Sitebar = ({Area, Price}) => {
    const navigate = useNavigate()
    
    const handlerPriceLink = (code) => {
        console.log(createSearchParams({codePrice: code}).toString())
        navigate({
            pathname: "/",
            search: createSearchParams({codePrice: code}).toString()
        })
    }
    const handlerAreaLink = (code) => {
        console.log(createSearchParams({codeArea: code}).toString())
        navigate({
            pathname: "/",
            search: createSearchParams({codeArea: code}).toString()
        })
    }
    return (
    <div className='py-4 flex flex-col gap-3'>
        <div className='bg-white rounded-md py-2 px-3'>
            <h3 className='font-semibold text-xl pb-4 '>Xem theo khoảng giá</h3>
            <div className='grid grid-cols-2 gap-2 pb-4'>
                {Price.map((item) =>
                    <div className='flex gap-1 items-center hover:text-red-500 cursor-pointer' onClick={() => handlerPriceLink(item.code)}><SlArrowRight color='red'/><span>{item.value}</span></div>
                )}
            </div>
        </div>

        <div className='bg-white rounded-md py-2 px-3'>
        <h3 className='font-semibold text-xl pb-4 ' >Xem theo diện tích</h3>
            <div className='grid grid-cols-2 gap-2 pb-4'>
                {Area.map((item) =>
                    <div className='flex gap-1 items-center hover:text-red-500 cursor-pointer' onClick={() => handlerAreaLink(item.code)} ><SlArrowRight color='red'/><span>{item.value}</span></div>
                )}
            </div>
        </div>
    </div>
    
  )
}

export default Sitebar
