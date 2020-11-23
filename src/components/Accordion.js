import React, { useState } from 'react'


const Accordion = ({ items }) => {

    const [ activeIndex, setActiveIndex ] = useState(null)

    const onTitleClicked = index => {
        setActiveIndex(index)
    }

    const newList = items.map( ({ title, content }, index) => {

        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={title}>
                <div className={ `title ${active}` } onClick={ () => onTitleClicked(index) }>
                    <i className="dropdown icon"></i>
                    { title }
                </div>
                <div className={ `content ${active}` }>
                    <p>{ content }</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            { newList }
        </div>
    )
}

export default Accordion;