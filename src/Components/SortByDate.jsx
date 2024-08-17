import PropTypes from 'prop-types'

export default function SortByDate({setDateSort,DateSort}) {
  return (
    <div>
      {/* DateSort in new method */}
      <div>
          <select
            onChange={e => {
              setDateSort(e.target.value)

            }}
            value={DateSort}
            name='sort'
            id='sort'
            className="grow p-2 rounded border-primary  border-2 input input-bordered input-success"
          // className='border p-4 rounded-md'
          >
            <option value="">Sort by Date</option>
            <option value="newest"> Newest first</option>
            <option value="oldest"> Oldest first</option>
          </select>
        </div>
    </div>
  )
}
SortByDate.propTypes = {
    setDateSort: PropTypes.object,
    DateSort: PropTypes.object,
    
}