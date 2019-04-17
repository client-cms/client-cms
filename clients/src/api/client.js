import instance from '../config/https';
function stagequery() {
    return instance.get('/admin/client');
}
function insert(value) {
    return instance.post('/admin/client',value);
}
export default {
    stagequery,insert,
}