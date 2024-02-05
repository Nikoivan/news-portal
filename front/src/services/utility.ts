import moment from 'moment';

export function getDate(timestamp: number) {
  const date = new Date(timestamp);

  return `${date.getUTCDate()} ${date.toLocaleString('default', {
    month: 'long',
  })} в ${date.getHours()}.${date.getMinutes()} `;
}
