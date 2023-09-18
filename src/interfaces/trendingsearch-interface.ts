interface ResponseData {
    endDateForNextRequest: string;
    rssFeedPageUrl: string;
    trendingSearchesDays: Array<trendingSearches>;
}

interface trendingSearches {
    date: string,
    formattedDate: string,
    trendingSearches:Array<TrendData>
}

interface TrendData {
    title: {
      query: string;
      exploreLink: string;
    };
    formattedTraffic: string;
    relatedQueries: {
      query: string;
      exploreLink: string;
    }[];
    image: {
      newsUrl: string;
      source: string;
      imageUrl: string;
    };
    articles: {
      title: string;
      timeAgo: string;
      source: string;
      image: {
        newsUrl: string;
        source: string;
        imageUrl: string;
      };
      url: string;
      snippet: string;
    }[];
    shareUrl: string;
  }

export type { ResponseData, trendingSearches, TrendData}