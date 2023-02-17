import { AppContext, AppProvider }  from "../../context/AppContext"
import { useContext, useState } from 'react';


const ChooseButton = (props) => {
    const {creation, setCreation} = useContext(AppContext)


    console.log(creation)

    return ( 
        <div
        onClick={()=>setCreation(props.name)}
        className={`flex flex-row items-center justify-center w-1/2  cursor-pointer
       
        `}>
                    <div className={`hover:bg-gray-600 duration-700 flex flex-row items-center justify-center gap-2  text-white p-2 rounded w-full
                     ${props.name === creation ? "bg-blue-600":"bg-[#151a23]" }
                    `}>
                        <span className='font-bold'>
                        {props.value}
                        </span>
                    </div>
        </div>
     );
}
 
export default ChooseButton;