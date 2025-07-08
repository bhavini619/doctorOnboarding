// middleware/authorize.js

const authorize = () => {
  //  Currently allows everything
  // can add role/user/token checks here later

  // Example placeholder for future logic:
  // const user = req.user;
  // if (!user || user.role !== 'admin') {
  //   return res.status(403).json({ message: 'Forbidden' });
  // }

   return (req, res, next) => {
    // Placeholder: allow all for now
    next();
  };

};

export default authorize;
