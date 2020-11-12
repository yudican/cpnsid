import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../components/layouts";
import {
  Badge,
  IconText,
  ProggresHistory,
} from "../components/layouts/card/Atoms";
import { Card, CardThree, CardTwo } from "../components/layouts/card/Card";
import { color } from "../config/color";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/actions/countAction";
import { Chart } from "../components/pages/dashboard/Chart";
import { SnackBar } from "../components/pages/dashboard/Snackbar";
import { ChartModal } from "../components/pages/dashboard/modal/ChartModal";
import { PromoModal } from "../components/pages/dashboard/modal/PromoModal";
import { DetailModalTryout } from "../components/pages/dashboard/modal/DetailModalTryout";
import { PromoModalSharing } from "../components/pages/dashboard/modal/PromoModalSharing";
import { TryoutAktif } from "../components/pages/dashboard/card/TryoutAktif";
import { UndangTeman }  from '../components/pages/dashboard/modal/UndangTeman';

export class Home extends Component {
  
  render()
   {
    // const [modalOpen, setModalOpen] = React.useState(false);
    // console.log(this.props)

    const titleName = "Halo Calon CPNS";
    return (
      <Layout to="dashboard">
        <div class="page-inner mt-2">
          <div className="col-md-12">
            <div class="row mt-2">
              <div class="col-xs-7 col-lg-7 col-md-12 col-sm-12">
                <Card
                  title="Paket Tryout Untuk Anda"
                  subtitle="Dapatkan akses tryout CPNS beserta pembahasannya!"
                >
                  <CardItemList discount_btn />
                  <CardItemList discount_price="Rp. 150.000" />
                  <CardItemList type="premium" />
                  <CardItemList type="purchased" price={0} />
                </Card>
              </div>
              <div className="col-xs-5 col-lg-5 col-md-12 col-sm-12">
                <div className="card" style={{ borderRadius: 10 }}>
                  <div
                    className="card-header bg-gradient-blue"
                    style={{ borderRadius: 10 }}
                  >
                    <h4 className="card-title text-white">Tryout Saya</h4>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                      <li class="nav-item submenu">
                        <a
                          class="nav-link active show"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontSize: 12,
                          }}
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Tryout Aktif
                        </a>
                      </li>
                      <li class="nav-item submenu">
                        <a
                          class="nav-link"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontSize: 12,
                          }}
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Riwayat & Pembahasan
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content mt-2 mb-3" id="pills-tabContent">
                      <div
                        class="tab-pane fade active show"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <TryoutAktif statusBeli="promo"/>
                        <TryoutAktif/>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div id="e2898_0">
                          <div id="e2257_5051"></div>
                          <span id="e2257_5052">Try Out 06 SKD</span>
                          <span id="e2257_5053">20 Jul 2020, 14:00 WIB</span>
                          <span id="e2257_5054">End berapa menit lagi?</span>
                          <div id="e2257_5056"></div>
                          <div id="e2257_5058"></div>
                          <div id="e2257_5060"></div>
                          <span id="e2257_5061">Kerjakan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4
                      className="card-title font-poppins"
                      style={{ fontSize: 14 }}
                    >
                      Perkembangan Nilai
                      <select
                        className=" float-right"
                        style={{
                          border: "none",
                          padding: 5,
                          backgroundColor: color.GREY,
                          borderRadius: 5,
                          color: "",
                        }}
                        name=""
                        id=""
                      >
                        <option value="">60 hari terakhir</option>
                      </select>
                    </h4>
                  </div>
                  <div className="card-body">
                    <Chart />
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h4>Evaluasi Kemampuan</h4>
                  </div>
                  <div className="card-body">
                    <ProggresHistory
                      title="Tes Intelegensi Umum"
                      icon={"fas fa-brain"}
                      value={60}
                    />
                    <ProggresHistory
                      title="Tes Karakteristik Pribadi"
                      icon={"fas fa-brain"}
                      value={80}
                    />
                  </div>
                </div>
              </div>

              {/* chart */}

              <div class="col-xs-7 col-lg-7 col-md-12 col-sm-12">
                <Card
                  title="Ingin Meningkatkan Pengetahuan Seputar Tes?"
                  subtitle="Ikuti program bimbingan belajar untuk menaklukkan tes CPNS"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <CardTwo />
                    </div>
                    <div className="col-md-6">
                      <CardTwo />
                    </div>
                  </div>
                </Card>
              </div>
              <div class="col-xs-7 col-lg-7 col-md-12 col-sm-12">
                <Card
                  title="Toefl & Test Sertifikasi"
                  subtitle="Dapatkan sertifikat Toefl dan sertifikasi sebagai syarat administrasi CPNS!"
                  className="bg-card-gradient"
                  textWhite
                >
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <CardThree title="Toefl Prediction" discount />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <CardThree title="Internet Program" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <CardThree title="Microsoft Office" discount />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <SnackBar cartCount={1} cartTotal={"50.000"} />
          <ChartModal/>
          <PromoModal/>
          <DetailModalTryout/>
          <PromoModalSharing/>
          <UndangTeman/>
        </div>
      </Layout>
    );
  }
}

