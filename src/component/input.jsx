
export function Input({
    type , placeholder , onChange , maxLength
})
{
    return(
        <div className="bg-white h-[50px] w-[230px] rounded-2xl flex items-center justify-around">
            <input onChange={onChange} maxLength={maxLength} className='h-[30px] outline-none' type={type} placeholder={placeholder}></input>
        </div>
    )
}