import { IRadratCli } from '@radrat/cli';
import { packageScripts } from '../../tools/rr/package';

const scripts = async (cli: IRadratCli) => {
    const scope = `types-package-json`;
    await packageScripts(cli, scope);
};

export default scripts;
