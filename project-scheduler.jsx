import React, { useState, useMemo, useEffect } from 'react';
import { CheckCircle2, Circle, Plus, X, Sparkles, TrendingUp, Calendar, Clock } from 'lucide-react';

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
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today);
    monday.setDate(diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  });

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-projects', JSON.stringify(projects));
  }, [projects]);

  // Save active project IDs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workcontrol-active-projects', JSON.stringify(activeProjectIds));
  }, [activeProjectIds]);

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

      if (remainingHours <= 0 && day.totalHours >= 9) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header with Stats */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
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
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {isActive ? '✨ Working on it' : 'Start Working'}
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
                <h2 className="text-2xl font-bold text-gray-800">This Week's Grind</h2>
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
                  <p className="text-gray-500">Toggle a project to see your schedule magic ✨</p>
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
                                  
                                  <div className={`flex items-center gap-3 mt-2 text-xs ${isToday ? 'text-white/70' : 'text-gray-600'}`}>
                                    <span className="bg-white/20 px-2 py-1 rounded-lg font-semibold">
                                      {task.hoursThisDay.toFixed(1)}h today
                                    </span>
                                    {task.isSplit && (
                                      <span className="bg-orange-500/20 text-orange-700 px-2 py-1 rounded-lg font-semibold">
                                        Split task: {task.totalTaskHours}h total
                                      </span>
                                    )}
                                  </div>
                                </div>
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
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm
          onSave={addProject}
          onCancel={() => setShowProjectForm(false)}
        />
      )}
    </div>
  );
};

const ProjectForm = ({ onSave, onCancel }) => {
  const [projectName, setProjectName] = useState('');
  const [projectColor, setProjectColor] = useState('#6366f1');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskHours, setTaskHours] = useState('');

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
        tasks
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

          {/* Add Tasks */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Break It Down Into Tasks
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

export default ProjectScheduler;