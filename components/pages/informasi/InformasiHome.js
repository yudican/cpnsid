import React from 'react'
import { color } from "../../../config/color";

export const InformasiHome = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="p-2">
                        <div class="card" style={{ borderRadius : 15 }}>
                            <div class="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div class="p-2"><i className="fas fa-newspaper fa-2x" style={{ color : color.RED }}></i></div>
                                    <div class="card-title font-weight-bold text-dark ml-2">Berita</div>
                                </div>
                                <div class="mb-3">
                                    <div class="p-2">
                                        <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                    </div>
                                    <div class="card-title text-dark">
                                    Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                    </div>
                                    <div class="card-text mt-3">29 Jan 2020</div>
                                    <hr></hr>
                                </div>
                                <div class="mb-3">
                                    <div class="p-2">
                                        <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                    </div>
                                    <div class="card-title text-dark">
                                    Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                    </div>
                                    <div class="card-text mt-3">29 Jan 2020</div>
                                    <hr></hr>
                                </div>
                                <div class="mb-3">
                                    <div class="p-2">
                                        <img class="card-img-top rounded" src="/assets/img/product.jpg" alt="Product 1"></img>
                                    </div>
                                    <div class="card-title text-dark">
                                    Cabut Status CPNS Seorang Difabel, Ini Penjelasan BPK
                                    </div>
                                    <div class="card-text mt-3">29 Jan 2020</div>
                                    <hr></hr>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="p-2">
                        <div class="card" >
                            <div class="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div class="p-2"><i className="fas fa-thumbs-up fa-2x" style={{ color : color.GREEN }}></i></div>
                                    <div class="card-title font-weight-bold text-dark ml-2">Tips & Trik</div>                                    
                                </div>
                                <div class="card" style={{ backgroundColor : color.PURPLE , color : color.WHITE, height : 170}}>
                                    <div class="card-body">
                                        <div class="p-2 ">
                                            <h1>Tips & Trik <br></br>Lulus CPNS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ backgroundColor : color.GREEN , color : color.WHITE, height : 170}}>
                                    <div class="card-body">
                                        <div class="p-2 ">
                                            <h1>Tips & Trik <br></br>Belajar Ujian <br></br> CPNS</h1>
                                        </div>
                                    </div>
                                </div>          
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="p-2">
                        <div class="card">
                            <div class="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div class="p-2"><i className="fas fa-bullhorn fa-2x" style={{ color : color.YELLOW }}></i></div>
                                    <div class="card-title font-weight-bold text-dark ml-2">Pengumuman</div>                                    
                                </div>
                                <ol class="activity-feed">
										<li class="feed-item feed-item-secondary">
											<time class="date" datetime="9-25">Sep 25</time>
											<span class="text">Responded to need <a href="#">"Volunteer opportunity"</a></span>
										</li>
										<li class="feed-item feed-item-success">
											<time class="date" datetime="9-24">Sep 24</time>
											<span class="text">Added an interest <a href="#">"Volunteer Activities"</a></span>
										</li>
										<li class="feed-item feed-item-info">
											<time class="date" datetime="9-23">Sep 23</time>
											<span class="text">Joined the group <a href="single-group.php">"Boardsmanship Forum"</a></span>
										</li>
										<li class="feed-item feed-item-warning">
											<time class="date" datetime="9-21">Sep 21</time>
											<span class="text">Responded to need <a href="#">"In-Kind Opportunity"</a></span>
										</li>
										<li class="feed-item feed-item-danger">
											<time class="date" datetime="9-18">Sep 18</time>
											<span class="text">Created need <a href="#">"Volunteer Opportunity"</a></span>
										</li>
										<li class="feed-item">
											<time class="date" datetime="9-17">Sep 17</time>
											<span class="text">Attending the event <a href="single-event.php">"Some New Event"</a></span>
										</li>
									</ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


