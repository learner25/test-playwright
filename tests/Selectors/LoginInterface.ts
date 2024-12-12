
export interface LoginInterface {
    readonly EMAIL: string;
    readonly PASSWORD: string;
    readonly VERSION: string;
  }
  
  export const LoginSelectors: LoginInterface = {
    EMAIL: "form input[type='email']",
    PASSWORD: "form input[type='password']",
    VERSION: "1.0.0",
  };
  