import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className='z-50 w-full h-screen pt-[60px] flex items-center justify-center'>
 

                <form className="h-fit w-1/3 bg-[#151a23] flex flex-col items-center rounded-2xl gap-4 pb-10">

                    <div className="font-bold text-xl text-white py-4">
                        Sign Up
                    </div>
                    <div className="p-4 rounded-full w-2/3 mx-auto text-white  bg-[#283143]">
                        <input className="w-full bg-transparent outline-none" placeholder="Username.." alt=""/>
                    </div>
                    <div className="p-4 rounded-full w-2/3 mx-auto text-white bg-[#283143]">
                        <input className="w-full bg-transparent outline-none" placeholder="Password.." alt=""/>
                    </div>
                    <div className='text-center bg-blue-600 w-1/3 p-2 px-6 rounded-full font-bold text-white hover:scale-110 duration-300 ease-in cursor-pointer'>
                    Sign Up
                    </div>
                    <hr className="text-white w-2/3 my-4"/>
                    <Link className="text-blue-600 font-bold text-lg hover:scale-110 duration-300" to="/login">Log In</Link>
                </form>
        </div>
     );
}
 
export default Signup;