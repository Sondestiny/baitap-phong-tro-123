import { useNavigate, createSearchParams } from "react-router-dom"
const NavigationPageItem = ({text, pageNumber, currentPage}) => {
  const notActiveClass = "w-[40px] h-[40px] bg-[255, 255, 255] rounded-md text-center font-semibold shadow-sm hover:bg-gray-300"
  const activeClass = "w-[40px] h-[40px] bg-red-400 rounded-md text-center text-white font-semibold shadow-sm"
  const navigate = useNavigate();
  
  const handClick = (e) => {
    e.preventDefault()

    navigate({
      pathname: '/',
      search: createSearchParams({page: pageNumber}).toString(),
    })
  }
  return (
    <button className={currentPage > 0 && pageNumber == currentPage ? activeClass : notActiveClass} onClick={pageNumber ? handClick : null}>
        {text}
    </button>
  )
}

export default NavigationPageItem
