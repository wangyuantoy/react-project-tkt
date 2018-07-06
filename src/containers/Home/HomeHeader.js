import React from 'react';
import logo from '../../images/logo.png'
export default class HomeHeader extends React.Component {
    constructor(){
        super();
        this.state = {isShow:false}
    }
    changeShow = ()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    };
    render(){
        return(
            <div className="home-header">
                <div className="home-header-logo">
                    <img src={logo} alt=""/>
                    <div className="home-header-btn" onClick={()=>{this.changeShow();}}>
                        {this.state.isShow ? <i className="iconfont icon-close"></i> : <i className="iconfont icon-liebiao"></i>}
                    </div>
                </div>
            </div>
        )
    }
}