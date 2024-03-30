let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputValue = themeUserInputEl.value;

        if (themeUserInputValue === "Dark") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "#ffffff";

        } else if (themeUserInputValue === "Light") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingEl.style.color = "#014d40";
        } else {
            alert("Enter the valid theme")
        }
    }
}

themeUserInputEl.addEventListener("keydown", changeTheme);