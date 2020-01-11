let users = [];                     //let users equal an empty array

$().ready(() => {
    list()                          //calls data from list in html
        .done((response) => {       //data has been recieved
            users = response.data;  //store data in a variable
            console.log(response);  //show all data in console  
            display(users);
        });

});

const display = (users) => {
    let tbody = $("#tbody");                                        //storing tbody data
    tbody.html('');                                                 //clear out data
    for(let user of users) {
        let tr = $("<tr></tr>");                                    //create a pair of row tags in a variable 
        tr.append(`<td>${user.id}</td>`);                           //add id data to row tag
        tr.append(`<td>${user.username}</td>`);                     //add username data to row tag
        tr.append(`<td>${user.firstName}</td>`);                    //add firstname data to row tag
        tr.append(`<td>${user.lastName}</td>`);                     //add lastname data to row tag
        tr.append(`<td>${user.phoneNumber}</td>`);                  //add phoneNumber data to row tag
        tr.append(`<td>${user.email}</td>`);                        //add email data to row tag
        tr.append(`<td>${user.admin ? "Yes" : "No"}</td>`);       //add admin data to row tag
        tr.append(`<td>${user.reviewer ? "Yes" : "No"}</td>`);   //add reviewer data to row tag
        let td = $("<td></td>");                                                         //create a pair of data tags
        td.append(`<a href="user-detail.component.html?id=${user.id}">Detail</a> | `);   //create an anchor tag for Detail
        td.append(`<a href="user-edit.component.html?id=${user.id}">Edit</a>`);          //create an anchor tag for Edit
        tr.append(td);
        tbody.append(tr);
    };
};