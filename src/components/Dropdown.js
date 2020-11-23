import React, { useState, useEffect, useRef } from 'react'


const Dropdown = ({ label, options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false)
    const form = useRef()

    useEffect( () => {

        const onBodyClick = e => {
            if(form.current.contains(e.target)){
                return;
            }

            setOpen(false)
        }
        document.addEventListener( 'click', onBodyClick, { capture: true } ) 

        return () => {
            document.removeEventListener('click', onBodyClick, { capture: true })
        }
    }, [])

    const renderedOptions = options.map( option => {

        if(option.value === selected.value){
            return null
        }

        return (
            <div onClick={ () =>  onSelectedChange(option) } key={ option.value } className="item">
                { option.label }
            </div>
        )
    })

    return (
        <div ref={ form } className="ui form container" style={{ marginTop: '30px'}}> 
            <div className="field">
                <h4>{ label }</h4>
                <div 
                    onClick={ () => setOpen(!open) } 
                    style={{ width:'30%'}} 
                    className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : '' }`}>
                        { renderedOptions }
                    </div>
                </div>
            </div>
            {/* Code for Color DropDown text 
                <h4>This is
                    <span style={{ color: selected.value }}>
                        &#9670; {selected.value} 
                    </span>in color.
                </h4>
            */}
        </div>
    )
}

export default Dropdown;