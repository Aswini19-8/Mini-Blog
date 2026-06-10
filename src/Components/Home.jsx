import { Link } from "react-router-dom";
import './Day5.css'
import react from "./reactProjects.png";
import python from "./python.jpg";
import traditional from "./traditional.jpg";
import image from "./portfolio.jpg"
const Home=()=>{
   
    return(
        <>
        
        <div className="links" style={{textAlign:"center",textDecoration:"none"}}>
          <div className="imageLinks">
            <h3>React Projects</h3>
            <Link to='/detail/react'><img src={react}></img></Link></div>  
        <div className="imageLinks">
            <h2>Advanced Python Concepts</h2>
            <Link to ='/detail/python'><img src={python}></img></Link>
        </div>
        <div className="imageLinks">
            <h2>Traditional Ai vs GenAi</h2>
              <Link to ='/detail/GenAi'><img src={traditional}></img></Link>
        </div>

        <div className="imageLinks">
            <h2>My Portfolio</h2>
              <Link to ='/detail/AswiniPortfolio'><img src={image}></img></Link>
        </div>
        
       
         </div>
        
        

    
      
        </>
    )
}

export default Home;