import React from 'react'
import { color } from "../../../../config/color";

export const HasilTryout = ({statusHasil= ''}) => {
    return (
        <>
            { statusHasil == "lulus" ? (
                <div className="card">
                        <div className="card-header ml-3">
                            <h2 className="text-dark">Selamat, kamu dinyatakan <span className="card-title" style={{ color : color.GREEN }}>LULUS</span></h2>
                        </div>
                    <div className="card-body">
                        <div class="col-5 md-12">
                            <div class="d-flex flex-row">
                                <div className="mt-4">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TKP</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>75</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TIU</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>85</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TKP</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>145</span> <span style={{ fontSize : "14px" }}>poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#F1FBFC' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.GREEN, fontSize: "14px"  }}>TOTAL</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>305</span> <span style={{ fontSize : "14px" }}>poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                         
                        </div>
                    </div>
                </div> 
                
                
            
            ) : (
                <div className="card">
                        <div className="card-header ml-3">
                            <h2 className="text-dark">Maaf, kamu dinyatakan <span className="card-title" style={{ color : color.RED }}>TIDAK LULUS</span></h2>
                        </div>
                    <div className="card-body">
                        <div class="col-5 md-12">
                            <div class="d-flex flex-row">
                                <div className="mt-4">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TKP</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>75</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TIU</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>12</span><span style={{ fontSize : "14px" }}> poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FAFAFF' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.PURPLE, fontSize: "14px"  }}>TKP</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>31</span> <span style={{ fontSize : "14px" }}>poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 ml-3">
                                    <div class="card" style={{ width : '150px', backgroundColor : '#FFF4F4' }}>
                                        <div class="card-body">
                                            <h4 className="card-title" style={{ marginTop : '-10px', color : color.RED, fontSize: "14px"  }}>TOTAL</h4>
                                            <h4 className="mt-2"><span className="font-weight-bold" style={{ fontSize : "24px" }}>118</span> <span style={{ fontSize : "14px" }}>poin</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                         
                        </div>
                    </div>
                </div> 
            )}
            

            <div className="card">
                <div className="d-flex align-items-center">
                    <div className="p-3 ml-4"><i className="fas fa-trophy" style={{ color : color.YELLOW }}></i></div>

                    <div className="mt-2 ml-2"><p style={{ fontSize : "16px" }}>Kami masih mengkalkulasi peringkat tryout kamu secara nasional. Kamu dapat mengecek<a href="#" className="font-weight-bold" style={{ textDecoration : "none", color : color.PRIMARY }}> Peringkat</a> <br></br> nasionalmu di menu Peringkat pada tanggal 12 Januari 2020.</p></div>
                </div>
            </div>

            <div className="col-md-12" style={{ marginLeft : -14 }}>
                <div className="card">
                    <div className="card-body">
                        <table className="table mt-3">
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
            <div class="row">
                <div class="col col-md-12 col-lg-5 d-flex">
                   <div class="d-flex">
                       <div class="p-2">SHARE : </div>
                   </div>
                </div>
                <div class="col col-md-12 col-lg-7">
                    <div className="p-2 float-right"><button className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Kirim Semua Jawaban</button></div>
                </div>
            </div>
        </>
    )
}


