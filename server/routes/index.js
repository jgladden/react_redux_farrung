const path = require('path');
const router = require('express').Router();

router.get('/admin', (req, res) => {
  const route = path.join(__dirname, '..', '..', 'dist', 'admin.html');
  res.sendFile(route);
});

router.get('*', (req, res) => {
  const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
  res.sendFile(route);
});

module.exports = router;
