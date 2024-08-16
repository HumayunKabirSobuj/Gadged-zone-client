import queryString from "query-string";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPhone() {

    const [name, setName] = useState('')
    const navigate = useNavigate()



    // console.log(name)
    useEffect(() => {
        if (name && name !== "") {
            const url = queryString.stringifyUrl({ url: "/", query: { productname: name } });
            navigate(url);
        }
    }, [name, navigate]);




    const handleSearch = (e) => {
        const data = e.target.value;
        setName(data)
    }

    return (

        <div className="flex justify-center">
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-warning w-full max-w-xs" />
        </div>
    )

}
