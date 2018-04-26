/**
 * Created by Ryan on 12/03/2018.
 */
function logout () {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        location.reload();
    }, function (error) {
        // An error happened.
    });
}