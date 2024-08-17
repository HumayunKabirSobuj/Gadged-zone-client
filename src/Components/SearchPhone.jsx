
import PropTypes from 'prop-types'
export default function SearchPhone({setName}) {

    // console.log(name)
    // useEffect(() => {
    //     if (name && name !== "") {
    //         const url = queryString.stringifyUrl({ url: "/", query: { productname: name } });
    //         navigate(url);

    //     }
    // }, [name, navigate]);




    const handleSearch = (e) => {
        const data = e.target.value;
        setName(data)

    }

    return (

        <div className="">
            <div className="label">
                <span className="label-text">Search By Name</span>
                
            </div>
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full input-sm" />
        </div>
    )

}
SearchPhone.propTypes = {
    setName: PropTypes.object,
}
