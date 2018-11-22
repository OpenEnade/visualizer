import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'

export default {
    getCourses() {
        return axios.get('/cursos')
    },

    getUniversitiesByCourse(courseName) {
        return axios.get('/universidades')
            .then(function (response) {
                return response.data
            })
            .then((universidades) => {
                let universidadesByCourse = universidades.filter((universidade) => {
                    for (let i = 0; i < universidade.cursos.length; i++) {
                        if (universidade.cursos[i].nome == courseName) {
                            return true
                        }
                    }
                    return false
                })
                return universidadesByCourse
            })

    }
}