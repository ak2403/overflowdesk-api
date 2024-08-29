export interface Adapter<T, K> {
  transform(data: T): K;
}
