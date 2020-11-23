import React , { Component } from 'react'
import { Tools  } from '../components/pages/compress/Tools'
import Layout from '../components/layouts'

export default class compresstool extends Component {
    
    render(){

        return (
            <>
             <Layout title="Compress Tool" to="compress">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <Tools/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




