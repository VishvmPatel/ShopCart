import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";

const Sidebar = () =>{
    return(
        <>
        <div className="sidebar">
            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>

                <div className="scroll">
                    <ul>
                        <li>
                            <FormControlLabel className="w-100" control={<CheckBox />} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className="w-100" control={<CheckBox />} label="Men" />
                        </li>
                    
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;