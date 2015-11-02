// Example application: shuffle data from Cloudant to a local ElasticSearch
// 
// Stefan Kruger, IBM Cloudant, 2015
//
Source({name:"cloudant", namespace:"cloudant.transporter", database:"routes", tail: false})
    .transform({name: "skipper", namespace:"cloudant.transporter", filename: "transporter-demo/transformers/only-routes.js", debug: true})
    .save({name:"es", namespace:"cloudant.transporter"})
