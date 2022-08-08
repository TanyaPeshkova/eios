import React from "react";
import {useRoutes} from '../../../routes';
import {BrowserRouter as Router, Link, Routes} from 'react-router-dom';

import ReactDOM from "react-dom";

const StudentionApp = () => {
    return <Router>{useRoutes()}</Router>;
}

ReactDOM.render(<StudentionApp/>, document.getElementById('root'));
