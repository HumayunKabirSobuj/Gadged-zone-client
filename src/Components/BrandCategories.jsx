


import queryString from "query-string";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BrandCategories() {
    const navigate = useNavigate();
    const [selectedBrand, setSelectedBrand] = useState("");
   
    useEffect(() => {
        if (selectedBrand && selectedBrand !== "") {
            const url = queryString.stringifyUrl({ url: "/", query: { brand: selectedBrand } });
            navigate(url);
        }
    }, [selectedBrand, navigate]);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };
    return (
        <div>
            <form>
                <div className="label">
                    <span className="label-text">Select Brand</span>
                    
                </div>
                <select
                    // {...register("brand")}
                    className="select select-bordered select-sm  text-center"
                    onChange={handleBrandChange}
                    defaultValue=""
                >
                    <option disabled value="">
                        <p>
                            <FaStar />
                        </p>
                        Select Brand Name
                    </option>
                    <option value="null">All</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Galaxy">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Pixel">Google Pixel</option>
                    <option value="ASUS">ASUS</option>
                </select>
            </form>
        </div>
    );
}
