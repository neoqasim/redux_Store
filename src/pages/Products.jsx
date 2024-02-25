import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)

            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
            setLoading(false)
            console.log('this is response :,', response);
            console.log('this is data :,', data);
        }
        fetchProducts()
    }, [])
    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            {loading && <>
                <div className="h-screen w-full flex justify-center items-center">
                    <div className="w-24 h-24 border-[10px] text-blue-600 text-4xl animate-spin border-gray-200 flex items-center justify-center border-t-pink-400 rounded-full">
                    </div>
                </div>

            </>}


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-gray-200 lg:grid-cols-4 gap-4 p-4">
                {products.map((item, index) => (
                    <div key={index} className="w-full h-[36rem] m-auto rounded overflow-hidden shadow-xl bg-white -50">
                        <img className="w-3/4 m-auto p-2 h-52 object-contain" src={item.image} alt={item.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2 text-gray-800">{item.title}</div>
                            <p className="text-gray-700 text-2xl font-medium my-4">${item.price}</p>
                            {/* <p className="text-gray-700 text-lg">Category: {item.category}</p> */}
                            <button onClick={() => handleAdd(item)} className="m-4 text-white text-xl font-medium w-max mx-auto px-6 py-2 rounded-4 bg-pink-600">Add to Cart</button>
                            <div className="flex items-center mt-4">
                                {/* <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="rating icon" /> */}
                                {/* <p className="text-gray-700 text-base ml-2">{item.rating.rate} ({item.rating.count})</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Products