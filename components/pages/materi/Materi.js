import React from 'react'
import { color } from "../../../config/color";
import { JadwalLive } from './JadwalLive';

export const Materi = () => {
    return (
        <>
            {/* <div className="page-navs bg-transparent text-dark">
                <div className="nav-scroller">
                    <div className="nav nav-tabs nav-line nav-color-secondary d-flex align-items-center justify-contents-center w-100">
                        <a className="nav-link active show" data-toggle="tab" href="#tab1">
                            Umum
                        </a>
                        <a className="nav-link mr-5" data-toggle="tab" href="#tab2">
                            TWK
                        </a>
                        <a className="nav-link mr-5" data-toggle="tab" href="#tab3">
                            TIU
                        </a>
                        <a className="nav-link mr-5" data-toggle="tab" href="#tab4">
                            Jadwal Kelas Live
                        </a>
                    </div>
                </div>
            </div>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="#tab1" role="tabpanel" aria-labelledby="umum-tab">umum</div>
                <div className="tab-pane fade" id="#tab2" role="tabpanel" aria-labelledby="twk-tab">
                    TWK
                </div>
            </div> */}
            
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item submenu">
                        <a
                            class="nav-link active show"
                            style={{
                            backgroundColor: "#F6F5FB",
                            color: "#000",
                            fontSize: 12,
                            }}
                            id="pills-umum-tab"
                            data-toggle="pill"
                            href="#pills-umum"
                            role="tab"
                            aria-controls="pills-umum"
                            aria-selected="true"
                        >
                            Umum
                        </a>
                        </li>
                        <li class="nav-item submenu">
                        <a
                            class="nav-link"
                            style={{
                            backgroundColor: "#F6F5FB",
                            color: "#000",
                            fontSize: 12,
                            }}
                            id="pills-twk-tab"
                            data-toggle="pill"
                            href="#pills-twk"
                            role="tab"
                            aria-controls="pills-twk"
                            aria-selected="false"
                        >
                            TWK
                        </a>
                        </li>
                        <li class="nav-item submenu">
                        <a
                            class="nav-link"
                            style={{
                            backgroundColor: "#F6F5FB",
                            color: "#000",
                            fontSize: 12,
                            }}
                            id="pills-tiu-tab"
                            data-toggle="pill"
                            href="#pills-tiu"
                            role="tab"
                            aria-controls="pills-tiu"
                            aria-selected="false"
                        >
                            TIU
                        </a>
                        </li>
                        <li class="nav-item submenu">
                        <a
                            class="nav-link"
                            style={{
                            backgroundColor: "#F6F5FB",
                            color: "#000",
                            fontSize: 12,
                            }}
                            id="pills-tkp-tab"
                            data-toggle="pill"
                            href="#pills-tkp"
                            role="tab"
                            aria-controls="pills-tkp"
                            aria-selected="false"
                        >
                            TKP
                        </a>
                        </li>
                        <li class="nav-item submenu">
                        <a
                            class="nav-link"
                            style={{
                            backgroundColor: "#F6F5FB",
                            color: "#000",
                            fontSize: 12,
                            }}
                            id="pills-live-tab"
                            data-toggle="pill"
                            href="#pills-live"
                            role="tab"
                            aria-controls="pills-live"
                            aria-selected="false"
                        >
                            Jadwal Kelas Live
                        </a>
                        </li>
                    </ul>
                    
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="pills-umum" role="tabpanel" aria-labelledby="pills-umum-tab">
                        umum
                        </div>
                        <div class="tab-pane fade" id="pills-twk" role="tabpanel" aria-labelledby="pills-twk-tab">
                            <div class="col-lg-3 col-md-12 mt-3">
                                <div className="input-group">
                                    <input type="text"  className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text" style={{ backgroundColor: '#7B66A9' }} id="basic-addon2"><i className="fas fa-search" style={{ color : color.WHITE }}></i></span>
                                    </div> 
                                </div>  
                            </div>
                            <div class="col-md-12 mt-5">
                                <div className="card">
                                    <div className="body">
                                        <div className="table-responsive">
                                            <table className="display table table-hover" id="basic-datatables">
                                                <thead>
                                                    <tr>
                                                        <th>PERINGKAT</th>
                                                        <th className="text-left">JUDUL</th>
                                                        <th className="text-right">AKSI</th>                                                      
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td className="text-left">Pancasila</td>
                                                        <td className="text-right"><a className="text-primary">LIHAT {">"}</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td className="text-left">Pancasila</td>
                                                        <td className="text-right"><a className="text-primary">LIHAT {">"}</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td className="text-left">Pancasila</td>
                                                        <td className="text-right"><a className="text-primary">LIHAT {">"}</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td className="text-left">Pancasila</td>
                                                        <td className="text-right"><a className="text-primary">LIHAT {">"}</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>  
                        <JadwalLive/>
                    </div>
              
            


        </>
    )
}


