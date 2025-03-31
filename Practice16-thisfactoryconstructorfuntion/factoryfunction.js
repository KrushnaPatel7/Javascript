function createchatbot(nameF){
    const cb={
        name:nameF,
        speak:function(){
            console.log('Hi I am chatbot '+nameF);
        }
    };
    return cb;  // a factory function is a function that returns an object.
}

const c1=createchatbot('Finance dept');
c1.speak();

const c2=createchatbot('HR dept');
c2.speak();

//to create multiple objects again and again that have the same logic, 
// we can write the logic once in a function and use that function as a factory to create our objects.