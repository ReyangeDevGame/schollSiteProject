const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db');

const SECRET_KEY = "super_secret_school_key";

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Protected endpoint to get student dashboard data
router.get('/data', authenticateToken, (req, res) => {
    const matricule = req.user.matricule;
    const studentClass = req.user.class;

    let responseData = {
        schedule: [],
        homework: [],
        grades: [],
        studentInfo: req.user
    };

    // Run parallel database queries
    const getSchedule = new Promise((resolve, reject) => {
        db.all(`SELECT * FROM schedule WHERE class = ?`, [studentClass], (err, rows) => {
            if (err) reject(err);
            responseData.schedule = rows;
            resolve();
        });
    });

    const getHomework = new Promise((resolve, reject) => {
        db.all(`SELECT * FROM homework WHERE class = ?`, [studentClass], (err, rows) => {
            if (err) reject(err);
            responseData.homework = rows;
            resolve();
        });
    });

    const getGrades = new Promise((resolve, reject) => {
        db.all(`SELECT * FROM grades WHERE matricule = ?`, [matricule], (err, rows) => {
            if (err) reject(err);
            responseData.grades = rows;
            resolve();
        });
    });

    // Wait for all queries to finish
    Promise.all([getSchedule, getHomework, getGrades])
        .then(() => {
            res.json(responseData);
        })
        .catch(err => {
            console.error("Erreur de récupération des données :", err);
            res.status(500).json({ error: "Erreur lors de la récupération des données." });
        });
});

module.exports = router;
