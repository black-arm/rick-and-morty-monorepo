class Environments {
    private _rickAndMortyApi = 'https://rickandmortyapi.com/api';
    get api() {
        return this._rickAndMortyApi;
    }
}

export const env = new Environments();
