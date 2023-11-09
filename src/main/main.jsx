

function Main({onClick}) {


  return (
    <>
      <div className="main">
        <div className="producs">
          <h1>Producs</h1>
          <p>Order it for you or for your beloved ones </p>
          <div className="render">
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Spiced Mint</p>
              <span className="Price">$9.99</span>
            </div>
            
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Sweet Straweberry</p>
              <span className="Price">$9.99</span>
            </div>
          </div>
          <div className="render">
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Vanilla</p>
              <span className="Price">$9.99</span>
            </div>
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Fragrant Cinnamon</p>
              <span className="Price">$9.99</span>
            </div>
          </div>
          <div className="render">
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Clean lavender</p>
              <span className="Price">$9.99</span>
            </div>
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Cool Blueberries</p>
              <span className="Price">$9.99</span>
            </div>
          </div>
          <div className="render">
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Summer Cherries</p>
              <span className="Price">$9.99</span>
            </div>
            <div onClick={onClick} className="candle">
              <div className="pic">
                <img src="/image 1.png" alt="" />
              </div>
              <p>Juicy Lemon</p>
              <span className="Price">$9.99</span>
            </div>
          </div>
        </div>
        <div className="check">
          <h1>Cart Items</h1>
          <div className="choosed-product">
            <img src="/image.png" alt="" />
            <div className="product-details">
              <h3>Spiced Mint</h3>
              <div className="quantity">
                <span>$9.99</span>
                <div className="qty2">
                  <span>+</span>
                  <span>1</span>
                  <span>-</span>
                </div>
                <span className="total">Total:$19.98</span>
              </div>
              <button className="remove">remove</button>
            </div>
          </div>
          <div className="sub">
            <span>Sub-Total: $ 19.98</span>
            <button className="buy">Check-out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
