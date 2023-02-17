import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom';

import { UserAuth } from './../context/AuthContext';


const Dropin4 = () =>{

    const {user, logOut} = UserAuth()
    const handleLogOut =()=>{
        try {
            logOut();
            localStorage.removeItem("accessToken")
            // toast("Bạn vừa đăng xuất tài khoản")
         } catch(error) {
             console.log(error)
         }
    }

    return(
        <div
        className={`z-50 rounded w-72 h-96 bg-[#151a23] absolute top-[55px] -left-32 flex justify-start items-left flex-col p-5 gap-[12px]`}>
           <Link
           to="/user"
           >
                <div className='flex flex-start flex-row  gap-6 mb-2 items-center font-semibold hover:bg-gray-700 p-2 rounded ease-out duration-300 cursor-pointer'>
                        <span className='text-white'><PersonIcon/></span>
                        <h1 className='text-white'>Profile</h1>
                
                </div>
                 <hr className='text-gray-500'/>
           </Link>
           
   
            {/* <div className='flex flex-start flex-row gap-[24px] items-center font-semibold hover:scale-105 ease-out duration-300 cursor-pointer'>
              <span className='text-white'><ShoppingBagIcon/></span>
                <h1 className='text-white'>Quản lý đơn hàng</h1>
            </div> */}
            <div className='flex flex-start justify-between flex-row gap-[24px] items-center font-semibold hover:bg-gray-700 p-2 ease-out duration-300 cursor-pointer'>
              
              <div className='flex gap-6'>
                <span className='text-white'><SettingsIcon/></span> 
               <h1 className='text-white'>Setting</h1>
                </div> 
                <ChevronRightIcon sx={{color: "white"}}/>
            </div>
            <div
            onClick={handleLogOut}
            className='flex flex-start justify-between flex-row gap-[24px] items-center font-semibold hover:bg-gray-700 p-2 ease-out duration-300 cursor-pointer'>
              
                <div className='flex gap-6'>
                <span className='text-white'><LogoutIcon/></span> 
               <h1 className='text-white'>Log Out</h1>
                </div> 
                <ChevronRightIcon sx={{color: "white"}}/>
            </div>
        </div>
    )
}
export default Dropin4;