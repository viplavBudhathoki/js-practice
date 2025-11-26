// Day 17


// 1. JSON - JavaScript Object Notation
// JSON is a format used to store and transfer data between systems.

// JSON values must be:

// string
// number
// object
// array
// boolean
// null

// JSON cannot contain:

// functions
// undefined
// comments
// dates (only as string)


// 2. JSON.stringify() - Convert JS -> JSON string

// JavaScript object cannot be stored directly in storage.
// So convert it to a string.
const user = {
    name: "Viplav",
    age: 20,
    skills: ["JS", "HTML"]
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output:
// {"name":"Viplav","age":20,"skills":["JS","HTML"]}


// 3. JSON.parse() – Convert JSON string -> JS

// Convert back to a real JavaScript object.
const obj = JSON.parse(jsonString);
console.log(obj.name); //Output: Viplav

// JSON is important because LocalStorage and SessionStorage only allow strings, so JSON helps store structured data.


// 4. LocalStorage — Permanent Browser Storage
// Data never deletes automatically
// Survives refresh
// Survives closing browser
// Survives computer restart
// Only manually cleared or via code

// Basic LocalStorage Commands
// Set value
localStorage.setItem("name", "Viplav");

// Get value
localStorage.getItem("name");

// Remove value
localStorage.removeItem("name");

// Clear all
localStorage.clear();

// 5. LocalStorage with Arrays & Objects
// Must convert using JSON.stringify()
// Storing an object:
const ur = { name: "Viplav", age: 20 };

localStorage.setItem("user", JSON.stringify(ur));

// Retrieving:
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);

// Storing an array:
const tasks = ["work", "study", "gym"];

localStorage.setItem("tasks", JSON.stringify(tasks));

// Getting array back:
const list = JSON.parse(localStorage.getItem("tasks"));
console.log(list); // ["work","study","gym"]


// 5. LocalStorage with Arrays & Objects
// Must convert using JSON.stringify()
// Storing an object:
const u = { name: "Viplav", age: 20 };

localStorage.setItem("user", JSON.stringify(u));

// Retrieving:
const daata = JSON.parse(localStorage.getItem("user"));
console.log(daata.name);

// Storing an array:
const tassks = ["work", "study", "gym"];

localStorage.setItem("tasks", JSON.stringify(tassks));

// Getting array back:
const lists = JSON.parse(localStorage.getItem("tasks"));
console.log(lists); // ["work","study","gym"]

// 6. Updating LocalStorage Arrays

// Example: add a new task to stored array.

let taskss = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push("exercise");

localStorage.setItem("tasks", JSON.stringify(taskss));


// 7. SessionStorage — Temporary Storage
// Clears automatically when tab is closed
// Perfect for temporary data
// Syntax same as LocalStorage

// Example:
sessionStorage.setItem("token", "12345");


// Retrieve:
sessionStorage.getItem("token");

// Clear:
sessionStorage.clear();


// 8. LocalStorage vs SessionStorage (Easy Table)
// Feature	        LocalStorage	            SessionStorage

// Lifespan	        Forever	                    Until tab closes
// Scope	        All tabs from same domain	Only current tab
// Size	            ~10MB	                    ~5MB
// Data type	    String only	                String only
// Use case	        Login state, theme, cart	Forms, temp data