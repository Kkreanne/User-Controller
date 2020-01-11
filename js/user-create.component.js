let user = null;

$().ready(() => {
    $("#save").click(() => {
        let usr = UserCommon.save();
        create(usr)
            .done((response) => {
                console.log("Create:", response);
                window.location = "user-list.component.html";
            })
            .fail((err) => {
                console.error(response);
            });
    });
});