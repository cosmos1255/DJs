async function authenticate(username, password) {
  const response = await fetch('/api/auth', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${username}:${password}`)}`
    }
  });
  
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) {
    throw content;
  }
  
  return content;
}

async function signup(username, password) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  
  const content = response.headers.get('Content-Type') && response.headers.get('Content-Type').includes('json') ? await response.json() : await response.text();

  if (response.status >= 400) {
    throw content;
  }
  
  return content;
}
