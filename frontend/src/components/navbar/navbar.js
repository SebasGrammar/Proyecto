
import './navbar.css';
/*
const createNav = (object) =>{

    const columns = []
    for(let property in object){
        columns.push(<li>{object[property]}</li>)
    }
    return(
        <ul>
            {columns}
        </ul>
    )

}
*/

export default function Navbar({headers}) {
    return (
        <>
            <ul>                
                {
                    headers.map(header => {
                        return(
                            <li>
                                {//<a href= `/header`
                                header}
                            </li>
                        )
                    })
                }        
            </ul>
        </>
    )}