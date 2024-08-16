
export default function SearchPhone() {

    const handleSearch = (e) => {
        const data=e.target.value;
        console.log(data)

    }

    return (

        <div>
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-warning w-full max-w-xs" />
        </div>
    )

}
