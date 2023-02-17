
import { UserAuth } from '../context/AuthContext';


const Userblock = () => {

    const {user} = UserAuth()
    

    return (
        <div className="relative flex flex-row gap-4 items-center p-4 py-2 bg-[#202836]">
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
        );
}
 
export default Userblock;