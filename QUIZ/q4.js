const orgChartMap = [ { id: 1, children: [ { id: 2, children: [ { id: 4, children: [ { id: 6 }, { id: 7 } ] } ] }, { id: 3, children: [ { id: 5, children: [ { id: 8 } ] } ] } ] }]
var positionIds = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

function sortOrgID(arrayOfOrg){
    var sortedID = [];
    arrayOfOrg.forEach((org) => {
        sortedID.push(org.id)
    })

    var arrayOfNextChild = [];
    arrayOfOrg.forEach((org) => {
        if (org.children != null){
        org.children.forEach((innerOrg) => {
            sortedID.push(innerOrg.id)
            if (innerOrg.children != null) {
                arrayOfNextChild = arrayOfNextChild.concat(innerOrg.children);
            }
        })
    }
    })
    
    if (arrayOfNextChild.length > 0) {
        sortedID = sortedID.concat(sortOrgID(arrayOfNextChild));
    }
    return sortedID;
}

function removeID(id, arrayOfOrg){
    for (let i=0; i<arrayOfOrg.length; i++) {
        //this for handle the most upper level
        if (arrayOfOrg[i].id == id){
            if (arrayOfOrg[i].children != null){
                arrayOfOrg.splice(i+1, 0, ...arrayOfOrg[i].children);
            }
            arrayOfOrg.splice(i,1)
            return 1;
        }
        if (arrayOfOrg[i].children != null){
            if (removeID(id ,arrayOfOrg[i].children)) {
                return 1;
            }
        }
    }
    return 0;
}

removeID(4, orgChartMap)
positionIds = sortOrgID(orgChartMap);
console.log(JSON.stringify(orgChartMap))
console.log(positionIds);