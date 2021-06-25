var sampleDict = { 
    "class":{ 
       "student":{ 
          "name":"Mike",
          "marks":{ 
             "physics":70,
             "history":80
          }
       }
    }
}

for (x in sampleDict){
    var a = sampleDict[x]
    for(y in a){
        for(s in a[y]){
            if(s == "marks"){
                var b = a[y][s]
                for(z in b){
                    if(z == "history"){
                        console.log(b[z])
                    }
                }
            }
        }
    }
}