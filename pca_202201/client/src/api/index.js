import axios from "axios";

const getsURL = "http://localhost:5000/gets"
const postsURL = "http://localhost:5000/posts"

export const getAgendamentos = () => axios.get(getsURL).then(res => {
    const data = res.data
    return data
})

export const postAgendamento = (dados) => axios.post(postsURL, dados).then(res => {
    console.log('Dados Inseridos.')
})