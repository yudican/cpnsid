import React , { Component } from 'react'
//import { SoalTryout } from '../components/pages/dashboard/tryout/SoalTryout'
import { MateriDetail } from '../components/pages/materi/MateriDetail'
import Layout from '../components/layouts'

export default class materi_detail extends Component {
    
    render(){

        return (
            <>
             <Layout>
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <MateriDetail/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




