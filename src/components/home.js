
import React from 'react';

export const Menu = () => {
const setData = (data) => {
    console.log(data.name);
}

let name= 'saulat'
let age= 22
let email= "ss@gmail.com"
setData({name ,age, email})
    return (
        <div style={{ 
            backgroundImage: `url(1.png)`,
            backgroundRepeat: 'round',
            backgroundSize: '100%',
            height: '1000px',
            // borderImageWidth : '100%'
            }}>
            <h1>Outstanding</h1>
            <h1>Coffee Shop</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
            <button>
                Learn More
            </button>
        </div>
    );
};

export default Menu;
