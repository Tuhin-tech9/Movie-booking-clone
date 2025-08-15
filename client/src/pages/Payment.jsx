import React, { useState } from "react";

const Payment = () => {
  const [method, setMethod] = useState("upi");
  const [details, setDetails] = useState({ upiId: "", cardNumber: "", expiry: "", cvv: "" });

  const handlePayment = () => {
    if (method === "upi" && !details.upiId) {
      alert("Please enter UPI ID");
      return;
    }
    if (method === "card" && (!details.cardNumber || !details.expiry || !details.cvv)) {
      alert("Please fill all card details");
      return;
    }
    alert(`Payment via ${method} successful (dummy simulation)`);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-900 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">💳 Payment</h1>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Select Payment Method:</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
          >
            <option value="upi">UPI</option>
            <option value="card">Credit / Debit Card</option>
            <option value="netbanking">Netbanking</option>
          </select>
        </div>

        {/* UPI */}
        {method === "upi" && (
          <div className="mb-6">
            <label className="block mb-2">UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={details.upiId}
              onChange={(e) => setDetails({ ...details, upiId: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />
          </div>
        )}

        {/* Card */}
        {method === "card" && (
          <>
            <div className="mb-4">
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={details.cardNumber}
                onChange={(e) => setDetails({ ...details, cardNumber: e.target.value })}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={details.expiry}
                  onChange={(e) => setDetails({ ...details, expiry: e.target.value })}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  value={details.cvv}
                  onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
            </div>
          </>
        )}

        {/* Netbanking */}
        {method === "netbanking" && (
          <div className="mb-6">
            <label className="block mb-2">Select Bank</label>
            <select className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none">
              <option>SBI</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>
          </div>
        )}

        {/* Pay Now */}
        <button
          onClick={handlePayment}
          className="w-full py-3 mt-4 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition-all duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
