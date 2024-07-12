// src/utils/calendarInvite.js
export const generateCalendarInvite = ({ name, email, horse, date, time }) => {
  const calendarInvite = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:${new Date().toISOString()}
DTSTAMP:${new Date().toISOString()}
DTSTART:${new Date(date + ' ' + time.split(' - ')[0]).toISOString()}
DTEND:${new Date(date + ' ' + time.split(' - ')[1]).toISOString()}
SUMMARY:Horse Ride Booking - ${horse}
DESCRIPTION:Hi ${name},\\n\\nYour horse ride booking is confirmed.\\n\\nHorse: ${horse}\\nDate: ${date}\\nTime: ${time}\\n\\nThank you!
ORGANIZER;CN=Your Organization:mailto:info@yourorganization.com
ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}
END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([calendarInvite], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'booking.ics';
  a.click();
  URL.revokeObjectURL(url);
};
