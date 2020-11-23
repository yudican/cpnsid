import React from 'react'
import { color } from "../../../config/color";
import Link from 'next/link'
export const PeringkatDetail = () => {
    return (
        <>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                    
                    <Link href="/peringkat"><a className="btn btn-light"><i className="fas fa-arrow-left"></i></a></Link>
                    <span className="card-title ml-3">Try Out SKD 07</span>
                </div>
                <div className="p-2 bd-highlight">
                    <select className="form-control" id="notify_style">
                        <option>Filter Instasi</option>
                        <option value="">Badan Pemeriksaan keuangan</option>
                    </select>
                </div>
                <div class="p-2 bd-highlight">            
                    <div className="input-group">
                        <input type="text"  className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        <div className="input-group-append">
                            <span className="input-group-text" style={{ backgroundColor: '#7B66A9' }} id="basic-addon2"><i className="fas fa-search" style={{ color : color.WHITE }}></i></span>
                        </div> 
                    </div>                   
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="d-flex flex-wrap">
                        <div className="card ml-4" style={{ width : 350 }}>
                            <div className="card-body">
                                <div className="d-flex mt-4">
                                    <div className="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                        <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                    </div>
                                    <div class="flex-1 ml-3 pt-1">
                                        <h6 className="mb-1" style={{ fontSize : "14px" }}>Peringkat Tertinggi Anda
                                        </h6>
                                        <span className="fw-bold" style={{ fontSize : "18px" }}>32</span>                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card ml-4" style={{ width : 350 }}>
                            <div className="card-body">
                                <div className="d-flex mt-4">
                                    <div className="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                        <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                    </div>
                                    <div className="flex-1 ml-3 pt-1">
                                        <h6 className="mb-1" style={{ fontSize : "14px" }}>Peringkat Tertinggi Anda
                                        </h6>
                                        <span className="fw-bold" style={{ fontSize : "18px" }}>32</span>                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card ml-4" style={{ width : 350 }}>
                            <div className="card-body">
                                <div className="d-flex mt-4">
                                    <div className="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                        <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                    </div>
                                    <div class="flex-1 ml-3 pt-1">
                                        <h6 class="mb-1" style={{ fontSize : "14px" }}>Peringkat Tertinggi Anda
                                        </h6>
                                        <span class="fw-bold" style={{ fontSize : "18px" }}>32</span>                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card ml-4" style={{ width : 350 }}>
                            <div className="card-body">
                                <div className="d-flex mt-4">
                                    <div className="rounded-circle text-center" style={{ backgroundColor : '#DFF5F7', width : 60, height : 60,}}>
                                        <i className="fas fa-trophy fa-2x" style={{ marginTop : 16, color : '#36C2CF' }}></i>
                                    </div>
                                    <div className="flex-1 ml-3 pt-1">
                                        <h6 className="mb-1" style={{ fontSize : "14px" }}>Peringkat Tertinggi Anda
                                        </h6>
                                        <span className="fw-bold" style={{ fontSize : "18px" }}>32</span>                                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="body">
                            <div className="table-responsive">
                                <table className="display table table-hover" id="basic-datatables">
                                    <thead>
                                        <tr>
                                            <th>PERINGKAT</th>
                                            <th>NAMA</th>
                                            <th>TANGGAL</th>
                                            <th>POINT TWK</th>
                                            <th>POINT TIU</th>
                                            <th>POINT TKP</th>
                                            <th>TOTAL</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>Ali Muhammad</td>
                                            <td>06 / 08 / 2020</td>
                                            <td>72</td>
                                            <td>80</td>
                                            <td>140</td>
                                            <td>292</td>
                                            <td>LULUS</td>
                                        </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}


