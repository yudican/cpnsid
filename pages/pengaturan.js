import React , { Component } from 'react'
import { PengaturanHome  } from '../components/pages/pengaturan/PengaturanHome'
import Layout from '../components/layouts'

export default class pengaturan extends Component {
    
    render(){

        return (
            <>
             <Layout title="Pengaturan" to="pengaturan">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <PengaturanHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




