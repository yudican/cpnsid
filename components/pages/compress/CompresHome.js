import React from 'react'
import { color } from "../../../config/color";
import Link from 'next/link'

export const CompresHome = () => {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <div class="col-lg-8">
                        <p class="card-title">Modifikasi dokumen-dokumen anda dengan mudah dan aman. Semua file yang sudah diupload akan terhapus secara otomatis dari sistem kami.</p>
                    </div>
                </div>
            </div> 

            <div class="card mt-3" style={{ background : "linear-gradient(91.93deg, #5473E8 -43.93%, #283FB0 100%)", color : color.WHITE  }}>
                <div class="card-body">
                    <h4>Compressor</h4>
                    <div class="d-flex flex-wrap">
                        <div class="p-2">
                            <Link href="/compresstool">
                                <button className="btn btn-light btn-tool"><i className="fas fa-file-pdf mr-3 text-primary fa-2x"></i> Compress PDF</button>
                            </Link>
                        </div>
                        <div class="p-2">
                            <button className="btn btn-light btn-tool"><i className="fas fa-file-image mr-3 text-primary fa-2x"></i> Compress Image</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-3" style={{ background : "linear-gradient(117.02deg, #407BFF -114.66%, #36C2CF 59.46%)", color : color.WHITE  }}>
                <div class="card-body">
                    <h4>Converter</h4>
                    <div class="d-flex flex-wrap">
                        <div class="p-2">
                            <button className="btn btn-light btn-tool"><i className="fas fa-file-pdf mr-3 text-primary fa-2x"></i> Compress PDF</button>
                        </div>
                        <div class="p-2">
                            <button className="btn btn-light btn-tool"><i className="fas fa-file-image mr-3 text-primary fa-2x"></i> Compress Image</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-3" style={{ background : "linear-gradient(111.48deg, #FFA125 -112.86%, #FF7E7E 93.28%)", color : color.WHITE  }}>
                <div class="card-body">
                    <h4>Editor</h4>
                    <div class="d-flex flex-wrap">
                        <div class="p-2">
                            <button className="btn btn-light btn-tool"><i className="fas fa-file-pdf mr-3 text-primary fa-2x"></i> Compress PDF</button>
                        </div>
                        <div class="p-2">
                            <button className="btn btn-light btn-tool"><i className="fas fa-file-image mr-3 text-primary fa-2x"></i> Compress Image</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
