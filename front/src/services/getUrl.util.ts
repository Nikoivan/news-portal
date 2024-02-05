export function getBaseUrl(): string {
  return 'http://localhost:6006';
}

export function getUrlToNews(): string {
  return '/api/news';
}

export function getUrlAfterLastNews(lastNewsId: string): string {
  return `?lastSeenId=${lastNewsId}`;
}

export function getAuthorById(id: number) {
  if (id === -30159897) {
    return 'Университет интернет-профессий Нетология';
  }
}
