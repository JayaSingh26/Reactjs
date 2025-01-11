import Button from "./components/Button";
import Home from "./components/Home";

function App({name,nameForClass}) {
  return (  
    
    <>
     <div className={nameForClass} > {name}:2000
      <h1>Welcome to React app {name}   {nameForClass}</h1>
      <Button />
      <Home/>
      <hr/>
      
    </div>
    </>
   
  );
}
export default function MyComponent() {
  return (    
    <div>
      <h1>This is my page</h1>
      <hr/>
      <App name="Jaya" nameForClass="div1"/>
      {/* <App name="Default User" nameForClass={"default-class"}/>   */}
    </div>
  );
}




