// server.js
const express = require('express');
const app = express();
const port = 3000;

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

app.use(express.static('public'));

app.get('/states', (req, res) => {
  const searchTerm = req.query.q?.toLowerCase() || '';
  const filteredStates = states.filter(state => state.toLowerCase().includes(searchTerm)).slice(0, 8);
  res.json(filteredStates);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
