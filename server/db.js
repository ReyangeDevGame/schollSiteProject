const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'school.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err.message);
    } else {
        console.log("Connecté à la base de données SQLite de l'école.");
    }
});

// Create tables and dummy data for testing the US-04 specification
db.serialize(() => {
    // Users table for authentication
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password_hash TEXT,
        role TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Students table (linked to users via username/matricule)
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        matricule TEXT UNIQUE,
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

    // Insert dummy users and students (using hashSync to ensure synchronous execution inside serialize)
    const salt = bcrypt.genSaltSync(10);
    const hashedPass123 = bcrypt.hashSync('1234', salt);
    const hashedPass456 = bcrypt.hashSync('5678', salt);

    // Insert into users
    db.run(`INSERT OR IGNORE INTO users (username, password_hash, role) VALUES ('ELEVE123', ?, 'student')`, [hashedPass123]);
    db.run(`INSERT OR IGNORE INTO users (username, password_hash, role) VALUES ('ELEVE456', ?, 'student')`, [hashedPass456]);

    // Insert into students (matricule matches username)
    db.run(`INSERT OR IGNORE INTO students (matricule, name, class) VALUES ('ELEVE123', 'Jean Dupont', '3ème A')`);
    db.run(`INSERT OR IGNORE INTO students (matricule, name, class) VALUES ('ELEVE456', 'Marie Curie', 'Terminal S')`);

    // Dummy data for other tables
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Lundi', 'Mathématiques', '08:00 - 10:00')`);
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Lundi', 'Histoire-Géo', '10:00 - 12:00')`);
    db.run(`INSERT OR IGNORE INTO schedule (class, day, subject, time) VALUES ('3ème A', 'Mardi', 'Physique-Chimie', '08:00 - 10:00')`);

    db.run(`INSERT OR IGNORE INTO homework (class, subject, description, due_date) VALUES ('3ème A', 'Mathématiques', 'Exercices 1 à 5 page 42 du manuel', '2026-05-10')`);
    db.run(`INSERT OR IGNORE INTO homework (class, subject, description, due_date) VALUES ('3ème A', 'Anglais', 'Apprendre le vocabulaire Lesson 4', '2026-05-12')`);
    
    db.run(`INSERT OR IGNORE INTO grades (matricule, subject, grade, max_grade, date) VALUES ('ELEVE123', 'Mathématiques', 15.5, 20, '2026-05-01')`);
    db.run(`INSERT OR IGNORE INTO grades (matricule, subject, grade, max_grade, date) VALUES ('ELEVE123', 'Histoire-Géo', 12, 20, '2026-04-28')`);
});

module.exports = db;
