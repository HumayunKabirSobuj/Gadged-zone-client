

export default function LowToHighOrHighToLow({sort,setSort}) {
    return (
        <div>
            {/* sort in new method */}
            <div>
                <select
                    onChange={e => {
                        setSort(e.target.value)

                    }}
                    value={sort}
                    name='sort'
                    id='sort'
                    className="grow p-2 rounded border-primary  border-2 input input-bordered input-success"
                // className='border p-4 rounded-md'
                >
                    <option value=''>Sort By Price</option>
                    <option value='dsc'>High to Low</option>
                    <option value='asc'>Low to High</option>
                </select>
            </div>
        </div>
    )
}
