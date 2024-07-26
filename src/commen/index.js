
const backendDomain = "http://localhost:8085";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signup`,
    method: "post"
  },
  signIn: {
    url: `${backendDomain}/api/signin`,
    method: "post"
  },
  currentUsers: {
    url: `${backendDomain}/api/user-details`,
    method: "GET"
  },
  logout_user: {
    url: `${backendDomain}/api/user-logout`,
    method: "GET"
  },
  allUsers: {
    url: `${backendDomain}/api/all-user`,
    method: "GET"
  },
  deleteUser: {
    url: `${backendDomain}/api/users`, // Base URL, you will append userId in the fetch call
    method: 'DELETE'
  },
  contactus: {
    url: `${backendDomain}/api/contact-details`,
    method: 'post'
  },
  allService: {
    url: `${backendDomain}/api/contact-service`, // Corrected template literal usage
    method: 'GET',
  },
  deleteService: {
    url: `${backendDomain}/api/delete-contact`, // Corrected to avoid duplicate key
    method: 'DELETE',
  },
  updateUser: {
    url: `${backendDomain}/api//update-user`, // Corrected to avoid duplicate key
    method: 'post',
  }
};

export default SummaryApi;

