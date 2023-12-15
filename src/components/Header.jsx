import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    
    const myInfo = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items)
    return(
        <div className="flex justify-between items-center px-6 md:px-8 py-2 shadow bg-black text-white ">
            <Link to="/">
                <img className="h-12 text-white" data-testid='logo' src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg" alt="" />

            </Link>
            <ul className="flex gap-6 md:gap-12 text-sm font-medium">
                <li><Link to="/" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Home</Link></li>
                <li><Link to="/about" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">About</Link></li>
                <li><Link to="/contact" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Contact</Link></li>
                <li><Link to="/cart" className="relative "><i className="fa-solid fa-cart-shopping"><span className="absolute top-[-8px] right-[-12px] bg-orange-500 w-4 p-1  h-4 rounded-full text-[10px] flex justify-center items-center" data-testid="cart">{cartItems.length}</span></i></Link></li>
            </ul>
           
        </div>
    )
}
export default Header;