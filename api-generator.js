const RequestClientGenerator = require('@white-matrix/request-client-generator');
// 对应doc文档地址： https://b9f1kz-alpha.api.matrixlabs.org/mart/doc.html#/home
const client = new RequestClientGenerator({
  remotePath: 'https://b9f1kz-alpha.api.matrixlabs.org/mart/v2/api-docs',
  outputDir: './services',
  customInstancePath: './request',
  customInstanceName: 'instance'
});

client.generator();
