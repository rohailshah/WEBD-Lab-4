/* Lab 4 - WEBD 6201
   Rohail Shah
   100492683
   April 24, 2022 */

   "use strict";
(function()
{
    let protected_routes: string[] = [
        "contact-list"
    ];

    if(protected_routes.indexOf(router.ActiveLink) > -1)
    {
        // if user does not exist in session storage
        if(!sessionStorage.getItem("user"))
        {
            // redirect to the login page
            location.href = "/login";
        }
    }
  
})();