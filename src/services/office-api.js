const fetch = require('node-fetch');
const URL = process.env.API_KEY;

export const postCharacter = async(character) => {
    const res =await fetch(`${URL}/api/v1/characters`, {
        method: 'POST',
        body: JSON.stringify(character),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })

    if (!res.ok) throw ('Failed')

    const apiRes = res.json()

    return apiRes
}