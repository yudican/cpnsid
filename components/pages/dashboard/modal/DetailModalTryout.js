import React from 'react'
import { color } from "../../../../config/color";

export const DetailModalTryout = ({ status = "menunggu"}) => {
    return (
        <>
        <div className="modal fade" id="detailmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title" id="exampleModalCenterTitle">Detail Tryout</h2>
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
            <div className="card" style={{width: "90%", backgroundColor: color.GREY}}>
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <div className="span-icon">
                                <div className="flaticon-box-1"></div>
                            </div>
                            <div className="span-title">
                                Persyaratan
                            </div>
                            <div className="span-mode"></div>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div clasName="card-body">
                               <div class="span-title" style={{ marginLeft : "20px", marginRight : "25px" }}>
                                   <ul className="syarat-list">
                                       <li className="syarat-list-item">
                                           1. Follow instagram <span className="font-weight-bold">@cpns.id</span> dan <span className="font-weight-bold">@cpnsindonesia</span>
                                       </li>
                                       <li className="syarat-list-item">
                                       
                                           2. Mention 3 temen kamu di komen post mengenai giveway ini, yang bisa dilihat <a href="" style={{ color : color.PRIMARY }}>di sini</a>
                                       </li>
                                       <li className="syarat-list-item">
                                           3. Upload bukti screenshot melalui dashboard aplikasi cpns.id
                                       </li>
                                       <li className="syarat-list-item">
                                           4. Tunggu proses verifikasi dari admin kami
                                       </li>
                                       <li className="syarat-list-item">
                                           5. Anda dapat mengakses tryout ini secara gratis
                                       </li>
                                       <li className="syarat-list-item"> 
                                            <button type="button" style={{ width : "15rem" }}  className="btn btn-giveway" style={{ backgroundColor : color.GREEN, color : color.WHITE, marginTop: "10px" }} data-toggle="collapse" data-target="#uploadcollapse" aria-expanded="false" aria-controls="uploadcollapse">Ikuti Giveway</button>
                                            <div class="collapse" id="uploadcollapse"  >
                                                <div class="card card-body" style={{ backgroundColor: color.GREY}}>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                            </div>
                                       </li>
                                   </ul>
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
