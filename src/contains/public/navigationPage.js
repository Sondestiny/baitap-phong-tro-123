import { NavigationPageItem } from "../../components"

const NavigationPage = ({currentPage, totalPage}) => {
  const beforeSecondPage = currentPage -2
  const beforePage = currentPage -1
  const nextPage = +currentPage + 1
  const nextSecondPage = +currentPage + 2
  return (
    <div className='flex justify-center gap-1'>
      {+currentPage !== 1 && <NavigationPageItem text={1} key={1} pageNumber={1} currentPage={currentPage}/>}

      {+currentPage - 1 > 2 && <NavigationPageItem text='...'/>}

      {beforeSecondPage > 1 && <NavigationPageItem text={beforeSecondPage} key={beforeSecondPage} pageNumber={beforeSecondPage} currentPage={currentPage}/>}
      {beforePage > 1 && <NavigationPageItem text={beforePage} key={beforePage} pageNumber={beforePage} currentPage={currentPage}/>}

      <NavigationPageItem text={currentPage} key={currentPage} pageNumber={currentPage} currentPage={currentPage}/>

      {nextPage < totalPage&& <NavigationPageItem text={nextPage} key={nextPage} pageNumber={nextPage} currentPage={currentPage}/>}
      {nextSecondPage < totalPage && <NavigationPageItem text={nextSecondPage} key={nextSecondPage} pageNumber={nextSecondPage} currentPage={currentPage}/>}

      {totalPage - currentPage > 2 && <NavigationPageItem text='...'/>}

      {currentPage != totalPage &&  <NavigationPageItem text={totalPage} key={totalPage} pageNumber={totalPage} currentPage={currentPage}/>}
    </div>
  )
}

export default NavigationPage