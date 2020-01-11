class UserCommon {

    static display = (user) => {        //static functions cannot access other data
        $("#id").val(user.id);          //sets data for the user and displays
        $("#username").val(user.username);
        $("#firstName").val(user.firstName);
        $("#lastName").val(user.lastName);
        $("#password").val(user.password);
        $("#phoneNumber").val(user.phoneNumber);
        $("#email").val(user.email);
        $("#admin").prop("checked", user.admin);
        $("#reviewer").prop("checked", user.reviewer);
    };

    static save = () => {
        let user = {};                                  //create an empty JSON object from data pulled off of page
        user.id = $("#id").val();                       //adds id and its value
        user.username = $("#username").val();           //adds username and its value
        user.firstName = $("#firstName").val();         //adds firstName and its value
        user.lastName = $("#lastName").val();           //adds lastName and its value
        user.password = $("#password").val();           //adds password and its value
        user.phoneNumber = $("#phoneNumber").val();     //adds phoneNumber and its value
        user.email = $("#email").val();                 //adds email and its value
        user.admin = $("#admin").prop("checked");       //adds admin and its value
        user.reviewer = $("#reviewer").prop("checked");
        return user;
    };
};