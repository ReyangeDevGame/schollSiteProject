const express = require('express');
const router = express.Router();
const db = require('../db');
const authenticateToken = require('../middleware/auth');

// Middleware to ensure the user is a student
function isStudent(req, res, next) {
    if (req.user.role !== 'student') {
        return res.status(403).json({ message: "Accès réservé aux élèves." });
    }
    next();
}

// Get student info (Me)
router.get('/me', authenticateToken, isStudent, (req, res) => {
    db.get('SELECT matricule, name, class FROM students WHERE matricule = ?', [req.user.username], (err, row) => {
        if (err || !row) {
            return res.status(404).json({ message: "Élève non trouvé." });
        }
        res.json(row);
    });
});

// Get schedule
router.get('/schedule', authenticateToken, isStudent, (req, res) => {
    db.get('SELECT class FROM students WHERE matricule = ?', [req.user.username], (err, student) => {
        if (err || !student) return res.status(404).json({ message: "Erreur lors de la récupération des infos." });
        
        db.all('SELECT day, subject, time FROM schedule WHERE class = ?', [student.class], (err, rows) => {
            if (err) return res.status(500).json({ message: "Erreur serveur." });
            res.json(rows);
        });
    });
});

// Get homework
router.get('/homework', authenticateToken, isStudent, (req, res) => {
    db.get('SELECT class FROM students WHERE matricule = ?', [req.user.username], (err, student) => {
        if (err || !student) return res.status(404).json({ message: "Erreur lors de la récupération des infos." });

        db.all('SELECT subject, description, due_date FROM homework WHERE class = ?', [student.class], (err, rows) => {
            if (err) return res.status(500).json({ message: "Erreur serveur." });
            res.json(rows);
        });
    });
});

// Get grades
router.get('/grades', authenticateToken, isStudent, (req, res) => {
    db.all('SELECT subject, grade, max_grade, date FROM grades WHERE matricule = ?', [req.user.username], (err, rows) => {
        if (err) return res.status(500).json({ message: "Erreur serveur." });
        res.json(rows);
    });
});

module.exports = router;
