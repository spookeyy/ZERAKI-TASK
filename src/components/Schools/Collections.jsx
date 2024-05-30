import React, { useState, useEffect } from 'react';
import Table from '../shared/Table';
import { getCollections, updateCollection } from "../../utils/data";
import PropTypes from "prop-types";



const Collections = ({ schoolId }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionsData = await getCollections(schoolId);
      setCollections(collectionsData);
    };
    fetchCollections();
  }, [schoolId]);

  const columns = [
    { Header: "Invoice Number", accessor: "invoiceNumber" },
    { Header: "Collection Number", accessor: "collectionNumber" },
    { Header: "Date", accessor: "date" },
    { Header: "Status", accessor: "status" },
    { Header: "Amount", accessor: "amount" },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <>
          <button
            onClick={() => handleStatusChange(row.original, "Valid")}
            disabled={row.original.status === "Valid"}
            className="bg-green-700 text-white rounded p-3 mb-2 mt-2 dark:bg-gray-800 dark:text-gray-300"
          >
            Mark as Valid
          </button>
          <button
            onClick={() => handleStatusChange(row.original, "Bounced")}
            disabled={row.original.status === "Bounced"}
            className="bg-red-700 text-white rounded p-3 mb-2 mt-2 ml-2 dark:bg-gray-800 dark:text-gray-300"
          >
            Mark as Bounced
          </button>
        </>
      ),
    },
  ];

  const handleStatusChange = async (collection, status) => {
    const updatedCollection = await updateCollection(collection.id, { status });
    const updatedCollections = collections.map((coll) =>
      coll.id === updatedCollection.id ? updatedCollection : coll
    );
    setCollections(updatedCollections);
  };

  return (
    <div className=''>
      <h3 className="mb-3 text-xl font-bold dark:text-gray-300">Collections</h3>
      <Table columns={columns} data={collections} />
    </div>
  );
};

//proptypes
Collections.propTypes = {
  schoolId: PropTypes.string.isRequired,
  collections: PropTypes.array.isRequired,
  setCollections: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired,
  
};

export default Collections;