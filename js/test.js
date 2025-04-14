// 28-vazifa Git Commit
function randCommit() {
    const str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"
    let commit = ""
    let saveCommit = []
    for (let i = 0; i < 10; i++){
        commit += str[Math.floor(Math.random() * str.length)];
    }
    if (!saveCommit.includes(commit)) {
        saveCommit.push(commit);
        return commit;
    } else {
        return randCommit()
    }
}
function createCommit(message, files) {
    let id = randCommit();
    this.message = message;
    this.files = files;
    this.date = "2024-03-15";
    this.id = id;
    this.author="User"
}
let info = new createCommit("Add new features", ["app.js", "style.css"])
console.log(info);



