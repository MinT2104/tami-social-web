
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoodIcon from '@mui/icons-material/Mood';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

import { UserAuth } from '../../context/AuthContext';
import Createpost from './Createpost';
import Centerside_2 from './Centerside_2';
import Userblock from '../Userblock';



const Centerside = () => {

    const {user} = UserAuth()
    const imgItems = [
        {src: "https://images.unsplash.com/photo-1676402519279-153325e20506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {src: "https://images.unsplash.com/photo-1676402519373-9bf9d75211c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
        {src: "https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {src: "https://images.unsplash.com/photo-1673779623357-8b58057951dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    ]

    return ( 
        <div className='flex flex-row gap-6'>
                {/* <Createpost/> */}
            <div className='w-[952px] flex gap-6'>
                <div className='w-1/2 h-fit '>
                    {imgItems?.map((data)=>(
                        <div className='w-full h-fit rounded mb-6'>
                        <div className='flex flex-row items-center justify-between bg-[#202836] px-2 rounded-tr-xl rounded-tl-xl'>
                            <Userblock/>
                            <div className='flex flex-row gap-2 items-center'>
                                <BookmarkIcon sx={{color: "white"}}/>
                                <MoreHorizIcon sx={{color: "white"}}/>
                            </div>
                        </div>
                        <div>
                            <img
                            className='w-full'
                            src={data.src}/>
                        </div>
                        <div className='w-full bg-[#202836] p-2 px-4 h-fit'>
                            <h1 className='break-all text-xl font-bold text-white'>Hello New City</h1>
                        </div>
                        <div className='w-full bg-[#202836] p-2 pt-0 px-4 h-fit text-gray-400'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='flex flex-row p-2 bg-[#283143]'>
                            <div className=' hover:text-yellow-500 duration-500 cursor-pointer w-1/3 flex flex-row gap-2 text-gray-400 justify-center items-center p-2'>
                                <MoodIcon/>
                                <span>React</span>
                            </div>
                            <div className=' hover:text-yellow-500 duration-500 cursor-pointer w-1/3 flex flex-row gap-2 text-gray-400 justify-center items-center p-2'>
                                <CommentIcon/>
                                <span>Comment</span>
                            </div>
                            <hr className='text-gray-500'/>
                            <div className=' hover:text-yellow-500 duration-500 cursor-pointer w-1/3 flex flex-row gap-2 text-gray-400 justify-center items-center p-2'>
                                <ShareIcon/>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                    ))}
                        
                </div>
                <Centerside_2/>
            </div>
                

        </div>
     );
}
 
export default Centerside;