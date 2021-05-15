import React, { useState } from 'react'
import './_categories.scss'

const keywords = [
    'All',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
    'React JS',
    'Angular JS',
]

const Categories = () => {

    const [activeElement, setActiveElement] = useState('All');
    const handleClick = value => {
        setActiveElement(value)
    }

    return (
        <div className="categoriesBar">
            {keywords.map((value, i) => 
                <span 
                    className={activeElement === value ? 'active' : ''}
                    key={i}
                    onClick={() => handleClick(value)}
                >
                    {value}
                </span>
            )}
        </div>
    )
}

export default Categories
