import Dialog from '@mui/material/Dialog';
import { MdClose } from 'react-icons/md';
import Button from '@mui/material/Button';
const ProductModal = ()=>{
    return(
        <>
            <Dialog open={true}>
                <Button className='close_'><MdClose /></Button>
            </Dialog>
        </>
    )
}

export default ProductModal;