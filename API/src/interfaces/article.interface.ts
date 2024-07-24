import { Request } from "express";

export interface ArticleAttributes {
    id?: number;
    name: string;
    brand: string;
    active?: boolean;
    updatedAt?: Date;
}


export interface ArticleGetRequest extends Request {
    query: {
        search?: string;
        isActive?: string;
        brand?: string
    }
}

export interface ArticleUpdateAttibutes {
    name?: string;
    brand?: string;
    active?: boolean;
}

export interface ArticlePostRequest extends Request {
    body: {
        name: string;
        brand: string;
    }
}

export interface ArticleUpdateRequest extends Request {
    params:{
        id: string;
    }
    body: ArticleUpdateAttibutes
}