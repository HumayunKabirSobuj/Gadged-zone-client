
// import queryString from "query-string";
// import { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function SeriesCategories() {
//     const navigate = useNavigate();
//     const [selectedCategory, setSelectedCategory] = useState("");
   
//     useEffect(() => {
//         if (selectedCategory && selectedCategory !== "") {
//             const url = queryString.stringifyUrl({ url: "/", query: { category: selectedCategory } });
//             navigate(url);
//         }
//     }, [selectedCategory, navigate]);

//     const handleCategoryChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };

//     console.log(selectedCategory)
//     return (
//         <div>
//             <form>
//                 <div className="label">
//                     <span className="label-text">Select Category</span>
                    
//                 </div>
//                 <select
//                     // {...register("brand")}
//                     className="select select-bordered select-sm w-1/2 text-center"
//                     onChange={handleCategoryChange}
//                     defaultValue=""
//                 >
//                     <option disabled value="">
//                         <p>
//                             <FaStar />
//                         </p>
//                         Select Category
//                     </option>
//                     <option value="null">All</option>
//                     <option value="Flagship">Flagship</option>
//                     <option value="Budget">Budget</option>
//                     <option value="Mid-Range">Mid-Range</option>
//                     <option value="Gaming">Gaming</option>
//                     <option value="Camera">Camera</option>
//                 </select>
//             </form>
//         </div>
//     );
// }


// উপর এর গুলা আমার

import queryString from "query-string";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SeriesCategories() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        // if (selectedCategory !== "") {
        //     // Construct the URL with the selected category
        //     const url = queryString.stringifyUrl({ url: "/", query: { category: selectedCategory === "null" ? "" : selectedCategory } });
        //     navigate(url);
        // }
        if (selectedCategory && selectedCategory !== "") {
            const url = queryString.stringifyUrl({ url: "/", query: { category: selectedCategory } });
            navigate(url);
        }
    }, [selectedCategory, navigate]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    console.log(selectedCategory);

    return (
        <div>
            <div className="label w-full">
                <span className="label-text">Select Category</span>
            </div>
            <select
            
                className="select select-accent select-sm text-center w-full"
                onChange={handleCategoryChange}
                value={selectedCategory}
            >
                <option disabled value="">
                    <p>
                        <FaStar />
                    </p>
                    Select Category
                </option>
                <option value="null">All</option>
                <option value="Flagship">Flagship</option>
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Gaming">Gaming</option>
                <option value="Camera">Camera</option>
            </select>
        </div>
    );
}
