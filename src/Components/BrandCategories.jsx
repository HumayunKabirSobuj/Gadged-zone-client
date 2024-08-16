import queryString from "query-string";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BrandCategories() {
    const navigate=useNavigate();
    const [data, setData] = useState('')
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setData(data.brand);

    // console.log(data)


    useEffect(() => {
        if (data) {
            const url = queryString.stringifyUrl({ url: '/', query: { brand: data } });
            navigate(url);
        }
    }, [data, navigate]); // Dependency array with data and navigate
    // let currentQuery = { brand: data };
    // const url = queryString.stringifyUrl({
    //   url: '/',
    //   query: currentQuery
    // })


    
    




    return (
        <div>
            <form onChange={handleSubmit(onSubmit)}>

                <select {...register("brand")} className="select select-bordered select-sm w-1/2 text-center">
                    <option disabled selected><p><FaStar /></p>
                    Select Brand Name</option> 
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
    )
}
