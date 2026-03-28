import { useState } from "react";

const COUNT= 4;

const Otp = ()=>{

    const [otpInput , setOtpInput]= useState(new Array(COUNT).fill(""));
    const[selectedBox , setSelectedBox ]= useState(0);

    const setInputValue = (e : any, index: number)=>{

       const updatedOtpInput = [...otpInput];
       updatedOtpInput[index] = e.target.value;
       setOtpInput(updatedOtpInput);
    }



    return (
        <>

        {otpInput.map((curr, index)=>{

            return (
                <input key = {index} type = "text" onChange={(e)=>setInputValue(e, index) } ></input>
            )
        })}
        </>
    )
}

export default Otp;