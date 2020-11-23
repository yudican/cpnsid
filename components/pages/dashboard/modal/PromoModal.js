import React from 'react'
import { color } from "../../../../config/color";

export const PromoModal = () => {
    return (
        <>
        <div className="modal fade" id="promomodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">

                <div className="row">
                <a href="" style={{ padding : "13px" }} data-dismiss="modal" data-toggle="modal" 
              data-target="#chartmodel" ><i className="fas fa-arrow-left"></i></a>
                <h2 className="text-left" style={{ padding : "7px" }}  id="">Pilih Promo</h2>
                </div>
                
                
            </div>
            <div className="modal-body">
                <div className="card p-3" style={{width: "48rem", backgroundColor: color.GREY}}>
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
                

                
            </div>
            </div>
        </div>
        </div>   
        </>
    )
}
