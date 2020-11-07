# Recover password

**Functional requirements**

- User should be able to recover their password by providing their email;
- User should receive an email with instructions on how to recover their password;
- User should be able to reset their password;

**Non-functional requirements**

- Use mailtrap to test email sending functionality in development environment;
- Use Amazon SES for sending emails in production environment.
- Sending emails should execute as a background job.

**Business rules**

- The link sent by email used to reset the user's password, should expire in 2 hours;
- User needs to confirm the new password when resetting their password;

# Update profile

**Functional requirements**

- User should be able to update their name, email and password;

**Business rules**

- User should not be able to change their email to an email already in use;
- In order to update their password, the user should provide their old password;
- In order to update their password, the user should confirm their password by retyping it;

# Provider dashboard

**Functional requirements**

- User should be able to list their appointments of a selected day;
- User should receive a notification whenever another user schedules a new appointment with them;
- User should be able to see all unread notifications;

**Non-functional requirements**

- Appointments scheduled on the current day should be stored in cache;
- Notifications should be stored in MongoDB;
- Notifications should be sent in real-time by using Socket.io;

**Business rules**

- Notifications should have a state of either read or unread and the user should be able to control their state;

# Scheduling an appointment

**Functional requirements**

- User should be able to list all registred service providers;
- User should be able to list the available time/dates of a specific registred service provider;
- User should be able to list available times in a specific day of the according selected service provider;
- User should be able to schedule an appointment with the selected service provider;

**Non-functional requirements**

- Service provider listing should be stored in cache;

**Business rules**

- Each appointment should last exactly 1 (one) hour;
- Appointments should be available from 8AM to 6PM (First appointment at 8AM, last appointment at 5PM);
- User should not be able to schedule an appointment in an already taken time slot;
- User should not be able to schedule an appointment in time slot that already passed;
- User should not be able to schedule an appointment with themself.
