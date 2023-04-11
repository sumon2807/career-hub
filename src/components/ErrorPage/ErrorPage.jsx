import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const [error, stutas]=useRouteError();
    console.log(error)
    return (
        <div>
            this is error
        </div>
    );
};

export default ErrorPage;