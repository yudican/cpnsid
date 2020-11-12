import React , { Component } from 'react'
import { Materi } from '../components/pages/materi/Materi'
import Layout from '../components/layouts'

export default class materi extends Component {
    
    render(){

        return (
            <>
             <Layout to="materi">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                        <Materi/>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




