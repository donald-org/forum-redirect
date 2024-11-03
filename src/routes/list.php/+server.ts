import { redirect } from '@sveltejs/kit';

export function GET() {
  return redirect(301, 'https://donald.org/forum');
}