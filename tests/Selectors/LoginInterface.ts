
export interface LoginInterface {
    readonly EMAIL: string;
    readonly PASSWORD: string;
    
  }
  
  export const LoginSelectors: LoginInterface = {
    EMAIL: "form input[type='email']",
    PASSWORD: "form input[type='password']",
   
  };
  