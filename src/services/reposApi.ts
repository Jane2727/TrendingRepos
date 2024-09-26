import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IReposData {
  incomplete_results: boolean;
  items: IItemsData[];
  total_count: number;
}

export interface IItemsData {
  id: number;
  name: string;
  stargazers_count: string;
  description: string;
  html_url: string;
}

export interface IQueryParams {
  language: string;
  sortType: string;
  orderType: string;
  qtyPerPage: number;
  page: number;
}

export const reposApi = createApi({
  reducerPath: "reposApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/search/" }),
  endpoints: (builder) => ({
    getRepos: builder.query<IReposData, IQueryParams>({
      query: ({ language, sortType, orderType, qtyPerPage, page }) => {
        const urlQuery = `language:${language}&sort=${sortType}&order=${orderType}&per_page=${qtyPerPage}&page=${page}`;
        return `repositories?q=${urlQuery}`;
      },
    }),
  }),
});

export const { useGetReposQuery } = reposApi;
