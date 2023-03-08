import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function Alkuun(value: string) {
  const date = parseISO(value);
  return formatDistanceToNowStrict(date, { addSuffix: true });
}
