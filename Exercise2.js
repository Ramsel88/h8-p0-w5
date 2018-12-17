function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = []
  var hargaSewa = 0
  var jarak = 0
  var temp1 = 0
  var temp2 = 0
for(var i = 0; i < arrPenumpang.length; i++){
    var obj = {}
    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    
    for(var j = 0; j < rute.length; j++){
        if(arrPenumpang[i][1]===rute[j]){
            temp1 = j 
        }
        if( arrPenumpang[i][2]===rute[j]){
            temp2 = j
        }
        jarak = temp2 - temp1
        
    }
   
    hargaSewa = jarak * 2000
    obj.bayar = hargaSewa
    result.push(obj)
    
}
 return result

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]