import {Link} from "react-router-dom";
import {Badge, Button} from "reactstrap";
import { FaCartShopping } from "react-icons/fa6";

type Props = {
    isActive: boolean,
    draft_imt_id: number,
    categorys_count: number
}

const Cart = ({isActive, draft_imt_id, categorys_count}:Props) => {
    if (!isActive) {
        return <Button color={"secondary"} className="bin-wrapper bin" disabled>
            <FaCartShopping />
            Корзина
        </Button>
    }

    return (
        <Link to={`/imts/${draft_imt_id}/`} className="bin-wrapper">
            <Button color={"primary"} className="w-100 bin">
                <FaCartShopping />
                Корзина
                <Badge>
                    {categorys_count}
                </Badge>
            </Button>
        </Link>
    )
}

export default Cart
