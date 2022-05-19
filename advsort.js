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


list.sort((a,b)=> b.year-a.year);
//console.log(list);

list.sort((a,b)=> a.title.toLowerCase()<b.title.toLowerCase()? 1:-1);
console.log(list);