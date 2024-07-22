import jwtDecode from 'jwt-decode';

export default function isTokenValid(jwtToken) {

    const decodedToken = jwtDecode(jwtToken);
    const experationToken = decodedToken.exp;
    const now = new Date().getTime();
    const nowInUnix = Math.round(now/1000);


    return experationToken - nowInUnix > 0;
}