import React from 'react'
import { color } from "../../../config/color";

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
            <div className="card" style={{width: "48rem", backgroundColor: color.GREY}}>
                <div className="card-body">
                    <div className="row">
                        
                        <div className="col">
                            <div className="card-text">Promo Paket 2 Orang</div>
                        </div>
                        <div className="col text-right">
                            
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="card-text"><span className="font-weight-bold"> Rp. 150.000</span></div>
                        </div>
                        <div className="col-2 text-left">
                            <div className="card-text" style={{ textDecorationLine: 'line-through', color : '#647195' }}>Rp. 150.000</div>
                        </div>
                        <div className="col-3 text-left">
                            <div className="card-text"><span style={{ color : color.GREEN }}>Hemat Rp.30.000</span></div>
                        </div>
                        <div className="col-5 text-right">
                            <button type="button" style={{ width : "15rem" }}  className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Gunakan Promo</button>
                        </div>
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
