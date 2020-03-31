import React, {Component} from 'react'
import './App.css';
import profile from '../img/profile.jpg'

import {connect} from 'react-redux';
import {setName, deleteName} from '../Redux/actions';
import Header from '../Header/index';
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
                <article className={"top"}>
                    <h1>NOGUのプロフィール</h1>
                    <div className={"contents"}>
                        <center>
                    <img src={profile} alt={"自己紹介"} />
                        </center>
                    <table>
                        <tbody>
                        <tr>
                            <th>氏名</th>
                            <td>野口大輝</td>
                        </tr>
                        <tr>
                            <th>職業</th>
                            <td>修士生(東京電機大学情報未来科学研究科情報メディア学専攻)</td>
                        </tr>
                        <tr>
                            <th>スキル</th>
                            <td>Python3・Java・PHP・Node.js・React・Raspberry Pi3・ESP32</td>
                        </tr>
                        <tr>
                            <th>趣味</th>
                            <td>インラインスケート・写真(EOS Kiss X7)・ボルダリング・ドライブ</td>
                        </tr>
                        <tr>
                            <th　colSpan="2">紹介文</th>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>2020年3月に工学部第二学部情報通信工学科を卒業そして4月に同大学未来科学研究科情報メディア学専攻として入学。学部1,2年の頃にバイト先のサイネージシステム(PHP)を
                                開発そして3年ではベンチャー企業のインターンにてNode.jsやReact,Python3を用いてSlackBotを使った出勤管理システムを作成。</p>
                                <p>学部時代の卒業テーマは"全世代をSNSに参加可能にするコミニケーションアシスタント"</p>
                                <p>修士生での目標は色々な人々との繋がりを増やしていきたいと考えています。</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </article>
                <article>
                    <h1>今までに実装した成果物</h1>
                </article>
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



