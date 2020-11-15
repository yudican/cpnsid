import React from 'react'
import PropTypes from 'prop-types'

 export const ToeflHome = props => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="card"> 
                        <div className="card-header bg-gradient-blue p-4" style={{ borderRadius: 10 }} >
                        <h4 className="card-title text-white">Dapatkan Sertifikat <br></br> Toefl Prediction/EPT</h4>
                        </div>
                        <div className="card-body">
                            <p>TOEFL® Prediction adalah tes prediksi atau test yang didesain mirip TOEFL®, yang dibuat dan dimiliki oleh ETS (Educational Testing Service).</p>
                            <h4 className="font-weight-bold">Rp.99.000 / Test</h4>
                            <button  className="btn btn-warning w-100 mt-2">Beli Paket TOEFL Prefiction</button>
                        </div>                           
                    </div>
                    <div className="card p-4" >
                        <h4 className="card-title">Apa yang Akan Anda Dapatkan</h4>
                        <div className="card mt-3" style={{ backgroundColor : "#FAFAFF" }}>
                            <p className="ml-3 mt-3 font-weight-bold">E-Certificate Toefl Prediction/EPT</p>
                            <p className="ml-3">Bisa Anda gunakan sebagai syarat dalam mendaftar di beberapa kementerian.</p>
                        </div>
                        <div className="card mt-3" style={{ backgroundColor : "#FAFAFF" }}>
                            <p className="ml-3 mt-3 font-weight-bold">E-Certificate Toefl Prediction/EPT</p>
                            <p className="ml-3">Bisa Anda gunakan sebagai syarat dalam mendaftar di beberapa kementerian.</p>
                        </div>

                        <p>Didukung Oleh : </p>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="card p-4">
                        <h4 className="card-title">Tips & Trik Lulus Toefl</h4>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="mb-3">
                                        <div className="p-2">
                                            <img className="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                        </div>
                                        <div className="card-title text-dark">
                                        Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                        </div>
                                        <div className="card-text mt-3">29 Jan 2020</div>
                                        <hr></hr>
                                    </div>    
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="mb-3">
                                        <div className="p-2">
                                            <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                        </div>
                                        <div className="card-title text-dark">
                                        Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                        </div>
                                        <div className="card-text mt-3">29 Jan 2020</div>
                                        <hr></hr>
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


