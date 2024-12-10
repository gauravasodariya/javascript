//Immediatly invoked function expressions
(function chai()
{
    console.log(`DB Connected`);
})();  //must use semicolon to ending of function

( () =>
{
    console.log(`DB Connected Two`);
}
)();

( (name) =>
    {
        console.log(`DB Connected Two ${name}`);
    }
)("Raj")