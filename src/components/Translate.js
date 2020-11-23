import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convertor from './Convertor'

const options = [
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {   
        label: 'Arabic',
        value: 'ar'
    },
    {   
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {

    const [ language, setLanguage ] = useState(options[0])
    const [ text, setText ] = useState('')
    
    return (
        <div className="ui container">
            <div className="ui form" style={{ marginTop:'50px' }} >
                <div className="field">
                    <h4>Enter Text :</h4>
                    <input 
                        type="text"
                        value={ text }
                        onChange={ e => setText(e.target.value) }
                    />
                </div>
            </div>
            <Dropdown 
                label="Select a Language :"
                options={ options } 
                selected={ language } 
                onSelectedChange={ setLanguage } 
            />
            <h4 style={{ marginTop:'30px' }}>
                Output :
            </h4>
            <Convertor text={ text } language={ language } />
        </div>
    )
}

export default Translate;