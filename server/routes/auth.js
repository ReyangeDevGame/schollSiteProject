const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db');

// Secret for JWT (in production, use environment variables)
const SECRET_KEY = "super_secret_school_key";

// Endpoint to authenticate student
router.post('/login', (req, res) => {
    const { matricule, pin } = req.body;

    if (!matricule || !pin) {
        return res.status(400).json({ error: "Le matricule et le code PIN sont requis." });
    }

    // Check credentials in DB
    db.get(`SELECT * FROM students WHERE matricule = ? AND pin = ?`, [matricule, pin], (err, row) => {
        if (err) {
            console.error("Database error during login:", err);
            return res.status(500).json({ error: "Erreur interne du serveur." });
        }

        if (row) {
            // Generate a JWT token
            const token = jwt.sign(
                { matricule: row.matricule, name: row.name, class: row.class }, 
                SECRET_KEY, 
                { expiresIn: '2h' }
            );
            
            // Send back token and basic user info
            res.json({ token, student: { name: row.name, class: row.class } });
        } else {
            res.status(401).json({ error: "Identifiants incorrects." });
        }
    });
});

module.exports = router;
