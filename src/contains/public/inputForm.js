
import { memo } from "react"
const inputForm = ({label, value, setValue, type, invalidFields, setInvalidFields}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xs" htmlFor={label}>{label}</label>
      
      <input 
        className="outline-none bg-[#e8f0fe] rounded-md p-2" 
        type="text" 
        id={label} 
        name={label}
        value = {value}
        onChange={(e)=> {setValue(prev => ({...prev, [type]: e.target.value }))}}
        onFocus={(e) => {setInvalidFields([])}}
      />
      <br/>
      {invalidFields.length >0 && invalidFields.some((element) => element.name === type) && <small className="text-red-500 italic">{invalidFields.find((element) => element.name === type)?.message}</small>}
    
    </div>
  )
}

export default memo(inputForm)
