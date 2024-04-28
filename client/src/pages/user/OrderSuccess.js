import React from "react";
import Layout from "./../../components/Layout/Layout";

const OrderSuccess = ({ orderDetails }) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">Order Placed Successfully!</h1>
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <h3>Order Details:</h3>
            <p>Order ID: {orderDetails._id}</p>
            <p>Total Cost: {orderDetails.totalcost}</p>
            <p>Payment Status: {orderDetails.paymentstatus}</p>
            <p>Status: {orderDetails.status}</p>
            {/* You can include more order details here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
