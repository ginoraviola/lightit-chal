import axios from 'axios';

const baseURL = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';

const api = axios.create({ baseURL });

export const getEquipments = async () => await api.get('equipamiento');
export const getApertures = async () => await api.get('aberturas');
export const getRefinements = async () => await api.get('terminaciones');

export default api;
