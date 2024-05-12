import { FaCalendarDays } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
              <div className="bg-[#9395D3] w-full h-[20vh] flex justify-between">
            

              <h1 className="text-[30px] font-bold text-white mt-8 p-5">Todo App</h1>

              <FaCalendarDays className="text-[30px] m-16 text-white" />
            </div>
            
        </div>
    );
};

export default Header;