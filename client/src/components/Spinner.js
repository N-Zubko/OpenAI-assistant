import React from "react";
import "../spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container overlay">
      <div className="loading-spinner"></div>
    </div>
  );
}
