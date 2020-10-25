import React from "react";

export const SnackBar = ({ cartCount = 0, cartTotal = 0 }) => {
  return (
    <div className={"snackbar"}>
      <div
        className={"bg-dark"}
        style={{ width: "100%", height: "auto", padding: 15 }}
      >
        <div className="d-flex-center justify-content-between">
          <div className="d-flex-center">
            <i className="fas fa-shopping-cart text-white"></i>
            <div className="ml-2 text-white snack-text">
              {cartCount} Paket dalam keranjang
            </div>
          </div>
          <div className="d-flex-center">
            <div className="ml-2 text-white mr-3  snack-text">
              Total Rp {cartTotal}
            </div>
            <button
              className="btn btn-warning btn-sm"
              style={{ paddingTop: 4, paddingBottom: 4 }}
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
