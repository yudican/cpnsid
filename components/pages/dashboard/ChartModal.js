import React from 'react'
import { color } from "../../../config/color";

export const ChartModal = () => {
    return (
        <>
        <div className="modal fade" id="chartmodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title" id="exampleModalCenterTitle">Keranjang Belanja Anda</h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <div className="card" style={{width: "48rem", backgroundColor: color.GREY}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="card-text">Try Out 07 SKD</div>
                        </div>
                        <div className="col text-right">
                            <div class="card-text">Rp. 150.000</div>
                        </div>
                       
                    </div>
                    <div className="row">
                    <div className="col">
                            <div className="card-text"><span> <a href="" data-dismiss="modal" data-toggle="modal" data-target="#promomodel">Promo Paket 2 Orang</a></span></div>
                        </div>
                        <div className="col text-right">
                            <div className="card-text" style={{ textDecorationLine: 'line-through', color : '#647195' }}>Rp. 150.000</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
                
                    <div className="col"><h3>Total Rp. 225.000</h3></div>
                    <div className="col text-right"><button type="button" className="btn btn-warning">Bayar Sekarang</button></div>
                
            </div>
            </div>
        </div>
        </div>   
        </>
    )
}
