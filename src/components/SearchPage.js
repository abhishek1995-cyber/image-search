import { useState } from "react";
import { useDispatch } from "react-redux";
import { getImageDetails } from "../store/action";
import ImageCard from "./ImageCard";

export default function SearchPage(){

    const dispatch = useDispatch();
   
    const [ query, setQuery ] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        const queryName = query.trim();
        dispatch(getImageDetails(queryName))
    }

    return(
        <>
        <div className="header">
        <div>  
            <h3>
            <span>Name:</span>
            Abhishek Kumar
            </h3>
        </div>
        <address className="address">
            <span>Email:</span>
            abhishekzadav@gmail.com
        </address>
        </div>

        <form
        className="form"
         onSubmit={handleSubmit}>
            <input  
            className="searchinput"
            onInput={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search Image"
            required
             />
             <input
             className="searchinput"
              type='submit' />
        </form>
        <div>
            <ImageCard />
        </div>
        </>
    )
}