let arr = ['acf','nhg','jhj','ace','hsh']
for(x in arr){
    if(arr[x].length >= 2){
        a = arr[x].length - 1
        b = arr[x][a]
        if(arr[x][0] == b){
            console.log(1)
        }
    }
}




