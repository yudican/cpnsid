import React from 'react'
import { color } from "../../../config/color";
import Link from "next/link"

export const Tools = () => {
    return (
        <>
            <div class="mb-2 d-flex align-items-center">
                <Link href="/compress"><a className="btn btn-light"><i className="fas fa-arrow-left"></i></a></Link>
                <div className="ml-3"><p className="card-title">Compress Tool</p></div>
            </div>
            <div className="row">
                <div className="col-lg-9 col-md-12">
                    <div className="card">
                        <div className="card-body">
							<form action="upload.php" class="dropzone">
								<div className="dz-message" data-dz-message>
									<div className="icon">
										<i className="fas fa-cloud fa-3"></i>
									</div>
									<h4 className="message">Drag and Drop files here</h4>
									<div className="note">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</div>
								</div>
								{/* <div className="fallback">
									<input className="btn btn-light" name="file" type="file" multiple />
								</div> */}
							</form>
						</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div class="card p-2">
                        <h3 className="card-title text-center">Tingkat Kompresi</h3>
                        <div class="card-body">
                            <div class="form-check border border-primary">
                                <div class="ml-4 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                    <div class="d-flex flex-column ml-3">
                                    <div class="bd-highlight">Extreme Compression</div>
                                    <div class="bd-highlight">Kualitas kurang, kompresi tinggi</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check border border-primary mt-3">
                                <div class="ml-4 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                    <div class="d-flex flex-column ml-3">
                                    <div class="bd-highlight">Extreme Compression</div>
                                    <div class="bd-highlight">Kualitas kurang, kompresi tinggi</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check border border-primary mt-3">
                                <div class="ml-4 d-flex align-items-center">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                    <div class="d-flex flex-column ml-3">
                                    <div class="bd-highlight">Extreme Compression</div>
                                    <div class="bd-highlight">Kualitas kurang, kompresi tinggi</div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-secondary w-100 mt-3">Compress</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
