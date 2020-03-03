const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 8081


const status = require('./mocks/status');
const invoiceDebitStatus = require('./mocks/invoice/debit-route');
console.log('Input call');
app.use(cors());

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json(status)
});


app.put('/api/invoices/:id/debit', function (req, res) {
  console.log('/api/invoices/:id/debit', req.params)
  invoiceDebitStatus.id = req.params.id;
  invoiceDebitStatus.debited_amount = req.body.value;
  res.json(invoiceDebitStatus);
})

app.post('/api/invoices/:id/credit', function (req, res) {
  console.log('/api/invoices/:id/credit', req.params)
  invoiceDebitStatus.id = req.params.id;
  invoiceDebitStatus.debited_amount = req.body.value || 123;
  res.json(invoiceDebitStatus);
})

app.get('/api/drivers/:id', function (req, res) {
  console.log('/api/drivers/:id', req.params)
  res.json({
    balance_amount: 5000,
    id: req.params.id,
  });
})

app.listen(port, console.log(`Example app listening on port ${port}!`))