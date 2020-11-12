import React , { Component } from 'react'
import { SoalTryout } from '../components/pages/dashboard/tryout/SoalTryout'
import Layout from '../components/layouts'

export default class soal extends Component {
    
    render(){

        return (
            <>
             <Layout>
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <SoalTryout/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




