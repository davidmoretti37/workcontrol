# WorkControl - Project Scheduler

A beautiful, modern project scheduling and calendar management application built with React. Plan your projects, schedule tasks across your week, and integrate with Google Calendar - all in your browser.

## Features

### 🗓️ Dual View Modes
- **Schedule View**: Automatic task distribution across a 7-day week
- **Calendar View**: Monthly calendar with event management

### 📊 Smart Project Management
- Create projects with custom colors
- Break down projects into tasks with time estimates
- Automatic scheduling algorithm distributes tasks across 10-hour work days
- Tasks larger than 10 hours automatically split across multiple days
- Real-time progress tracking and statistics

### 📅 Calendar Integration
- Add custom events to any day
- Connect to Google Calendar to sync events
- View both local and Google Calendar events
- Create events that sync to Google Calendar
- Beautiful monthly calendar view with today highlighting

### 💾 Data Persistence
- Projects and tasks saved to browser localStorage
- Calendar events stored locally
- Google Calendar integration for cross-device sync
- No backend required - fully client-side

### 🎨 Modern UI
- Gradient-based design with glassmorphism effects
- Smooth animations and transitions
- Responsive layout for mobile and desktop
- Color-coded projects for easy identification
- Progress bars and visual statistics

## Quick Start

1. Open `index.html` in your web browser
2. Create your first project
3. Add tasks with time estimates
4. Toggle projects active to see the schedule
5. Switch to Calendar view for event management

For Google Calendar integration, see [SETUP.md](SETUP.md)

## Project Structure

```
workcontrol/
├── index.html              # Main HTML file with dependencies
├── project-scheduler.jsx   # React application code
├── README.md              # This file
└── SETUP.md              # Google Calendar setup guide
```

## Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icon library
- **Google Calendar API** - Calendar integration
- **localStorage** - Data persistence

## How It Works

### Schedule View
1. Create projects with tasks and time estimates
2. Activate projects you want to work on
3. The algorithm schedules all active tasks across the week
4. Each day is capped at 10 hours
5. Tasks are sorted by size (largest first) for optimal packing
6. Mark tasks complete as you finish them

### Calendar View
1. Browse months with navigation buttons
2. Click any day to add an event
3. Connect to Google Calendar to sync events
4. Events show as colored badges (purple = local, blue = Google)
5. See up to 3 events per day, with overflow indicator

## Data Storage

All data is stored in your browser's localStorage:
- `workcontrol-projects` - Your projects and tasks
- `workcontrol-active-projects` - Currently active projects
- `workcontrol-calendar-events` - Local calendar events
- `google-calendar-client-id` - Your Google API Client ID (optional)
- `google-calendar-api-key` - Your Google API Key (optional)

## Browser Compatibility

Works in all modern browsers with JavaScript and localStorage enabled:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Privacy

- No data leaves your browser (except Google Calendar sync if enabled)
- No analytics or tracking
- No server-side storage
- All processing happens client-side

## Contributing

This is a personal project, but suggestions and improvements are welcome!

## License

MIT License - Feel free to use and modify

---

**Build your empire, one 10-hour day at a time!** 🚀