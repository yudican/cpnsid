import React , { Component } from 'react'
import { InformasiHome  } from '../components/pages/informasi/InformasiHome'
import Layout from '../components/layouts'

export default class informasi extends Component {
    
    render(){

        return (
            <>
             <Layout title="informasi" to="informasi">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <InformasiHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




