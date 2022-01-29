export default interface ICacheProvider {
  save(key: string, value: string): void;
}
