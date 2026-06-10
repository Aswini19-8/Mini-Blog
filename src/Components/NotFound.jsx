import {Link} from 'react-router-dom'
const NotFound=()=>{
    return(
        <>
        <h2 style={{textAlign:"center"}}>404 Page Not Found</h2>
        <Link to="/home" style={{textAlign:"center"}}>Go to Home</Link>
        </>
    )
}
export default NotFound;