import { FaCircleUser } from "react-icons/fa6";

function UserProfile() {
  return (
    <div className="bg-black text-white">
        <div className="flex justify-center items-center p-4 border-b-2 border-gray-800">
           <h2>Quotverse</h2> 
        </div>
        <div className="felx justify-center items-center p-6">
            <div className="mb-3 flex flex-col justify-between items-start gap-5">
                <div>
                    <FaCircleUser className="text-5xl"/>
                </div>
                <div className="flex flex-col justify-between gap-5 items-start">
                    <div className="text-left">
                        <h3 className="text-xl font-semibold">Jhon Doe</h3>
                        <p className="text-sm mt-1">jhondoe</p>
                    </div>
                    <div>
                        <p className=" text-sm font-thin">UI Developer | Let&apos;s redesign the world</p>
                    </div>
                </div>
            </div>
            <p className="text-sm text-[#616161]">2957 Likes ·</p>
        </div>
    </div>
  )
}

export default UserProfile;