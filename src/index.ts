export type IPackageJsonDependencyTypes = 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies';

export interface IPackageJsonAddress {
    email?: string;
    url?: string;
}

export interface IPackageJsonPerson extends IPackageJsonAddress {
    name: string;
}

export interface IPackageJson {
    name: string;
    version: string;
    description?: string;
    keywords?: string;
    homepage?: string;
    bugs?: IPackageJsonAddress;
    license?: string;
    author?: string | IPackageJsonPerson;
    contributors?: string[] | IPackageJsonPerson[];
    files?: string[];
    main?: string;
    browser?: string;
    types?: string;
    bin?: Record<string, string>;
    man?: string;
    directories?: {
        lib?: string;
        bin?: string;
        man?: string;
        doc?: string;
        example?: string;
        test?: string;
    };
    repository?: {
        type?: 'git';
        url?: string;
        directory?: string;
    };
    scripts?: Record<string, string>;
    config?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    optionalDependencies?: Record<string, string>;
    bundledDependencies?: string[];
    engines?: Record<string, string>;
    os?: string[];
    cpu?: string[];
}
