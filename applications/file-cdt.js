// Example application: read data from a file, save in a Cloudant database
// 
// Stefan Kruger, IBM Cloudant, 2015
//
Source({name:"file", uri:"file://transporter-demo/data/data.json"})
    .save({name:"cloudant", namespace:"cloudant.transporter", database:"transporter"})
