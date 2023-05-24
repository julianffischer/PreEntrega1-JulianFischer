import './assets/Cart.scss'
import Carro from './assets/CarroDeCompras.png'
import { useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { Link} from "react-router-dom";

export const CartWidget = () => {
    
    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <Link to='/cart' className='CartWidget' style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
                <img src={Carro} alt="Carro de compras" className='ImgCart' />
                <div className='TotalQuantity'>
                    {totalQuantity()}
                </div>
        </Link>
        </>
    )
}