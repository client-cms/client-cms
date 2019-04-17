import instance from '../config/https';
function query() {
    return instance.get('/admin/sell');
}
function insert(value) {
    return instance.post('/admin/sell',value);
}
export default {
    query,insert,
}