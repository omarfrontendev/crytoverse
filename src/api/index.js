import axios from "axios";


export const getData = async (type, count='50', timePeriod='24h') => {
  try {
    const res = await axios.get(`https://coinranking1.p.rapidapi.com/${type}`, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: timePeriod,
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: `${count}`,
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': '604f906efbmsh4eaac5cd9df9495p17467fjsnf37a83948318'
      }
    });

    return res;
  }
  catch (error) {
    console.log(error);
  }
};

export const getNew = async (type) => {
  try{
    const res = await axios.get(`https://bing-news-search1.p.rapidapi.com/news/search`, {
      params: {q: 'Cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '604f906efbmsh4eaac5cd9df9495p17467fjsnf37a83948318'
      }
    });
    return res;
  }
  catch (error) {
    console.log(error);
  }
};
