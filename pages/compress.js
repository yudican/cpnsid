import React , { Component } from 'react'
import { CompresHome  } from '../components/pages/compress/CompresHome'
import Layout from '../components/layouts'

export default class pengaturan extends Component {
    
    render(){

        return (
            <>
             <Layout title="Compress File" to="compress">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <CompresHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




