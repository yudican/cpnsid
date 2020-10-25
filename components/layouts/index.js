import { Head } from 'next/document'
import React, { Component } from 'react'
import { color } from '../../config/color'
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <AppHeader />
                <AppSidebar />
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
