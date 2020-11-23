import React, { useState, useEffect } from 'react'
import axios from 'axios'
import wikipedia from './wikipedia.png'

const Search = () => {

    const [term, setTerm] = useState('ReactJS')
    const [results, setResults] = useState([])

    const renderedList = results.map( result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <br></br>
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        <div class="ui animated button primary" tabindex="0">
                            <div class="visible content">Go</div>
                            <div class="hidden content">
                                <i class="right arrow icon"></i>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        <br></br>
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                </div>
            </div>
        )
    })

    useEffect( () => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if(term && !results){
            search()
        }
        else {
            const timeoutId = setTimeout( () => {
                if(term) {
                    search()
                }
            }, 700)
    
            return () => {
                clearTimeout(timeoutId)
            }
        }

    }, [term])

    return (
        <div className="ui container">
            <div className="ui form" style={{ marginTop: '20px' }}>
                <div className="field">
                    <h2><img src={ wikipedia } height="40px" alt="wikipedia" /> &nbsp; Wikipedia Search</h2>
                    <input
                        className="input" 
                        type="text"
                        value={term}
                        onChange={ e => setTerm(e.target.value) }
                    />
                </div>
            </div>
            <div className="ui celled list">
                <br></br>
                {renderedList}
            </div>
        </div>
    )
}

export default Search;