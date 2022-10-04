var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "BusinessQoutes",
  KeySchema: [
    // Partition Key
    { AttributeName: "qoute", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "explanation", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "qoute", AttributeType: "S" },
    { AttributeName: "explanation", AttributeType: "S" },
    { AttributeName: "Mythoughts", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "ClassIndex",
      KeySchema: [
        { AttributeName: "qoute", KeyType: "HASH" },
        { AttributeName: "Mythoughts", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});