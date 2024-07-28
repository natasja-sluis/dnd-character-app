import {jwtDecode} from 'jwt-decode';

export function isTokenValid(jwtToken) {

    const decodedToken = jwtDecode(jwtToken);
    const expirationToken = decodedToken.exp;
    const now = new Date().getTime();
    const nowInUnix = Math.round(now/1000);


    return expirationToken - nowInUnix > 0;
}

