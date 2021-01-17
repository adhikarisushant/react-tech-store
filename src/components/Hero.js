import React, { Children } from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
        <div className="banner">
          <h1>think, code, deploy</h1>
          <p>embrace yout choices - we do</p>
          {children}
        </div>
    </div>
  );
}
