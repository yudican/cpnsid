import React from 'react'


export const ProgramTab = props => {
    return (
        <>     
            <div class="tab-pane fade" id="pills-program" role="tabpanel" aria-labelledby="pills-program-tab">
            <div class="row">
                        <div class="col-lg-4 col-md-12">                           
                            <div className="card"> 
                                <div className="card-header bg-gradient-blue p-4" style={{ borderRadius: 10 }} >
                                <h4 className="card-title text-white">Dapatkan Sertifikat <br></br> Internet Program</h4>
                                </div>
                                <div className="card-body">
                                    <p>Sertifikasi Microsoft Office adalah sertifikasi berskala global yang menunjukan kemampuan dalam menggunakan program-program dari Microsoft Office seperti Word, Excel, Power Point dan lainnya.</p>
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
                        <div class="col-lg-8 col-md-12">
                            <div class="card">
                                <h4 className="card-title p-4">Materi yang diujikan</h4>
                                <div class="card-body">
                                    <div className="card">
                                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#program1" aria-expanded="true" aria-controls="collapseOne" role="button">
                                            <div className="span-icon">
                                                <div className="flaticon-box-1"></div>
                                            </div>
                                            <div className="span-title">
                                                <h2 className="card-title">Arti dan pengertian ideologi</h2>
                                            </div>
                                            <div className="span-mode"></div>
                                        </div>

                                        <div id="program1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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

