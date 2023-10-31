import { useRef, useState } from "react";
import { Card, Form, FormControl } from "react-bootstrap";

export const DALLEComponent = () => {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
  

    const fileInput = useRef(null);

    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // do something with the file content
      };
      reader.readAsDataURL(file);
    };
  
    const handleClick = () => {
      fileInput.current.click();
    };
  
    const handleChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // do something with the file content
      };
      reader.readAsDataURL(file);
    };
    const handleTextChange = (event) => {
      setText(event.target.value);
    }
  
    const generateImage = async () => {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          model: 'image-alpha-001',
          prompt: text,
          size: '256x256',
          response_format: 'url',
        }),
      });
      const json = await response.json();
      console.log(json.data[0].url)
      setImageUrl(json.data[0].url);
    }
  
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Text</Form.Label>
            <FormControl
              type="text"
              placeholder="Enter some text"
              value={text}
              onChange={handleTextChange}
            />
            <Form.Text className="text-muted">
              This component uses the OpenAI DALL-E API to convert text into images.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control type="button" value="Generate Image" onClick={generateImage} />
          </Form.Group>
        </Form>
        <div onClick={handleClick} onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
      Drag and drop an image here or click to select a file
      <input ref={fileInput} type="file" style={{ display: 'none' }} onChange={handleChange} />
    </div>
        { imageUrl &&(
          <Card className="col-md-3">
            <Card.Img variant="top" src={imageUrl} />
        
          </Card>
        )}
      </>
    );
  }