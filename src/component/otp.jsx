
import { useEffect, useRef, useState } from "react";
import { Button } from "./button.jsx";

export function Otp({ number , onClick }) {
    const ref = useRef(Array(number).fill(0));
    const [values, setValues] = useState(Array(number).fill(""))

    const [disabled, setDisabled] = useState(false);

        useEffect(() => {
    ref.current[0]?.focus();
    }, []);


    return <div className="flex justify-center">
        
        {Array(number).fill(1).map((x, index) => <SubOtpBox va={values} index={index} setvalue={setValues} reference={e => ref.current[index] = e} key={index} onDone={() => {//“When React gives me the input element e, store it at position index in ref.current
            
            if (index + 1 >= number) {
                setDisabled(true)
                return
            }
           // setValues(ref.current.value)
          //  console.log(values)
          //console.log(e.key)
            ref.current[index + 1].focus();
        }} goBack={() => {
        if (index === 0) return;
        const input = ref.current[index - 1];
        if (input) {
            input.focus();
            setTimeout(() => {
            const length = input.value.length;
            input.setSelectionRange(length, length);
            }, 0);
        }
        }} />)}

        <br />
        <Button dis={disabled} onClick={onClick}>Sign up</Button>
    </div>
}

function SubOtpBox({reference , onDone , goBack , va , setvalue , index}){
   // const [inputBoxVal , setInputBoxVal]=useState("")
   const update = [...va]
return (
    <div className="flex justify-center items-center ">
        <input value={va[index]} ref={reference} onKeyDown={(e)=>{
        if(e.key=='Backspace' && e.target.value=='')
        {
            goBack()
        }
        else if(e.key === "ArrowLeft" && index > 0)
        {
            goBack()
        }
        else if(e.key=="ArrowRight" && index < update.length-1)
        {
            onDone()
        }
        }} onChange={(e)=>{
            const val = e.target.value;
            if(val=="")
            {
                update[index]=val
                setvalue(update)
                //goBack()
            }
            else if ( /^[0-9]$/.test(val)){
       update[index]=val
       setvalue(update)
    onDone()}
    else{
        //other than backspace and number here do nothing here
    }
}} type='text' className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white" >
        </input>
    </div>
)
}