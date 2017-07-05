const mockbridge = require('./mockbridge.json');
const mockbridgeinfo = require('./mockbridgeinfo.json');
const express = require('express');
const app = express();

function checkAuth() {
  // TODO
  return true;
}

// GET
app.get('/', function(req, res) {
  res.status(200).json(mockbridgeinfo.info);
});

app.get('/buckets', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.getbuckets);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5', function(req, res) {
  if (checkAuth()) {
    res.sendStatus(200);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5/files', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.listfiles);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5/files/998960317b6725a3f8080c2b/info', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.getfileinfo);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5/file-ids/hTY5wsqYyLJQppCMiFQI7v2n/IZZiKb0ES1RCrUqK7Fe5m0/+fYwh+E/vp8M3FCEECle63BhlWlHi/Hj/Yg5y/bIjy8SxQ==', function(req, res) {
  if (checkAuth()) {
    res.sendStatus(404);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5/files/998960317b6725a3f8080c2b', function(req, res) {
  // TODO
});

app.get('/frames', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.getframes);
  }
});

app.get('/frames/d4af71ab00e15b0c1a7b6ab2', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.getframe);
  }
});

app.get('/buckets/368be0816766b28fd5f43af5/files/998960317b6725a3f8080c2b/mirrors', function(req, res) {
  if (checkAuth()) {
    res.status(200).json(mockbridge.listmirrors);
  }
});

// POST
app.post('/reports/exchanges', function(req, res) {
  // TODO check post body
  res.status(201).json({});
});

app.post('/buckets', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.status(200).json(mockbridge.putbuckets);
  }
});

app.post('/frames', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.status(200).json(mockbridge.createframe);
  }
});

app.post('/buckets/368be0816766b28fd5f43af5/tokens', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.status(201).json(mockbridge.createbuckettoken);
  }
});

app.post('/buckets/368be0816766b28fd5f43af5/files', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.status(201).json(mockbridge.createfile);
  }
});

app.post('/users', function(req, res) {
  // TODO check post body
  res.status(201).json(mockbridge.createuser);
});

// PUT
app.put('/frames/d6367831f7f1b117ffdd0015', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.status(200).json(mockbridge.putframe);
  }
});

// DELETE
app.delete('/buckets/368be0816766b28fd5f43af5', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.sendStatus(204);
  }
});

app.delete('/buckets/368be0816766b28fd5f43af5/files/998960317b6725a3f8080c2b', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.sendStatus(200);
  }
});

app.delete('/frames/d4af71ab00e15b0c1a7b6ab2', function(req, res) {
  if (checkAuth()) {
    // TODO check post body
    res.sendStatus(200);
  }
});

app.listen(3000, function() {
  console.log('Test server listening on port 3000');
});
