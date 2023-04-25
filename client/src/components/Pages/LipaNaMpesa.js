import React from 'react';
import DisplayTable from "../../components/DisplayTable";
import Header from "../../components/Header";
import PaymentForm from "../../components/PaymentForm";
import '../CSS/LipaNaMpesa.css'


function LipaNaMpesa() {

  return (
    <>
    <div className='payment-container'>
    {/* <h2>Pay here:</h2> */}
    <div className="App container-fluid">
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <PaymentForm />
            <DisplayTable />
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
    
  )
}

export default LipaNaMpesa