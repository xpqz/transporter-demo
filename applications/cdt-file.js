// Example application: read data from Cloudant, dump to stdout
// 
// Stefan Kruger, IBM Cloudant, 2015
//
Source({name:"cloudant", namespace:"cloudant.transporter", database:"routes", tail: false})
    .transform({name: "skipper", namespace:"cloudant.transporter", filename: "transporter-demo/transformers/only-routes.js", debug: true})
    .save({name:"debug"})
