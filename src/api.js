import { default as axios } from 'axios';

const api = {
    register: async (appId, body, token) => {
        const apiCode = `https://discord.com/api/v10/applications/${appId}/commands`
        await axios.put(apiCode, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            params: body
        })
    },
    getCommands: async (token, appId) => {
        const apiUrl = `https://discord.com/api/v10/applications/${appId}/commands`
        const commands = await axios.get(apiUrl, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        return commands.data
    }
}

export default api