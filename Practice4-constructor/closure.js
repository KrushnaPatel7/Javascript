function f(){
    var a=7;
    function g(){
        console.log(a);
    }
    return g;
}
var h = f();
h();

//Function along with the lexical scope bundle is called closure.

// g(); calls g() immediately, so f() finishes and returns undefined, which results in h being undefined and causing the error when you try to call h().
// If you want to preserve the functionality where h() can be called later, you should keep return g; so that f() returns the function g, not the result of calling it immediately.