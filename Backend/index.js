const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3001;
//  const port = 3001;
// const port = process.env.PORT || 3001;

//Mock freelancer profile date
const freelancerProfile = {
    "id": 1,
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane.doe@example.com",
  "username": "janedoe_dev",
  "role": "freelancer",
  "is_active": true,
  "profile": {
    "id": 1,
    "user_id": 1,
    "job_title": "Full Stack Developer",
    "description": "Experienced full stack developer specializing in React and Django",
    "hourly_rate": 75.00,
    "bio": "I'm a passionate developer with 5 years of experience in building scalable web applications.",
    "availability": "Part-time",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "skills": [
      {
        "id": 1,
        "name": "React",
        "level": "Expert"
      },
      {
        "id": 2,
        "name": "Django",
        "level": "Expert"
      },
      {
        "id": 3,
        "name": "PostgreSQL",
        "level": "Intermediate"
      }
    ],
    "experiences": [
      {
        "id": 1,
        "company": "Tech Innovators Inc.",
        "position": "Senior Developer",
        "start_date": "2018-03-01",
        "end_date": "2023-05-31",
        "description": "Led a team of developers in creating a cloud-based project management tool."
      }
    ],
    "education": [
      {
        "id": 1,
        "institution": "University of California, Berkeley",
        "degree": "Bachelor of Science",
        "field_of_study": "Computer Science",
        "start_date": "2010-09-01",
        "end_date": "2014-05-31"
      }
    ],
    "certifications": [
      {
        "id": 1,
        "name": "AWS Certified Developer - Associate",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2022-01-15",
        "expiration_date": "2025-01-15"
      }
    ],
    "portfolio_items": [
      {
        "id": 1,
        "title": "E-commerce Platform",
        "description": "Developed a fully functional e-commerce platform using React and Django",
        "url": "https://github.com/janedoe/ecommerce-platform"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "client_id": 5,
        "rating": 5,
        "comment": "Jane is an excellent developer. She delivered the project on time and exceeded our expectations.",
        "created_at": "2023-04-15T14:30:00Z"
      }
    ],
    "social_links": [
      {
        "id": 1,
        "platform": "LinkedIn",
        "url": "https://www.linkedin.com/in/janedoe"
      },
      {
        "id": 2,
        "platform": "GitHub",
        "url": "https://github.com/janedoe"
      }
    ],
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-06-15T12:30:00Z"
  },
  "subscription": {
    "id": 1,
    "plan": "Professional",
    "start_date": "2023-01-01",
    "end_date": "2024-01-01",
    "is_active": true
  }
};

//Endpoint to fetch freelancer profile
app.get('/', (req, res) => {
    res.json(freelancerProfile);
});

app.listen(port, () => {
    console.log(`Backend service is running on http://localhost:${port}`);

});
