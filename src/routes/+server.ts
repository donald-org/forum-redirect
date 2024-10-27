import { redirect } from '@sveltejs/kit';

export function GET() {
  return redirect(301, 'https://2024.donald.org/forum');
}