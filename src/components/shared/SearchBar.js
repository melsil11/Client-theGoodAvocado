import React, { useState } from "react"
import { Input } from 'antd'
import { useNavigate } from 'react-router-dom' 
import 'antd/es/input/style/index.css'
import 'antd/es/button/style/index.css'

const { Search } = Input

const SearchBar = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')

    const onSearch = (searchInput) => {
        setInputValue('')
        navigate(`restaurants/search/${searchInput}`)
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <Search
                    placeholder="Restaurant, type, or city"
                    onSearch={onSearch}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        width: '280px'
                    }}
                />
            </div>
        </div>
    )
}

export default SearchBar