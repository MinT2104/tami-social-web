import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TvIcon from '@mui/icons-material/Tv';
import SettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MovieIcon from '@mui/icons-material/Movie';



import { UserAuth } from '../../context/AuthContext';
import { AppContext, AppProvider }  from "../../context/AppContext"
import { useContext, useEffect, useState } from 'react';
import parse from 'html-react-parser';
import StringToReact from 'string-to-react'
import StringToReactComponent from 'string-to-react-component';
import { Link } from 'react-router-dom';


const Sideleft = () => {

    // localStorage.setItem("currentPath", window.location.pathname)
    const [getPath, setGetPath] = useState("Home")
    const [pathActive, setPathActive] = useState(getPath)
    useEffect(()=>{
        setPathActive(window.location.pathname)
    },[getPath])

    
    const {user} = UserAuth()
    const {isCreatePopUp,setIsCreatePopUp} = useContext(AppContext)



    const handleCreatePopUp = ()=>{
        try {
            setIsCreatePopUp(true)
        } catch (error) {
            throw error
        }
    }
    // const setPathName = ()=>{
    //     try {
    //         setPathActive(data.)
    //     } catch (error) {
    //      throw error   
    //     }
    // }
    const navItems = [
        {
            icon:`<HomeOutlinedIcon sx={{fontSize:25}/>`,
            path: "/",
            name: "Home"
        },
        {
            icon: "<ChatOutlinedIcon sx={{fontSize:25}}/>",
            path: "/message",
            name: "Messages"
        },
        {
            icon: "<NotificationsNoneOutlinedIcon sx={{fontSize:25}}/>",
            path: "/notification",
            name: "Notification"
        },
        {
            icon: "<MovieIcon sx={{fontSize:25}}/> ",
            path: "/reels",
            name: "Reels",
        },
        {
            icon: "<SettingsIcon sx={{fontSize:25}}/>",
            path: "/setting",
            name: "Settings"
        }
    ]

    return ( 
        <div className="w-[260px] h-[735px] bg-[#202836]  p-4 top-[60px] left-0 fixed z-10">
 
            <span className=' text-white outline-none font-normal flex-col my-4 flex items-center gap-4 rounded p-2'>
                    <div className='relative border border-white p-[1px] rounded-full'>
                        <div className='h-[12px] w-[12px] bg-green-500 rounded-full absolute bottom-0 right-0'></div>
                        <div className="w-12 h-12 rounded-full truncate cursor-pointer">
                            <img className="w-12 h-12" src={user?.photoURL} alt=""/>
                        </div>
                    </div>
                    <span className="font-bold text-white cursor-pointer">{user?.displayName}</span>
                    <span className="font-light text-white text-blue-500 cursor-pointer">Your profile</span>
                    <div className='flex flex-row w-full'>
                        <div className='w-1/2 flex items-center justify-center flex-col'>
                            <h1 className='font-black '>Follower</h1>
                            <span>200k</span>
                        </div>
                        <div className='w-1/2 flex items-center justify-center flex-col'>
                            <h1 className='font-black '>Following</h1>
                            <span>1k</span>
                        </div>
                    </div>
                </span>
            <hr/>
            <div className='flex flex-col gap-2 justify-center items-left my-4'>
                <span
                onClick={handleCreatePopUp}
                className='text-white outline-none font-normal flex items-bottom bg-blue-600 gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer'>
                    <AddBoxIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Create</h1>
                </span>
                <Link
                onClick={()=>{setGetPath("home")}}
                to="/" className={`
                ${pathActive === "/" ? "bg-gray-600" :""}
                text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                    <HomeOutlinedIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Home</h1>
                </Link>
                {
                // navItems.map((data,index)=>(
                // //     <Link key={index} to={data.path} className={`
                // //     // ${window.location.pathname === "/message" ? "bg-gray-600" :""}
                // //     text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                // //     {/* {StringToReact(data.icon)} */}
                // //     <StringToReactComponent>
                // //         {data.icon}
                // //     </StringToReactComponent>
                // //     <h1 className='text-lg'>{data.name}</h1>
                // // </Link>
                // ))
                }

                <Link
                onClick={()=>{setGetPath("message")}}
                to="/message" className={`
                ${pathActive === "/message" ? "bg-gray-600" :""}
                text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                    <ChatOutlinedIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Messages</h1>
                </Link>
                <Link
                onClick={()=>{setGetPath("notifications")}}
                to="/notifications" className={`
                ${pathActive === "/notifications" ? "bg-gray-600" :""}
                text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Notifications</h1>
                </Link>
                <Link
                onClick={()=>{setGetPath("reels")}}
                to="/reels" className={`
                ${pathActive === "/reels" ? "bg-gray-600" :""}
                text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                    <TvIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Reels</h1>
                </Link>
                <Link
                onClick={()=>{setGetPath("setting")}}
                to="/setting" className={`
                ${pathActive === "/setting" ? "bg-gray-600" :""}
                text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer `}>
                    <SettingsIcon sx={{ fontSize: 25}}/>
                    <h1 className='text-lg'>Setting</h1>
                </Link>
                <span className='text-white outline-none font-normal flex items-bottom gap-4 hover:bg-gray-600 rounded p-2 hover:translate-x-1 duration-300 cursor-pointer'>
                        <div className="w-6 h-6 rounded-full truncate cursor-pointer">
                            <img className="w-6 h-6" src={user?.photoURL} alt=""/>
                        </div>
                    <h1 className='text-lg'>Profile</h1>
                </span>

            
            </div>
        </div>
     );
}
 
export default Sideleft;