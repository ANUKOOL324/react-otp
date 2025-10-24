import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Button } from './component/button'
import { Input } from './component/input'
import { Name } from './component/name'
import { Otp } from './component/otp'

function App() {
       // const ref = useRef()
        const [disable ,setdisable] = useState(false)
        const[isHidden , sethidden] = useState(true)
        const[isHidd , sethidd] = useState(false)
        const [inputValue, setInputValue] = useState("");

      
        function onclick()
        {     
      //   setdisable(true)
         sethidden(false)
         sethidd(true)
        }
        function onclic()
        {     
         setdisable(false)
         sethidden(true)
         sethidd(false)
        }
        function handleInputChange(e)
        {
        setInputValue(e.target.value)
        }

        useEffect(() => {
        if (inputValue.length === 8) {
        setdisable(true);
        } else {
        setdisable(false);
        }
        }, [inputValue]);
       
      
        return (
        <div className={`h-dvh flex flex-col gap-2  items-center ${isHidden ? '':'justify-center'} bg-blue-600`}>
                {!isHidd && (
                        <>
                        <Name />
                        <div className='flex flex-col gap-5'>
                        <Input value={inputValue}  
                        onChange={handleInputChange} 
                        maxLength={8}  type={'text'} placeholder={'Enter Your Age'} />
                        <Button dis={disable} onClick={onclick}>Continue</Button>
                        </div>
                        </>
                        )}


        {!isHidden && <Otp onClick={onclic} number={20} />}

    
     {/* <div className=' grid grid-cols-12'>
        <div className='bg-blue-300 md:col-span-12 col-span-4'>
child 1
        </div>
        <div className='bg-red-300 md:col-span-12 col-span-6'>
child 2
        </div>
        <div className='bg-green-300 md:col-span-12 col-span-2'>
child 3
        </div>
     </div>  */}
     {/* <div className='flex justify-between'>
        <div className='bg-blue-300 col-span-4'>
child 1
        </div>
        <div className='bg-red-300 col-span-6'>
child 2
        </div>
        <div className='bg-green-300 col-span-2'>
child 3
        </div>
     </div>  */}
      
      {/* <div className='h-dvh bg-white dark:bg-black'>
        <p1 className='text-black dark:text-white' >hii</p1>
        <br/>
        <button onClick={() => {
          document.querySelector("html").classList.toggle('dark')
        }} className='dark:text-white'>toggle it</button>
      </div> */}
      </div>
  )
}

export default App
