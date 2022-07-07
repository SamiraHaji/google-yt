import Image from "next/image"
import {useRouter} from "next/router"
import {useRef} from "react"
import {XIcon, MicrophoneIcon, SearchIcon} from "@heroicons/react/solid"
import Avatar from "../components/Avatar"
import HeaderOptions from "../components/HeaderOptions"

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
  
    const search =(e) => {
    e.preventDefault(); 
    const term = searchInputRef.current.value;
  
    if(!term) return;
  
    router.push(`/search?term=${term}`);
    }
    return ( 
    <header className="sticky top-0 bg-white"> 
    <div className="flex w-full p-6 items-center">
<Image 
   src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/c/9/f/c9f186c730_82925_googlelogo.jpg"
   height={40}
   width={120}
onClick={() =>router.push("/")}
   className="cursor-pointer"
    /> 
    <form className="flex flex-grow px-6 py-3 ml-10 mr-5border border-x-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input 
        ref={searchInputRef} 
        className="flex-grow w-full focus:outline"
         type="text"/>
        <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
        onClick={() =>(searchInputRef.current.value = "")}
        />
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
        <SearchIcon className="h-6 hidden sm:inline-flex"/>
<button hidden type="submit" onClick={search}> 
    Search
</button>
    </form>
    <Avatar className="ml-auto" url="https://media-exp1.licdn.com/dms/image/C4E03AQGKhH_5D2iORg/profile-displayphoto-shrink_200_200/0/1650972973280?e=1657756800&v=beta&t=ct90TdD_pZvfCS-2SBln5FXl-IjvQDy75OB6b2snZLk"/>
    </div>
{/* HeaderOption */}
<HeaderOptions/>
    </header>
    )
    
    
}

export default Header