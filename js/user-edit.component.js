let user = null;

$().ready(() => {

    let parms = getURLParms();      //JSON file gets created when an id is passed
    get(parms.id)                   //accessing the value
        .done((response) => {       //data has been recieved
            user = response.data;  //store data in a variable
            console.log("User:", response);  //show all data in console  
            UserCommon.display(user);
        });

    $("#save").click(() => {
        let user = UserCommon.save();
        change(user)
            .done((response) => {
                console.log("Change:", response);
                window.location = "user-list.component.html";
            })
            .fail((err) => {
                console.log(response);
            });
    });
});