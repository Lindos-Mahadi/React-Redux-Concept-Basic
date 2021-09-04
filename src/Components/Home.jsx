import React from 'react'

function Home(props) {
    // console.warn(props)
    // console.warn(props.data)
    // console.warn(props.data.name)
    const {data} = props
    const {daage} = props
    
    return (
        <div>
            <h1>Home Componet</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}

export default Home
