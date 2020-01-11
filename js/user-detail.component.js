let user = null;

$().ready(() => {

    let parms = getURLParms();          //JSON file gets created when an id is passed
    get(parms.id)                       //accessing the value of the id
        .done((response) => {           //data has been recieved
            user = response.data;       //store data in a variable
            console.log(response);      //show all data in console  
            UserCommon.display(user);   //user.common.js has common code for all users
        });

    $("#edit").click(() => {    //on click, programatically navigates to another page
        window.location = `user-edit.component.html?id=${user.id}`;
    });
    
    $("#delete").click(() => {     //pass the whole instance of the user but only use the id
        remove(user)
            .done((response) => {
                console.log("Delete:", response);
                window.location = "user-list.component.html";
            });
    });
});