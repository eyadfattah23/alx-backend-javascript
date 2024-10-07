export const weakMap = new WeakMap();
const endpoint = { protocol: 'http', name: 'getUsers' };

weakMap.set(endpoint, 0);

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize the counter if it doesn't exist
  }
  let count = weakMap.get(endpoint);
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
}
