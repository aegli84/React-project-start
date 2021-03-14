import './ProductList.css';
import {useState} from 'react';

export default function (props) {

    

    const [cart, setCart] = useState([{
        id: 'p6',
        title: 'Dell',
        details: 'Lorem Ipsum ....',
        imgSrc: 'https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        price: 2000,
        amount:3
    }]);

    let cartUpdateHandler = (id, newAmount) => {
        props.newCart.push('Andreas');
        console.log(props.newCart);
        if (newAmount > 0) {
            let newCart = [...cart];
            newCart.forEach(product => {
                if(product.id == id) {
                    product.amount = newAmount;
                }
            });
            setCart(newCart);
        }         
    } 

    /* let items = cart.map(item => { */

    let items = props.cart.map(item => {
    return (
        <li key = {item.id} className = "list">
            <img 
                src = {item.imgSrc}
            />

            <div>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
            </div>

            <div>
                <button 
                    onClick = {()=> props.cartUpdateHandler(item.id, (item.amount + 1))}
                >
                    +
                </button>

                <h3>{item.amount}</h3>

                <button 
                    onClick = {()=>props.cartUpdateHandler(item.id, (item.amount - 1))}
                >
                    -
                </button>
            </div>

            <h3>{item.price}</h3>
        </li>
    )
    }
    );

    return (
    <ul>
        {items}
    </ul>
    );
}