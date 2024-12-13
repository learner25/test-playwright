
export interface BoardInterface {
    readonly Board: string;
    readonly Header: string;
    readonly BoardCard:string;
  }
  
  export const BoardSelectors: BoardInterface = {
    Board: "div.BoardColumnHeader h3",
    Header: "h3",
    BoardCard:'.BoardCardLayout-customPropertiesAndTags'
   
  };
  