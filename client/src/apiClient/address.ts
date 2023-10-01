import axiosAddress from 'axios';

const addressApi = {
    getCity() {
        const url = 'https://vapi.vnappmob.com/api/province';
        return axiosAddress.get(url);
    },
    getDistrict(idProvince: string) {
        const url = `https://vapi.vnappmob.com/api/province/district/${idProvince}`;
        return axiosAddress.get(url);
    },
};
export default addressApi;
