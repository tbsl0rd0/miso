var aws = require("aws-sdk");

aws.config.update({
  region: 'ap-northeast-2',
  endpoint: process.env.node_env != 'production' ? 'http://localhost:8000' : ''
});

module.exports = {
  dynamodb: new aws.DynamoDB(),
  doc_client: new aws.DynamoDB.DocumentClient()
};
