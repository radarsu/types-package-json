import { execute } from '../../../tools/shared/execute';

export const bootstrap = async () => {
    let release = process.argv[2];
    if (release) {
        release = release.replace(/-/g, '');
    }

    await execute(`ts-node ./scripts/build.ts`);

    // Initialize git for a second.
    await execute(`git init`);
    await execute(`git remote add origin https://github.com/radarsu/types-package-json`);
    await execute(`git add .`);
    await execute(`git commit -m 'chore: update'`);
    await execute(`git push origin master`);
    await execute(`rm -rf .git`);

    // await execute(`npm version ${release || 'prerelease'}`);
    await execute(`npm publish --access=public`);
};

bootstrap().catch((err) => {
    console.error(err);
});
