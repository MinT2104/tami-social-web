import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import {Link} from "react-router-dom"
import { useContext, useState } from 'react';

import { AppContext } from '../../context/AppContext';
import { UserAuth } from '../../context/AuthContext';
import Dropin4 from "../Dropin4"



const Navbar = () => {
   
    const {user} = UserAuth()
    const {isCreatePopUp,setIsCreatePopUp} = useContext(AppContext)
    

// const {loginButtion, setLoginButton} = useContext(AppContext)
    const [isPathLogin, setIsPathLogin] = useState(window.location.pathname)
    const [dropIn4,setDropIn4] = useState(false)

    const handleCreatePopUp = ()=>{
        try {
            setIsCreatePopUp(!isCreatePopUp)
        } catch (error) {
            throw error
        }
    }

    console.log(isPathLogin)
    // function setPath(){
    //     setIsPathLogin(window.location.pathname)
    // }
    // setPath()
    return ( 
        <div className={`fixed z-50 bg-[#151a23] flex flex-row w-full  h-[60px] items-center px-14
        ${isPathLogin !== "/" ? "justify-center" : "justify-between" }
        `}>
            <div
            onClick={()=>window.location.reload()}
            className='cursor-pointer'>
                <Link
                to="/"
                className='font-bold text-white text-2xl'>
                    <span className='border-b-[1px] border-blue-600'>TA</span>
                    <span className="mx-[3px]">
                        <FiberManualRecordIcon sx={{ fontSize: 10, color: "blue"}}/>
                    </span>
                    <span className='border-t-[1px] border-blue-600 '>MI</span>
                </Link>
            </div>
            {isPathLogin === "/" ? 
            <>
                <div className=' bg-[#283143] rounded-full flex items-center justify-left'>
                    <span className='h-full w-[50px] block flex justify-center items-center'>
                        <SearchIcon sx={{fontSize: 30, color: "white"}}/>
                    </span>
                    <input className='text-white w-[500px] px-[10px] p-2  bg-transparent outline-none ' placeholder='Search...' alt=''/>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    {user ? <>
                    <div 
                    onClick={handleCreatePopUp}    
                    className='bg-blue-600 rounded-full p-2 cursor-pointer hover:rotate-90 duration-700'>
                    <AddCircleOutlineIcon sx={{fontSize: 30, color: "white"}}/>
                    </div>
                    <div className='bg-none p-2 cursor-pointer hover:rotate-45 duration-500'>
                    <SettingsIcon sx={{fontSize: 30, color: "white"}}/>
                    </div>
                    </>
                 
                    :null
                    }
                    
                    {user?

                    <div 
                    onClick={()=>{setDropIn4(!dropIn4)}}
                    className="relative flex flex-row gap-2 items-center p-1 rounded-full px-2 bg-[#283143]">
                    {dropIn4?  <Dropin4 dropIn4={dropIn4} />:null}
                        <div className="w-10 h-10 rounded-full truncate cursor-pointer">
                            <img className="w-10 h-10" src={user.photoURL} alt=""/>
                        </div>
                    <span className="font-light text-white cursor-pointer">{user.displayName}</span>
                    </div>
                    :
                    <div
                    onClick={()=>{setIsPathLogin(window.location.pathname)
                    window.location.reload()
                    }}
                    className='bg-blue-600 p-2 px-6 rounded-full font-bold text-white hover:scale-105 duration-300 ease-in cursor-pointer'>
                        <Link to="/login">Log In</Link>
                    </div>
                }
                    
                </div>
            </>
        :null
        }
            
        </div>
     );
}
 
export default Navbar;