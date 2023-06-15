import React, { useCallback, useEffect, useState } from "react";
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { gapi }  from 'gapi-script';

const clientId = '612256972189-4rots1sjfleh5fhfnfh3loihgrpo14iq.apps.googleusercontent.com';

const GoogleButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = useCallback((response) => {
        console.log(response);
        setIsLoggedIn(true);
        navigate("/places");
    }, [navigate]);

    const onFailure = useCallback((response) => {
        console.log(response);
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <div>Redirecting...</div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="구글아이디로 로그인하기"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            )}
        </div>
    );
};

export default GoogleButton;




// import React, { useCallback, useEffect, useState } from "react";
// import GoogleLogin from 'react-google-login';
// import { gapi }  from 'gapi-script';
// import { Link } from 'react-router-dom';

// const clientId = '612256972189-4rots1sjfleh5fhfnfh3loihgrpo14iq.apps.googleusercontent.com';

// const GoogleButton = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         function start() {
//             gapi.client.init({
//                 clientId,
//                 scope:'email',
//             });
//         }
        
//         gapi.load('client:auth2', start);
//     }, []);

//     const onSuccess = useCallback((response) => {
//         console.log(response);
//         setIsLoggedIn(true);
//     }, []);

//     const onFailure = useCallback((response) => {
//         console.log(response);
//     }, []);

//     return (
//         <div>
//             {isLoggedIn ? (
//                 <Link to="/places"></Link>
//             ) : (
//                 <GoogleLogin
//                     clientId={clientId}
//                     buttonText="구글아이디로 로그인하기"
//                     onSuccess={onSuccess}
//                     onFailure={onFailure}
//                 />
//             )}
//         </div>
//     );
// };

// export default GoogleButton;
