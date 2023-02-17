import { UserAuth } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';



const Sideright = () => {

    const {user} = UserAuth()


    return ( 
        <div className="w-[260px] h-[738px] bg-[#202836] top-14 right-0 fixed">
                <span className=' text-white outline-none font-normal flex-col my-4 flex items-center gap-4 rounded p-2 cursor-pointer'>
                    <div className='relative border border-white p-[1px] rounded-full'>
                        <div className='h-[12px] w-[12px] bg-green-500 rounded-full absolute bottom-0 right-0'></div>
                        <div className="w-12 h-12 rounded-full truncate cursor-pointer">
                            <img className="w-12 h-12" src={user?.photoURL} alt=""/>
                        </div>
                    </div>
                    <span className="font-bold text-white cursor-pointer">{user?.displayName}</span>
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
        </div>
     );
}
 
export default Sideright;