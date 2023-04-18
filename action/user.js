import axios from 'axios';
import { SERVER_URL } from '../config';

export const signin = data => {
	var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/signin`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const signup = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/signup`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const updateInfo = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/updateInfo`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const changePassword = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/changePassword`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const getAddress = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/getAddress`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const updateAddress = (data) => {  
    var promise = new Promise( (resolve, reject) => {
		axios.request({
			url: `${SERVER_URL}/api/user/updateAddress`,
			method: 'POST',
			data: data
		}).then(res => {
			if (res) {
				resolve(res.data);
			}
		}).catch(err => {
			reject(err);
		});
	});
    return promise;
}

export const forgotPassword = (data, history) => async dispatch => {
    const res = await axios.request(
        `${SERVER_URL}/api/user/forgotpassword`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
    ).catch(err => {
        console.log('error: ', err);
    });

    if(res && res.data) {
        if(res.data.success) {
            let msg = '';
            if(localStorage.getItem('lang') === 'fr') {
                msg = 'Veuillez confirmer votre e-mail pour réinitialiser le mot de passe.';
            } else {
                msg = 'Please confirm your email to reset the password.';
            }

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    display: true,
                    message: msg,
                },
            });
        } else {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    display: true,
                    message: res.data.msg,
                },
            });
        }
    }
}

export const resetPassword = (data) => async dispatch => {
    const res = await axios.request(
        `${SERVER_URL}/api/user/resetPassword`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }
    ).catch(err => {
        console.log('error: ', err);
    });

    if(res && res.data) {
        return res.data;
    }
}

export const updateOrgInfo = (data) => async dispatch => {
    const res = await axios.request(
        `${SERVER_URL}/api/organisation/update`,
        {
            method: 'POST',
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).catch(err => {
        console.log(err);
    });

    if(res && res.data) {
        if(!res.data.success) {
            let msg = '';
            if(localStorage.getItem('lang') === 'fr') {
                msg = "Ne pas utiliser l'organisation existante";
            } else {
                msg = "Don't Use Exist Organisation";
            }
            
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    display: true,
                    message: msg,
                },
            });
        } else {
            return res.data.id;
        }
    }
}
