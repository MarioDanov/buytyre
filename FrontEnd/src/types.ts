export interface User {
    username: string;
    password: string;
  }
  
  export interface AuthResponse {
    message: string;
    token?: string;
  }
  