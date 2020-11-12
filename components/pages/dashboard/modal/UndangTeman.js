import React from 'react'
import { color } from "../../../../config/color";

export const UndangTeman = () => {
    return (
        <>
        <div className="modal fade" id="undangteman" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">Detail Family Share</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>              
                </div>
                <div className="modal-body">
                <div className="card" style={{width: "97%", backgroundColor: color.GREY}}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="flex-1 ml-3 pt-1">
                                <h6 className="text-uppercase fw-bold mb-1">Try Out 07 SKD</h6>
                                <i
                                className="fas fa-calendar pr-2"
                                style={{ color: color.PURPLE }}
                                > 29 Jul 2020</i>
                                <i className="fas fa-clock" style={{ color: color.GREEN }}> 14.00 WIB</i>
                                
                            </div>
                            <div class="float-right pt-1">
                                <button
                                    className="btn bg-green btn-sm"
                                    style={{ paddingTop: 4, paddingBottom: 4, color: "#fff" }}>
                                    <i className="fas fa-gift pr-1"></i> free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ marginLeft : '10px', opacity : '0.6', marginTop : '-15px' }}>Undang <span className="font-weight-bold">2 orang</span> teman untuk mengakses Tryout</p>
                <div className="card" style={{width: "90%", backgroundColor: color.GREY}}>
                    <div className="card-body">
                        <div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" style={{ backgroundColor: '#F6F5FB' }} className="form-control" placeholder="Ketikan nama teman anda" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                    <div className="input-group-append">
                                        <span className="input-group-text" style={{ backgroundColor: '#F6F5FB' }} id="basic-addon2"><i className="fas fa-search"></i></span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="float-left pt-1">
                            <button type="button" className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE, marginLeft : '10px' }}>Simpan</button>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="modal-footer">
                                           
                    </div>
                </div>
            </div>
        </div>   
        </>
    )
}
