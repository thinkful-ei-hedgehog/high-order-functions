const list = [
    {title:'Helluva Boss', genre:'comedy', year:2020},
    {title: 'Hunter x Hunter', genre: 'anime', year: 2020},
    {title: "Log Horizon", genre:"adventure", year:2013},
    {title: "Mushoku Tensei", genre: "anime", year: 2021},
    {title: 'Aqua Teen', genre: 'comedy', year:2001 },
    {title: 'My Neighbor Totoro', genere: 'anime', year: 1993},
    {title: "Avatar: The Last Airbender", genre: "adventure", year: 2005},
    {title: 'Darkwing Duck', genre: 'superhero', year: 1991, },
    {title:"Bojack Horseman", genre: "comedy", year:2014},
    {title: "The Legend of Vox Machina", genre: "fantasy", year: 2022}
]

//Find  - return first instance of an item in array
let aquaTeen = list.find((item)=>item.title==='Aqua Teen');
console.log('find', aquaTeen);

//Filter  - returns all intances of a given case in array
let comedies = list.filter((item)=>item.genre==='comedy');
console.log('filter',comedies);

//Map -modify and return modified array
let newArr =list.map(item=>{
    item.rating=10;
    return item;
})
console.log('map',newArr);

let cartoonList = list.map(item=>item.title);
console.log('map2',cartoonList);

//Some - return true if a given case is true for atleast 1 item in the array
let areModernCartoons = list.some(item=>item.year>=2000);
console.log('some',areModernCartoons)

//Every- return true if a given case is true for ALL items in the array
let areAllModernCartoons = list.every(item=>item.year>=1980);
console.log('every',areAllModernCartoons)