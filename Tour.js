import React from "react";
import  ReactDOM from "react-dom";

const Tour =({ id,image,info,name,price,removeTour})=>{
    return (
            <article className="single-tour">
                <img src={image} alt={name}/>
                <footer>
                    <div className="tour-single">
                        <h3>{name}</h3>
                    </div>
                 <button className="delete-btn" onClick={()=>removeTour(id)}>Not Intrested</button>
                </footer>
                    
            </article>
                
    )

}
export default Tour