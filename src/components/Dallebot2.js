import React, { useState } from 'react';
import { Form, FormControl, Card, Image } from 'react-bootstrap';

export const DALLEComponent2 = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [importedImageUrl, setImportedImageUrl] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImportedImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const generateImage = async () => {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`,
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

  const manipulateImage = async () => {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`,
      },
      body: JSON.stringify({
        model: 'image-alpha-001',
        image: importedImageUrl,
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
        <Form.Group>
          <Form.Label>Import Image</Form.Label>

          <Form.File
            id="custom-file"
            label="Choose file"
            custom
            onChange={handleFileChange}
          />
          <Form.Text className="text-muted">
            You can drag and drop an image file here to import it.
          </Form.Text>
        </Form.Group>
        {importedImageUrl && (
          <Form.Group>
            <Form.Control type="button" value="Manipulate Image" onClick={manipulateImage} />
          </Form.Group>
        )}
      </Form>
      {imageUrl && (
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>Image</Card.Title>
            <Card.Text>
              This is the image generated or manipulated from the text or imported image you provided.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

