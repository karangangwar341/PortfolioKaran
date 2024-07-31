const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');

const app = express();
const port = 5000;
const cors = require('cors');


// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // If you need to send cookies or HTTP authentication
}));
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

// Endpoint to upload PDFs
app.post('/upload', upload.single('pdf'), async (req, res) => {
  const { path } = req.file;
  try {
    const dataBuffer = fs.readFileSync(path);
    const pdfData = await pdfParse(dataBuffer);

    // Process the extracted text
    const text = pdfData.text;

    // Clean up uploaded file
    fs.unlinkSync(path);

    res.send({ message: 'PDF uploaded and processed successfully', text });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send({ error: 'Error processing PDF' });
  }
});

// Dummy function to simulate Gemini API interaction
async function queryGeminiAPI(query, text) {
  // Implement the actual interaction with Gemini API here
  return `Dummy response to query: "${query}" based on provided text.`;
}

// Endpoint to handle chat queries
app.post('/query', async (req, res) => {
  const { query, text } = req.body;
  try {
    const response = await queryGeminiAPI(query, text);
    res.send({ answer: response });
  } catch (error) {
    console.error('Error querying Gemini API:', error);
    res.status(500).send({ error: 'Error querying Gemini API' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
