import React from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

const Table = ({ columns, data}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Render the UI for table
  Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
  };
  return (
    <table {...getTableProps()} className="w-full ml-2 text-sm text-left text-gray-600 border border-gray-200 dark:text-gray-400 ">
      <thead className="text-xs tracking-wider text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sm:text-sm md:text-md">
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th key={index} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700" key={index} {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;