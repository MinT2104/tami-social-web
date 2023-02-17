import { UserAuth } from '../../context/AuthContext';
import { useContext, useEffect, useState, useRef } from 'react';

import LockIcon from '@mui/icons-material/Lock';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import EmojiPicker from 'emoji-picker-react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const Reels = (props) => {
    const icon = props.icon
    const {user} = UserAuth()
    const [content, setContent] = useState()
    // const [iconPicker, setIconPicker] = useState(false)
    const inputFile = useRef(null)

    const openFileChoose = ()=>{
        inputFile.current.click()
    }
    const handleOnChangInput = (event)=>{
        setContent(event.target.value)
    }
    // console.log(props.icon)
// console.log(content)

    return ( 
        <div className=''>
                        {/* <EmojiPicker/> */}
                        <div className='flex flex-row items-center justify-between bg-[#283143] px-2'>
                            <div className="relative flex flex-row gap-4 items-center p-4 py-2 bg-[#283143]">
                                {/* {dropIn4?  <Dropin4 />:null} */}
                                <div className='relative border border-white p-[1px] rounded-full'>
                                    <div className="w-12 h-12 rounded-full truncate cursor-pointer">
                                        <img className="w-12 h-12" src={user?.photoURL} alt=""/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <span className="font-bold text-white cursor-pointer">{user?.displayName}</span>
                                    <select className='bg-gray-700 rounded px-2 text-white'>
                                        <option>
                                            Public
                                        </option>
                                        <option>
                                            Private
                                        </option>
                                    </select>
                            
                                </div>
                            </div>
                            <div>
                                <MoreHorizIcon sx={{color: "white"}}/>
                            </div>
                        </div>
                <div className='text-white bg-[#283143] p-4 py-4 h-fit flex items-center justify-center'>
                    <div
                    onClick={openFileChoose}
                    className='w-1/2 flex items-center justify-center bg-red-900 hover:scale-90 duration-500 shadow-xl cursor-pointer p-2 rounded'>
                        <span className='font-bold'>Upload Video</span>
                        <input ref={inputFile} type='file' style={{ display:"none"}}/> 
                    </div>
                    
                </div>
        </div>
     );
}
 
export default Reels;