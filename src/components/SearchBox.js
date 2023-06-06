import { useState } from "react"


function SearchBox({ onChange, onSubmit, searchItem }) {

    return <div>
        <form onSubmit={onSubmit}>
            <label>
                Search:
                <input type="text" placeholder="Enter pokemon or number.."value={searchItem} onChange={onChange}
                />
            </label>
        </form>
    </div>
}

export default SearchBox