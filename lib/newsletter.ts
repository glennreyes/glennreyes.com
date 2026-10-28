import type { ResolvedTheme } from './theme';
const forms: Record<ResolvedTheme, string> = {
  dark: '4917152',
  light: '4917153',
};
const publicApiKey = 'lQbg_unCgg3LrJVBjnboyA';
interface SubscribeData {
  email: string;
  theme: ResolvedTheme;
}
export async function subscribe({ email, theme }: SubscribeData) {
  const response = await fetch(
    'https://api.convertkit.com/v3/forms/' + forms[theme] + '/subscribe',
    {
      body: JSON.stringify({ api_key: publicApiKey, email }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    },
  );
  if (!response.ok) {
    throw new Error('Newsletter provider rejected the subscription');
  }
}
