var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing business qoutes into the Dynamo DB data");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var BusinessQoutesData = 
  JSON.parse(fs.readFileSync('../data/BusinessNotes.json', 'utf8'));

  BusinessQoutesData.forEach(function(businessqoute) {
  var params = {
    TableName: "BusinessQoutes",
    Item: {
      "qoute": businessqoute.qoute,
      "explanation": businessqoute.explanation,
      "Mythoughts": businessqoute.Mythoughts
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for Business qoutes",
      businessqoute.qoute, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", businessqoute.qoute, "to table.")
  });
});