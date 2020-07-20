import { execute } from '../../../tools/shared/execute';

export const bootstrap = async () => {
    await execute(`rm -rf ./dist`);
    await execute(`tsc --project ./tsconfig.json`);
};

bootstrap().catch((err) => {
    console.error(err);
});
