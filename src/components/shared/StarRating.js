import React from 'react'
import { Rate } from 'antd'
import 'antd/es/rate/style/index.css'

const StarRating = ({ value, style }) => {
    return (
        <Rate
            allowHalf
            disabled
            value={value}
            style={style}
        />
    )
}

export default StarRating