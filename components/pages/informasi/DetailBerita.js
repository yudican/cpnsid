import React from 'react'
import { color } from "../../../config/color";
import Link from 'next/link'
export const DetailBerita = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Informasi</li>
                    <li class="breadcrumb-item active" aria-current="page">Berita</li>
                    <li class="breadcrumb-item active" aria-current="page">Cabut Status CPNS Seorang Difabel Ini Penjelasan BPK</li>
                </ol>
            </nav>
            <div class="mb-2">
            <Link href="/informasi"><a className="btn btn-light"><i className="fas fa-arrow-left"></i></a></Link>

            </div>
           <div class="row">
                

               <div class="col-lg-7 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h1 className="text-dark font-weight-bold">Cabut Status CPNS Seorang Difabel, <br></br>Ini Penjelasan BPK</h1>
                            <p className="text-muted">29 Jan 2020</p>
                            <div class="p-2 mt-3">
                                <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                            </div>
                            <div class="p-2 content">
                                <p>Liputan6.com, Jakarta - Badan Pemeriksa Keuangan (BPK) memastikan dalam penerimaan Calon Pegawai Negeri Sipil (CPNS) membuka formasi untuk seluruh warga negara Indonesia termasuk formasi bagi penyandang disabilitas. Hal ini sebagai respons terhadap pemberitaan di beberapa media massa, di mana disebutkan bahwa terjadi dugaan diskriminasi CPNS disabilitas oleh BPK.</p>
                            </div>
                        </div>
                    </div>
               </div>
               <div class="col-lg-4 col-md-12 ml-5">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div class="p-2"><i className="fas fa-newspaper fa-2x" style={{ color : color.RED }}></i></div>
                                <div class="card-title font-weight-bold text-dark ml-2">Berita Terbaru</div>
                            </div>
                            <div class="mb-3">
                                <div class="p-2">
                                    <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                </div>
                                <div class="card-title text-dark">
                                Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                </div>
                                <div class="card-text mt-3">29 Jan 2020</div>
                                <hr></hr>
                            </div>
                            <div class="mb-3">
                                <div class="p-2">
                                    <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                </div>
                                <div class="card-title text-dark">
                                Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                </div>
                                <div class="card-text mt-3">29 Jan 2020</div>
                                <hr></hr>
                            </div>
                            <div class="mb-3">
                                <div class="p-2">
                                    <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                </div>
                                <div class="card-title text-dark">
                                Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                </div>
                                <div class="card-text mt-3">29 Jan 2020</div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
               </div>
           </div> 
        </>
    )
}


