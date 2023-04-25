import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://mpesa-api-servrice.onrender.com/api/transaction")
      .then((data) => {
        setTransactions(data.data.transc);
        console.log(data.data);
      })
      .catch((err) => console.log(err.message));
  }, [transactions]);
  return (
    <>
      <div className="col-12 col-md-7 pt-5 mb-5 ">
        <div className="promo pe-md-3 pe-lg-5">
          <h1 className="headline mb-3" style={{ textAlign: "center" }}>
            TRANSACTION LIST
          </h1>
          <div className="cta-holder row gx-md-3 gy-3 gy-md-0">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Phone</th>
                  <th scope="col">TrnxID</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length < 1 ? (
                  <tr>
                    <td className="text-center" colSpan={6}>
                      No Record Found
                    </td>
                  </tr>
                ) : (
                  transactions.map((transaction) => (
                    <tr key={transaction._id}>
                      <td>{new Date(transaction.createdAt).toDateString()}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.PhoneNumber}</td>
                      <td>{transaction.MpesaReceiptNo}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/*//cta-holder*/}
        </div>
      </div>

      {/* <button
        type="button"
        className="btn btn-secondary w-50 mt-3"
        onClick={() => {
          window.location.href = "./BookingForm";
        }}
      >
        Book now
      </button> */}
      <div className="pay-contact-btn">
        <p>Dear Client, This page is still under maintainance, you will not be redirected</p>
        <p>After making successfull payment Please, <a href="/Contact">contact us</a></p>
        <p> so that we can sent you the google meet, sorry for the inconvience caused</p>
        {/* <a href="/Contact">
          <button>Contact us</button>
        </a> */}
      </div>
    </>
  );
}

export default DisplayTable;
