// Dashboard logic to fetch and render student data
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('studentToken');
    const studentName = localStorage.getItem('studentName');

    // Security Check: Redirect to login if no token is found
    if (!token) {
        window.location.href = '/espace-eleve.html';
        return;
    }

    // Set student name in the navigation bar
    if (studentName) {
        document.getElementById('student-name').textContent = studentName;
    }

    // Logout handling
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('studentToken');
        localStorage.removeItem('studentName');
        window.location.href = '/index.html'; // Redirect to home page
    });

    // Fetch and populate dashboard data
    fetchDashboardData(token);
});

/**
 * Fetch all required data for the dashboard from the API
 * @param {string} token - The JWT token for authorization
 */
async function fetchDashboardData(token) {
    try {
        const response = await fetch('/api/student/data', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 401 || response.status === 403) {
            // Token is expired or invalid
            localStorage.removeItem('studentToken');
            window.location.href = '/espace-eleve.html';
            return;
        }

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        
        // Render data into the DOM
        renderSchedule(data.schedule);
        renderHomework(data.homework);
        renderGrades(data.grades);

    } catch (error) {
        console.error("Fetch Error:", error);
        const errorHtml = `<p class="error-text">Impossible de charger les données. Veuillez réessayer plus tard.</p>`;
        document.getElementById('schedule-container').innerHTML = errorHtml;
        document.getElementById('homework-container').innerHTML = errorHtml;
        document.getElementById('grades-container').innerHTML = errorHtml;
    }
}

function renderSchedule(scheduleData) {
    const container = document.getElementById('schedule-container');
    if (!scheduleData || scheduleData.length === 0) {
        container.innerHTML = '<p>Aucun cours prévu.</p>';
        return;
    }

    const html = scheduleData.map(item => `
        <div class="data-item">
            <strong>${item.subject}</strong>
            <span>${item.day} - ${item.time}</span>
        </div>
    `).join('');
    container.innerHTML = html;
}

function renderHomework(homeworkData) {
    const container = document.getElementById('homework-container');
    if (!homeworkData || homeworkData.length === 0) {
        container.innerHTML = '<p>Aucun devoir programmé.</p>';
        return;
    }

    const html = homeworkData.map(item => `
        <div class="data-item">
            <strong>${item.subject}</strong>
            <span>Pour le : ${item.due_date}</span>
            <p>${item.description}</p>
        </div>
    `).join('');
    container.innerHTML = html;
}

function renderGrades(gradesData) {
    const container = document.getElementById('grades-container');
    if (!gradesData || gradesData.length === 0) {
        container.innerHTML = '<p>Aucune note récente.</p>';
        return;
    }

    const html = gradesData.map(item => `
        <div class="data-item">
            <span class="grade-badge">${item.grade} / ${item.max_grade}</span>
            <strong>${item.subject}</strong>
            <span>Le : ${item.date}</span>
        </div>
    `).join('');
    container.innerHTML = html;
}
