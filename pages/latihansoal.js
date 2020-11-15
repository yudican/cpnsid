import React , { Component } from 'react'
import { LatihanHome  } from '../components/pages/latihansoal/LatihanHome'
import Layout from '../components/layouts'

export default class pengaturan extends Component {
    
    render(){

        return (
            <>
             <Layout title="Latihan Soal" to="latihansoal">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <LatihanHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




