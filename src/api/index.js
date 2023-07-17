// src/api/index.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAccounts = () => {
    let response = axios.get(`${API_BASE_URL}/accounts`);
    return response;
};

export const getExpenses = () => {
    let response = axios.get(`${API_BASE_URL}/expenses`);
    return response;
};

export const getIncomeSavings = () => {
    let response = axios.get(`${API_BASE_URL}/incomeSavings`);
    return response;
};

export const getWithdrawalStrategy = () => {
    let response = axios.get(`${API_BASE_URL}/withdrawalStrategy`);
    return response;
};

export const getSocialSecurity = () => {
    let response = axios.get(`${API_BASE_URL}/socialSecurity`);
    return response;
};
export const getRetirementAccounts = () => {
    let response = axios.get(`${API_BASE_URL}/retirementAccounts`);
    return response;
};