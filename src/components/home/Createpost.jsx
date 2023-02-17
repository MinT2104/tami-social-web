import CreateIcon from '@mui/icons-material/Create';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { UserAuth } from '../../context/AuthContext';


const Createpost = () => {

    const {user} = UserAuth()

    return ( 
        <div className="w-[660px] h-fit bg-[#202836] rounded-xl truncate">
                    
        <div className="w-full h-[45px] flex flex-row">
            <div className="w-1/3 font-bold text-white flex flex-row justify-center gap-2 items-center cursor-pointer hover:text-blue-600 duration-300">
                <CreateIcon/>
                <h1>New Post</h1>
            </div>
            <div className="bg-[#283143] w-1/3 font-bold text-white flex flex-row justify-center gap-2 items-center cursor-pointer hover:text-blue-600 duration-300">
                <CollectionsIcon/>
                <h1>Albums</h1>
            </div>
            <div className="bg-[#283143] w-1/3 font-bold text-white flex flex-row justify-center gap-2 items-center cursor-pointer hover:text-blue-600 duration-300">
                <VideocamIcon/>
                <h1>Video</h1>
            </div>
        </div>
        <div className='flex items-center justify-left w-full h-[60px] py-12 gap-4 px-8'>
            <div className="w-10 h-10 rounded-full truncate cursor-pointer">
                <img className={`w-10 h-10 ${!user && "bg-white"}`} src={user?.photoURL} alt=""/>
            </div>
            <div className='bg-[#283143] px-4 p-2 w-4/5 truncate rounded-full'>
                <input className='bg-transparent w-full outline-none text-white ' alt='' placeholder="What's on your mind..."/>
            </div>
        </div>
        <hr color='gray' className='w-4/5 mx-auto'/>
        <div className="w-full h-[60px] flex flex-row px-10 gap-4">
            <div className="  font-bold text-white flex flex-row justify-center gap-2 items-center">
                <div className=' bg-[#283143] flex flex-row gap-2 items-center p-2 px-4 rounded-full hover:gap-4 duration-300 cursor-pointer '>
                    <EmojiEmotionsIcon sx={{color: "yellow"}}/>
                    <h1>Mood</h1>
                </div>
            </div>
            <div className="  font-bold text-white flex flex-row justify-center gap-2 items-center">
                <div className=' bg-[#283143] flex flex-row gap-2 items-center p-2 px-4 rounded-full cursor-pointer hover:bg-blue-600 duration-300'>
                    <MoreHorizIcon sx={{color: "white"}}/>
                </div>
            </div>
        </div>

</div>
     );
}
 
export default Createpost;