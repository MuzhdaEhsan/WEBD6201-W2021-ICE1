/* custom scripts go here */

//IIFE - Immediately Invoked Function Expression
//AKA: Anonymous Self-Executing Function

(function()
{
    // initialization function
    function Start()
    {
        console.log("App Started...");

        let clickMeButton = document.getElementById("clickMeButton");

        clickMeButton.addEventListener("click", ()=> 
        {
            console.log("Click Me Button was clicked!");
        });
    }
    
    // event listener
    window.addEventListener("load", Start);

})();
