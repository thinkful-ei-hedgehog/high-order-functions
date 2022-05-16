const list = [
    {title:'Helluva Boss', genre:'comedy', year:2020},
    {title: 'Hunter x Hunter', genre: 'anime', year: 2020},
    {title: "Log Horizon", genre:"adventure", year:2013},
    {title: "Mushoku Tensei", genre: "anime", year: 2021},
    {title: 'Aqua Teen', genre: 'comedy', year:2001 },
    {title: 'My Neighbor Totoro', genre: 'anime', year: 1993},
    {title: "Avatar: The Last Airbender", genre: "adventure", year: 2005},
    {title: 'Darkwing Duck', genre: 'superhero', year: 1991, },
    {title:"Bojack Horseman", genre: "comedy", year:2014},
    {title: "The Legend of Vox Machina", genre: "fantasy", year: 2022}
]

let total =0;
for(let item of list){
    total+= item.year;
}
//console.log('average year of cartoons',total/list.length);


let reducedAverage = list.reduce((acc,item)=>acc+item.year,0)/list.length;
//console.log('average year of cartoons',reducedAverage);





let complexArr=[                           //0                                      1
    {"The legend of vox Machina" : [{genre: "fantasy", year: 2022},{genre: "fantasy", year: 2022}]},
    //                                0
    {"Darkwing Duck" : [{genre: "mystery", year: 1991}]},
    {"Bojack Horseman" : {genre: "comedy", year: 2014}},
]

for(let item of complexArr){
   // console.log(Object.values(item)[0].year);
}
let complexAvg = complexArr.reduce((acc,item)=>acc+Object.values(item)[0].year,0)/complexArr.length;
//console.log('complexAvg',complexAvg)



let genreObj = list.reduce((acc,item)=>{
    //if a genre exists in the object
    //then push the item to an array that is the value of that object
    if(acc[item.genre]){
        acc[item.genre].push(item);
       
    }else{
        acc[item.genre]= [item];
    }
    //else
    //create a key for that genre and add the item to the object array
    return acc;
},{})

console.log(genreObj);