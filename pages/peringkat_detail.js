import React , { Component } from 'react'
import { PeringkatDetail } from '../components/pages/peringkat/PeringkatDetail'
import Layout from '../components/layouts'

export default class soal extends Component {
    
    render(){

        return (
            <>
             <Layout>
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <PeringkatDetail/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




