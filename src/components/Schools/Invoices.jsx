import React, { useState, useEffect } from 'react'
import Table from '../shared/Table'
import Modal from '../shared/Modal'
import {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from "../../utils/data";
import PropTypes from "prop-types";


const Invoices = ({ schoolId }) => {
  const [invoices, setInvoices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      const invoicesData = await getInvoices(schoolId);
      setInvoices(invoicesData);
    };
    fetchInvoices();
  }, [schoolId]);

  const columns = [
    { Header: 'Invoice Number', accessor: 'invoiceNumber' },
    { Header: 'Item', accessor: 'item' },
    { Header: 'Creation Date', accessor: 'creationDate' },
    { Header: 'Due Date', accessor: 'dueDate' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Paid Amount', accessor: 'paidAmount' },
    { Header: 'Balance', accessor: 'balance' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Days Until Due', accessor: 'daysUntilDue' },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <>
          <button 
          onClick={() => handleEditClick(row.original)}
          className='bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300'
          >Edit</button>
          <button 
          onClick={() => handleDeleteClick(row.original)}
          className='bg-red-700 text-white rounded p-3 mb-2 mt-2 ml-2 dark:bg-gray-800 dark:text-gray-300'
          >Delete</button>
        </>
      ),
    },
  ];

  const handleCreateClick = () => {
    setModalMode('create');
    setSelectedInvoice(null);
    setShowModal(true);
  };

  const handleEditClick = (invoice) => {
    setModalMode('edit');
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleDeleteClick = async (invoice) => {
    await deleteInvoice(invoice.id);
    const updatedInvoices = invoices.filter((inv) => inv.id !== invoice.id);
    setInvoices(updatedInvoices);
  };

  const handleModalSubmit = async (formData) => {
    if (modalMode === 'create') {
      const newInvoice = await createInvoice({ ...formData, schoolId });
      setInvoices([...invoices, newInvoice]);
    } else {
      const updatedInvoice = await updateInvoice(selectedInvoice.id, formData);
      const updatedInvoices = invoices.map((inv) =>
        inv.id === updatedInvoice.id ? updatedInvoice : inv
      );
      setInvoices(updatedInvoices);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInvoice(null);
  };

  return (
    <div>
      <h3 className="mb-3 text-xl font-bold dark:text-gray-300">Invoices</h3>
      <button
        onClick={handleCreateClick}
        className="bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300"
      >
        Create Invoice
      </button>
      <Table columns={columns} data={invoices} />
      {showModal && (
        <Modal
          title={modalMode === "create" ? "Create Invoice" : "Edit Invoice"}
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
          defaultValues={selectedInvoice}
          content={
            <div className="p-4 flex flex-col space-y-4 justify-center sm:justify-start items-center">
              <form
                action="submit"
                className="grid grid-cols-2 bg-gray-100 p-4 rounded space-y-4 justify-center sm:justify-start items-center"
              >
                <label htmlFor="invoiceNumber">Invoice Number:</label>
                <input
                  type="text"
                  id="invoiceNumber"
                  name="invoiceNumber"
                  defaultValue={selectedInvoice?.invoiceNumber}
                />
                <label htmlFor="item">Item:</label>
                <input
                  type="text"
                  id="item"
                  name="item"
                  defaultValue={selectedInvoice?.item}
                />
                <label htmlFor="creationDate">Creation Date:</label>
                <input
                  type="date"
                  id="creationDate"
                  name="creationDate"
                  defaultValue={selectedInvoice?.creationDate}
                />
                <label htmlFor="dueDate">Due Date:</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  defaultValue={selectedInvoice?.dueDate}
                />
                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  defaultValue={selectedInvoice?.amount}
                />
                <label htmlFor="paidAmount">Paid Amount:</label>
                <input
                  type="number"
                  id="paidAmount"
                  name="paidAmount"
                  defaultValue={selectedInvoice?.paidAmount}
                />
                <label htmlFor="balance">Balance:</label>
                <input
                  type="number"
                  id="balance"
                  name="balance"
                  defaultValue={selectedInvoice?.balance}
                />
                <label htmlFor="status">Status:</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  defaultValue={selectedInvoice?.status}
                />
                <label htmlFor="daysUntilDue">Days Until Due:</label>
                <input
                  type="number"
                  id="daysUntilDue"
                  name="daysUntilDue"
                  defaultValue={selectedInvoice?.daysUntilDue}
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300"
                >
                  Submit
                </button>
                <button
                  className="modal-close bg-red-700 text-white rounded p-3 ml-2 mb-2 mt-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </form>
            </div>
          }
        />
      )}
    </div>
  );
};


//proptypes
Invoices.propTypes = {
  schoolId: PropTypes.string.isRequired,
  invoices: PropTypes.array.isRequired,
  setInvoices: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired,
  
};

export default Invoices;