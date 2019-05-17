const { ApiPromise, WsProvider } = require('@polkadot/api');
import PrepareStep from "tank.bench-common/dist/module/steps/PrepareStep";
import Strings from "../constants/Strings";

export default class PolkadotModulePrepareStep extends PrepareStep {
    private api?: any;

    async asyncConstruct() {
        // this.api = await ApiPromise.create(new WsProvider(this.config.polkadot.wsUrl));
    }

    async prepare() {
        return Promise.resolve(this.config);
    }

    transact(actions: any[]): Promise<any> {
        return Promise.all(actions.map(action => {
            return this.api!.transact({actions: [action]})
        }));
    }
}
