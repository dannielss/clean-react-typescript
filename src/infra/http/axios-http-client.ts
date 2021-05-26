import {
  HttpRequest,
  HttpResponse,
  HttpClient,
} from "../../data/protocols/http/http-client";

import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com/",
});

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest.Params): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axiosClient.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
