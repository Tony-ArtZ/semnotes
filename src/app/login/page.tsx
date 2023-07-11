import {HiOutlineMail, HiLockClosed} from "react-icons/hi";

export default function Login() {
  return (
    <main className="bg-blue-dark grid place-items-center w-full h-screen">
      <section className="h-96 bg-blue w-96 rounded-xl">
        <div className=" flex h-full p-4 pt-16 flex-col gap-4 items-center shadow-2xl">
            <label>
                <span className="font-bold"> Email:</span>
                <div className="flex flex-row items-center focus-within:outline-green outline-2 focus-within:outline shadow-inner border-b-4 border-green bg-blue-dark px-4">
                    <HiOutlineMail className="text-xl"/>
                    <input required placeholder="Email" type="email" className="w-64 peer h-12 bg-transparent px-4 focus:outline-none"/>
                </div>
            </label>
            <label>
                <span className="font-bold"> Password:</span>
                <div className="flex flex-row items-center focus-within:outline-green outline-2 focus-within:outline shadow-inner border-b-4 border-green bg-blue-dark px-4">
                    <HiLockClosed className="text-xl"/>
                    <input required placeholder="Password" type="password" className="w-64 peer h-12 bg-transparent px-4 focus:outline-none"/>
                </div>
            </label>
            <div className="bg-green-yellow p-1 mt-6 w-40 h-16 rounded-xl">
                <button className="text-green hover:text-white bg-blue hover:bg-green-yellow w-full  h-full font-bold rounded-xl">Log in</button>
            </div>
        </div>
      </section>
    </main>
  );
}
