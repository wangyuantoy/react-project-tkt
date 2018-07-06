import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom'
export default class TabBar extends React.Component {
    render(){
        return(
            <nav className="nav-bar">
                <NavLink to="/home">
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="iconfont icon-tushuguanlibrary12"></i>
                    <span>课程</span>
                    </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-smile"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}