const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'votre_cle_secrete_super_securisee';

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Veuillez fournir un matricule et un mot de passe." });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur." });
        }

        if (!user) {
            return res.status(401).json({ message: "Identifiants incorrects." });
        }

        // Compare password with hash
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ message: "Identifiants incorrects." });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({
            message: "Connexion réussie",
            token: token,
            role: user.role
        });
    });
});

module.exports = router;
