export abstract class StackOverflow {
  protected _apiUrl!: string;

  constructor(url: string) {
    this._apiUrl = url;
  }
}
