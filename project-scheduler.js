// Get React hooks from global React object
const { useState, useMemo, useEffect } = React;

// Simple SVG Icon Components
const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const Circle = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const Plus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Sparkles = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const TrendingUp = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const Calendar = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Clock = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const FileText = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const Upload = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const Play = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const Pause = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const Square = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const ProjectScheduler = () => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('workcontrol-projects');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeProjectIds, setActiveProjectIds] = useState(() => {
    const saved = localStorage.getItem('workcontrol-active-projects');
    return saved ? JSON.parse(saved) : [];
  });
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [viewMode, setViewMode] = useState('schedule'); // 'schedule' or 'calendar'
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarEvents, setCalendarEvents] = useState(() => {
    const saved = localStorage.getItem('workcontrol-calendar-events');
    return saved ? JSON.parse(saved) : [];
  });
  const [googleCalendarEvents, setGoogleCalendarEvents] = useState([]);
  const [isGoogleConnected, setIsGoogleConnected] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today);
    monday.setDate(diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  });

  // Timer state
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [timerStartTime, setTimerStartTime] = useState(null);
  const [taskTimeLogs, setTaskTimeLogs] = useState(() => {
    const saved = localStorage.getItem('workcontrol-time-logs');
    return saved ? JSON.parse(saved) : [];
  });

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-projects', JSON.stringify(projects));
  }, [projects]);

  // Save active project IDs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-active-projects', JSON.stringify(activeProjectIds));
  }, [activeProjectIds]);

  // Save calendar events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-calendar-events', JSON.stringify(calendarEvents));
  }, [calendarEvents]);

  // Save time logs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-time-logs', JSON.stringify(taskTimeLogs));
  }, [taskTimeLogs]);

  // Timer tick effect
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - timerStartTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerStartTime]);

  const weekDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  }, [currentWeekStart]);

  const scheduleWeek = useMemo(() => {
    const schedule = weekDays.map(date => ({
      date,
      tasks: [],
      totalHours: 0
    }));

    const allTasks = [];
    activeProjectIds.forEach(projId => {
      const project = projects.find(p => p.id === projId);
      if (project) {
        project.tasks.forEach(task => {
          if (!task.completed) {
            allTasks.push({
              ...task,
              projectId: projId,
              projectName: project.name,
              projectColor: project.color
            });
          }
        });
      }
    });

    allTasks.sort((a, b) => b.hours - a.hours);

    let dayIndex = 0;
    for (const task of allTasks) {
      if (dayIndex >= schedule.length) break;

      let remainingHours = task.hours;
      const taskId = `${task.projectId}-${task.id}`;

      while (remainingHours > 0 && dayIndex < schedule.length) {
        const day = schedule[dayIndex];
        const availableHours = 10 - day.totalHours;

        if (availableHours <= 0) {
          dayIndex++;
          continue;
        }

        const hoursToAdd = Math.min(remainingHours, availableHours);

        day.tasks.push({
          ...task,
          taskId,
          hoursThisDay: hoursToAdd,
          isSplit: task.hours > 10,
          totalTaskHours: task.hours
        });

        day.totalHours += hoursToAdd;
        remainingHours -= hoursToAdd;

        if (remainingHours > 0) {
          dayIndex++;
        }
      }

      if (remainingHours <= 0 && dayIndex < schedule.length && schedule[dayIndex].totalHours >= 9) {
        dayIndex++;
      }
    }

    return schedule;
  }, [projects, activeProjectIds, weekDays]);

  const stats = useMemo(() => {
    const totalTasks = projects.reduce((sum, p) => sum + p.tasks.length, 0);
    const completedTasks = projects.reduce((sum, p) => sum + p.tasks.filter(t => t.completed).length, 0);
    const totalHours = projects.reduce((sum, p) => sum + p.tasks.reduce((s, t) => s + t.hours, 0), 0);
    const completedHours = projects.reduce((sum, p) => sum + p.tasks.filter(t => t.completed).reduce((s, t) => s + t.hours, 0), 0);
    
    return { totalTasks, completedTasks, totalHours, completedHours };
  }, [projects]);

  const addProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Date.now(),
      createdAt: new Date()
    };
    setProjects([...projects, newProject]);

    // Auto-activate projects created from documents
    if (projectData.fromDocument) {
      setActiveProjectIds([...activeProjectIds, newProject.id]);
      alert(`✓ Project "${newProject.name}" created and activated!\n\n${newProject.tasks.length} tasks scheduled across your week.\n\nCheck "This Week's Grind" to see your daily schedule.`);
    }

    setShowProjectForm(false);
  };

  const toggleProject = (projectId) => {
    setActiveProjectIds(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const toggleTaskComplete = (projectId, taskId) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tasks: project.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        };
      }
      return project;
    }));
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
    setActiveProjectIds(activeProjectIds.filter(id => id !== projectId));
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + (direction * 7));
    setCurrentWeekStart(newDate);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentMonth(newDate);
  };

  const addCalendarEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: Date.now(),
      createdAt: new Date()
    };
    setCalendarEvents([...calendarEvents, newEvent]);
    setShowEventForm(false);
    setSelectedDate(null);
  };

  const deleteCalendarEvent = (eventId) => {
    setCalendarEvents(calendarEvents.filter(e => e.id !== eventId));
  };

  const connectGoogleCalendar = async () => {
    // Google Calendar OAuth flow
    try {
      const CLIENT_ID = localStorage.getItem('google-calendar-client-id');
      const API_KEY = localStorage.getItem('google-calendar-api-key');

      if (!CLIENT_ID || !API_KEY) {
        alert('Please set up Google Calendar credentials first. Check the Settings button.');
        return;
      }

      // Initialize Google API client
      window.gapi.load('client:auth2', async () => {
        await window.gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar'
        });

        const authInstance = window.gapi.auth2.getAuthInstance();
        await authInstance.signIn();
        setIsGoogleConnected(true);
        loadGoogleCalendarEvents();
      });
    } catch (error) {
      console.error('Error connecting to Google Calendar:', error);
      alert('Failed to connect to Google Calendar. Please check your credentials.');
    }
  };

  const loadGoogleCalendarEvents = async () => {
    try {
      const response = await window.gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 100,
        orderBy: 'startTime'
      });
      setGoogleCalendarEvents(response.result.items || []);
    } catch (error) {
      console.error('Error loading Google Calendar events:', error);
    }
  };

  const addToGoogleCalendar = async (eventData) => {
    try {
      const event = {
        summary: eventData.title,
        description: eventData.description || '',
        start: {
          dateTime: new Date(eventData.date).toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        end: {
          dateTime: new Date(new Date(eventData.date).getTime() + 60 * 60 * 1000).toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      };

      await window.gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event
      });

      loadGoogleCalendarEvents();
      alert('Event added to Google Calendar!');
    } catch (error) {
      console.error('Error adding to Google Calendar:', error);
      alert('Failed to add event to Google Calendar');
    }
  };

  // Document parsing helper for project creation
  const parseDocumentContent = (content, filename) => {
    // Parse document to extract tasks/steps
    const lines = content.split('\n').filter(line => line.trim());
    const tasks = [];
    let currentWeek = null;

    lines.forEach((line, index) => {
      // Detect week headers (e.g., "Week 1", "WEEK 2", etc.)
      const weekMatch = line.match(/week\s+(\d+)/i);
      if (weekMatch) {
        currentWeek = parseInt(weekMatch[1]);
        return;
      }

      // Detect task lines (numbered, bullet points, or starts with action words)
      const taskPattern = /^(\d+\.|[-*•]|\b(create|build|implement|design|test|deploy|add|fix|update|write)\b)/i;

      if (taskPattern.test(line.trim())) {
        // Extract task text
        let taskText = line.replace(/^(\d+\.|[-*•])\s*/, '').trim();

        // Estimate hours based on task complexity keywords
        let estimatedHours = 2; // default
        if (/complex|integrate|architecture|system/i.test(taskText)) {
          estimatedHours = 8;
        } else if (/implement|build|create|develop/i.test(taskText)) {
          estimatedHours = 4;
        } else if (/test|review|document/i.test(taskText)) {
          estimatedHours = 2;
        }

        tasks.push({
          id: `doc-${Date.now()}-${index}`,
          text: taskText,
          week: currentWeek,
          hours: estimatedHours,
          completed: false,
          lineNumber: index + 1
        });
      }
    });

    return tasks;
  };

  // Timer control functions
  const startTimer = (projectId, taskId) => {
    setIsTimerRunning(true);
    setCurrentProjectId(projectId);
    setCurrentTaskId(taskId);
    setTimerStartTime(Date.now());
    setElapsedTime(0);
  };

  const pauseTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      // Save the time log
      const newLog = {
        id: Date.now(),
        projectId: currentProjectId,
        taskId: currentTaskId,
        seconds: elapsedTime,
        timestamp: new Date().toISOString()
      };
      setTaskTimeLogs([...taskTimeLogs, newLog]);
    }
  };

  const stopTimer = () => {
    if (isTimerRunning || elapsedTime > 0) {
      // Save the time log if there's elapsed time
      if (elapsedTime > 0) {
        const newLog = {
          id: Date.now(),
          projectId: currentProjectId,
          taskId: currentTaskId,
          seconds: elapsedTime,
          timestamp: new Date().toISOString()
        };
        setTaskTimeLogs([...taskTimeLogs, newLog]);
      }
      // Reset timer
      setIsTimerRunning(false);
      setElapsedTime(0);
      setCurrentTaskId(null);
      setCurrentProjectId(null);
      setTimerStartTime(null);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTotalTimeForTask = (projectId, taskId) => {
    const logs = taskTimeLogs.filter(log =>
      log.projectId === projectId && log.taskId === taskId
    );
    const totalSeconds = logs.reduce((sum, log) => sum + log.seconds, 0);
    return totalSeconds;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header with Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                <Sparkles className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Project Scheduler
                </h1>
                <p className="text-gray-600 mt-1">Build your empire, one 10-hour day at a time 🚀</p>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
              <button
                onClick={() => setViewMode('schedule')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  viewMode === 'schedule'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Clock className="inline mr-2" size={18} />
                Schedule
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  viewMode === 'calendar'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Calendar className="inline mr-2" size={18} />
                Calendar
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{projects.length}</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stats.completedTasks}/{stats.totalTasks}</p>
                  <p className="text-sm text-gray-600">Tasks Done</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{stats.completedHours}h</p>
                  <p className="text-sm text-gray-600">Hours Crushed</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">{activeProjectIds.length}</p>
                  <p className="text-sm text-gray-600">Active Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Schedule or Calendar View */}
        {viewMode === 'schedule' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Project List */}
            <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Projects</h2>
                <button
                  onClick={() => setShowProjectForm(true)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Plus size={20} />
                </button>
              </div>

              {projects.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-gray-400" size={32} />
                  </div>
                  <p className="text-gray-500 mb-4">No projects yet!</p>
                  <p className="text-sm text-gray-400">Click + to start crushing goals</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {projects.map(project => {
                    const isActive = activeProjectIds.includes(project.id);
                    const completedTasks = project.tasks.filter(t => t.completed).length;
                    const totalTasks = project.tasks.length;
                    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
                    
                    return (
                      <div
                        key={project.id}
                        className={`relative overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-400 shadow-xl scale-105' 
                            : 'bg-white border-2 border-gray-200 hover:shadow-lg'
                        }`}
                      >
                        {isActive && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-bl-xl font-semibold">
                            ACTIVE
                          </div>
                        )}
                        
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className="w-4 h-4 rounded-full shadow-lg"
                                style={{ backgroundColor: project.color }}
                              />
                              <h3 className="font-bold text-gray-800">{project.name}</h3>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="mb-2">
                              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                <span>{completedTasks}/{totalTasks} tasks</span>
                                <span className="font-semibold">{Math.round(progress)}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 rounded-full"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            </div>

                            <p className="text-xs text-gray-500">
                              {project.tasks.reduce((sum, t) => sum + t.hours, 0)}h total
                            </p>
                          </div>
                          
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => toggleProject(project.id)}
                          className={`w-full mt-3 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                              : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {isActive ? '✨ Working on it' : '▶️ Start Working'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right: Weekly Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">This Week's Grind</h2>
                  {activeProjectIds.length > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      {activeProjectIds.length} active {activeProjectIds.length === 1 ? 'project' : 'projects'}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigateWeek(-1)}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all"
                  >
                    ←
                  </button>
                  <span className="text-sm font-semibold text-gray-700 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-xl">
                    {currentWeekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <button
                    onClick={() => navigateWeek(1)}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all"
                  >
                    →
                  </button>
                </div>
              </div>

              {activeProjectIds.length === 0 ? (
                <div className="text-center py-20">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-indigo-500" size={40} />
                  </div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">Ready to work?</p>
                  <p className="text-gray-500 mb-4">Click "Start Working" on a project on the left to see your schedule ✨</p>
                  {projects.length === 0 && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl max-w-md mx-auto">
                      <p className="text-sm text-yellow-800">
                        👈 First, create a project using the + button
                      </p>
                    </div>
                  )}
                </div>
              ) : scheduleWeek.every(day => day.tasks.length === 0) ? (
                <div className="text-center py-20">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-green-500" size={40} />
                  </div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">All Done! 🎉</p>
                  <p className="text-gray-500">
                    {projects.filter(p => activeProjectIds.includes(p.id)).every(p => p.tasks.every(t => t.completed))
                      ? "All tasks completed! Time to add more or start a new project."
                      : "No incomplete tasks scheduled for this week."}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {scheduleWeek.map((day, idx) => {
                    const isToday = day.date.toDateString() === new Date().toDateString();
                    const fillPercentage = (day.totalHours / 10) * 100;
                    
                    return (
                      <div
                        key={idx}
                        className={`relative overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
                          isToday 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 shadow-2xl scale-105' 
                            : 'bg-white border-2 border-gray-200'
                        }`}
                      >
                        {isToday && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" />
                        )}
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className={`text-lg font-bold ${isToday ? 'text-white' : 'text-gray-800'}`}>
                              {day.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                            </h3>
                            {isToday && (
                              <span className="inline-block bg-yellow-400 text-purple-900 text-xs px-3 py-1 rounded-full font-bold mt-1">
                                TODAY 🔥
                              </span>
                            )}
                          </div>
                          
                          <div className={`flex items-center gap-2 ${isToday ? 'text-white' : 'text-gray-700'}`}>
                            <Clock size={20} />
                            <span className="text-xl font-bold">{day.totalHours.toFixed(1)}h</span>
                            <span className="text-sm opacity-70">/ 10h</span>
                          </div>
                        </div>

                        {/* Hours Progress Bar */}
                        <div className="mb-4">
                          <div className={`h-3 rounded-full overflow-hidden ${isToday ? 'bg-white/20' : 'bg-gray-200'}`}>
                            <div
                              className={`h-full transition-all duration-500 rounded-full ${
                                isToday 
                                  ? 'bg-gradient-to-r from-yellow-300 to-pink-300'
                                  : fillPercentage >= 100 
                                    ? 'bg-gradient-to-r from-red-400 to-red-500'
                                    : 'bg-gradient-to-r from-green-400 to-emerald-500'
                              }`}
                              style={{ width: `${Math.min(fillPercentage, 100)}%` }}
                            />
                          </div>
                        </div>

                        {day.tasks.length === 0 ? (
                          <p className={`text-sm ${isToday ? 'text-white/80' : 'text-gray-400'}`}>
                            No tasks scheduled - free day! 🎉
                          </p>
                        ) : (
                          <div className="space-y-3">
                            {day.tasks.map((task, taskIdx) => (
                              <div
                                key={taskIdx}
                                className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-102 ${
                                  isToday 
                                    ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                                    : 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg'
                                }`}
                              >
                                <button
                                  onClick={() => toggleTaskComplete(task.projectId, task.id)}
                                  className="mt-1 transition-transform hover:scale-125"
                                >
                                  {task.completed ? (
                                    <CheckCircle2 size={24} className="text-green-500" />
                                  ) : (
                                    <Circle size={24} className={isToday ? 'text-white/60' : 'text-gray-300'} />
                                  )}
                                </button>
                                
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div
                                      className="w-3 h-3 rounded-full shadow-lg"
                                      style={{ backgroundColor: task.projectColor }}
                                    />
                                    <span className={`text-xs font-semibold ${isToday ? 'text-white/80' : 'text-gray-500'}`}>
                                      {task.projectName}
                                    </span>
                                  </div>
                                  
                                  <p className={`font-semibold ${
                                    task.completed
                                      ? 'line-through opacity-60'
                                      : ''
                                  } ${isToday ? 'text-white' : 'text-gray-800'}`}>
                                    {task.name}
                                  </p>

                                  <div className={`flex items-center gap-2 mt-2 text-xs ${isToday ? 'text-white/70' : 'text-gray-600'} flex-wrap`}>
                                    <span className="bg-white/20 px-2 py-1 rounded-lg font-semibold">
                                      {task.hoursThisDay.toFixed(1)}h today
                                    </span>
                                    {task.isSplit && (
                                      <span className="bg-orange-500/20 text-orange-700 px-2 py-1 rounded-lg font-semibold">
                                        Split task: {task.totalTaskHours}h total
                                      </span>
                                    )}
                                    {getTotalTimeForTask(task.projectId, task.id) > 0 && (
                                      <span className="bg-green-500/20 text-green-700 px-2 py-1 rounded-lg font-semibold flex items-center gap-1">
                                        <Clock size={12} />
                                        {formatTime(getTotalTimeForTask(task.projectId, task.id))} worked
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Timer Controls */}
                                {!task.completed && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (isTimerRunning && currentTaskId === task.id && currentProjectId === task.projectId) {
                                        pauseTimer();
                                      } else if (elapsedTime > 0 && currentTaskId === task.id && currentProjectId === task.projectId) {
                                        setIsTimerRunning(true);
                                        setTimerStartTime(Date.now() - (elapsedTime * 1000));
                                      } else {
                                        if (isTimerRunning || elapsedTime > 0) {
                                          stopTimer();
                                        }
                                        startTimer(task.projectId, task.id);
                                      }
                                    }}
                                    className={`mt-2 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                                      isTimerRunning && currentTaskId === task.id && currentProjectId === task.projectId
                                        ? 'bg-yellow-400 text-yellow-900 shadow-lg animate-pulse'
                                        : isToday
                                        ? 'bg-white/20 text-white hover:bg-white/30'
                                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                    }`}
                                    title={isTimerRunning && currentTaskId === task.id && currentProjectId === task.projectId ? "Timer running - click to pause" : "Start timer"}
                                  >
                                    {isTimerRunning && currentTaskId === task.id && currentProjectId === task.projectId ? (
                                      <Pause size={16} />
                                    ) : (
                                      <Play size={16} />
                                    )}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        ) : (
          <CalendarView
            currentMonth={currentMonth}
            navigateMonth={navigateMonth}
            calendarEvents={calendarEvents}
            googleCalendarEvents={googleCalendarEvents}
            isGoogleConnected={isGoogleConnected}
            onDayClick={(date) => {
              setSelectedDate(date);
              setShowEventForm(true);
            }}
            onDeleteEvent={deleteCalendarEvent}
            onConnectGoogle={connectGoogleCalendar}
          />
        )}
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm
          onSave={addProject}
          onCancel={() => setShowProjectForm(false)}
          parseDocumentContent={parseDocumentContent}
        />
      )}

      {/* Event Form Modal */}
      {showEventForm && (
        <EventForm
          selectedDate={selectedDate}
          onSave={(eventData) => {
            addCalendarEvent(eventData);
            if (isGoogleConnected) {
              addToGoogleCalendar(eventData);
            }
          }}
          onCancel={() => {
            setShowEventForm(false);
            setSelectedDate(null);
          }}
          isGoogleConnected={isGoogleConnected}
        />
      )}

      {/* Floating Timer */}
      {(isTimerRunning || elapsedTime > 0) && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-6 z-50 animate-slideUp border-4 border-white">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={20} className="text-white" />
              <h3 className="font-bold text-lg">Timer Active</h3>
            </div>

            {currentTaskId && currentProjectId && (
              <div className="mb-4">
                <p className="text-white/80 text-sm mb-1">Current Task:</p>
                <p className="font-semibold text-white">
                  {projects.find(p => p.id === currentProjectId)?.tasks.find(t => t.id === currentTaskId)?.name || 'Task'}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {projects.find(p => p.id === currentProjectId)?.name || 'Project'}
                </p>
              </div>
            )}

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
              <p className="text-4xl font-bold text-white text-center font-mono tracking-wider">
                {formatTime(elapsedTime)}
              </p>
            </div>

            <div className="flex gap-2">
              {isTimerRunning ? (
                <button
                  onClick={pauseTimer}
                  className="flex-1 bg-white text-indigo-600 px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <Pause size={20} />
                  Pause
                </button>
              ) : elapsedTime > 0 && (
                <button
                  onClick={() => {
                    setIsTimerRunning(true);
                    setTimerStartTime(Date.now() - (elapsedTime * 1000));
                  }}
                  className="flex-1 bg-white text-indigo-600 px-4 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  Resume
                </button>
              )}
              <button
                onClick={stopTimer}
                className="flex-1 bg-red-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2"
              >
                <Square size={20} />
                Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectForm = ({ onSave, onCancel, parseDocumentContent }) => {
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState('#6366f1');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskHours, setTaskHours] = useState('');
  const [fromDocument, setFromDocument] = useState(false);
  const fileInputRef = React.createRef();

  const handleDocumentUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const parsedTasks = parseDocumentContent(content, file.name);

      // Convert parsed tasks to project tasks format
      const projectTasks = parsedTasks.map(task => ({
        id: Date.now() + Math.random(),
        name: task.text,
        hours: task.hours,
        completed: false,
        week: task.week
      }));

      setTasks(projectTasks);
      setFromDocument(true);
      if (!projectName) {
        setProjectName(file.name.replace(/\.[^/.]+$/, "")); // Remove file extension
      }
    };

    reader.readAsText(file);
  };

  const colors = [
    { color: '#6366f1', name: 'Indigo' },
    { color: '#8b5cf6', name: 'Purple' },
    { color: '#ec4899', name: 'Pink' },
    { color: '#f59e0b', name: 'Orange' },
    { color: '#10b981', name: 'Green' },
    { color: '#3b82f6', name: 'Blue' },
    { color: '#ef4444', name: 'Red' },
    { color: '#14b8a6', name: 'Teal' }
  ];

  const addTask = () => {
    if (taskName.trim() && taskHours) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: taskName.trim(),
          hours: parseFloat(taskHours),
          completed: false
        }
      ]);
      setTaskName('');
      setTaskHours('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleSave = () => {
    if (projectName.trim() && tasks.length > 0) {
      onSave({
        name: projectName.trim(),
        color: projectColor,
        tasks,
        fromDocument
      });
    }
  };

  const totalHours = tasks.reduce((sum, task) => sum + task.hours, 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-t-3xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold text-white">Create New Project</h2>
            <button
              onClick={onCancel}
              className="text-white/80 hover:text-white hover:rotate-90 transition-all duration-300"
            >
              <X size={28} />
            </button>
          </div>
          <p className="text-white/80">Set up your project and break it into tasks</p>
        </div>

        <div className="p-8">
          {/* Project Name */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g., Franchise Automation 🚀"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Color Picker */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Choose Your Color
            </label>
            <div className="grid grid-cols-4 gap-3">
              {colors.map(({ color, name }) => (
                <button
                  key={color}
                  onClick={() => setProjectColor(color)}
                  className={`relative h-16 rounded-xl transition-all duration-300 hover:scale-110 ${
                    projectColor === color ? 'ring-4 ring-offset-2 ring-gray-400 scale-110' : ''
                  }`}
                  style={{ backgroundColor: color }}
                >
                  {projectColor === color && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={28} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Document Upload Option */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Upload Project Document (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-indigo-400 hover:bg-gray-50 transition-all cursor-pointer"
                 onClick={() => fileInputRef.current?.click()}>
              <div className="text-center">
                <Upload className="mx-auto text-indigo-500 mb-2" size={32} />
                <p className="text-sm text-gray-600 mb-1">
                  Click to upload a document with your project steps
                </p>
                <p className="text-xs text-gray-500">
                  Supports .txt, .md - automatically extracts tasks and time estimates
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.md"
                onChange={(e) => e.target.files[0] && handleDocumentUpload(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          {/* Add Tasks */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Break It Down Into Tasks {tasks.length > 0 && `(${tasks.length} from document)`}
            </label>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <input
                type="number"
                value={taskHours}
                onChange={(e) => setTaskHours(e.target.value)}
                placeholder="Hours"
                step="0.5"
                min="0.5"
                className="w-28 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <button
                onClick={addTask}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Plus size={24} />
              </button>
            </div>

            {tasks.length > 0 && (
              <>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {tasks.map((task, idx) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{task.name}</p>
                          <p className="text-sm text-gray-500">{task.hours} hours</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeTask(task.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Project Time</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {totalHours} hours
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Estimated Days</p>
                      <p className="text-3xl font-bold text-gray-800">
                        {(totalHours / 10).toFixed(1)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Save Button */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={!projectName.trim() || tasks.length === 0}
              className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                !projectName.trim() || tasks.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-2xl hover:scale-105'
              }`}
            >
              Create Project ✨
            </button>
            <button
              onClick={onCancel}
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarView = ({
  currentMonth,
  navigateMonth,
  calendarEvents,
  googleCalendarEvents,
  isGoogleConnected,
  onDayClick,
  onDeleteEvent,
  onConnectGoogle
}) => {
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Add empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toDateString();
    const localEvents = calendarEvents.filter(e => new Date(e.date).toDateString() === dateStr);
    const gEvents = googleCalendarEvents.filter(e => {
      const eventDate = new Date(e.start?.dateTime || e.start?.date);
      return eventDate.toDateString() === dateStr;
    }).map(e => ({
      ...e,
      title: e.summary,
      isGoogleEvent: true
    }));
    return [...localEvents, ...gEvents];
  };

  const days = getDaysInMonth();
  const today = new Date();

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex items-center gap-3">
          {!isGoogleConnected && (
            <button
              onClick={onConnectGoogle}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
            >
              Connect Google Calendar
            </button>
          )}
          {isGoogleConnected && (
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl font-semibold text-sm">
              ✓ Google Connected
            </span>
          )}
          <button
            onClick={() => navigateMonth(-1)}
            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all"
          >
            ←
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-400 hover:shadow-lg transition-all"
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold text-gray-600 py-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((date, idx) => {
          const isToday = date && date.toDateString() === today.toDateString();
          const events = date ? getEventsForDate(date) : [];

          return (
            <div
              key={idx}
              onClick={() => date && onDayClick(date)}
              className={`min-h-32 p-2 rounded-xl border-2 transition-all cursor-pointer ${
                !date
                  ? 'bg-gray-50 border-gray-100'
                  : isToday
                  ? 'bg-gradient-to-br from-indigo-100 to-purple-100 border-indigo-400 shadow-lg'
                  : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {date && (
                <>
                  <div className={`text-sm font-bold mb-2 ${isToday ? 'text-indigo-700' : 'text-gray-700'}`}>
                    {date.getDate()}
                    {isToday && <span className="ml-1 text-xs">●</span>}
                  </div>
                  <div className="space-y-1">
                    {events.slice(0, 3).map((event, eventIdx) => (
                      <div
                        key={eventIdx}
                        className={`text-xs p-1 rounded truncate ${
                          event.isGoogleEvent
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                    {events.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{events.length - 3} more
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EventForm = ({ selectedDate, onSave, onCancel, isGoogleConnected }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('09:00');

  const handleSave = () => {
    if (title.trim()) {
      const eventDate = new Date(selectedDate);
      const [hours, minutes] = time.split(':');
      eventDate.setHours(parseInt(hours), parseInt(minutes));

      onSave({
        title: title.trim(),
        description: description.trim(),
        date: eventDate.toISOString(),
        time
      });
      setTitle('');
      setDescription('');
      setTime('09:00');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full animate-slideUp">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-white">Add Event</h2>
            <button
              onClick={onCancel}
              className="text-white/80 hover:text-white hover:rotate-90 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white/80">
            {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Event Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Team Meeting"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add notes or details..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            />
          </div>

          {isGoogleConnected && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-700">
                ✓ This event will also be added to your Google Calendar
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={!title.trim()}
              className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${
                !title.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              Add Event
            </button>
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProjectScheduler is now available globally for index.html to use