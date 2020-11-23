import React , { Component } from 'react'
import { HasilTryout } from '../components/pages/dashboard/tryout/HasilTryout'
import Layout from '../components/layouts'
import { color } from "../config/color";


export default class hasil extends Component {
    
    render(){

        return (
            <>
             <Layout to="peringkat">
                 <div class="page-inner mt-2">
                     <div class="col-md-12">
                         <div class="row">
                            <div className="col-xs-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="card" style={{ borderRadius: 10 }}>
                                    <div
                                    className="card-header bg-gradient-blue p-4"
                                    style={{ borderRadius: 10 }}
                                    >
                                    <h4 className="card-title text-white">Tryout yang kamu ikuti</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="card" style={{ backgroundColor : color.GREY }}>
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="flex-1 ml-3 pt-1">
                                                        <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD
                                                        <button
                                                            className="btn btn-sm bg-gradient mr-2 ml-2"
                                                            style={{ paddingTop: 4, paddingBottom: 4 }}
                                                        >
                                                            <i className="fas fa-fire pr-1"></i> Exclusive
                                                        </button>
                                                        </h6>
                                                        <span class="text-muted"><i className="fas fa-calendar pr-2" style={{ color: color.PURPLE }} > 29 Jul 2020</i></span>
                                                        <span className="text-muted"><i className="fas fa-star" style={{ color: color.YELLOW }}> Total Skor 120</i></span>
                                                    </div>
                                                    <div class="float-right pt-1">
                                                        <a className="font-weight-bold" style={{ color : color.PRIMARY }}>LIHAT ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card" style={{ backgroundColor : color.GREY }}>
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="flex-1 ml-3 pt-1">
                                                        <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD
                                                        </h6>
                                                        <span class="text-muted"><i className="fas fa-calendar pr-2" style={{ color: color.PURPLE }} > 29 Jul 2020</i></span>
                                                        <span className="text-muted"><i className="fas fa-star" style={{ color: color.YELLOW }}> Total Skor 120</i></span>
                                                    </div>
                                                    <div class="float-right pt-1">
                                                        <a className="font-weight-bold" style={{ color : color.PRIMARY }}>LIHAT ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   
                                        <div class="card" style={{ backgroundColor : color.GREY }}>
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="flex-1 ml-3 pt-1">
                                                        <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD
                                                        <button
                                                            className="btn bg-gradient-blue btn-sm ml-2"
                                                            style={{ paddingTop: 4, paddingBottom: 4, color: "#fff" }}
                                                        >
                                                            <i className="fas fa-award pr-1"></i> Premium
                                                        </button>
                                                        </h6>
                                                        <span class="text-muted"><i className="fas fa-calendar pr-2" style={{ color: color.PURPLE }} > 29 Jul 2020</i></span>
                                                        <span className="text-muted"><i className="fas fa-star" style={{ color: color.YELLOW }}> Total Skor 120</i></span>
                                                    </div>
                                                    <div class="float-right pt-1">
                                                        <a className="font-weight-bold" style={{ color : color.PRIMARY }}>LIHAT ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   
                                        <div class="card" style={{ backgroundColor : color.GREY }}>
                                            <div class="card-body">
                                                <div class="d-flex">
                                                    <div class="rounded-circle text-center" style={{ backgroundColor : '#FFF0DC', width : 60, height : 60,}}>
                                                        <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#FFA125' }}></i>
                                                    </div>
                                                    <div class="flex-1 ml-3 pt-1">
                                                        <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD
                                                        </h6>
                                                        <span class="text-muted"><i className="fas fa-calendar pr-2" style={{ color: color.PURPLE }} > 29 Jul 2020</i></span>
                                                        <span className="text-muted"><i className="fas fa-star" style={{ color: color.YELLOW }}> Total Skor 120</i></span>
                                                    </div>
                                                    <div class="float-right pt-1">
                                                        <a className="font-weight-bold" style={{ color : color.PRIMARY }}>LIHAT {">"}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>              
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-4 col-lg-4 col-md-12 col-sm-12 d-flex flex-column">
                                <div class="card p-4">
                                    <div class="card-body d-flex flex-column">
                                        <h3 className="mb-1">Statistik Anda</h3>    
                                        <div class="d-flex mt-4">
                                            <div class="rounded-circle text-center" style={{ backgroundColor : '#FFF0DC', width : 60, height : 60,}}>
                                                <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#FFA125' }}></i>
                                            </div>
                                            <div class="flex-1 ml-3 pt-1">
                                                <h6 class="mb-1" style={{ fontSize : "14px" }}>Peringkat Terbaru
                                                </h6>
                                                <span class="fw-bold" style={{ fontSize : "18px" }}>68</span>                                               
                                            </div>
                                        </div>
                                        <div class="d-flex mt-4">
                                            <div class="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                                <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                            </div>
                                            <div class="flex-1 ml-3 pt-1">
                                                <h6 class="mb-1" style={{ fontSize : "14px" }}>Peringkat Tertinggi Anda
                                                </h6>
                                                <span class="fw-bold" style={{ fontSize : "18px" }}>32</span>                                               
                                            </div>
                                        </div>  
                                        <div class="d-flex mt-4">
                                            <div class="rounded-circle text-center" style={{ backgroundColor : '#FFE7E7', width : 60, height : 60,}}>
                                                <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#FF6868' }}></i>
                                            </div>
                                            <div class="flex-1 ml-3 pt-1">
                                                <h6 class="mb-1" style={{ fontSize : "14px" }}>Peringkat Terendah Anda
                                                </h6>
                                                <span class="fw-bold" style={{ fontSize : "18px" }}>120</span>                                               
                                            </div>
                                        </div>
                                        <div class="d-flex mt-4">
                                            <div class="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                                <i className="far fa-calendar-check fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                            </div>
                                            <div class="flex-1 ml-3 pt-1">
                                                <h6 class="mb-1" style={{ fontSize : "14px" }}>Tryout Lulus
                                                </h6>
                                                <span class="fw-bold" style={{ fontSize : "18px" }}>4</span>                                               
                                            </div>
                                        </div>
                                        <div class="d-flex mt-4">
                                            <div class="rounded-circle text-center" style={{ backgroundColor : '#FFE7E7', width : 60, height : 60,}}>
                                                <i className="far fa-calendar-times fa-2x" style={{ marginTop : 16, color : '#FF6868' }}></i>
                                            </div>
                                            <div class="flex-1 ml-3 pt-1">
                                                <h6 class="mb-1" style={{ fontSize : "14px" }}>Tryout Tidak Lulus
                                                </h6>
                                                <span class="fw-bold" style={{ fontSize : "18px" }}>12</span>                                               
                                            </div>
                                        </div>                                                                                                                          
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




