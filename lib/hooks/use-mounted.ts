import { useSyncExternalStore } from 'react';

function subscribe() {
  return () => {};
}
function clientSnapshot() {
  return true;
}
function serverSnapshot() {
  return false;
}
export function useMounted() {
  return useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
}
