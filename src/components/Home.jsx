import { useState } from "react"

function SingleMenuComponent(props){
    console.log('props ->', props)
    return(
        <>
        <h3> {props.title} </h3>
        <p> {props.description} </p>
        </>
    )
}

export default function Home(){
    const [menuItems, setMenuItems] = useState(['hotdog', 'buger']) // = (stateVar, setter (getter and setter))
    // 1. fetch data
    // 2. get array of objects

    // 3. render each object
    //3.1. cerate a state variable 
    // 3.2 put inside state variable the array of objects 
    // 3.3 display each item in dom 
    // 3.3.2 return each item so that it display on the browser 

    console.log('menuItems ->', menuItems)
    const handleButtonClick = () => {
        console.log('hey class from a function')
        
        fetch('https://codice-boca.web.app/menu')
        .then(res => res.json()) //contacting the api
        .then(data => setMenuItems(data)) // the second promess 
        .catch(err => console.error(err))
    }
    
    
    
    
    
    
    return(
        <> 
        
        
        <button onClick= {() => handleButtonClick ()}>get data</button>
        {menuItems.map((sinlgeItem) => {
            console.log('singleItem->',sinlgeItem)
            //singleItem.price = 160.99
            
            
            return (
                <>
                <SingleMenuComponent title={sinlgeItem.title} description={sinlgeItem.description} />
            {/* <h2>{sinlgeItem.title}</h2>
            <p>{sinlgeItem.description}</p> */}
            </>
            )
        })}
        </>
        )
        
}