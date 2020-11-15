import React from 'react'
import { color } from "../../../config/color";

export const PengaturanHome = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-9 col-md-12">
                    <div class="card p-3" style={{ backgroundColor : "#5473E8", borderRadius : 15 }}>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-12" style={{ color : color.WHITE }}>
                                    <h1>Member Bimbel</h1>
                                    <p className="">Member akan exporid pada 21 Agustus 2020</p>
                                    <button type="button" className="btn" style={{ backgroundColor : color.WHITE, borderRadius : 15, color : color.PURPLE }}>Perpanjang Memeber</button>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="float-right">
                                        <div class="card" style={{ width : 300, background : "linear-gradient(111.48deg, #FFA125 -112.86%, #FF7E7E 93.28%)", color : color.WHITE }}>
                                            <div class="card-body">
                                                <div class="d-flex ">
                                                    <div className="avatar-sm mr-2">
                                                        <img  className="avatar-img img-thumbnail" src="assets/img/profile.jpg" alt="Img Profile"/>     
                                                    </div>
                                                    <div class="align-self-center">Tony Shark</div>
                                                </div>
                                                <h1 className="mt-3">USER BIMBEL CPNS.ID</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div class="p-2"><i className="fas fa-user fa-2x" style={{ color : color.GREEN }}></i></div>
                                <div class="">Data Pribadi</div>
                            </div>
                            <div className="row">
                                <div class="col-lg-10 col-md-12">
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Password Sekarang</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">No Hp</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Email</label>        
                                        <input type="email" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Tanggal Lahir</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Jenis Kelamin</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Pendidikan</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <div class="form-custom p-2">
                                        <label for="" className="text-muted-input">Instagram</label>        
                                        <input type="text" name="" autoComplete="off" required></input>
                                        <hr></hr>
                                    </div>
                                    <button className="btn btn-primary">Simpan</button>
                                </div>
                                <div class="col-lg-2 col-md-12">
                                    <div className="avatar-lg mr-2">
                                        <img  className="avatar-img img-thumbnail" src="assets/img/profile.jpg" alt="Img Profile"/>   
                                    </div>
                                    <button className="btn btn-primary mt-4">Ganti Profile</button>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div class="p-2"><i className="fas fa-lock fa-2x" style={{ color : color.RED }}></i></div>
                                <div class="">Ganti Password</div>
                            </div>
                            
                            <div class="form-custom p-2">
                                <label for="" className="text-muted-input">Password Sekarang</label>        
                                <input type="password" name="" autoComplete="off" required></input>
                            </div>
                            <hr></hr>
                            <div class="form-custom p-2">
                                <label for="" className="text-muted-input">Password Baru</label>        
                                <input type="password" name="" style={{ marginLeft : 50 }} autoComplete="off" required></input>
                            </div>
                            <hr></hr>
                            <div class="form-custom p-2">
                                <label for="" className="text-muted-input">Konfirmasi Password</label>        
                                <input type="password" name="" autoComplete="off" required></input>
                            </div>
                            <hr></hr>
                            <div class="d-flex bd-highlight mt-5">
                                <div class="align-self-center">
                                    <div class="p-2 flex-grow-1 bd-highlight text-muted-input">Lupa password ?</div>       
                                </div>
                                
                                <div class="p-2 flex-grow-1"><button className="btn btn-black float-right">Ganti</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


