// Dashboard logic to fetch and render student data
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('studentToken');

    // Security Check: Redirect to login if no token is found
    if (!token) {
        window.location.href = '/espace-eleve.html';
        return;
    }

    // Logout handling
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('studentToken');
        window.location.href = '/index.html'; // Redirect to home page
    });

    // Fetch and populate dashboard data
    try {
        // 1. Fetch Student Profile info
        const meResponse = await fetch('/api/student/me', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (meResponse.status === 401 || meResponse.status === 403) {
            handleAuthError();
            return;
        }

        const student = await meResponse.json();
        document.getElementById('student-name').textContent = student.name;

        // 2. Fetch other data in parallel
        const [scheduleRes, homeworkRes, gradesRes] = await Promise.all([
            fetch('/api/student/schedule', { headers: { 'Authorization': `Bearer ${token}` } }),
            fetch('/api/student/homework', { headers: { 'Authorization': `Bearer ${token}` } }),
            fetch('/api/student/grades', { headers: { 'Authorization': `Bearer ${token}` } })
        ]);

        const schedule = await scheduleRes.json();
        const homework = await homeworkRes.json();
        const grades = await gradesRes.json();

        // Render data into the DOM
        renderSchedule(schedule);
        renderHomework(homework);
        renderGrades(grades);

    } catch (error) {
        console.error("Fetch Error:", error);
        const errorHtml = `<p class="error-text">Impossible de charger les données. Veuillez réessayer plus tard.</p>`;
        document.getElementById('schedule-container').innerHTML = errorHtml;
        document.getElementById('homework-container').innerHTML = errorHtml;
        document.getElementById('grades-container').innerHTML = errorHtml;
    }
});

function handleAuthError() {
    localStorage.removeItem('studentToken');
    window.location.href = '/espace-eleve.html';
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
