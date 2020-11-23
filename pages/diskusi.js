import React , { Component } from 'react'
import { DiskusiHome  } from '../components/pages/diskusi/DiskusiHome'
import Layout from '../components/layouts'

export default class diskusi extends Component {
    
    render(){

        return (
            <>
             <Layout title="Forum Diskusi" to="diskusi">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <DiskusiHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




