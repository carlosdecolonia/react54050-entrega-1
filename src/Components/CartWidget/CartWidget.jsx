import { BsCart } from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
    return (
    <div className="cart-widget-container">
        <button>
        <BsCart />
        </button>
        <span className="cart-number">0</span>
    </div>
    );
};

export default CartWidget;