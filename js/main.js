const factsDiv = document.getElementById("btn"); // Find btn to call API
const API = "https://api.adviceslip.com/advice"
const mainBtn = document.getElementById('btn')
const btnFav = document.getElementById('btn-fav')
const btnDelete= document.getElementById('btn-delete')



btn.addEventListener('click', callRandomAdviceAPI,) // Adds an event listener to the window that detects the click event
const adviceSlip = document.querySelector('.advices')

//Call to the API and get a random advice
async function callRandomAdviceAPI() {
    //Try and run the following code
    try {
        const response = await fetch(API); //Call the API and get a random fact
        const data = await response.json(); //Get a random advice 
        console.log(data); //Output a random advice to the console
        //displayData(data) //Pass the list of random facts to the displayData function
        displayRandomAdvice(data)
    }
    //Catch the error if it the code in the try block fails
    catch (error) {
        console.log(error); //Output the error to the console
    }
}

    // Display the random fact in the page. 
    function displayRandomAdvice(data){
        adviceSlip.innerText=data.slip.advice
        console.log(adviceSlip.innerHTML);
    }  

    // Assign Favorite quote 
   btnFav.addEventListener('click', saveFavoriteQuote,) //adding an event listener to our variable, calling a function
function saveFavoriteQuote(){ 
    
addRow(adviceSlip.innerHTML, btnDelete)//calling addRow(), adding a piece of Json info
}
    

 //Adding new row when new favorite quote is selected


 /** 
* addRow = adds a new html row to the document
* @param {string} quote - The quote to be added to the new row
*/ 
function addRow(quote, DeleteFavoriteQuote){
    // Getting the table element 
    const table=document.querySelector('table')
    // create element 
    let row = document.createElement("tr")
    // create cell
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let button = document.createElement("button")
    button.innerHTML = "delete" //creating a btn element into the DOM
    button.className ="delete"  //Giving a class to the btn
    // insert data to rows

    c1.innerText = quote
    c2.appendChild(button)

    // append cells to row
    row.appendChild(c1);
    row.appendChild(c2);

    // append row to table body
    table.appendChild(row)
}
const testBtn = document.getElementById("test-btn")
testBtn.addEventListener("click", addRow)


const table = document.querySelector('.table')
table.addEventListener("click", removeItem)

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {//add a btn with a 'delete' text, with same functionality
    if (confirm('Are You Sure?')) {
      //* This variable stores an object data type
       
      var quote = e.target.parentElement.parentElement;
      table.removeChild(quote);
    }
  }
}

    

    

    