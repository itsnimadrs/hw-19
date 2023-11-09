import React from "react";

function Modal() {


  return (
    <>
      <div className="modal">
        <div className="hand">
          <img src="/image (1).png" alt="" />
          <h3>
            All hand-made with natural soy wax, <br /> Candleaf is made for your
            pleasure <br /> moments. <br />
            🚚 FREE SHIPPING
          </h3>
        </div>
        <div className="details">
          <h3>$9.99</h3>
          <p>
            wax: Top grade Soy wax that delivers a smoke less, consistent burn
          </p>
          <p>
            Fragrance: Premium quality ingredients with natural essential oils
          </p>
          <p>Burning Time: 70-75 hours Dimension: 10cm x 5cm Weight: 400g </p>

          <div className="quantity2">
            <p>Quantity</p>
            <div className="plus">
              <span>+</span>
              <span>1</span>
              <span>-</span>
            </div>
          </div>
          <button className="add">
            <img src="/big-button.png" alt="" />
            
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
