import React from 'react';
import { useEffect } from 'react';

const Validate = () => {
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }
    }, []);
}

export default Validate