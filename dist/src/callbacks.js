var getUser = (id, callback) => {
    var user = { name: "Victor", age: "40", id };
    setTimeout(() => {
        callback(user);
    }, 3000);
};
getUser(32, (userObj) => {
    console.log('USER :::::', userObj);
});
//# sourceMappingURL=callbacks.js.map