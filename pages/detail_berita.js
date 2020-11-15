import React , { Component } from 'react'
import { DetailBerita  } from '../components/pages/informasi/DetailBerita'
import Layout from '../components/layouts'

export default class detail_berita extends Component {
    
    render(){

        return (
            <>
             <Layout title="informasi" to="informasi">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <DetailBerita/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




