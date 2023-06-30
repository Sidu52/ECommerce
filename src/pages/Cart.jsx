import React from 'react'

export default function Cart({ data }) {
    return (
        <div>
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.title}</h1>
                        <h1>{item.description}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.stars}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
