const calendarEl = document.getElementById('calendar');

// Example user data (replace with actual data)
const users = [
    { name: "John Doe", schedule: { 1: "home", 3: "office", 5: "home" } },
    { name: "Jane Smith", schedule: { 2: "office", 4: "home" } }
    // Add more users here
];

function generateCalendar(year, month) {
    const date = new Date(year, month - 1, 1);
    const today = new Date();
    const firstDay = (date.getDay() + 6) % 7; // Adjust for Sunday start
    const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();

    let tableHTML = '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) { // 6 weeks max on the calendar
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                tableHTML += '<td></td>';
            } else if (dayCounter > daysInMonth) {
                break;
            } else {
                const dateString = `${year}-${month.toString().padStart(2, '0')}-${dayCounter.toString().padStart(2, '0')}`;
                const isToday = today.getFullYear() === year && today.getMonth() + 1 === month && today.getDate() === dayCounter;
                tableHTML += `<td class="${isToday ? 'today' : ''}">${dayCounter}`;

                // Add user info for this day
                tableHTML += '<div class="user-info">';
                users.forEach(user => {
                    if (user.schedule[dayCounter]) {
                        const locationClass = user.schedule[dayCounter] === "home" ? "home" : "office";
                        tableHTML += `<span class="${locationClass}">${user.name} (${user.schedule[dayCounter]})</span><br>`;
                    }
                });
                tableHTML += '</div>';

                tableHTML += '</td>';
                dayCounter++;
            }
        }
        if (dayCounter > daysInMonth) {
            break;
        } else {
            tableHTML += '</tr><tr>';
        }
    }
    tableHTML += '</tr></table>';
    calendarEl.innerHTML = tableHTML;
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1);