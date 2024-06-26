import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeader = {

	'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
	'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_NEWS_RAPID_BASE_URL;

const createRequest = url => ({ url, headers: cryptoNewsApiHeader });

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
