import './RequireAuth.css'
import * as React from "react";
import {
    useLocation,
    Navigate
} from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ClipLoader } from 'react-spinners';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={loading} size={100} /></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth