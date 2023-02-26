import React from "react";
//import './gallery.css'

const Gallery = ({data}) =>{
    return(
        <div>
            <div className="row">
            {data.map((image)=>
            <div key={image.id}>
                <div className="col">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg ` } 
                     height="200" width="250" alt={image.title}/>

                </div>


            </div> )}

            </div>

        </div>
    )
            }
export default Gallery;