import { useState } from "react";
import { FormSection } from "./FormSection";
import { SuccessContainer } from "./SuccessContainer";

export const MainContainer = () => {

    const [formOk, setFormOk] = useState(false);
    

  return (
    <main className={!formOk ? "main-container" : "main-container-success"}>
    {!formOk ?  <FormSection setFormOk={setFormOk}/> : <SuccessContainer setFormOk={setFormOk}/>}
    
        
    </main>
  )
}


