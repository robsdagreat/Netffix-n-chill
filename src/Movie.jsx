import './Movie.css'
import { BsBookmark } from "react-icons/bs";

const Movie= (props)=>{

    return(
        <>
           <div id="parent" className={props.bg}  >
             <div id='icon'><BsBookmark/></div>
             <div id="info" >
                <p>{props.year}</p>
                <p>{props.cat}</p>
                <p>{props.quality}</p>
              </div>
         
              <div id='name' >{props.name}</div>
          </div>

       </>
    )
}

export default Movie


