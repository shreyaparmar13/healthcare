import React, { useState } from 'react';
import { Search, Bell, Plus, ChevronLeft, ChevronRight, Heart, User, Settings, Calendar, BarChart3, MessageCircle, HelpCircle, Clock, Eye, Stethoscope, Brain } from 'lucide-react';

// Mock data
const healthMetrics = [
  { id: 1, type: 'Lungs', date: '26 Oct 2021', progress: 80, color: 'bg-red-500' },
  { id: 2, type: 'Teeth', date: '26 Oct 2021', progress: 65, color: 'bg-teal-400' },
  { id: 3, type: 'Bone', date: '29 Oct 2021', progress: 45, color: 'bg-orange-400' }
];

const appointments = {
  today: [
    { id: 1, type: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson', icon: '🦷' },
    { id: 2, type: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones', icon: '💪' }
  ],
  thursday: [
    { id: 3, type: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
    { id: 4, type: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
  ],
  saturday: [
    { id: 5, type: 'Cardiologist', time: '12:00 AM', doctor: 'Dr. Smith', icon: '❤️' },
    { id: 6, type: 'Neurologist', time: '16:00 PM', doctor: 'Dr. Johnson', icon: '🧠' }
  ]
};

const activityData = [
  { day: 'Mon', value: 80 },
  { day: 'Tues', value: 95 },
  { day: 'Wed', value: 60 },
  { day: 'Thurs', value: 100 },
  { day: 'Fri', value: 75 },
  { day: 'Sat', value: 85 },
  { day: 'Sun', value: 70 }
];

const calendarData = {
  month: 'October 2021',
  dates: [
    { date: 25, day: 'Mon', times: ['10:00', '11:00', '12:00'] },
    { date: 26, day: 'Tues', times: ['08:00', '09:00', '10:00'] },
    { date: 27, day: 'Wed', times: ['12:00', '13:00'] },
    { date: 28, day: 'Thurs', times: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', times: ['14:00', '16:00', '15:00'] },
    { date: 30, day: 'Sat', times: ['12:00', '14:00'], highlight: true },
    { date: 31, day: 'Sun', times: ['09:00', '16:00', '11:00'] }
  ]
};

// Components
const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: User },
    { id: 'statistics', label: 'Statistics', icon: BarChart3 },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ];

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-teal-400">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      
      <div className="px-4 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">General</p>
        <nav className="space-y-2">
          {menuItems.slice(0, 5).map(item => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                item.id === activeItem 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="px-4 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Apps</p>
        <nav className="space-y-2">
          {menuItems.slice(5).map(item => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                item.id === activeItem 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 mr-3" />
          Setting
        </button>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
    <div className="flex items-center space-x-4">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
        />
      </div>
    </div>
    
    <div className="flex items-center space-x-4">
      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        <Bell className="w-5 h-5" />
      </button>
      <div className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center">
        <User className="w-6 h-6 text-white" />
      </div>
      <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const AnatomySection = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-center h-96 relative">
      <div className="relative">
        <div className="w-64 h-80 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
          <div className="text-8xl">🧍‍♂️</div>
        </div>
        
        {/* Health indicators */}
        <div className="absolute top-16 -left-8">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            Healthy Heart
          </div>
        </div>
        
        <div className="absolute bottom-16 -left-12">
          <button className="bg-teal-400 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-500">
            Healthy Log
          </button>
        </div>
      </div>
    </div>
  </div>
);

const HealthMetrics = () => (
  <div className="space-y-4">
    {healthMetrics.map(metric => (
      <div key={metric.id} className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className={`w-8 h-8 ${metric.color} rounded-lg flex items-center justify-center`}>
            {metric.type === 'Lungs' && '🫁'}
            {metric.type === 'Teeth' && '🦷'}
            {metric.type === 'Bone' && '🦴'}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{metric.type}</h3>
            <p className="text-sm text-gray-500">Date: {metric.date}</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${metric.color} h-2 rounded-full`} 
            style={{ width: `${metric.progress}%` }}
          ></div>
        </div>
      </div>
    ))}
    <button className="text-purple-600 text-sm font-medium hover:underline">
      Details →
    </button>
  </div>
);

const Calendar = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">This Week</span>
        <ChevronLeft className="w-4 h-4 text-gray-400" />
      </div>
      <h3 className="font-semibold text-gray-800">{calendarData.month}</h3>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </div>
    
    <div className="grid grid-cols-7 gap-1">
      {calendarData.dates.map(dateInfo => (
        <div key={dateInfo.date} className="text-center">
          <div className="text-xs text-gray-500 mb-1">{dateInfo.day}</div>
          <div className={`text-lg font-semibold mb-2 ${
            dateInfo.highlight ? 'text-purple-600' : 'text-gray-800'
          }`}>
            {dateInfo.date}
          </div>
          <div className="space-y-1">
            {dateInfo.times.map((time, idx) => (
              <div key={idx} className={`text-xs px-1 py-0.5 rounded ${
                dateInfo.highlight && idx === 0 ? 'bg-purple-100 text-purple-600' : 'text-gray-500'
              }`}>
                {time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AppointmentCard = ({ appointment, variant = 'default' }) => (
  <div className={`p-4 rounded-xl ${
    variant === 'primary' ? 'bg-purple-600 text-white' : 
    variant === 'secondary' ? 'bg-gray-100 text-gray-600' :
    'bg-white border border-gray-200'
  }`}>
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-semibold text-sm">{appointment.type}</h4>
        <p className="text-sm opacity-80">{appointment.time}</p>
        {appointment.doctor && (
          <p className="text-xs opacity-70 mt-1">{appointment.doctor}</p>
        )}
      </div>
      <div className="text-lg">{appointment.icon}</div>
    </div>
  </div>
);

const UpcomingSchedule = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <h3 className="font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
    
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">Today</h4>
        <div className="grid grid-cols-2 gap-3">
          {appointments.today.map((apt, idx) => (
            <AppointmentCard 
              key={apt.id} 
              appointment={apt} 
              variant={idx === 0 ? 'primary' : 'secondary'} 
            />
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">On Thursday</h4>
        <div className="grid grid-cols-2 gap-3">
          {appointments.thursday.map((apt) => (
            <AppointmentCard key={apt.id} appointment={apt} />
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-2">On Saturday</h4>
        <div className="grid grid-cols-2 gap-3">
          {appointments.saturday.map((apt) => (
            <AppointmentCard key={apt.id} appointment={apt} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ActivityChart = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-800">Activity</h3>
      <span className="text-sm text-gray-500">3 appointments on this week</span>
    </div>
    
    <div className="flex items-end justify-between h-32 space-x-2">
      {activityData.map((data, index) => (
        <div key={data.day} className="flex flex-col items-center flex-1">
          <div className="flex-1 flex items-end mb-2">
            <div 
              className={`w-8 rounded-t ${
                index === 3 ? 'bg-purple-600' : 'bg-teal-400'
              }`}
              style={{ height: `${data.value}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500">{data.day}</span>
        </div>
      ))}
    </div>
  </div>
);

const HealthcareDashboard = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Left Section - Anatomy */}
            <div className="col-span-4">
              <AnatomySection />
            </div>
            
            {/* Middle Section - Health Metrics */}
            <div className="col-span-3">
              <HealthMetrics />
            </div>
            
            {/* Right Section - Calendar and Schedule */}
            <div className="col-span-5 space-y-6">
              <Calendar />
              <UpcomingSchedule />
            </div>
            
            {/* Bottom Section - Activity Chart */}
            <div className="col-span-12">
              <ActivityChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareDashboard;