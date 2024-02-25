import React from 'react'
import Products from './Products'

const Home = () => {

    return (
        <>
            <h2 className="head">Welcome to redux Toolkit</h2>
            <section>
                <h1>products</h1>
                <Products />
            </section>
        </>
    )
}

export default Home