const CardItemList = ({
  type = "default",
  discount_btn = false,
  discount_price,
  price = "90.000",
}) => {
  return (
    <div
      className="p-4"
      style={{ border: "1px solid #E8E8E8", borderRadius: 10, marginTop: "5%" }}
    >
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div
            className="d-flex pt-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <div
              style={{
                color: "#3A4149",
                fontSize: 16,
                lineHeight: "24px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              TryOut 01 SKD
            </div>
            {type === "default" && (
              <div
                style={{
                  paddingLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn btn-sm bg-gradient mr-2"
                  style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <i className="fas fa-fire pr-1"></i> Exclusive
                </button>
                <button
                  className="btn btn-sm"
                  style={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    backgroundColor: "#FF6868",
                    color: "#fff",
                  }}
                >
                  <i className="fas fa-circle pr-1"></i> Live
                </button>
              </div>
            )}
            {type !== "default" && (
              <div
                style={{
                  paddingLeft: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {type === "premium" && (
                  <button
                    className="btn bg-gradient-blue btn-sm"
                    style={{ paddingTop: 4, paddingBottom: 4, color: "#fff" }}
                  >
                    <i className="fas fa-award pr-1"></i> Premium
                  </button>
                )}
                {type === "purchased" && (
                  <button
                    className="btn bg-green btn-sm"
                    style={{ paddingTop: 4, paddingBottom: 4, color: "#fff" }}
                  >
                    <i className="fas fa-gift pr-1"></i> free
                  </button>
                )}
              </div>
            )}
          </div>
          <div
            className="pt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <i
              className="fas fa-calendar pr-2"
              style={{ color: color.PURPLE }}
            ></i>
            <p style={{ color: "#647195", marginBottom: 0 }}>
              29 JULI 2020, 14.00 WIB
            </p>
          </div>
          <div
            className="pt-2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Badge />
            <div
              className="d-flex"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <p
                className="pr-2"
                style={{
                  color: "#647195",
                  fontSize: 16,
                  lineHeight: "16px",
                  marginBottom: 0,
                  fontWeight: "bold",
                }}
              >
                Rp. {price}
              </p>
              {discount_btn && (
                <button
                  className="btn bg-green btn-sm"
                  style={{ paddingTop: 4, paddingBottom: 4, color: "#fff" }}
                  data-target="#promosharingmodal"
                  data-toggle = "modal"
                  type="button"
                >
                  <i className="fas fa-users pr-1"></i> Promo Sharing
                </button>
              )}
              {discount_price && (
                <p
                  className="pr-2"
                  style={{
                    color: "#647195",
                    fontSize: 16,
                    lineHeight: "16px",
                    marginBottom: 0,
                  }}
                >
                  <s>{discount_price}</s>
                </p>
              )}
            </div>
          </div>
        </div>
        {type === "purchased" ? (
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <button className="btn bg-green btn-sm w-100 text-white">
              Ikuti Tryout
            </button>
            <button className="btn btn-primary btn-sm btn-border w-100">
              Lihat Persyaratan
            </button>
          </div>
        ) : (
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <button className="btn btn-warning btn-sm w-100">
              Beli Sekarang
            </button>
            <button className="btn btn-primary btn-sm btn-border w-100">
              Tambahkan ke keranjang
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  Home
);
