module.exports = (req, res, next) => {
    if (!req.user) {
      return res.status(401).send({ error: 'YOU SHALL NOT PASSSSSS! You must log in!' });
    }
  
    next();
  };