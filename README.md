# types-package-json

A handful set of **package.json** types and interfaces to improve working with dynamically imported **package.json** files. **@types/package-json** became deprecated as **package.json** files imported by typescript come with it's own type definitions. Sometimes though, when you import files dynamically type becomes **any** and that's when this package becomes useful.

> Based on npm package.json documentation: https://docs.npmjs.com/files/package.json

# Usage

`npm i -D types-package-json`

```ts
import { IPackageJson } from 'types-package-json';

const packageJsonPath = path.resolve(process.cwd(), `package.json`);
const packageJson: Partial<IPackageJson> = await import(packageJsonPath);
```

# Features

-   **Zero overhead** - contains only types and interfaces, no actual objects.
-   **I prefixed** - all interfaces are prefiexed with I to avoid misunderstanding interface with a class and decrease naming overlaps.
-   **IPackageJson** - full package.json interface, name and version is required
-   **IPackageJsonAddress** - optional email and url
-   **IPackageJsonPerson** - required name, optional email and url
-   **IPackageJsonDependencyTypes** - 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies' (bundledDependencies are not included in this type as they serve different purpose).
