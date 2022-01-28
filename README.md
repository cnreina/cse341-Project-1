# cse341-Project-1

After completing the assignment, be sure to push to Github and Heroku.
Please answer the questions in this text file and submit it to I-Learn.

1. Copy and paste the URL for your web application (e.g., Heroku): https://cse341nodejsapp.herokuapp.com

2. Copy and paste the URL for your source code repository (e.g., GitHub): https://github.com/cnreina/cse341-Project-1

3. Briefly list and describe the elements of the application that are functioning.

   Store Item CRUD operations using Mongoose Schemas.
   The user can:
   	Add an item to the store.
   	Edit items they have added to the store.
   	Remove items they have added to the store.
   	Cannot remove or edit items submitted by another user.
	Add items to their cart.
	Checkout their cart and pay with their fake credit card.
	View invoices for each purchase with email, items, price, date, and total price.

   Authentication is used to:
        Sign users up.
        Log existing users.
        Send an email to allow the user to reset their password.
        Prevent duplicate accounts (email is always unique).
        Prevent access to administrative web endpoints of other users.
        Prevent rendering of administrative web endpoints in the navigation bar if the user is not signed in.

   Implements anonymous user views.


4. Briefly describe any pieces of the assignment that are not yet working correctly.

   This version is not up on heroku because i did not have time to figure out how to
   handle the passing of the API keys. My app reads the keys from files, and these files
   are in the gitignore list.


5. Briefly describe the "coolest" thing you learned while completing this assignment.

   Starting to see better the relationship between the MVC components.


6. If you could change this assignment to be more effective or helpful, what would you change?

   N/A


7. Please select the category you feel best describes your assignment:

   5 - Shows creativity and excels above and beyond requirements


8. Provide a brief justification (1-2 sentences) for selecting that category.

   Optimizing the CSS for both mobile and desktop browsers.
   A professional looking CSS layout.
   Added extra fields to database items to record creation time. This is displayed
   in the pdf invoices.
   The pdf invoice displays in a clean and organized way, better than in the course videos.


Carlos N Reina
cnreina@gmail.com
