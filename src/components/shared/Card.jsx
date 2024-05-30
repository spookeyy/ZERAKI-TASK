import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, value }) => {
    return (
        <div className="card card-bordered w-full p-4 mb-4 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-200 ">
            <h4 className="card-title mb-2 text-lg font-bold dark:text-gray-300">{title}</h4>
            <p className="text-base font-normal dark:text-gray-400 bg-gray-50 rounded p-2 dark:bg-gray-900">{value}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
export default Card;