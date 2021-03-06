import React from 'react'
import note10 from "../img/note10.jpg"

function Home(props) {
    console.warn("Home Props",props.data)
    return (
        <React.Fragment>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    {/* <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" /> */}
                    <img src={note10} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 10000, name:"I Phone"})}>Add To Cart</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
