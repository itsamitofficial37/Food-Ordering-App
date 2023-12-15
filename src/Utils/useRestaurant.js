import { useState , useEffect } from "react"

const useRestaurant = (resId)=>{
    const[resMenu , setResMenu] = useState(null)
    console.log(resMenu);
    useEffect(()=>{
        getMenu()
    },[])
    async function getMenu(){
        const URL = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040187&lng=76.9398195&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await URL.json()
        console.log(json);  
        setResMenu(json?.data)
    }
    return resMenu;
}
export default useRestaurant;
