let countArr=[2,3,4,5,6,7,8];
let count=0;
for(let i=0;i<=countArr.length;i++){
    count ++
}
console.log(count);

let SumArr=[20,30,40,20,10,3,2,9];
let sum=0;
for(let i=0;i<SumArr.length;i++){
    sum +=SumArr[i]
}
console.log(sum);

let MixedArr=[3,4,5,7,8,10,13,31,44,56,99];
let evnArr=[];
let oddArr=[];
for(let i=0;i<MixedArr.length;i++){
    if(MixedArr[i] % 2 == 0){
        evnArr.push(MixedArr[i]);
        
    }
    else{
        oddArr.push(MixedArr[i]);

    }
}
console.log("Even Array",evnArr);
console.log("Odd Array",oddArr);

// map
let FilArr=[2,3,4,5,6,7]
let DoubleArr=FilArr.map((item)=>item*2)
console.log(DoubleArr)

// Filter
let filAr=[3,2,4,5,10,20,15,30,40,22,77];
let useFilArr=filAr.filter((item)=>item<=25);
console.log(useFilArr);


// sort Assending Order
let sortArr=[5,2,3,4,1,6,7,9]
sortArr.sort((a,b)=>a-b)
console.log(sortArr);

// sort Desending Order
let DesArr=[10,20,30,40,50,60,70,80,90];
DesArr.sort((a,b)=>b-a)
console.log(DesArr);

// Find Duplicate Values
let dupArray=[1,2,3,4,4,1,2,3,4,5,2,4,4,2,6,7,8,9,8,8];
let FourCount=0

let duplicateArr=new Set(dupArray);
console.log(duplicateArr);
for(let i=0; i<dupArray.length;i++){
    if(dupArray[i]===4){
        FourCount++
    }
}
console.log("The four repeats",FourCount);

let number=5;
for(let i=number;i>=0;i--){
    console.log(i)
}

let ten=7;
for(let i=0;i<=ten;i++){
    console.log(i);
}

let num=3;
while(num>=0){
    console.log(num);
    num--
}

// patterns
let threePat=4;
let pat="";
for(let i=0;i<=threePat;i++){
    pat +="*".repeat(i)+"\n"
}
console.log(pat)

let Fourpattern=4;
let fou="";
for(let i=Fourpattern;i>=0;i--){
    fou +="*".repeat(i)+"\n"
}
console.log(fou)


