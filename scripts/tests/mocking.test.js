// Will not pass as no html or functions to back up '../button'
// EXample of loading a snippet into the mock DOM

const buttonClick = require("../button");

// beforeEach(() => {
//     document.body.innerHTML = "<p id ='par'></p>"
// });

// describe("DOM tests", () => {
//     test("expects p cpontent to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML.toEqual("You Clicked"));
//     });
// });

// HERES HOW TO LOAD ENTIRE WEBPAGE INTO MOCK DOM

// boilerplate script no need to change anything here each time
beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close()
});

describe("DOM tests", () => {
    test("expects p cpontent to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});