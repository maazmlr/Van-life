import React from "react";
import { Link } from "react-router-dom";

const Home= ()=>{
    return(
        <>
        <div className="container">
            <h1 className="h-content">
            You got the travel plans, we got the travel vans.
            </h1>
            <p className="p-content">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link className="" to={"/vans"}><button className="button">Find your van</button></Link>
        </div>
        </>

    )
}
export default Home