import {HiOutlineMail, HiLockClosed} from "react-icons/hi";
import {AiOutlineGoogle} from "react-icons/ai";
import {BsFillPersonFill, BsKeyFill} from "react-icons/bs";
export default function Register() {
  return (
    <main className="w-full h-screen bg-blue-dark grid place-items-center">
      <section className="bg-blue w-96 rounded-xl">
        <div className="flex flex-col items-center h-full p-4 pt-16 shadow-2xl gap-4">
            <label>
                <span className="font-bold"> User Name:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <BsFillPersonFill className="text-xl"/>
                    <input required placeholder="User Name" type="text" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <label>
                <span className="font-bold"> Email:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <HiOutlineMail className="text-xl"/>
                    <input required placeholder="Email" type="email" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <label>
                <span className="font-bold"> Password:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <HiLockClosed className="text-xl"/>
                    <input required placeholder="Password" type="password" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <label>
                <span className="font-bold"> Confirm Password:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <BsKeyFill className="text-xl"/>
                    <input required placeholder="Confirm Password" type="password" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <div className="w-40 h-16 p-1 mt-6 shrink-0 bg-green-yellow rounded-xl">
                <button className="w-full h-full font-bold text-green hover:text-white bg-blue hover:bg-green-yellow rounded-xl">Register</button>
            </div>
          <span className="before:content-[''] before:w-36 font-bold before:top-[50%] before:absolute text-center before:left-0 w-full relative text-gray-200 after:content-[''] after:bg-gray-400 after:absolute after:right-0 after:top-[50%] after:h-[1px] after:w-36 before:h-[1px] before:bg-gray-400 ">or</span>
          <button className="text-4xl text-green"><AiOutlineGoogle/></button>
        </div>
      </section>
    </main>
  );
}
