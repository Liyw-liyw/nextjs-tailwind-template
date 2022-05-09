interface IAppConfig {
  baseUri: string;
}

const defaultConfig: IAppConfig = {
  baseUri: 'https://b9f1kz-alpha.api.matrixlabs.org'
};

const AppConfig: IAppConfig = defaultConfig;

export default AppConfig;
