import './Movie2.css'
import { BsBookmark } from "react-icons/bs";


const Movie2= (props)=>{
    return(
        <>
          <div id="main" className={props.img} >
              <div id="movie" >
                  <div id='icon2'><BsBookmark/></div>
              </div>
              <div id='info2'>
                 <p>{props.year}</p>
                 <p>{props.cat}</p>
                 <p>{props.quality}</p>
              </div>
              <div id='name2'>{props.name}</div>
          </div>
        </>
    )
}

export default Movie2