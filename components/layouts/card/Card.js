import React from "react";
import { color } from "../../../config/color";
import { Badge, IconText } from "./Atoms";

export const Card = ({
  title,
  subtitle,
  children,
  className,
  textWhite = false,
}) => {
  return (
    <div class={`card full-height ${className}`}>
      <div class="card-body">
        <div class={`card-title ${textWhite ? "text-white" : ""}`}>{title}</div>
        <div
          class={`card-category ${textWhite ? "text-white" : ""}`}
          style={{ marginTop: 0 }}
        >
          {subtitle}
        </div>
        {children}
      </div>
    </div>
  );
};

export const CardTwo = () => {
  return (
    <div
      className="card  mt-4"
      style={{
        border: "1px solid #E8E8E8",
        borderRadius: 10,
      }}
    >
      <div
        className="card-header bg-gradient-blue"
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <h5 className="card-title text-white">Bimbel Mandiri</h5>
      </div>
      <div className="card-body">
        <p className="mb-" style={{ fontSize: 12 }}>
          Untuk anda yang ingin mendapatkan fitur lengkap CPNS ID
        </p>
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
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
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
              Rp.90.000
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-info btn-border btn-sm w-45"
            style={{ fontSize: 12 }}
            data-target="#detailmodal"
            data-toggle="modal"
          >
            Lihat Detail
          </button>
          <button
            className="btn btn-warning btn-sm w-45"
            style={{ fontSize: 12 }}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardThree = ({ title, discount = false }) => {
  return (
    <div
      className="card mt-4"
      style={{
        border: "1px solid #E8E8E8",
        borderRadius: 10,
      }}
    >
      <div
        className="card-header "
        style={{
          backgroundColor: color.RED,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <h5
          className="card-title text-white text-center text-bold"
          style={{ fontSize: 12 }}
        >
          {title}
        </h5>
      </div>
      <div className="card-body">
        <IconText
          icon={"fas fa-calendar"}
          title={"29 Jul 2020"}
          style={{ color: color.PURPLE, fontSize: 14 }}
          textStyle={{ fontSize: 12 }}
        />
        <IconText
          icon={"fas fa-clock"}
          title={"14.00 WIB"}
          style={{ color: color.GREEN, fontSize: 14 }}
          textStyle={{ fontSize: 12 }}
        />
        <IconText
          badge
          title={"Rp. 90.000"}
          style={{ color: color.GREEN, fontSize: 12 }}
          textStyle={{ fontSize: 12 }}
          subtitle={discount ? "Rp. 150.000" : false}
        />

        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-warning btn-sm w-100"
            style={{ fontSize: 12 }}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
