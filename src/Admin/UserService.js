import axios from 'axios';


const USER_API_BASE_URL_2 = 'https://abcbookshop.herokuapp.com/users';

class UserSService {
fetchUsers() {
    return axios.get(USER_API_BASE_URL_2);
}

fetchUserById(userId) {
    return axios.get(USER_API_BASE_URL_2 + '?id=' + userId);
}

deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL_2 + '/' + userId);
}

addUser(user) {
    return axios.post(USER_API_BASE_URL_2, user);
}

editUser(user) {
    return axios.put(USER_API_BASE_URL_2 + '/' + user.id, user);
}

}
export default new UserSService();