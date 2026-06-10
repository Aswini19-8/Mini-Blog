
import {Link} from 'react-router-dom'
const Navigation=()=>{
    
    return(
        <>

      
       <div  className="nav" style={{backgroundColor:"orange",color:"white",padding:"10px",marginTop:"0px"}}>
        <h1 style={{textAlign:"center",marginRight:"75vh"}}>Mini Blog</h1>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        
       </div> 
       

        </>
    )
}
export default Navigation;