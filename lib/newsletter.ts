const formId = 4917153;
const publicApiKey = 'lQbg_unCgg3LrJVBjnboyA';

export function subscribe(email: string) {
  return fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    body: JSON.stringify({ api_key: publicApiKey, email }),
    headers: { 'content-type': 'application/json' },
    method: 'post',
  });
}
