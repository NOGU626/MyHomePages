import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { BrowserRouter, Route} from 'react-router-dom'
import TopPage from './TopPage/App';
import About from './About/App';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path='/' component={TopPage} />
                    <Route path='/about' component={About} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
// export default App;
