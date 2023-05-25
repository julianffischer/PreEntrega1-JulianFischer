import { useState} from 'react';
import './styles.scss'


export const ItemCount = ({stock, valueInitial, onAdd}) => {
    const [item, setitem] = useState(valueInitial)

    const addCart = () => {
        if (item<=stock){
            setitem (item + 1)
        }    
    }
    const outCart = ()=>{
        if (item>= 1 ){
            setitem (item - 1)
        }
        else {
            alert ("No tienes éste producto en tu carrito")
        }
    }
    return (
    <div>
        <div className='button-shoppingCart'>
            <div className="number">{item}</div>
            <div className="Add-cart" onClick={addCart}> + </div>
            <div className="Out-cart" onClick={outCart}> - </div>
            <button className='AddAll' onClick={()=>onAdd (item) } disabled = {(!stock) }>Add to cart</button>     
        </div>
    </div>
    )
}
