class Environments {
  private _rickAndMortyApi = process.env["RICK_AND_MORTY_API"];

 get api() {
  return this._rickAndMortyApi;
 }
}

export const env = new Environments();
