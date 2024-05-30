import React, { useState } from 'react'
import Table from '../shared/Table'
import Modal from '../shared/Modal'
import PropTypes from "prop-types";
// import { getUpcomingInvoices } from '../../utils/data'

const UpcomingInvoices = ({invoices}) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState(null)
    // const invoices = getUpcomingInvoices()

    console.log("invoices-prop:", invoices)

    const columns = [
        {Header: 'School Name', accessor: 'schoolName'},
        {Header: 'Amount Due', accessor: 'amountDue'},
        {Header: 'Due Date', accessor: 'dueDate'},
        {Header: 'Actions', Cell: ({ row }) => (
            <button 
            onClick={() => handlePaymentClick(row.original)}
            className='bg-green-700 text-white rounded p-3 ml-2 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300'
            >Pay</button>
        ),},
    ];

    const handlePaymentClick = (invoice) => {
        setSelectedInvoice(invoice);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedInvoice(null);
        setShowModal(false);
    };

    return (
      <div className="p-4 flex flex-col space-y-4 justify-center sm:justify-start items-center sm:ml-64">
        <h2 className="text-2xl font-bold">Upcoming Invoices</h2>
        <Table columns={columns} data={invoices} />
        {showModal && (
          <Modal
            title="Pay Invoice"
            onClose={handleCloseModal}
            content={
              <div className="p-4 flex flex-col space-y-4 justify-center sm:justify-start items-center">
                <p>
                  Are you sure you want to pay the invoice for{" "}
                  {selectedInvoice.schoolName}?
                </p>
                <p>Amount Due: Ksh. {selectedInvoice?.amountDue}</p>
                <p>Due Date: {selectedInvoice?.dueDate}</p>
                {/* payment form */}
                <form
                  action="submit"
                  className="flex flex-col space-y-4 justify-center sm:justify-start items-center"
                >
                  <label htmlFor="paymentAmount">Payment Amount:</label>
                  <input
                    type="number"
                    id="paymentAmount"
                    name="paymentAmount"
                  />
                  <button type="submit">Pay</button>
                  <button onClick={handleCloseModal}>Close</button>
                </form>
              </div>
            }
          />
        )}
      </div>
    );
};

//proptypes
UpcomingInvoices.propTypes = {
    invoices: PropTypes.array.isRequired,
    setInvoices: PropTypes.func.isRequired,
    row: PropTypes.object.isRequired,
    
};

export default UpcomingInvoices