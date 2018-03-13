import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = '?key=matttheratatata';
const ROOT_URL = `http://localhost:8080/notes`;

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/notes${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}