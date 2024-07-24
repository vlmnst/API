interface Parent {
    code: string;
    sqlState: string;
    errno: string;
    sqlMessage: string;
}

export interface SqlError extends Error {
    parent?: Parent;
  }