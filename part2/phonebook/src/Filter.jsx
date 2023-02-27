import React from "react"

const Filter = ({ filterQuery, setFilterQuery }) => {
    return (
        <p>
            filter shown with <input type="text" value={filterQuery} onChange={(event) => setFilterQuery(event.target.value)} />
        </p>
    )
}

export default Filter
