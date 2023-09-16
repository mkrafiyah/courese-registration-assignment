1.Question: Add at least three project features.

Answer: Project features are given below:
* Users can pick any course by clicking on the select button.Selected course title will be showed in the right side cart.

* After selecting the courses total credit hour and price  will be showed in the "Total Credit Hour" and "Total price" section.

* Total credit hour cannot be more than 20hr.If users reached this limit,a toast message wil be shown on the screen.

* Users can choose one course only once.If he/she tries to pick twice the same course a toast message will popup.



2.Discuss how you managed the state in your assignment project.

Answer:
After fetching data by using useEffect hook,data are stored in the state.As modifying UI from code directly aren't possible so,useState is needed.State is added to the common parent Home.jsx and pass it down with the event handlers via props to the children component Cart.jsx.A hardcoded data passes from the parent component (Home.jsx)  to the children component (Cart.jsx).The Children component receives it as a props and set them dynamically.