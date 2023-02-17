import AddBoxIcon from '@mui/icons-material/AddBox';
import ChooseButton from './ChooseButton';
import CancelIcon from '@mui/icons-material/Cancel';
import EmojiPicker from 'emoji-picker-react';


import { AppContext, AppProvider }  from "../../context/AppContext"
import { useContext, useState } from 'react';
import PostText from './PostText';
import Reels from './Reels';



const CreatePostPopUp = () => {
    const {isCreatePopUp,setIsCreatePopUp, creation, setCreation} = useContext(AppContext)
    const [iconPicker, setIconPicker] = useState(false)
    const [icon, setIcon] = useState("")

    const emojiClick =(event ,  EmojiClickData)=>{
        console.log(EmojiClickData.target.__reactProps$9m5dxaz142w.src)
        setIcon(EmojiClickData.target.__reactProps$9m5dxaz142w.src)
        setIconPicker(false)
    }
    const handleCreatePopUp = ()=>{
        try {
            setIsCreatePopUp(!isCreatePopUp)
        } catch (error) {
            throw error
        }
    }
    // const handleCreation = (e)=>{
    //     setCreation(e.target.name)
        
    // }
    console.log(creation)
    return ( 
        <div className=" w-full h-[738px] bg-transparent z-50 top-[60px] fixed">
            <div className="z-50 absolute w-full h-full top-0 left-0 opacity-80 bg-black"></div>
            {iconPicker &&
                    <div className='z-50 absolute top-26 left-36'>
                        <EmojiPicker
                        onEmojiClick={emojiClick}
                        />
                    </div>
            }
            <div className='w-full h-full flex justify-center items-center'>
                <div className={`w-1/3 h-1/2 bg-transparent z-50 rounded absolute top-20`}>
                 <div className='flex flex-row items-center justify-center bg-transparent'>
                    <div className='p-2 bg-[#283143] rounded rounded-br-none rounded-bl-none '>
                        <div className='flex flex-row items-center justify-center gap-2 bg-blue-600 p-2 shadow-xl'>
                            <AddBoxIcon/>
                        </div>
                    </div>
                </div>
                <div className='bg-[#283143] p-4 rounded rounded-bl-none rounded-br-none flex flex-row gap-2 items-center'>
                    <ChooseButton
                    name="post" 
                    value={"Post"}/>                  
                    <ChooseButton
                    name="reels" 
                    value={"Reels"}/>
                    <ChooseButton
                    name="story" 
                    value={"Story"}/>
                </div>
                {
                    creation === "post" &&                
                    <div>
                    <PostText setIconPicker={setIconPicker} iconPicker={iconPicker} icon={icon}/>
                    </div>
                }
                                {
                    creation === "reels" &&                
                    <div>
                    <Reels setIconPicker={setIconPicker} iconPicker={iconPicker} icon={icon}/>
                    </div>
                }


                <div className='w-full bg-[#283143] p-4'>
                    <div className='w-full bg-blue-600 flex items-center justify-center p-2 rounded cursor-pointer'>
                        <span className='text-white font-bold '>Post</span>
                    </div>
                </div> 
                <div className='flex flex-row items-center justify-center bg-transparent'>
                    <div
                    onClick={handleCreatePopUp}
                    className='p-2 bg-[#283143] rounded rounded-tr-none rounded-tl-none '>
                        <div className='cursor-pointer hover:rotate-45 duration-500 hover:scale-90 flex flex-row items-center justify-center gap-2 rounded-full bg-red-600 p-2 shadow-xl'>
                            <CancelIcon/>
                        </div>
                    </div>
             
                </div>
            </div>
            </div>
           
        </div>
     );
}
 
export default CreatePostPopUp;