import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

   const currentVal = useSelector((state:any) => state.cart.cart)

  return (
    // <div className="shadow-lg ">
    //   <div className="border py-3 px-6">
    //     <div className="flex justify-between">
    //       <div className="flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6 text-red-500"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth={2}
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    //           />
    //         </svg>
    //         <span className="ml-2 font-semibold text-[#252C32]">
    //           What a Market
    //         </span>
    //       </div>
    //       <div className="ml-6 flex flex-1 gap-x-3">
    //         {/* <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-purple-blue-500 py-2 px-4 text-white hover:bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //           <span className="text-sm font-medium">Categories</span>
    //         </div> */}
    //         <input
    //           type="text"
    //           className="w-full rounded-md border  px-3 py-2 text-sm"
    //           defaultValue="Search"
    //         />
    //       </div>
    //       <div className="ml-2 flex">
    //         <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5 text-gray-500"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
    //             <path
    //               fillRule="evenodd"
    //               d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <Link to={"/orders"}>
    //           <span className="text-sm font-medium">Orders</span>
    //           </Link>
    //         </div>
    //         <Link to={"/favorites"}>
    //         <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5 text-gray-500"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    //               clipRule="evenodd"
    //             />
    //           </svg>

    //           <span className="text-sm font-medium">Favorites</span>
    //         </div>
    //         </Link>
    //         <Link to={"/cart"}>
    //         <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
    //           <div className="relative">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5 text-gray-500"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    //             </svg>
    //             <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
    //               {currentVal?.length}
    //             </span>
    //           </div>
    //           <span className="text-sm font-medium">Cart</span>
    //         </div>
    //         </Link>
    //         <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-3 bg-cyan-500 hover:bg-cyan-600 ">
    //         {/* <a className="text-sm font-medium" href="/signIn">Sign In</a> */}
    //         <Link to={"/login"} className="text-sm font-medium">Sign In</Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-4 flex items-center justify-between">
    //       <div className="flex gap-x-2 py-1 px-2">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-gray-500"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="text-sm font-medium">India</span>
    //       </div>
    //       <div className="flex gap-x-8">
    //         <Link to={"/"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > Home 
    //         </Link>
    //         <Link to={"/newReleases"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > New Releases 
    //         </Link>
    //         <Link to={"/mens"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > Men's 
    //         </Link>
    //         <Link to={"/womes"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > Women's 
    //         </Link>
    //         <Link to={"/accessories"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > Accessories 
    //         </Link>
    //         <Link to={"/abouts"} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
    //         > Abouts 
    //         </Link>
    //       </div>
    //         <div className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-3  ">
    //         {/* <a className="text-sm font-medium" href="/signUp">Sign Up</a> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <header className="h-16 shadow-md mb-4 bg-white">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span className="ml-2 font-semibold text-[#252C32]">
              What a Market
            </span>
          </div>
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input type="text" placeholder="search product here..." className="w-full outline-none"/> 
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white cursor-pointer">
          <AiOutlineSearch size={20}/>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-3xl cursor-pointer">
          <AiOutlineUser />
          </div>
          <Link to={"/cart"}>
          <div className="text-2xl cursor-pointer relative">
          <HiShoppingCart />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  {currentVal?.length}
                </span>
          </div>
          </Link>
          <div>
          <Link to={"/login"} className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">Login</Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
