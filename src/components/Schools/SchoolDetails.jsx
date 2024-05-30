import React, { useState } from 'react';
import Invoices from './Invoices';
import Collections from './Collections';
import PropTypes from "prop-types";
import Table from "../shared/Table";



const SchoolDetails = ({ school }) => {
    const [activeTab, setActiveTab] = useState('invoices');

    // const columns = [
    //   { Header: "Name", accessor: "name" },
    //   { Header: "Type", accessor: "type" },
    //   { Header: "Product", accessor: "product" },
    //   { Header: "County", accessor: "county" },
    //   { Header: "Registration Date", accessor: "registrationDate" },
    //   { Header: "Contact", accessor: "contact" },
    //   { Header: "Balance", accessor: "balance" },
    // ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='p-3 bg-gray-200 rounded mb-3 mt-3 dark:text-gray-300 dark:bg-gray-800'>
            <h3 className='mb-3 text-xl font-bold'>School Details</h3>
            <Table columns={[]} data={[]} />
            <p className='mb-3'>Name: {school.name}</p>
            <p className='mb-3'>Type: {school.type}</p>
            <p className='mb-3'>Product: {school.product}</p>
            <p className='mb-3'>County: {school.county}</p>
            <p className='mb-3'>Registration Date: {school.registrationDate}</p>
            <p className='mb-3'>Contact: {school.contact}</p>
            <p className='mb-3'>Balance: {school.balance}</p>

            <div className='flex mb-3 gap-3 dark:text-gray-300 dark:bg-gray-800 rounded p-3 bg-gray-200 dark:bg-gray-800 '>
                <button 
                onClick={() => handleTabChange('invoices')}
                className='bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300'
                >Invoices
                </button>
                <button 
                onClick={() => handleTabChange('collections')}
                className='bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300'>
                Collections</button>
            </div>

            {activeTab === 'invoices' && <Invoices schoolId={school.id}/>}
            {activeTab === 'collections' && <Collections schoolId={school.id}/>}
        </div>
    )


};

//proptypes
SchoolDetails.propTypes = {
    school: PropTypes.object.isRequired,
};

export default SchoolDetails;