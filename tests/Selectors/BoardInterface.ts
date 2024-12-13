
export interface BoardInterface {
    readonly Board: string;
    readonly Header: string;
    
  }
  
  export const BoardSelectors: BoardInterface = {
    Board: "div.BoardColumnHeader",
    Header: "h3",
   
  };
  