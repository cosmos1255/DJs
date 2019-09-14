export class Auth {
  static async authenticate(username, password) {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    });
    
    if (response.status >= 400) {
      throw await response.text();
    }
    
    return response;
  }
}