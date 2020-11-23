import React from 'react'
import Link from 'next/link'
import { color } from "../../../config/color";

export const MateriDetail = () => {
    return (
        <>
          <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                    
                    <Link href="/materi"><a className="btn btn-light"><i className="fas fa-arrow-left"></i></a></Link>
                    <span className="card-title ml-3 font-weight-bold ">Pancasila</span>
                </div>
                
                <div class="p-2 bd-highlight">            
                    <div className="input-group">
                        <input type="text"  className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        <div className="input-group-append">
                            <span className="input-group-text" style={{ backgroundColor: '#7B66A9' }} id="basic-addon2"><i className="fas fa-search" style={{ color : color.WHITE }}></i></span>
                        </div> 
                    </div>                   
                </div>
            </div>

            <hr></hr>
            <div className="row">
                <div className="col-lg-9 col-md-12">
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <div className="span-icon">
                                <div className="flaticon-box-1"></div>
                            </div>
                            <div className="span-title">
                                <h2 className="card-title">Arti dan pengertian ideologi</h2>
                            </div>
                            <div className="span-mode"></div>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#2" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <div className="span-icon">
                                <div className="flaticon-box-1"></div>
                            </div>
                            <div className="span-title">
                                <h2 className="card-title">Dasar dan ideologi Negara Republik Indonesia</h2>
                            </div>
                            <div className="span-mode"></div>
                        </div>

                        <div id="2" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div className="d-flex align-items-center">
                                <div class="p-2"><i className="fas fa-play-circle fa-2x" style={{ color : color.RED }}></i></div>
                                <div class="">Materi Video</div>
                            </div>
                            <div class="p-2">
                                <div class="p-2 mx-auto" style={{ backgroundColor: 'red',height : 300 }}>
                                </div>
                                <p>Video Lama</p>
                            </div>
                            <div class="p-2">
                                <div class="p-2 mx-auto" style={{ backgroundColor: 'blue',height : 300 }}>
                                </div>
                                <p>Video Lama</p>
                            </div>                       
                        </div>
                    </div>
                </div>       
            </div>   
        </>
    )
}
