import React from 'react'
import { color } from "../../../config/color";
import Link from 'next/link'
import ImageProfile from '../../image/ImageProfile';

export const DiskusiHome = () => {
    return (
        <>
          <div class="row">
              <div class="col-lg-8 col-md-12">
                <div className="p-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="media">
                                <div className="avatar-sm mr-2">
                                    <img  className="avatar-img img-thumbnail" src="assets/img/profile.jpg" alt="Img Profile"/>     
                                </div>
                                <div className="media-body">
                                    <div className="form-group">
                                        <textarea className="form-control" id="comment" rows="5" placeholder="Tulis post anda di sini...">

                                        </textarea>
                                        <div className="d-flex mt-3 align-items-center flex-wrap">
                                            <div className="border p-2">
                                                <span className="card-text">Tambahkan : </span>
                                                <span className="ml-5"><i className="fas fa-images fa-2x" style={{ color : color.GREEN }}></i> Foto</span>
                                                <span className="ml-5"><i className="fas fa-video fa-2x" style={{ color : color.RED }}></i> Video</span>
                                                <span className="ml-5"><i className="fas fa-file-alt fa-2x" style={{ color : color.YELLOW }}></i> Dokumen</span>
                                                <span className="ml-5"><i className="fas fa-poll fa-2x" style={{ color : color.PURPLE }}></i> Poll</span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <button type="button" style={{ width : 150 }} className="btn btn-primary float-right">POST</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-5">
                        <div className="card-body">
                            <div className="d-flex bd-highlight">
                                <div className="p-2 flex-grow-1 bd-highlight">
                                    
                                    <span className="ml-2"><i className="fas fa-file-alt fa-2x" style={{ color : color.GREEN }}></i></span>
                                    <span className="card-title ml-3 font-weight-bold ">Pancasila</span>
                                </div>
                                
                                <div className="p-2 bd-highlight">            
                                    <div className="input-group">
                                        <select className="form-control" style={{ width : 200 }} id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>                   
                                </div>
                            </div>
                            <p className="card-text text-muted ml-3">Forum Populer</p>
                            <div className="d-flex">
                                <div className="mt-2 ml-3"><button className="btn" style={{ backgroundColor : "#F8F5FF", color : color.PURPLE }}>Tenaga Medis</button></div>
                                <div className="mt-2 ml-3"><button className="btn" style={{ backgroundColor : "#F8F5FF", color : color.PURPLE }}>Tenaga Medis</button></div>
                                <div className="mt-2 ml-3"><button className="btn" style={{ backgroundColor : "#F8F5FF", color : color.PURPLE }}>Tenaga Medis</button></div>
                                <div className="mt-2 ml-3"><button className="btn" style={{ backgroundColor : "#F8F5FF", color : color.PURPLE }}>Tenaga Medis</button></div>
                                <div className="mt-2 ml-3"><button className="btn" style={{ backgroundColor : "#F8F5FF", color : color.PURPLE }}>Tenaga Medis</button></div>
                            </div>
                            <hr></hr>

                            <div className="mt-3 ml-3">
                                <div className="media">
                                    <div className="avatar-sm mr-2">
                                        <img  className="avatar-img img-thumbnail" src="assets/img/profile.jpg" alt="Img Profile"/>     
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0">Ari Putra</h5>
                                        <p style={{ fontSize : 10 }} className="text-muted">20 Juni 2020 10:38 AM</p>
                                        <p className="card-text">Yg th kemarin lolos jd PNS, bajet yg dipersiapkan setelah dinyatakan lolos SBG PNS sampek brp ya .Terimakasih 🙏</p>
                                        <p style={{ fontSize : 10 }} className="text-muted">10 Like . 4 Comments</p>
                                        <hr></hr>
                                        <ul className="list-inline">
                                            <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-thumbs-up"> Like</i></button></li>
                                            <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-comment-alt"> Comment</i></button></li>
                                            <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-share"> Share</i></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="input-group">
                                <input type="text"  className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                <div className="input-group-append">
                                    <span className="input-group-text" style={{ backgroundColor: '#7B66A9' }} id="basic-addon2"><i className="fas fa-search" style={{ color : color.WHITE }}></i></span>
                                </div> 
                            </div>
                            <div className="d-flex bd-highlight mt-4">
                                <div className="mr-auto p-2 bd-highlight">Media dan dokumen lainnya</div>
                                <div className="p-2 bd-highlight"><a style={{ color : color.PRIMARY }}>LIHAT SEMUA &gt;</a></div>
                            </div>
                            <div className="d-flax flex-wrap">                            
                                    <img src="/assets/img/product.jpg" alt="" className="ml-2"  style={{ width : 140, height : 104, borderRadius: 8 }}></img>
                                    <img src="/assets/img/product.jpg" alt="" className="ml-2"  style={{ width : 140, height : 104, borderRadius: 8 }}></img>
                                    <img src="/assets/img/product.jpg" alt="" className="ml-2"  style={{ width : 140, height : 104, borderRadius: 8 }}></img>                        
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="p-2 flex-grow-1 bd-highlight">           
                                <span className="ml-2"><i className="fas fa-mug-hot fa-2x" style={{ color : color.YELLOW }}></i></span>
                                <span className="card-title ml-3 font-weight-bold ">Post Anda</span>
                            </div>
                            
                            <div className="media p-3">
                                <div className="avatar-sm mr-2">
                                    <img  className="avatar-img img-thumbnail" src="assets/img/profile.jpg" alt="Img Profile"/>     
                                </div>
                                <div className="media-body p-2">
                                    <h5 className="mt-0">Ari Putra</h5>
                                    <p style={{ fontSize : 10 }} className="text-muted">20 Juni 2020 10:38 AM</p>
                                    <p className="card-text">Yg th kemarin lolos jd PNS, bajet yg dipersiapkan setelah dinyatakan lolos SBG PNS sampek brp ya .Terimakasih 🙏</p>
                                    <p style={{ fontSize : 10 }} className="text-muted">10 Like . 4 Comments</p>
                                    <hr></hr>
                                    <ul className="list-inline">
                                        <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-thumbs-up"> Like</i></button></li>
                                        <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-comment-alt"> Comment</i></button></li>
                                        <li class="list-inline-item"><button style={{  color : "#647195" }} className="btn btn-light"><i className="fas fa-share"> Share</i></button></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    </div>
              </div>
          </div>   
        </>
    )
}


