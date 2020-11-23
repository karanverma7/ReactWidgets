import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convertor = ({ text, language }) => {

    const [ output, setOutput ] = useState('')
    const [ searchText, setSearchText ] = useState(text)

    useEffect( () => {
        const timeoutID = setTimeout( () => {
            setSearchText(text)
        }, 700)

        return () => {
            clearTimeout(timeoutID)
        }    
    }, [text])

    useEffect( () => {
        const apiCall = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: searchText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
            })
            setOutput(data.data.translations['0'].translatedText)
        }

        apiCall()
    }, [searchText, language])
    return (
        <div>
            <h3>{ output }</h3>
        </div>
    )
}

export default Convertor;