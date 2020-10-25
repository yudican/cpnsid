import React from "react";
import { color } from "../../../config/color";

export const Badge = () => {
  return (
    <div
      className="mr-2"
      style={{
        display: "flex",
        width: 14,
        height: 14,
        backgroundColor: "orange",
        borderRadius: 7,
        fontSize: 5,
        fontWeight: "bold",
        color: color.WHITE,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Rp
    </div>
  );
};

export const IconText = ({
  badge = false,
  title,
  subtitle,
  icon,
  style,
  textStyle,
  showSubtitle,
  containerStyle,
}) => {
  return (
    <div
      className="pt-2"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
        // alignItems: "center",
      }}
    >
      {badge ? <Badge /> : <i className={`${icon} mr-2`} style={style}></i>}
      <div>
        <p
          className="pr-2 font-poppins"
          style={{
            color: "#647195",
            fontSize: 16,
            lineHeight: "16px",
            marginBottom: 0,
            fontWeight: "bold",
            ...textStyle,
          }}
        >
          {title}
        </p>
        {showSubtitle && (
          <p
            className="pr-22 font-poppins"
            style={{
              color: subtitle ? "#647195" : "transparent",
              fontSize: 10,
              lineHeight: "16px",
              marginBottom: 0,
            }}
          >
            <s>{subtitle ? subtitle : "false"}</s>
          </p>
        )}
      </div>
    </div>
  );
};

export const ProggresHistory = ({ title, icon, value }) => {
  return (
    <div className="d-flex mb-4" style={{ flex: 1, alignItems: "center" }}>
      <div
        className="d-flex w-100"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <div
          className={"d-flex justify-content-center mr-3"}
          style={{
            width: 30,
            height: 30,
            backgroundColor: color.GREEN,
            alignItems: "center",
            borderRadius: 15,
            opacity: 0.5,
          }}
        >
          <i className={icon} style={{ color: color.WHITE }}></i>
        </div>
        <div class="progress-card" style={{ marginBottom: 0, width: "75%" }}>
          <div class="progress-status" style={{ marginBottom: 5 }}>
            <span class="text-muted">{title}</span>
          </div>
          <div class="progress" style={{ height: 4 }}>
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow={value}
              aria-valuemin="0"
              aria-valuemax="100"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title={`${value}%`}
            ></div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "-5%" }}>{value}%</div>
      <div className="d-flex-center ml-4" style={{ marginBottom: "-5%" }}>
        <span> Details</span>
        <i className="fas fa-chevron-right pl-2"></i>
      </div>
    </div>
  );
};
