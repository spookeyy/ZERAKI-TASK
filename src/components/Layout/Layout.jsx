import React from "react";
import SideNavigation from "./SideNavigation";
import PropTypes from "prop-types";


const Layout = ({ children }) => {

    return(
        <div>
            <SideNavigation />
            <main className="ml-64">{children}</main>
        </div>
    );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;