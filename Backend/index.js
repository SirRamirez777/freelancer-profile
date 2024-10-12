const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3001;

//Mock freelancer profile date
const freelancerProfile = {
    "profilePicture": "https://avatarfiles.alphacoders.com/222/222663.jpg",
  "name": "John Doe",
  "location": "Durban, Umhlanga",
  "hourlyRate": 50,
  "bio": "Experienced web developer...",
  "skills": ["Angular", "TypeScript", "CSS"],
  "portfolio": [
    { "title": "Project 1", "link": "https://example.com/project1" },
    { "title": "Project 2", "link": "https://example.com/project2" }
  ],
  "socialLinks": {
    "linkedin": "https://www.linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe"
  },
  "contact": {
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  }
};

//Endpoint to fetch freelancer profile
app.get('/', (req, res) => {
    res.json(freelancerProfile);
});

app.listen(port, () => {
    console.log(`Backend service is running on http://localhost:${port}`);
 
});
