// Example transformer: pick documents based on document type
// 
// Stefan Kruger, IBM Cloudant, 2015
//
module.exports = function(doc) {
    if (doc["data"]["schema"] != "route") {
        return false
    }

    return doc
}
