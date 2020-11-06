import React, { Component } from 'react'
import Layout from '../../components/layouts'
import Link from "next/link"

export default class test extends Component {
    render() {
        return (
            <Layout>
                <div class="page-inner mt-2">
                    <Link href="/about" ><a> pergi ke about</a></Link>
                </div>
            </Layout>
        )
    }
}
