import React from 'react'
import { color } from "../../../../config/color";
export const Latihan = () => {
    return (
        <>
            <div className="card" style={{ borderRadius: 10 }}>
                <div
                className="card-header bg-gradient-blue p-4"
                style={{ borderRadius: 10 }}
                >
                <h4 className="card-title text-white">Latihan <br></br> Soal Tersedia</h4>
                </div>
                <div class="card-body">
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item submenu">
                            <a
                                class="nav-link active show"
                                style={{
                                backgroundColor: "#ffff",
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
                                Semua Latihan Soal
                            </a>
                        </li>
                        <li class="nav-item submenu">
                            <a
                                class="nav-link active show"
                                style={{
                                backgroundColor: "#ffff",
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
                                Riwayat Latihan Soal
                            </a>
                        </li>
                    </ul>
                    <div class="card" style={{ backgroundColor : color.GREY }}>
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="flex-1 ml-3 pt-1">
                                    <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD </h6>
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
                                    <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD </h6>
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
                                    <h6 class="text-uppercase fw-bold mb-1">Tyr Out 07 SKD </h6>
                                </div>
                                <div class="float-right pt-1">
                                    <a className="font-weight-bold" style={{ color : color.PRIMARY }}>LIHAT ></a>
                                </div>
                            </div>
                        </div>                     
                    </div>                             
                </div>
            </div>
        </>
    )
}

