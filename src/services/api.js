import { create } from 'apisauce';

const api = create ({
    baseURL: 'https://pets-unipe.herokuapp.com',
})

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;