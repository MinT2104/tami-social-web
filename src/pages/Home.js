import CreatePostPopUp from "../components/createPost/CreatePostPopUp";
import Centerside from "../components/home/Centerside";
import Centerside_2 from "../components/home/Centerside_2";
import Sideleft from "../components/home/Sideleft";
import Sideright from "../components/home/Sideright";

import { AppContext, AppProvider }  from "../context/AppContext"
import { useContext } from 'react';

const Home = () => {

    const {isCreatePopUp} = useContext(AppContext)


    return ( 
        <div className="relative h-fit bg-[#2f3b50] flex  flex-row justify-center items-top pt-[24px] pt-[84px]">
           {
            isCreatePopUp && <CreatePostPopUp/>
           } 
            <Centerside/>
            {/* <Centerside_2/> */}
            <Sideright/>
        </div>
        
     );
}
 
export default Home;