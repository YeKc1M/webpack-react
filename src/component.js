

export default (helloworld="Hello world!")=>{
    const element=document.createElement("div");
    element.innerHTML=helloworld;
    return element;
}