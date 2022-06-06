import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Buying T-shirt</h1>
      <div>
        <div
          style={{
            width: "100px",
            position: "absolute",
            right: "10px",
            top: "5px",
          }}
        >
          <img
            style={{ width: "100px" }}
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559866.jpg"
            alt=""
          />
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            gap: "20px",
            border: "1px solid",
          }}
        >
          <div>
            <img
              style={{ width: "200px" }}
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/tshirt-business8-min_838a2996-f195-4c1d-a4d1-034bc0a9a095.jpg"
              alt=""
            />
          </div>
          <div>
            <span>T-shirt</span>
            <span>Price: 200.00</span>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
