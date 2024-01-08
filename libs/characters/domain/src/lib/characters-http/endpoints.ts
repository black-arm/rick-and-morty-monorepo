import { env } from '@rick-and-morty-monorepo/util';

export class Endpoints {
    private _api = env.api;

    get characters() {
        return `${this._api}/character`;
    }
}
