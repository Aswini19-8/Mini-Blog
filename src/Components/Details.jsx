import { useParams } from "react-router-dom";
import python from "./python.jpg";
import react from "./reactProjects.png";
import traditional from "./traditional.jpg";
import {Link} from "react-router-dom"
const Detail=()=>{
    const {name}=useParams();
    if(name ==="react"){
        return(
        <>
           <img src={react} style={{marginLeft:"80vh",marginTop:"10vh"}}></img>
            <h1 style={{textAlign:"center"}}>Title :ReactJs</h1>
            <h2 style={{textAlign:"center"}}> 
               <h2>5 Basic React Projects</h2>
<h3 style={{textAlign:"start",}}>1.To-Do List Application</h3> <p style={{textAlign:"start",color:"white"}}>
            A task management application that allows users to add, edit,
            delete, and manage daily tasks.The To-Do List application is a classic example of a beginner-friendly React basic project. It involves creating a simple web application that allows users to create, read, update, and delete tasks. This project is a great way to understand the basics of React, including state management and event handling.
          </p>
          <h3 style={{textAlign:"start",}}>2. Weather Application</h3> <p style={{textAlign:"start",color:"white"}}>
           The Weather application is another popular React project for beginners. It involves building a web application that displays the current weather conditions for a given location. You can learn how to make API requests, handle asynchronous code, and render dynamic data in a React component while doing this project.
          </p>
                    <h3 style={{textAlign:"start",}}>3. Quiz Application</h3> <p style={{textAlign:"start",color:"white"}}>
          The Quiz application is a fun and interactive React based project that involves creating a trivia game. It allows users to select a category and difficulty level and then answer a series of questions. This project will help you learn how to manage state, create dynamic components, and implement user feedback.
          </p>
           <h3 style={{textAlign:"start",}}>4. E-commerce Website
</h3> <p style={{textAlign:"start",color:"white"}}>
          The E-commerce website is a more complex React JS project for beginners. It involves building a web application that allows users to browse and purchase products online. You can understand how to handle routing, implement search and filtering, and manage a larger application state.
          </p>
          <h3 style={{textAlign:"start",}}>5. Expense Tracker</h3> <p style={{textAlign:"start",color:"white"}}>
          The Expense Tracker is a practical project that involves building a web application for tracking expenses. It allows users to input and categorize expenses, view spending trends, and generate reports. You will learn how to manage state, work with forms, and implement data visualization after doing this project.
          </p>
</h2>
            </>
        )
    }

    if(name ==="python"){
        return(
        <>
        <img src={python} style={{marginLeft:"80vh",marginTop:"10vh"}}></img>
            <h1 style={{textAlign:"center"}}>Title :Advanced Python Concepts</h1>
            <h2 style={{textAlign:"center"}}> 
               <h3 style={{textAlign:"start"}}> 1. Map Function</h3>
<p style={{textAlign:"start" ,color:"white"}}>Python has an inbuilt function called map() which permits us to process all the elements present in an iterable without explicitly using a looping construct. When used, it returns a map object which in turn is an iterator. This map object is the result obtained by applying the specified function to every item present in the iterable.

Function definition - required_answer = map(function, iterable)</p>

<h3 style={{textAlign:"start"}}> 2. itertools</h3>
<p style={{textAlign:"start",color:"white"}}>
Python has an amazing standard library called itertools which provides a number of functions that help in writing clean, fast, and memory-efficient code due to lazy evaluation. It is a Python module that implements various iterator building blocks and together they form 'iterator algebra' which makes it possible to efficiently build tools in the Python language. The functions in itertools work on iterators themselves which in turn return more complex iterators. Some example of functions present in itertools are: count(), cycle(), repeat(), accumulate(), product(), permutations(), combinations() etc. each taking their own set of arguments and operating upon them. The result is generated a lot faster as compared to the results achieved when using conventional code.</p>

<h3 style={{textAlign:"start"}}>3. Lambda Function</h3>
<p style={{textAlign:"start",color:"white"}}>
Python's lambda functions are small anonymous functions as they do not have a name and are contained in a single line of code. The keyword 'def' is used to define functions in Python but lambda functions are rather defined by the keyword 'lambda'. They can take any number of arguments, but the number of expressions can only be one. It makes code concise and easy to read for simple logical operations and is best to use when you need to use the function only a single time.</p>

<h3 style={{textAlign:"start"}}> 4. Generators </h3>
<p style={{textAlign:"start",color:"white"}}>
Generators in Python are a special type of function that rather than returning a single value, returns an iterator object which is a sequence of values. It is a utility to create your own iterator function. The keyword yield is used in the generator function instead of the return keyword which pauses its execution. The difference between yield and return is that return terminates the function but yield only pauses the execution of the function and returns the value against it each time. </p>


            </h2>
            </>
        )
    }

    if(name ==="GenAi"){
        return(
        <>
           <img src={traditional} style={{marginLeft:"80vh",marginTop:"10vh"}}></img>
            <h1 style={{textAlign:"start"}}>Title :Traditional AI vs GenAI</h1>
            <h2 style={{textAlign:"start"}}>
                <h3> **Traditional Ai</h3>
<p style={{textAlign:"start",color:"white"}}>Traditional AI is also called rule-based Artificial intelligence encompasses systems that rely on explicitly programmed rules and logic.

This approach uses decades of AI research which focuses on problem-solving through predetermined algorithms and human-defined heuristics.
Traditional AI (TA) emulates cognitive functions akin to those of the human mind, such as learning and problem-solving.
It relies on rules designed by humans to analyze data, interpret inputs, and generate responses to achieve specific objectives.</p>
<h3 style={{textAlign:"start"}}>**Generative AI</h3>
<p style={{textAlign:"start",color:"white"}}>Generative AI (Gen AI) focuses on understanding and processing data to create new content. This includes generating images, text, music, and videos. Unlike Traditional AI, which relies on fixed rules, Generative AI uses machine learning to find patterns in data and produce content that mimics human creativity. 

While both Generative AI and Traditional AI use large datasets for training, Generative AI seeks to replicate the essence of human-created content rather than just following set rules.</p>
            </h2>


           
            </>
        )
    }

    if(name ==="AswiniPortfolio"){
        return(
        <>
        <div>
           
          <Link to="https://skill-showcase-470.preview.emergentagent.com" style={{textAlign:"center",marginLeft:"75vh",fontSize:"10vh",textDecoration:"none"}}>My Portfolio</Link>
           </div>
            </>
        )
    }
    return(
        <>
        <h2 style={{textAlign:"center"}}>Welcome to details page</h2>
        
        
        </>
    )
}
export default Detail;