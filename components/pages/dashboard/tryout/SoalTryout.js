import React from 'react'
import { color } from "../../../../config/color";
import Link from 'next/link'

export const SoalTryout = () => {

    const number = [];
    for (let i= 1; i< 35; i++){
        number.push(<div class="card ml-1 text-center " style={{ width : "33px", height : "33px" }}>
        <h4 className="card-title ">{i}</h4>
    </div>)
    }
    return (
        <>
            <div className="page-navs bg-transparent text-dark">
                <div className="nav-scroller">
                    <div className="nav nav-tabs nav-line nav-color-secondary d-flex align-items-center justify-contents-center w-100">
                        <a className="nav-link active show" data-toggle="tab" href="#tab1">
                            Tes Wawasan kebangsaan
                        </a>
                        <a className="nav-link mr-5" data-toggle="tab" href="#tab2">
                        Tes Intelegensi Umum (TIU)
                        </a>
                        <a className="nav-link mr-5" data-toggle="tab" href="#tab3">
                        Tes Karakteristik Pribadi (TKP)
                        </a>
                        <div className="ml-auto">
                            <a className="btn btn-light btn-border">
                                <i className="fas fa-clock mr-2" style={{ color : color.YELLOW }}></i> 01:20:00
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3 ml-3">
                <div className="col-md-8">
                    <p>Soal No 5</p>
                    <h1>Yang memberikan usul tentang dasar Negara Pancasila adalah..</h1>
                    <div className="d-flex flex-wrap">
                        <div className="p-2">
                            <div className="card p-3 active-soal " style={{width: "360px", backgroundColor: color.WHITE, borderRadius : 20}}>
                                <div className="d-flex align-items-center">
                                    <div className="p-2 border-right"><span className="mr-2">A</span></div>
                                    <div className="p-2 ml-2">Moh Yamin, Prof Dr. Mr. Soepomo dan Ir. Soekarno</div>  
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card p-3" style={{width: "360px", backgroundColor: color.WHITE, borderRadius : 20}}>
                                <div className="d-flex align-items-center">
                                    <div className="p-2 border-right"><span className="mr-2">B</span></div>
                                    <div className="p-2 ml-2">Moh Yamin, Prof Dr. Mr. Soepomo dan Ir. Soekarno</div>  
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card p-3" style={{width: "360px", backgroundColor: color.WHITE, borderRadius : 20}}>
                                <div className="d-flex align-items-center">
                                    <div className="p-2 border-right"><span className="mr-2">C</span></div>
                                    <div className="p-2 ml-2">Moh Yamin, Prof Dr. Mr. Soepomo dan Ir. Soekarno</div>  
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="card p-3" style={{width: "360px", backgroundColor: color.WHITE, borderRadius : 20}}>
                                <div className="d-flex align-items-center">
                                    <div className="p-2 border-right"><span className="mr-2">D</span></div>
                                    <div className="p-2 ml-2">Moh Yamin, Prof Dr. Mr. Soepomo dan Ir. Soekarno</div>  
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <div className="card p-3" style={{width: "360px", backgroundColor: color.WHITE, borderRadius : 20}}>
                                <div className="d-flex align-items-center">
                                    <div className="p-2 border-right"><span className="mr-2">E</span></div>
                                    <div className="p-2 ml-2">Moh Yamin, Prof Dr. Mr. Soepomo dan Ir. Soekarno</div>  
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
                <div className="col-md-3">
                    <div class="card p-3">
                        <h4 className="card-title">Soal</h4>
                        <div class="d-flex flex-wrap">
                            <div class="card ml-1 text-center active-soal" style={{ width : "33px", height : "33px" }}>
                                <h4 className="card-title active-soal-number">1</h4>
                            </div>
                            {number}
                        
                        </div>
                        <div className="d-flex ">
                            <div className="p-2"><button className="btn btn-outline-secondary ">0 Jawab</button></div>
                            <div className="p-2"><button className="btn btn-outline-secondary ">32 Belom Jawab</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ marginTop : 150 }}></hr>
            <div class="row">
                <div class="col col-md-12 col-lg-5 d-flex">
                    <div className="p-2"><button className="btn btn-outline-secondary ">Kembali</button></div>
                    <div className="p-2"><button className="btn btn-primary">Selanjutnya</button></div>
                </div>
                <div class="col col-md-12 col-lg-7">
                    <div className="p-2 float-right"><button className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Kirim Semua Jawaban</button></div>
                </div>
            </div>
        </>
    )
}


