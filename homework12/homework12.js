let myVariables = prompt("Nhap vao 1 chuoi ky tu");
let newPromise = new Promise(function(resolve, reject) {
    if (isNaN(myVariables) == true) {
        resolve(myVariables);
    } else { reject("Not a string") }
});
//then...catch
function then_catch() {
    newPromise.then(function() {
        console.log(myVariables);
    }).catch(function() {
        console.log("Not a string");
    });
};
then_catch();
//async...await
async function callPromise() {
    try {
        let result = await newPromise;
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};
callPromise();