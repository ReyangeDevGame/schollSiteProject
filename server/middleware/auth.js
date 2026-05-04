const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'votre_cle_secrete_super_securisee';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: "Token manquant. Accès non autorisé." });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token invalide ou expiré." });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
