import React, { useState, useEffect } from 'react';
import { getSchools } from '../../utils/data';
import Table from '../shared/Table';
import SchoolDetails from './SchoolDetails';
import PropTypes from "prop-types";




const Schools = ({ schools, setSchools }) => {
    // const [schools, setSchools] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState(null);

    useEffect(() => {
        const fetchSchools = async () => {
            const schoolsData = await getSchools();
            setSchools(schoolsData);
        };

        fetchSchools();
    }, [ setSchools ]);

    const columns = [
        {Header: 'Name', accessor: 'name'},
        {Header: 'Type', accessor: 'type'},
        {Header: 'Product', accessor: 'product'},
        {Header: 'County',  accessor: 'county'},

        {Header: 'Actions', Cell: ({ row }) => (
            <button 
            onClick={() => handleViewSchoolClick(row.original)}
            className='bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300'
            >View Details</button>
        ),},
    ];

    const handleViewSchoolClick = (school) => {
        setSelectedSchool(school);
    };

    return (
        <div>
            <h2 className="mb-3 text-xl font-bold">Schools</h2>
            <Table columns={columns} data={schools} />
            {selectedSchool && <SchoolDetails school={selectedSchool} />}
        </div>
    );
};

//proptypes
Schools.propTypes = {
    schools: PropTypes.array.isRequired,
    setSchools: PropTypes.func.isRequired,
    row: PropTypes.object
};

export default Schools