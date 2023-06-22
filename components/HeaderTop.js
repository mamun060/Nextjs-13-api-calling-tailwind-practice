const HeaderTop = () => {
    return (
        <div className=" md:px-10  hidden sm:block sm:p-2  bg-blue-950 text-white md:flex justify-between flex-wrap">
           <div className=" m-1 bg-orange-700 rounded-lg p-2 flex align-middle justify-center shadow-lg text-white px-5 lg:px-2 md:px-2 sm:px-2 ">
                <ul className=" flex justify-start gap-5 items-center ">
                    <li className=" text-white hover:text-black hover:cursor-pointer">example@gmail.com</li>
                    <li className=" text-white hover:text-black hover:cursor-pointer">+88013953103206</li>
                </ul>
           </div>
           <div className=" bg-orange-700 m-1 rounded-lg p-2 px-5 lg:px-2 md:block shadow-lg text-white">
                <ul className=" flex gap-5 sm:justify-center lg:justify-end  ">
                    <li className=" text-white hover:text-black hover:cursor-pointer">fb</li>
                    <li className=" text-white hover:text-black hover:cursor-pointer">tw</li>
                    <li className=" text-white hover:text-black hover:cursor-pointer">Lin</li>
                    <li className=" text-white hover:text-black hover:cursor-pointer">Be</li>
                </ul>
           </div>
        </div>
    );
}
 
export default HeaderTop;