import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image'

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className="">
     <div>
       <div className="before:content-[_'] before:absolute before:h-screen before:left-5 before:w-[1px] before:bg-yellow before:z-20">
        <textarea className="w-screen h-screen leading-[30px] text-lg relative px-8 text-white bg-paper"/>
       </div>
     </div>
    </main>
  )
}
