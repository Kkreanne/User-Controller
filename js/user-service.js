const url = "http://localhost:8080";

const list = () => {
    return $.getJSON(`${url}/users`); //does not care about getting the data, just calls it
};

const get = (id) => {
    return $.getJSON(`${url}/users/${id}`);     //get user by primary key from Json
};

const change = (user) => {              //takes in a user instance
    return $.ajax({
        method: "PUT",                  //define what CRUD function we want
        url: `${url}/users/${user.id}`, //define the url
        data: JSON.stringify(user),     //define the data of the user instance
        content: "json",                //defines the content
        contentType: "application/json" //defines the type of content
    });
};