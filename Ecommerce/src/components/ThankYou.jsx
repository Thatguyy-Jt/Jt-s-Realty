import React, { useContext, useEffect } from 'react'
import EcomContext from '../context/EcomContext'
import { useSearchParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ThankYou() {
  const { createOrder, order, isAuthenticated } = useContext(EcomContext);
  const [searchParams] = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  useEffect(() => {
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])
  return (
    <div className="">
        Thank you boss
    </div>
  )
}

export default ThankYou;
