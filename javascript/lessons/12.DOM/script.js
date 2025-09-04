                    //    Notes

// Document object model :It’s a programming interface provided by browsers that represents the structure of a web page as a tree of objects. With the DOM, you can access, modify, add, or delete HTML elements and their content dynamically using JavaScript.

// Document → Represents the entire HTML document.
 
// Document → Represents the entire HTML document.

// Object → Every part of the HTML (elements, attributes, text) is an object.

// Model → Represents the document as a structured tree.

// document -> html document (html elements[nodes]|object)

// tree ds

// data.properties 
// data.methods()

// target to a hmtl element

// class, id , tagname

// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// console.log(document)

// document.getElementsByTagName()
// document.getElementsByClassName()
// will always returns 
// collections[Array, HTML collections, Node collections] or []

// document.getElementById()
// will always return a single element / null

                //    code    
        
 let element = document.getElementById(element)               
 console.log(element)

 let elements = document.getElementsByTagName(h2)    
 console.log(elements)           

   elements = document.getElementsByClassName(first)    
 console.log(elements)      
 
 let element1= document.querySelectorAll("h3")
 console.log(element1)      

 let element2 =document.querySelector("#container1 > h1")
 console.log(element2)