import { redirect } from '@sveltejs/kit';
import { numToBase64Url } from '$lib';

export function GET({ url }) {
  return redirect(301, 'https://donald.org/forum/thread/' + numToBase64Url(parseInt(url.search.split(',')[1]) - 1));
}