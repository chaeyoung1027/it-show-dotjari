import React, { useCallback, useEffect, useState } from "react";
import GoogleLogin from 'react-google-login';
import { gapi }  from 'gapi-script';
import SelectPlace from '../components/SelectPlace';

const clientId = '612256972189-4rots1sjfleh5fhfnfh3loihgrpo14iq.apps.googleusercontent.com';

const GoogleButton = ({ onSocial }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId,
                scope:'email',
            });
        }
        
        gapi.load('client:auth2', start);
    }, []);

    const onSuccess = useCallback((response) => {
        console.log(response);
        setIsLoggedIn(true);
    }, []);

    const onFailure = useCallback((response) => {
        console.log(response);
    }, []);

    return (
        <div>
            {isLoggedIn ? (
                <SelectPlace />
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
