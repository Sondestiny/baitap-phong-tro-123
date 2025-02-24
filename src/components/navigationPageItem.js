import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom"
const NavigationPageItem = ({text, pageNumber, currentPage}) => {
  const notActiveClass = "w-[40px] h-[40px] bg-[255, 255, 255] rounded-md text-center font-semibold shadow-sm hover:bg-gray-300"
  const activeClass = "w-[40px] h-[40px] bg-red-400 rounded-md text-center text-white font-semibold shadow-sm"
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()
  const handClick = (e) => {
    e.preventDefault()
    const Price = searchParams.get('codePrice')
    const Area = searchParams.get('codeArea')
    let searchparams = {
      page: pageNumber,
      codePrice: Price,
      codeArea: Area
    }
    if (!Price) { delete searchparams.codePrice}
    if (!Area) { delete searchparams.codeArea }
    setSearchParams(searchparams)
    // let Search = {}
    // navigate({
    //   pathname: '/',
    //   search: createSearchParams({codePrice ? codePrice : null, page: pageNumber}).toString(),
    // })
    
  }
  return (
    <button className={currentPage > 0 && pageNumber == currentPage ? activeClass : notActiveClass} onClick={pageNumber ? handClick : null}>
        {text}
    </button>
  )
}

export default NavigationPageItem
