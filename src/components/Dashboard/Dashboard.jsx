import React, { useEffect, useState } from 'react';
import TopCardMetrics from './TopCardMetrics';
import TargetsVisualization from './TargetsVisualization';
import SignupsOverview from './SignupsOverview';
import UpcomingInvoices from './UpcomingInvoices';
import { getUpcomingInvoices } from '../../utils/data'

console.log("data",getUpcomingInvoices())

const Dashboard = () => {
  const [upcomingInvoices, setUpcomingInvoices] = useState([]);

  useEffect(() => {
    const fetchUpcomingInvoices = async () => {
      const invoices = await getUpcomingInvoices(1);
      setUpcomingInvoices(invoices);
      console.log("invoices", invoices)
    };
    fetchUpcomingInvoices();
  }, []);

  return (
    <>
      <div className="p-4 flex flex-col justify-center sm:justify-start items-center sm:ml-64">
        <div className="display flex-col-2  p-4 w-full bg-blue-100  dark:bg-gray-800 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li><div className="flex justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            {/* <p className="text-2xl mt-4 text-gray-400 dark:text-gray-500">
              Targets Visualization
            </p> */}
            <li><TargetsVisualization /> </li>
          </div></li>
          
          <div className="flex flex-col justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            {/* <p className="text-2xl mb-2 mt-4 text-gray-400 dark:text-gray-500">
              Signups Overview
            </p> */}
            <li><SignupsOverview /> </li>
          </div>
          </ul>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold">Top Card Metrics</h2>
          <TopCardMetrics />
          <UpcomingInvoices invoices={upcomingInvoices} />
      </div>
    </>
  );
}

export default Dashboard