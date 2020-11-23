import React , { Component } from 'react'
import { HasilTryout } from '../components/pages/dashboard/tryout/HasilTryout'
import Layout from '../components/layouts'

export default class hasil extends Component {
    
    render(){

        return (
            <>
             <Layout>
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <HasilTryout statusHasil="lulus"/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




