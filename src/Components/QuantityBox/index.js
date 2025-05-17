import Button from "@mui/material/Button";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from 'react-icons/fa6';

const QuantityBox = () => {
    return (
        <div className='quantityDrop d-flex align-items-center'>
            <Button><FaMinus /></Button>
            <input type='text' />
            <Button><FaPlus /></Button>
        </div>
    )
}

export default QuantityBox;