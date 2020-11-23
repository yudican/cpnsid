import React , { Component } from 'react'
import { ToeflHome } from '../components/pages/toefl/ToeflHome'
import Layout from '../components/layouts'

export default class toefl extends Component {
    
    render(){

        return (
            <>
             <Layout title="Toefl Prediction/EPT" to="toefl">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <ToeflHome/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




