
export interface LoginInterface {
    readonly EMAIL: string;
    readonly PASSWORD: string;
    readonly LOGINEMAIL:string;
    readonly LOGINPASSBUTTON: string;
    
  }
  
  export const LoginSelectors: LoginInterface = {
    EMAIL: "form input[type='email']",
    PASSWORD: "form input[type='password']",
    LOGINEMAIL:".LoginEmailForm-continueButton",
    LOGINPASSBUTTON:".LoginPasswordForm-loginButton"
  };
  