/* custom scripts go here */

//IIFE - imediately Invoked Function expression
// aka: self-executing function 

(function()
{

    function Start()
    {
        console.log("App Started......");

        for (let index = 0; index < 5; index++) {
            
            console.log(index);
            
        }

        console.log(index);
        
    }

    // event listener 
    window.addEventListener("load", Start);

})();




