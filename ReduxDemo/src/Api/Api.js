const ADDRESS = 'http://nongnghiepapi.cscom.vn/';
const ADDRESS2 = 'http://221.132.18.21:8899/';
const ADDRESS3 = 'http://msc.camau.gov.vn/';
const ADDRESS4 = 'http://nongnghiep.vic.camau.vn:81/';
export default class Api {
    /**
        action: 
        jsonBody:
        callback: (result, error)
     */
    static post(action, jsonBody, callback) {
        if (!callback) {
            return fetch(ADDRESS + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.KetQua === 1) {
                    return responseJson.DuLieu;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                return null;
            });
        } else {
            return fetch(ADDRESS + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.KetQua === 1) {
                    callback(responseJson.DuLieu, null);
                } else {
                    callback(null, responseJson.ThongBao);
                }
            })
            .catch((error) => {
                callback(null, error);
            });
        }
    }
    static post2(action, jsonBody, callback) {
        if (!callback) {
            return fetch(ADDRESS2 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                return null;
            });
        } else {
            return fetch(ADDRESS2 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson, null);
            })
            .catch((error) => {
                callback(null, error);
            });
        }
    }

    static post3(action, jsonBody, callback) {
        if (!callback) {
            return fetch(ADDRESS3 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                return null;
            });
        } else {
            return fetch(ADDRESS3 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson, null);
            })
            .catch((error) => {
                callback(null, error);
            });
        }
    }
    
    static post4(action, jsonBody, callback) {
        if (!callback) {
            return fetch(ADDRESS4 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.KetQua === 1) {
                    return responseJson.DuLieu;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                return null;
            });
        } else {
            return fetch(ADDRESS4 + action, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonBody
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.KetQua === 1) {
                    callback(responseJson.DuLieu, null);
                } else {
                    callback(null, responseJson.ThongBao);
                }
            })
            .catch((error) => {
                callback(null, error);
            });
        }
    }
}