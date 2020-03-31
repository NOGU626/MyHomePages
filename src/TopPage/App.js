import React, {Component} from 'react'
import './App.css';

import {connect} from 'react-redux';
import {setName, deleteName} from '../Redux/actions';
import Header from '../Header/index';
import DisplayC from './index';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        return (
            <div>
                {/*ヘッダー*/}
                <Header />
                {/*スライダーコンテンツ*/}
                <DisplayC/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.user.name
});

const mapDispatchToProps = {
    setName,
    deleteName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



