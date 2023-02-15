import { configuration } from '../../configuration';

class Api {
  constructor() {
    this.apiURL = configuration.apiURL;
    this.baseConfig = {
      key: configuration.apiKey
    };
  }

  async get(endpoint, params) {
    const options = new URLSearchParams({
      ...this.baseConfig,
      ...params
    });

    const response = await fetch(`${this.apiURL}${endpoint}?${options}`);
    const result = await response.json();

    return result;
  }
}

export const apiClient = new Api();
