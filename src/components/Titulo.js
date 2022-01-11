import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap'; 


const Titulo = (props) => {
    const [stateChange, setStateChange] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        setStateChange("(from changed state)")
        
    }



    return (
        <div>
            <h1>{props.hellomyfriend} {stateChange}</h1>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3">
    
    
    
  </Form.Group>

  <Button variant="primary" type="submit" onClick={(e)=>setStateChange()}>
    Click Me
  </Button>
</Form>
        </div>

    );
};

export default Titulo;