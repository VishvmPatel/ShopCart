import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";

const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    return (
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
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Beauty" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Men" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Beauty" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Kids" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Men" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Women" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Beauty" />
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<CheckBox />} label="Kids" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>FILTER BY PRICE</h6>

                    <RangeSlider
                        value={value}
                        onInput={setValue}
                        min={100}
                        max={60000}
                        step={5}
                    />

                    <div className="d-flex justify-content-between align-items-center priceRange mt-2 px-1">
                        <span>
                            <strong>Min:</strong> <span className="text-success">Rs: {value[0]}</span>
                        </span>
                        <span>
                            <strong>Max:</strong> <span className="text-success">Rs: {value[1]}</span>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar;