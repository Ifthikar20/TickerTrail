import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }), // Ensure the env variable is correct
  reducerPath: 'api',
  tagTypes: ['Kpis','News'],
  endpoints: (build) => ({
    getKpis: build.query<any, void>({
      query: () => 'kpi/kpis',
      providesTags: ['Kpis'],
    }),
    getNews: build.query<any, void>({
      query: (tickername) => `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${tickername}&apikey=GVYUNKFKT9N8D49Y`,
      providesTags: ['News'],
    }),
    postKpi: build.mutation({
      query: (newKpi) => ({
        url: 'kpi/kpis/post',
        method: 'POST',
        body: newKpi,
      }),
      invalidatesTags: ['Kpis'],
    }),
    postEmailForSubscribe: build.mutation({
      query: (userEmail) => ({
        url: '/https://tt-server-two.vercel.app/kpi/kpis/subscribe',
        method: 'POST',
        body: userEmail,
      }),
      invalidatesTags: ['Kpis'],
    }),
    postEmailForMessage: build.mutation({
      query: (userEmail) => ({
        url: 'https://tt-server-two.vercel.app/send-email',
        method: 'POST',
        body: userEmail,
      }),
     
    }),

  }),
});

export const { useGetKpisQuery, useGetNewsQuery, usePostKpiMutation, usePostEmailForSubscribeMutation, usePostEmailForMessageMutation } = api; // Ensure correct hook name
