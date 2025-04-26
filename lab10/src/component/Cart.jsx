import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addItem, removeItem, updateQuantity} from "./redux/CartSlice"

function Cart() {

    const carts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [quanlity, setQuanlity] = useState (0)
    const [price, setPrice] = useState(0)
    const [isEditing, setIsEditing] = useState(false)
    const [totalQuantity, setTotalQuantity] = useState (0)
    const [totalMoney, setTotalMoney] = useState(0)

    const handleAdd = () => {
        if (name.trim() && quanlity.trim() && price.trim()){
            dispatch(addItem({
                name: name,
                quanlity: quanlity,
                price: price
            }))
            setName('')
            setQuanlity('')
            setPrice('')
        }
    }

    const handleUpdateQuantity = (quantityProduct) => {
        setIsEditing(true)
        setQuanlity(quantityProduct)
    }

    const handleSaveEdit = (id) =>{
        dispatch(updateQuantity({
            id: id,
            quanlity: quanlity
        }))
        setIsEditing(false)
    }

    const handleTotal = () => {
        let totalQuantity = 0
        let totalMoney = 0
        carts.forEach(cart => {
            totalQuantity += Number(cart.quantityProduct)
            totalMoney += Number(cart.quantityProduct) * Number(cart.priceProduct)
        });

        setTotalQuantity(totalQuantity)
        setTotalMoney(totalMoney)
    }


 
  return (
    <div className='cart'>

        <h1 style={{backgroundColor:"yellow"}}>SHOPPING CART</h1>

        <div className='infor'>
            Tên sản phẩm: 
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>     
        </div>
        <div  className='infor'>
            Số lượng: 
            <input type="text" value={quanlity} onChange={(e)=>setQuanlity(e.target.value)}/>
        </div>
        <div  className='infor'>
            Đơn giá: 
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
        </div>
        
        <button className='add' onClick={()=>handleAdd()}>Thêm vào giỏ hàng</button>
        
        <h3>Sản phẩm trong giỏ hàng: (Tên, SL, Đơn giá)</h3>

        <ul>
            {
                carts.map(cart=>{
                    return <li key= {cart.id}>
                        <span >{cart.nameProduct}</span>
                        
                        {isEditing ? (
                            <input value={quanlity} onChange={(e)=>setQuanlity(e.target.value)} onBlur = {()=>handleSaveEdit(cart.id)}/>
                        ) : (
                            <span>{cart.quantityProduct}</span>
                        )}
                        <span>{cart.priceProduct}</span>
                        <button className='delete' onClick={()=>dispatch(removeItem(cart.id))}>Xóa</button>
                        <button className='update' onClick={()=> handleUpdateQuantity(cart.quantityProduct)}>Chỉnh sửa</button>
                    </li>
                })
            }
        </ul>

        <button className='total' onClick={()=>handleTotal()}>Tính tổng</button>
        <h3>Tổng số lượng: {totalQuantity}</h3>
        <h3>Tổng tiền: {totalMoney}</h3>

    </div>
  )
}

export default Cart
