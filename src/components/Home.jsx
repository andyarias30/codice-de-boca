import { useState } from "react"

function SingleMenuComponent(props){
    console.log('props ->', props)
    return(
        <div className="menu-item">
        <h3> {props.title} </h3>
        <p> {props.description} </p>
        </div>
    )
}

export default function Home(){
    const [menuItems, setMenuItems] = useState() // = (stateVar, setter (getter and setter))
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
        <section className='menu-items'>
            {!menuItems
                //if no menu item, show button
                ? <button onClick= {() => handleButtonClick ()}>get data</button>
                
                //otherwise show menu item
                :menuItems.map((sinlgeItem) => {
            return (
                <SingleMenuComponent 
                title={sinlgeItem.title} 
                description={sinlgeItem.description} />
            )
        })}
        </section>
        )
        
}