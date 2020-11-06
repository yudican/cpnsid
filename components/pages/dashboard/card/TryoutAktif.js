import React from 'react'
import { color } from "../../../../config/color";
import { Badge } from '../../../layouts/card/Atoms';

export const TryoutAktif = () => {

    return(
        <>
            <div className="card p-3" style={{  backgroundColor: color.GREY }}>
                <div className="d-flex align-items-center">
                    <div className="flex-1 ml-3 pt-1">
                        <h6 className="text-uppercase fw-bold mb-1">TryOut 07 SKD</h6>
                        <i className="fas fa-calendar"></i>
                        <span style={{ color : color.NAVYBLUE, marginLeft : "10px"}}>29 jUL 2020, 14:00 WIB</span>

                    </div>
                    <div className="float-right pt-1">
                        <button type="button" style={{ width : "15rem" }}  className="btn" style={{ backgroundColor : color.GREEN, color : color.WHITE }}>Gunakan Promo</button>
                    </div>
                </div>
                <div className="d-flex ">
                    <div className="flex-1  pt-1" style={{ marginLeft : 3 }}>                     
                        <span  className="font-weight-bold" style={{ color : color.GREEN, marginLeft : "10px"}}>14:00 WIB</span>
                    </div>
                    <div className="float-right pt-1">
                        <button type="button" style={{ width : "9rem" }} className="btn btn-outline-secondary">Undang Teman</button>
                    </div>
                </div>
            </div>
        </>
    )
} 