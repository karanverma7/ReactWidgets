import React, {useState} from 'react'
import Navbar from './Navbar'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const items = [
    {
        title: 'What is ReactJS?',
        content: 'React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications'
    },
    {
        title: 'Why to use ReactJS?',
        content: 'React allows developers to create large web applications that can change data, without reloading the page.'
    },
    {
        title: 'Is it easy to learn ReactJS?',
        content: 'Both HTML and CSS are integral to any web development project. If you have these skills already, then learning React should be a relatively straightforward process.'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    }
]

const App = () => {

    const [ selected, setSelected ] = useState(options[0])
    
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Accordion items={ items } />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a Color" 
                        options={ options } 
                        selected={ selected } 
                        onSelectedChange={ setSelected } 
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;