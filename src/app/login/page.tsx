"use client"

import {HiOutlineMail, HiLockClosed} from "react-icons/hi";
import {AiOutlineGoogle} from "react-icons/ai";
import {signIn} from "next-auth/react";
import {useState} from "react";
import { useSearchParams } from 'next/navigation'

export default function Login() {
  const [formValues, setFormValues] = useState({email:"", password:""});
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValues((prevValue) => {return {...prevValue, [name]: value}})
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
      callbackUrl,
    })
    console.log(res)
  }

  return (
    <main className="w-full h-screen bg-blue-dark grid place-items-center">
      <section className="bg-blue w-96 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col items-center h-full p-4 pt-16 shadow-2xl gap-4">
            <label>
                <span className="font-bold"> Email:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <HiOutlineMail className="text-xl"/>
                    <input required name="email" onChange={handleInputChange} placeholder="Email" type="email" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <label>
                <span className="font-bold"> Password:</span>
                <div className="flex flex-row items-center px-4 border-b-4 shadow-inner focus-within:outline-green outline-2 focus-within:outline border-green bg-blue-dark">
                    <HiLockClosed className="text-xl"/>
                    <input required name="password" onChange={handleInputChange} placeholder="Password" type="password" className="w-64 h-12 px-4 bg-transparent peer focus:outline-none"/>
                </div>
            </label>
            <div className="w-40 h-16 p-1 mt-6 shrink-0 bg-green-yellow rounded-xl">
                <button type="submit" className="w-full h-full font-bold text-green hover:text-white bg-blue hover:bg-green-yellow rounded-xl">Log in</button>
            </div>
          <span className="before:content-[''] before:w-36 font-bold before:top-[50%] before:absolute text-center before:left-0 w-full relative text-gray-200 after:content-[''] after:bg-gray-400 after:absolute after:right-0 after:top-[50%] after:h-[1px] after:w-36 before:h-[1px] before:bg-gray-400 ">or</span>
          <button className="text-4xl text-green"><AiOutlineGoogle/></button>
        </form>
      </section>
    </main>
  );
}
