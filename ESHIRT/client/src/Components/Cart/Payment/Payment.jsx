
import style from './Payment.module.css'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react'
import { 
    createPayment, 
    getOrdersByUserId, 
    checkLastOrder, 
    postOrder,
    putOrder,
    setCartItems,
    modifyOrderStatus
} from '../../../Actions';
import { useAuth0 } from '@auth0/auth0-react';


function Payment() {
    const paymentData = useSelector((state)=>state.paymentReducer.paymentData)
    const items = useSelector((state)=>state.cartReducer.items);
    const orderId = useSelector(state => state.ordersReducer.orderId)
    const dispatch= useDispatch()
    const {isAuthenticated, user}= useAuth0()
    
    let userId= user.sub.split('|')[1]
    dispatch(getOrdersByUserId(userId))
    
    const [deliveryData, setDeliveryData]= useState({
        zip_code: '',
        street_name: '',
        street_number: 0,
        floor: '',
        apartment: '',
        city_name: '',
        state_name: '',
        country_name: ''
    })
    const [flag, setFlag]= useState(false)

    function handleChange(e){
        if (e.target.id === 'street_number'){
            setDeliveryData({
                ...deliveryData,
                [e.target.id]: parseInt(e.target.value)
            })
            return;
        }
        setDeliveryData({
            ...deliveryData,
            [e.target.id]: e.target.value
        })
    }

    /* useEffect(()=> {
        if (isAuthenticated && orderId === 0) {
            dispatch(postOrder([...items], user.sub.split('|')[1]))
          } else if (isAuthenticated && orderId) {
            dispatch(putOrder([...items], orderId, 'add'))
          } else if (isAuthenticated){
              dispatch(checkLastOrder(user.sub.split('|')[1]))
          }
    }, [isAuthenticated, orderId]) */

    /* function sendEmail() {
        Email.send({
            Host : "smtp.mailtrap.io",
            Username : "79f82e60df3dc1",
            Password : "5159d22690b6bf",
            To : email,
            From : "454f0289f0-bc66c1@inbox.mailtrap.io",
            Subject : "Payment status from E-Shirts!",
            Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
        }).then(
          message => alert(message)
        );
        } */


    function handleSubmit(e){
        e.preventDefault()
        if (!deliveryData.zip_code || !deliveryData.street_name || !deliveryData.street_number || !deliveryData.city_name || !deliveryData.state_name || !deliveryData.country_name){
            return alert('Mandatory fields not completed')
        }
        let mail= document.getElementById('email').value.toLowerCase()
        if (mail.includes('@') && mail.includes('.com')){
            console.log(mail)
        } else return alert('The e-mail format does not comply')
        if (isAuthenticated) {
            
            let order= items?.map(item => {
                    return {
                        title: item.title,
                        quantity: item.amount,
                        size: item.size,
                        unit_price: item.price,
                        id: item.id
                    }
                })
            let shipments= {
                    receiver_address: deliveryData
            }
            dispatch(createPayment({order, shipments, userId: user.sub.split('|')[1], email: mail}))
            setFlag(true)
            dispatch(setCartItems({}, 'clear'))
            localStorage.removeItem('items')
            dispatch(modifyOrderStatus({status: 'PENDING'}, orderId, user.sub.split('|')[1]));
        } 
    }


    return (
        <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
            <div>Please, complete your address:</div>
            <input placeholder= 'Zip code' id='zip_code' onChange={handleChange} />
            <input placeholder= 'Street name' id='street_name' onChange={handleChange} />
            <input placeholder= 'Street number' id='street_number' onChange={handleChange} type='number' />
            <input placeholder= 'Floor' id='floor' onChange={handleChange} />
            <input placeholder= 'Apartment' id='apartment' onChange={handleChange} />
            <input placeholder= 'City' id='city_name' onChange={handleChange} />
            <input placeholder= 'State' id='state_name' onChange={handleChange} />
            <input placeholder= 'Country' id='country_name' onChange={handleChange} />
            <input placeholder= 'Email' id='email'/>
            {
                flag ? 
            
            <a
                className={(paymentData?.response?.init_point && style.mercadopago) || style.inactive} 
                target='_blank' href={paymentData?.response?.init_point} 
                rel='nofollow'
                >
            </a> 
             
                :
            items.length >0 && <button type='submit'>All set!</button>
            }
            
        </form>
        </div>
    )
}

export default Payment
