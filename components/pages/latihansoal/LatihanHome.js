import React from 'react'
import { color } from "../../../config/color";
import Link from 'next/link'
import { Latihan } from './component/latihan';
import { Chart } from '../dashboard/Chart'
import { ProggresHistory} from '../../layouts/card/Atoms'
export const LatihanHome = () => {
    return (
        <>
            <div class="page-inner mt-2">
                <div class="col-md-12">
                    <div class="row">
                    <div className="col-xs-12 col-lg-5 col-md-12 col-sm-12">
                        <Latihan/>
                    </div>
                    <div className="col-xs-4 col-lg-7 col-md-12 col-sm-12 d-flex flex-column">
                        <div class="card p-4">
                            <div class="card-body d-flex flex-column">
                            <h4 className="card-title font-poppins" style={{ fontSize: 14 }}>
                                Perkembangan Nilai
                                <select
                                    className=" float-right"
                                    style={{
                                    border: "none",
                                    padding: 5,
                                    backgroundColor: color.GREY,
                                    borderRadius: 5,
                                    color: "",
                                    }}
                                    name=""
                                    id=""
                                >
                                    <option value="">60 hari terakhir</option>
                                </select>
                                <button className="btn btn-primary float-right mr-3">Download Laporan</button>
                                </h4>
                                <Chart/>                                                                                                                      
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Evaluasi Kemampuan</h4>
                            </div>
                            <div className="card-body">
                                <ProggresHistory
                                title="Tes Intelegensi Umum"
                                icon={"fas fa-brain"}
                                value={60}
                                />
                                <ProggresHistory
                                title="Tes Karakteristik Pribadi"
                                icon={"fas fa-brain"}
                                value={80}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}


