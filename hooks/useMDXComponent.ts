import { useMDXComponent as useMDXComponentBase } from 'next-contentlayer/hooks';

export function useMDXComponent(code?: string) {
  const MDXComponent = useMDXComponentBase(code ?? '');

  if (!code) {
    return null;
  }

  return MDXComponent;
}
