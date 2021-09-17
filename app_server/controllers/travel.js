/* GET travel view */
const travel = (req, res) => {
    console.log(req.path);
    //NOT WORKIGN pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: 'Travlr Getaways - Travel' });
};

module.exports = {
    travel
};