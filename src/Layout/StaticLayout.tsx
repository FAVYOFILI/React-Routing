import Header from "../Static/Header"
import Footer from "../Static/Footer"
import { Outlet } from "react-router-dom"


const StaticLayout: React.FC = () => {
    return (
        <>
        
        <Header/>
        {<Outlet/>}
        <Footer/>
        
        
        </>
    )
}

export default StaticLayout