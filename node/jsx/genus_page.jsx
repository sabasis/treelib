import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Genus from './components/genus.jsx';

var pg = pageData;

class App extends React.Component {
    render() {
        return (
            <div className="mainContainer">
                <Genus genus={pg.genus}/>
            </div>
        );
    }
}

if (self.fetch) {

} else {
    console.log('Unsupported browser. Please use Firefox or Google Chrome')
}


export default App
ReactDOM.render(<App />, document.getElementById('app'));