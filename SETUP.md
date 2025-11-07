# WorkControl - Project Scheduler Setup Guide

## Quick Start

1. **Open the application**
   - Simply open `index.html` in your web browser
   - The app works entirely in the browser with localStorage for data persistence

2. **Start using the scheduler**
   - Create projects with tasks
   - Toggle projects active to see them scheduled across your week
   - Switch to Calendar view to manage daily events

## Google Calendar Integration Setup

To connect your Google Calendar and sync events, follow these steps:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select an existing project
3. Give it a name like "WorkControl Calendar Integration"

### Step 2: Enable Google Calendar API

1. In your Google Cloud Project, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click on it and press "Enable"

### Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in the required fields (app name, user support email, developer contact)
   - Add the scope: `https://www.googleapis.com/auth/calendar`
   - Add your email as a test user
4. Create OAuth client ID:
   - Application type: "Web application"
   - Name: "WorkControl Web Client"
   - Authorized JavaScript origins: Add `http://localhost` or your domain
   - Authorized redirect URIs: Add `http://localhost` or your domain
5. Click "Create"
6. **Copy the Client ID** - you'll need this

### Step 4: Create an API Key

1. Still in "Credentials", click "Create Credentials" > "API key"
2. **Copy the API key** - you'll need this
3. (Optional) Click "Restrict Key" to limit it to Google Calendar API only

### Step 5: Configure the App

1. Open the WorkControl app in your browser
2. When you click "Connect Google Calendar" for the first time, you'll be prompted to enter:
   - Your **Client ID**
   - Your **API Key**
3. These will be stored in your browser's localStorage
4. Click "Connect Google Calendar" again to authorize

### Manual Configuration (Alternative)

You can also manually set the credentials in the browser console:

```javascript
localStorage.setItem('google-calendar-client-id', 'YOUR_CLIENT_ID_HERE');
localStorage.setItem('google-calendar-api-key', 'YOUR_API_KEY_HERE');
```

### Step 6: Authorize the App

1. Click the "Connect Google Calendar" button in the Calendar view
2. Sign in to your Google account
3. Grant permissions to access your calendar
4. You're connected!

## Features

### Schedule View
- **Project Management**: Create projects with multiple tasks and time estimates
- **Automatic Scheduling**: Tasks are automatically distributed across a 7-day week
- **10-Hour Work Days**: Each day is capped at 10 hours of work
- **Task Splitting**: Large tasks automatically split across multiple days
- **Progress Tracking**: Visual progress bars and completion status
- **Statistics**: Track projects, tasks, and hours completed

### Calendar View
- **Monthly Calendar**: Full month view with navigation
- **Custom Events**: Add your own events to any day
- **Google Calendar Sync**: View and create events in your Google Calendar
- **Event Colors**:
  - Purple = Local events (stored in browser)
  - Blue = Google Calendar events
- **Click any day** to add an event
- **Navigate months** using the arrow buttons

## Data Storage

### Local Data (No Google Connection)
- Projects, tasks, and local events are stored in your browser's localStorage
- Data persists between sessions
- Clearing browser data will delete your projects

### Google Calendar Events
- When connected, Google Calendar events are fetched from your account
- Events you create through the app are added to both:
  1. Local storage (for offline access)
  2. Your Google Calendar (when connected)

## Troubleshooting

### "Failed to connect to Google Calendar"
- Check that you've entered the correct Client ID and API Key
- Verify that the Google Calendar API is enabled in your Google Cloud project
- Make sure you're accessing the app from an authorized domain
- Check the browser console for specific error messages

### Events not showing
- Make sure you've clicked "Connect Google Calendar"
- Check that you've authorized the app to access your calendar
- Refresh the page and try reconnecting

### Data not persisting
- Ensure you're not in incognito/private browsing mode
- Check that localStorage is enabled in your browser
- Don't clear browser data if you want to keep your projects

## Privacy & Security

- All data is stored locally in your browser
- No server-side storage or tracking
- Google Calendar integration uses OAuth 2.0 for secure authentication
- Your credentials are only stored in your browser's localStorage
- The app only requests calendar access permissions

## Browser Compatibility

- Works best in modern browsers: Chrome, Firefox, Safari, Edge
- Requires JavaScript enabled
- Requires localStorage support

## Tips & Best Practices

1. **Regular Backups**: Export your projects regularly (future feature)
2. **Google Calendar**: Use Google Calendar integration to sync across devices
3. **10-Hour Days**: The scheduler assumes 10-hour productive work days
4. **Task Breakdown**: Break large projects into smaller tasks for better scheduling
5. **Active Projects**: Only activate projects you're currently working on

## Support

For issues or questions:
- Check the browser console for errors
- Verify your Google Cloud setup
- Make sure all APIs are enabled
- Ensure localStorage is not disabled

Enjoy planning and crushing your goals! 🚀
