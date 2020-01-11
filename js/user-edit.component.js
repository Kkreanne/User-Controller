let user = null;

$().ready(() => {

    let parms = getURLParms();      //JSON file gets created when an id is passed
    get(parms.id)                   //accessing the value
        .done((response) => {       //data has been recieved
            user = response.data;  //store data in a variable
            console.log("User:", response);  //show all data in console  
            display(user);
        });

    $("#save").click(() => {
        save();
    });
});

const save = () => {
    let user = {};                                  //create an empty JSON object from data pulled off of page
    user.id = $("#id").val();                       //adds id and its value
    user.username = $("#username").val();           //adds username and its value
    user.firstName = $("#firstName").val();         //adds firstName and its value
    user.lastName = $("#lastName").val();           //adds lastName and its value
    user.password = $("#password").val();           //adds password and its value
    user.phoneNumber = $("#phoneNumber").val();     //adds phoneNumber and its value
    user.email = $("#email").val();                 //adds email and its value
    user.admin = $("#admin").prop("checked");       //adds admin and its value
    user.reviewer = $("#reviewer").prop("checked"); //adds reviewer and its value
    change(user)                                    //call the service
        .done((response) => {
            console.log("Change:", response);
            window.location = "user-list.component.html";   //sets location back to original
        })
        .fail((response) => {
            console.error(response);
        });
};

const display = (user) => {
    $("#id").val(user.id);                      //plug in data for the one JSON file
    $("#username").val(user.username);
    $("#firstName").val(user.firstName);
    $("#lastName").val(user.lastName);
    $("#password").val(user.password);
    $("#phoneNumber").val(user.phoneNumber);
    $("#email").val(user.email);
    $("#admin").prop("checked", user.admin);
    $("#reviewer").prop("checked", user.reviewer);
};