 import React from 'react'
 import { color } from "../../../config/color";

export const JadwalLive = () => {
     return (
         <>
          <div class="tab-pane fade active show" id="pills-live" role="tabpanel" aria-labelledby="pills-live-tab">
            <div class="row">
                <div class="col-lg-9 col-md-12 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">MATERI</th>
                                        <th scope="col">KATEGORI</th>
                                        <th scope="col">TGL</th>
                                        <th scope="col">PLATGORM</th>
                                        <th scope="col">BAHAN AJAR</th>
                                        <th scope="col">AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Zoom</td>
                                        <td><button className="btn" style={{ backgroundColor : color.PURPLE, color : color.WHITE }}><i className="fas fa-download mr-2"></i>Unduh</button></td>
                                        <td><button className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>Google Meet</td>
                                        <td><button className="btn" style={{ backgroundColor : color.PURPLE, color : color.WHITE }}><i className="fas fa-download mr-2"></i>Unduh</button></td>
                                        <td><button className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Join</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div class="p-2"><i className="fas fa-tasks fa-2x" style={{ color : color.YELLOW }}></i></div>
                                <div class="">Tugas Harian</div>
                            </div>
                            <div>
                                <div class="card" style={{ backgroundColor : color.GREY }}>
                                    <div class="card-body">
                                        <div className="d-flex">
                                            <div className="flex-1 ml-3 pt-1">
                                                <h6 className="text-uppercase fw-bold mb-1">Try Out 07 SKD</h6>
                                                <i
                                                className="fas fa-calendar pr-2"
                                                style={{ color: color.PURPLE }}
                                                > 29 Jul 2020</i>
                                                
                                                
                                            </div>
                                            <div class="float-right pt-1">
                                                <h2 style={{ color : color.PURPLE }}>></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card" style={{ backgroundColor : color.GREY }}>
                                    <div class="card-body">
                                        <div className="d-flex">
                                            <div className="flex-1 ml-3 pt-1">
                                                <h6 className="text-uppercase fw-bold mb-1">Try Out 07 SKD</h6>
                                                <i
                                                className="fas fa-calendar pr-2"
                                                style={{ color: color.PURPLE }}
                                                > 29 Jul 2020</i>
                                                
                                                
                                            </div>
                                            <div class="float-right pt-1">
                                                <h2 style={{ color : color.PURPLE }}>></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>   
         </>
     )
 }
 
 