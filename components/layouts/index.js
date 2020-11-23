import { Head } from 'next/document'
import React, { Component } from 'react'
import { color } from '../../config/color'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

class Layout extends Component {


    render() {
       console.log("props to ", this.props.to)
        return (
            <div className="wrapper">
                <AppHeader titleNav={this.props.title}/>
                <AppSidebar active={this.props.to}/>
                <div className="main-panel" style={{backgroundColor:color.GREY}}>
                    <div className="container">
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout
