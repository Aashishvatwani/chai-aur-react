import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // Redirect based on authentication status
        if (authentication && !authStatus) {
            navigate('/login');
        } else if (!authentication && authStatus) {
            navigate('/');
        }
        setIsLoading(false);
    }, [authStatus, navigate, authentication]);

    return isLoading ? <h1>Loading...</h1> : <>{children}</>;
}

// Define PropTypes for the component
Protected.propTypes = {
    children: PropTypes.node.isRequired,
    authentication: PropTypes.bool
};
