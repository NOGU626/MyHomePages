import React, {Component} from 'react'
import './index.css';
import img from '../img/ND_LOGO.png'
import { Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        return (
            <div>
                <header>
                    <h1><img src={img} alt="サイトのロゴ"/>INSHARE</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>トップ</Link>
                            </li>
                            <li>
                                <Link to='/'>お知らせ</Link>
                            </li>
                            <li>
                                <Link to='/about'>NOGUについて</Link>
                            </li>
                            <li>
                                <Link to='/'>お問いわせ</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default App;



