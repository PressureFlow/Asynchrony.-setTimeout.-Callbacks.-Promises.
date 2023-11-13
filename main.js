var totalPages = 0;
var page = 0;
var users = [];


async function fetchDataAsync(url) {
    var response = await fetch(url);
    let json = await response.json();
    console.log(json);
    totalPages = json.total_pages;
    page = json.page;
    users = json.data;
    
    while(page != totalPages){
        page += 1;
        response = await fetch(url + '?page=' + page);
        json = await response.json();
        //users.push(json.data);
        console.log(json);
        console.log('-----------');
        console.log('Пункт №1:')
        console.log('-----------');
        var newUsers = json.data;
        users.push (...newUsers)
    }
    console.log(users);
    
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');
    users.forEach(element => {
        console.log(element.last_name)
    });


    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    users.filter(name=>name.last_name.startsWith('F')).forEach(element => {
        console.log(element.last_name);
    });


    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(users.reduce((acc, name) => acc + name.first_name + " " + name.last_name +', ', "Наша база содержит данные следующих пользователей: " ));

    
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(users).forEach(element => {
        console.log(element);
    });


}

fetchDataAsync('https://reqres.in/api/users');





