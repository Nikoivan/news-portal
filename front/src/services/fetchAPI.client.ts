import { getBaseUrl, getUrlAfterLastNews, getUrlToNews } from './getUrl.util';

export default async function fetchAPI(lastNewsId?: string) {
  const url = lastNewsId
    ? `${getBaseUrl()}${getUrlToNews()}${getUrlAfterLastNews(lastNewsId)}`
    : `${getBaseUrl()}${getUrlToNews()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Ошибка загрузки!');
  }

  return await response.json();
}
