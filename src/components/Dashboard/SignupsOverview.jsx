import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getSignupsOverviewData } from "../../utils/data";

const SignupsOverview = () => {
  const data = getSignupsOverviewData();

  if (!data) {
    return <div>No data available</div>;
  }

  const XAxisComponent = ({ dataKey = "name", ...rest }) => (
    <XAxis dataKey={dataKey} {...rest} />
  );

  XAxisComponent.propTypes = {
    dataKey: PropTypes.string.isRequired,
  }

  const YAxisComponent = ({ dataKey = "value", ...rest }) => (
    <YAxis dataKey={dataKey} {...rest} />
  );

   YAxisComponent.propTypes = {
     dataKey: PropTypes.string.isRequired,
   };
  return (
    <div className="w-full mr-6 mb-4  sm:mb-0">
      <h2 className="text-2xl font-bold mt-4 text-gray-400 dark:text-gray-500">
        Signups Overview
      </h2>
      <BarChart width={500} height={200} data={data}>
        <XAxisComponent />
        <YAxisComponent />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="primary" stackId="a" fill="#8884d8" />
        <Bar dataKey="secondary" stackId="a" fill="#82ca9d" />
        <Bar dataKey="igcse" stackId="a" fill="#ffc658" />
      </BarChart>
    </div>
  );
};

export default SignupsOverview;
