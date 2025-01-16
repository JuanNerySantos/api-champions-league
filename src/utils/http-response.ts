import { HttpResponse } from "../models/http-response-models";
export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const create = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: { message: "Data not found." },
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: {
      message: "Bar request",
    },
  };
};

export const notFound = async (): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: {
      message: "Player not found !",
    },
  };
};
