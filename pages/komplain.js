import React , { Component } from 'react'
import Layout from '../components/layouts'

export default class komplain extends Component {
    
    render(){

        return (
            <>
             <Layout title="Komplain & Saran" to="komplain">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                       <div class="row">
                           <div class="col-lg-4 col-md-12">
                               <div class="card p-3">
                                   <div class="card-body">
                                       <h2 className="text-dark font-weight-bold ml-2">Kirim Komplain</h2>
                                       <p className="mt-4 ml-2">Silahkan isi data di bawah ini, dan kami akan membalas secepatnya.</p>
                                       <div class="form-group">
                                            <label for="exampleFormControlSelect1">Subjek</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Pilih Subjeck</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </select>
                                        </div> 
                                        <div class="form-group">
                                            <label for="comment">Pesan</label>
                                            <textarea class="form-control" id="comment" rows="5">

                                            </textarea>
                                        </div>
                                        <div class="mt-3 ml-2"><button className="btn btn-primary">Kirim</button></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                     </div>
                 </div>
             </Layout>
            </>
        )
    }
}




