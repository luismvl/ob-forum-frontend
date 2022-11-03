import axios from 'axios'
import url from './base-url'

// TODO: Refactorizar tema del token
export async function getAllCourses(token) {
  return axios.get(`${url}/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export async function getCourseInfoById() {
  return 'a'
}

/* 
useEffect(() => {
    // TODO: Refactorizar a su propio archivo en /api
    axios
      .get('https://ob-forum-backend.herokuapp.com/courses', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setCourses(res.data)
      })
  }, [])
*/
