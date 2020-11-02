const URL = process.env.API_KEY;

export const postCharacter = character => {
  return fetch(`${URL}/api/v1/characters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character),
  })
    .then(res => res.json());
};

export const getCharacters = () => {
  return fetch(`${URL}/api/v1/characters`)
    .then(res => res.json())
};

export const getCharacterById = id => {

  return fetch(`${URL}/api/v1/characters/${id}`)
    .then(res => res.json())
};