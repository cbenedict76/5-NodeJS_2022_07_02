const express = require('express');
const partnerRouter = express.Router();

//////////////////////////////////////////////////
// Start of Partners Details
partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res) => {
        res.end(`Will send all the partners to you`);
    })
    .post((req, res) => {
        res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /partners`);
    })
    .delete((req, res) => {
        res.end(`Deleting all partners`);
    });

//////////////////////////////////////////////////
// Start of PartnerID Details
partnerRouter.route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /partner/${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.end(`Will update the partner: ${req.body.name}
            with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting partner: ${req.params.partnerId}`);
    });

module.exports = partnerRouter