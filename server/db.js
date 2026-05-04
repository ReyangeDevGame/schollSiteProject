const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'school.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err.message);
    } else {
        console.log("Connecté à la base de données SQLite de l'école.");
    }
});

// Create tables and dummy data for testing the US-01 specification
db.serialize(() => {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricule TEXT UNIQUE,
        pin TEXT,
        name TEXT,
        class TEXT
    )`);

    // Schedule table
    db.run(`CREATE TABLE IF NOT EXISTS schedule (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class TEXT,
        day TEXT,
        subject TEXT,
        time TEXT
    )`);

    // Homework table
    db.run(`CREATE TABLE IF NOT EXISTS homework (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class TEXT,
        subject TEXT,
        description TEXT,
        due_date TEXT
    )`);

    // Grades table
    db.run(`CREATE TABLE IF NOT EXISTS grades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricule TEXT,
        subject TEXT,
        grade REAL,
        max_grade REAL,
        date TEXT
    )`);

    // Insert dummy students for testing
    // Matricule: ELEVE123 / PIN: 1234
    db.run(`INSERT OR IGNORE INTO students (matricule, pin, name, class) VALUES ('ELEVE123', '1234', 'Jean Dupont', '3ème A')`);
    db.run(`INSERT OR IGNORE INTO students (matricule, pin, name, class) VALUES ('ELEVE456', '5678', 'Marie Curie', 'Terminal S')`);

    // Dummy schedule data
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Lundi', 'Mathématiques', '08:00 - 10:00')`);
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Lundi', 'Histoire-Géo', '10:00 - 12:00')`);
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Mardi', 'Physique-Chimie', '08:00 - 10:00')`);

    // Dummy homework data
    db.run(`INSERT OR IGNORE INTO homework (class, subject, description, due_date) VALUES ('3ème A', 'Mathématiques', 'Exercices 1 à 5 page 42 du manuel', '2026-05-10')`);
    db.run(`INSERT OR IGNORE INTO homework (class, subject, description, due_date) VALUES ('3ème A', 'Anglais', 'Apprendre le vocabulaire Lesson 4', '2026-05-12')`);
    
    // Dummy grades data
    db.run(`INSERT OR IGNORE INTO grades (matricule, subject, grade, max_grade, date) VALUES ('ELEVE123', 'Mathématiques', 15.5, 20, '2026-05-01')`);
    db.run(`INSERT OR IGNORE INTO grades (matricule, subject, grade, max_grade, date) VALUES ('ELEVE123', 'Histoire-Géo', 12, 20, '2026-04-28')`);
});

module.exports = db;
