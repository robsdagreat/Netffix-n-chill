import Icon from './assets/imgs/searchicon.svg'
import './Search.css'

const Search= ()=>{
    return(
        <>
        <div id='search'>
         <img src={Icon} alt="" />   <input type="search" placeholder='search for movies or TV series' />
        </div>
        </>
    )
}

export default Search;