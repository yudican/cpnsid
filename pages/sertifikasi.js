import React , { Component } from 'react'
import { SertifikasiHome } from '../components/pages/sertifikasi/SertifikasiHome'
import Layout from '../components/layouts'

export default class sertifikasi extends Component {
    
    render(){

        return (
            <>
             <Layout title="Sertifikasi" to="sertifikasi">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <SertifikasiHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




