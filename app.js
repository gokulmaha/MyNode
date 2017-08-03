var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs'); 
var MongoClient = require('mongodb').MongoClient; 

var routes = require('./routes/index');
var users = require('./routes/users');
var overview = require('./routes/overview');
var leadership = require('./routes/leadership');
var customerspeak = require('./routes/customerspeak');
var successstories = require('./routes/successstories');
var corpvideos = require('./routes/corpvideos');
var sb = require('./routes/sb');
var mmc = require('./routes/mmc');
var contactus = require('./routes/contactus');
var careermodel = require('./routes/careermodel');
var mentoring_approach = require('./routes/mentoring_approach');
var current_openings = require('./routes/current_openings');
var erp_selection = require('./routes/erp_selection');
var enterprise = require('./routes/enterprise');
var ppms = require('./routes/ppms');
var ibe = require('./routes/ibe');
var sap = require('./routes/sap');
var epicor = require('./routes/epicor');
var ms_tech = require('./routes/ms_tech');
var ams = require('./routes/ams');
var testing = require('./routes/testing');
var peds = require('./routes/peds');
var tsps = require('./routes/tsps');
var opensource = require('./routes/opensource');
var preconfiguredepicor = require('./routes/preconfiguredepicor');
var partnerep = require('./routes/partnerep');
var implementationss = require('./routes/implementationss');
var epicorservices = require('./routes/epicorservices');

var consulting = require('./routes/consulting');
var sharepoint = require('./routes/sharepoint');
var microsoftbi = require('./routes/microsoftbi');
var cloudandazure = require('./routes/cloudandazure');
var adms = require('./routes/adms');
var engine = require('ejs-locals'); 
var expressLayouts = require('express-ejs-layouts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts); 
//uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
app.use('/about-us/overview', overview);
app.use('/about-us/leadership', leadership);
app.use('/about-us/customer-speak', customerspeak);
app.use('/about-us/success-stories', successstories);
app.use('/about-us/corporate-videos', corpvideos);
app.use('/solution/focused-solutions/small-businesses', sb);
app.use('/solutions/focused-solutions/mid-market-companies', mmc);
app.use('/contact-us', contactus);
app.use('/careers/career-model', careermodel); 
app.use('/careers/mentoring-approach', mentoring_approach);
app.use('/careers/current-openings', current_openings);
app.use('/solutions/consulting-and-advisory-solutions/erp-selection-advisory-solutions', erp_selection);
app.use('/solutions/focused-solutions/enterprise', enterprise);
app.use('/solutions/consulting-and-advisory-solutions/program-and-project-management-services', ppms);
app.use('/solutions/consulting-and-advisory-solutions/it-business-excellence', ibe);
app.use('/solutions/erp-enterprise-solutions-and-services/sap', sap);
app.use('/solutions/erp-enterprise-solutions-and-services/epicor', epicor);
app.use('/solutions/it-services-and-solutions/microsoft-technologies', ms_tech);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/application-maintenance-and-support', ams);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/testing-services',testing);
app.use('/solutions/ip-product-development-services/product-engineering-development-services',peds);
app.use('/solutions/ip-product-development-services/technology-support-for-product-startups', tsps);
app.use('/solutions/ip-product-development-services/open-source-technologies', opensource);

app.use('/solutions/erp-enterprise-solutions-and-services/epicor/preconfigured-epicor-solutions', preconfiguredepicor );
app.use('/solutions/erp-enterprise-solutions-and-services/epicor/partner-enablement-program', partnerep);
app.use('/solutions/erp-enterprise-solutions-and-services/epicor/implementation-support-services', implementationss);
app.use('/solutions/erp-enterprise-solutions-and-services/epicor/epicor-services-rendered', epicorservices);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/consulting', consulting);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/sharepoint', sharepoint);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/microsoft-bi-solutions', microsoftbi);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/cloud-and-azure', cloudandazure);
app.use('/solutions/it-services-and-solutions/microsoft-technologies/application-development-maintenance-services', adms);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// index page 
app.get('/', function (req, res) { 
    console.log('Dir name ' + __dirname + '/');
     res.render('index'); 
 });
 
 
// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.get('/about-us/overview', function (req, res) {
    console.log('requested overview');
});
 
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;