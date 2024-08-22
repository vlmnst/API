export interface ResponseAttributes<T>  {
    code: number;
    message?: string;
    results?: T | T[];
  }