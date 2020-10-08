class GitHub {
  constructor() {
    this.client_id = '7623b196219b4cbe02d5';
    this.client_secret = '3f5c3d7c24f3be872e71ed1ee4e670386190e1fb';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}