const urlRequestToken = 'https://opentdb.com/api_token.php?command=request';

export async function requestTokenService() {
  return fetch(urlRequestToken).then((token) => token.json().then((json) => getTrivia(json.token)));
}

export async function getTrivia(token) {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`).then((resp) =>
    resp.json().then((json) => (resp.ok ? Promise.resolve({ json, token }) : Promise.reject(json))),
  );
}
