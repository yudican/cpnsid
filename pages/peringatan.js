import React, { Component } from 'react'
import Layout from '../components/layouts'
import Link from "next/link"
import { color } from "../config/color";

export default class peringatan extends Component {
 
    render() {
        
        return (
            <Layout>
                <div className="page-inner mt-2">
                    <div className="col md-12">
                       <div className="card">
                           <div className="card-header ml-3">
                               <h2 className="card-title text-dark">Harap diperhatikan!</h2>
                           </div>
                           <div className="card-body">
                               <div class="col-md-12 col-lg-5">
                                    <p class="card-text">Saat ujian telah dimulai, dilarang keluar dari halaman ujian atau Anda akan dinyatakan TIDAK LULUS. Layaknya saat ujian CPNS oleh BKN, dilarang membuka buku atau mencari jawaban di internet. Pengerjaan pertama akan dimasukkan ke dalam peringkat nasional, harap kerjakan semaksimal mungkin.</p>

                                    <div class="d-flex flex-row">
                                        <div className="mt-4">
                                            <div class="card" style={{ width : '110px', backgroundColor : '#F1FBFC' }}>
                                                <div class="card-body">
                                                    <h4 className="card-title" style={{ marginTop : '-10px', color : color.GREEN, fontSize: "14px"  }}>Benar</h4>
                                                    <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>+5</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 ml-3">
                                            <div class="card" style={{ width : '110px', backgroundColor : '#FFF4F4' }}>
                                                <div class="card-body">
                                                    <h4 className="card-title" style={{ marginTop : '-10px', color : color.RED, fontSize: "14px"  }}>Kosong</h4>
                                                    <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>0</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 ml-3">
                                            <div class="card" style={{ width : '110px', backgroundColor : '#FFF4F4' }}>
                                                <div class="card-body">
                                                    <h4 className="card-title" style={{ marginTop : '-10px', color : color.RED, fontSize: "14px"  }}>Salah</h4>
                                                    <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>0</span> <span style={{ fontSize : "14px" }}>poin</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                         
                               </div>
                           </div>
                       </div> 
                    </div>

                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <table class="table mt-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">Analisa Soal</th>
                                            <th scope="col">TWK</th>
                                            <th scope="col">TIU</th>
                                            <th scope="col">TKP</th>
                                            <th className="font-weight-bold" scope="col">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                    <hr></hr>
                    <div className="d-flex bd-highlight mb-3 mt-3">
                        <div className="mr-auto p-1 bd-highlight"><button type="button" className="btn btn-light"><i className="fas fa-arrow-left mr-2"></i>Kembali</button></div>
                        <div className="p-2 bd-highlight"><button type="button" className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Mulai Ujian</button></div>
                    </div>
                </div>
            </Layout>
        )
    }
}
