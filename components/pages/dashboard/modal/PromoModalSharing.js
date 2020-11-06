import React from 'react'
import { color } from "../../../../config/color";
import { Badge } from '../../../layouts/card/Atoms';

export const PromoModalSharing = () => {
    return (
        <>
        <div className="modal fade" id="promosharingmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title" id="exampleModalCenterTitle">Detail Tryout</h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>       
            </div>
            <div className="modal-body">
                <div className="card" style={{width: "48rem", backgroundColor: color.GREY}}>
                    <div className="d-flex flex-row">
                        <div className="flex-1 ml-3 pt-1">
                            <h6 className="text-uppercase fw-bold mb-1">Try Out 07 SKD</h6>                                                
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="p-2 ml-2 pt-1"><i
                            className="fas fa-calendar pr-2"
                            style={{ color: color.PURPLE }}
                            > 29 Jul 2020</i>
                        </div>
                        <div className="p-2"><i 
                                            className="fas fa-clock" 
                                            style={{ color: color.GREEN }}> 14.00 WIB</i>
                        </div>
                        <div className="p-2"><i className="fas fa-money-bill-wave mr-1 text-warning"></i>Rp.90.000</div>
                    </div>
                </div>
                <h3>Promo Sharing</h3>
                <div class="card p-3">
                    <div className="d-flex align-items-center">
                        <div className="border-circle"><i className="fas fa-gift" style={{ color: color.GREEN }}></i></div>
                        
                        <div className="flex-1 ml-3 pt-1">
                            <h6 className="text-uppercase fw-bold mb-1">Promo Paket 2 Orang</h6>
                            <span className="font-weight-bold"> Rp. 150.000</span>
                            <span  style={{ textDecorationLine: 'line-through', color : '#647195', marginLeft : "10px"}}> Rp. 180.000</span>
                            <span  className="font-weight-bold" style={{ color : color.GREEN, marginLeft : "10px"}}>Hemat Rp.30.000</span>

                        </div>
                        <div className="float-right pt-1">
                            <button type="button" style={{ width : "15rem" }}  className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Gunakan Promo</button>
                        </div>
                    </div>
                </div>
                <div class="card p-3">
                    <div className="d-flex align-items-center">
                        <div className="border-circle"><i className="fas fa-gift" style={{ color: color.GREEN }}></i></div>
                        
                        <div className="flex-1 ml-3 pt-1">
                            <h6 className="text-uppercase fw-bold mb-1">Promo Paket 2 Orang</h6>
                            <span className="font-weight-bold"> Rp. 150.000</span>
                            <span  style={{ textDecorationLine: 'line-through', color : '#647195', marginLeft : "10px"}}> Rp. 180.000</span>
                            <span  className="font-weight-bold" style={{ color : color.GREEN, marginLeft : "10px"}}>Hemat Rp.30.000</span>

                        </div>
                        <div className="float-right pt-1">
                            <button type="button" style={{ width : "15rem" }}  className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Gunakan Promo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="col"><h3>Total Rp. 90.000</h3></div>
                <div class="d-flex">
                        <div className="col text-right"><button type="button" className="btn btn-outline-secondary">Tambahkan ke Keranjang</button></div>
                        <div className="col text-right"><button type="button" className="btn btn-warning">Beli Sekarang</button></div>             
                </div>            
            </div>
            </div>
        </div>
        </div>   
        </>
    )
}
