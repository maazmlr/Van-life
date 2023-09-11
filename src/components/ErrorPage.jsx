import { NavLink } from "react-router-dom"
const ErrorPage =()=>{
    return(
        <div style={{margin:"2rem auto"}}>
        <h2 style={{textAlign:"center"}}>Sorry your page looking is not found</h2>

        <button style={{width:"90%",height:"4rem",textAlign:"center",display:"block",margin:"2rem auto",background:"#2337",color:"black "}} ><NavLink to={"/"}>Return to home page</NavLink></button>
        </div>
        )
    }

    export default ErrorPage