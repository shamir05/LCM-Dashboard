import {
  ActivitiesCard,
  AiSummary,
  CasesCard,
  EventsCard,
  KpiStat,
  TasksCard,
  Welcome,
} from '../models/dashboard.models';

export const WELCOME: Welcome = {
  greeting: 'Welcome Back!',
  userName: 'Qasim',
  date: '2026-09-01',
};

export const KPI_STATS: readonly KpiStat[] = [
  {
    id: 'active-cases',
    label: 'Active Cases',
    icon: 'suitcase',
    tone: 'brand',
    value: 53,
    format: 'number',
    trend: { direction: 'up', percent: 44 },
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: 'checklist',
    tone: 'green',
    value: 586,
    format: 'number',
    trend: { direction: 'down', percent: 14 },
  },
  {
    id: 'units-billed',
    label: 'Units Billed (Jul)',
    icon: 'file-check',
    tone: 'purple',
    value: 209,
    format: 'number',
    trend: { direction: 'down', percent: 12 },
  },
  {
    id: 'wip',
    label: 'WIP',
    icon: 'hand-coins',
    tone: 'yellow',
    value: 7270.56,
    format: 'currency',
    trend: { direction: 'up', percent: 11 },
  },
];

export const ACTIVITIES_CARD: ActivitiesCard = {
  title: 'Your Recent Activities',
  chart: {
    total: 112,
    totalLabel: 'Activities',
    periodLabel: 'This Week',
    startDate: '2026-10-12',
    endDate: '2026-10-18',
    series: [
      { key: 'task', label: 'Task' },
      { key: 'matter', label: 'Matter' },
      { key: 'document', label: 'Document' },
    ],
    days: [
      { label: 'Mon', counts: { task: 10, matter: 3, document: 5 } },
      { label: 'Tue', counts: { task: 12, matter: 8, document: 6 } },
      { label: 'Wed', counts: { task: 15, matter: 10, document: 8 } },
      { label: 'Thu', counts: { task: 8, matter: 5, document: 12 } },
      { label: 'Fri', counts: { task: 6, matter: 7, document: 5 } },
    ],
  },
  activities: [
    {
      id: 'activity-1',
      description: 'You completed an assigned task',
      timeLabel: '5 min ago',
      attachment: { kind: 'link', label: 'Prepare Hearing Documents', route: '/tasks' },
    },
    {
      id: 'activity-2',
      description: 'You created a new case',
      timeLabel: '11:32 AM',
      attachment: { kind: 'link', label: 'Ahmed vs State', route: '/matters' },
    },
    {
      id: 'activity-3',
      description: 'You uploaded a new document',
      timeLabel: '25 August, 2026',
      attachment: { kind: 'file', fileName: 'Evidence_Report.pdf' },
    },
    {
      id: 'activity-4',
      description: 'You updated the case status',
      timeLabel: '19 August, 2026',
      attachment: { kind: 'link', label: 'Patel Family Matter', route: '/matters' },
    },
    {
      id: 'activity-5',
      description: 'You uploaded a new document',
      timeLabel: '15 August, 2026',
      attachment: { kind: 'file', fileName: 'Case Summary.pdf' },
    },
  ],
};

export const CASES_CARD: CasesCard = {
  title: 'Recent Cases',
  overview: {
    title: 'Cases Overview',
    total: 53,
    totalLabel: 'Cases',
    breakdown: [
      { status: 'active', count: 4 },
      { status: 'draft', count: 3 },
    ],
  },
  cases: [
    {
      id: 'case-14124',
      caseNumber: '#14124',
      clientName: 'Marcus Albright',
      caseType: 'Criminal - Assault',
      status: 'draft',
      route: '/matters',
    },
    {
      id: 'case-23567',
      caseNumber: '#23567',
      clientName: 'Ethan Carter',
      caseType: 'Breach of Contract',
      status: 'active',
      route: '/matters',
    },
    {
      id: 'case-23876',
      caseNumber: '#23876',
      clientName: 'Liam Anderson',
      caseType: 'Property - Boundary Dispute',
      status: 'active',
      route: '/matters',
    },
    {
      id: 'case-24185',
      caseNumber: '#24185',
      clientName: 'Noah Ramirez',
      caseType: 'Employment',
      status: 'draft',
      route: '/matters',
    },
    {
      id: 'case-24494',
      caseNumber: '#24494',
      clientName: 'Oliver Thompson',
      caseType: 'Personal Injury - Auto Accident',
      status: 'draft',
      route: '/matters',
    },
  ],
};

export const AI_SUMMARY: AiSummary = {
  title: 'Ai Summary',
  summary:
    'Over the past 7 days, you created 12 new cases, completed 18 tasks, uploaded 24 documents, and recorded 31 case activities. 5 matters require your attention due to upcoming deadlines, while 3 tasks are overdue and should be reviewed today.',
};

export const EVENTS_CARD: EventsCard = {
  title: 'Upcoming Events',
  selectedDate: '2026-09-08',
  week: [
    { date: '2026-09-07', eventCount: 0 },
    { date: '2026-09-08', eventCount: 4 },
    { date: '2026-09-09', eventCount: 0 },
    { date: '2026-09-10', eventCount: 2 },
    { date: '2026-09-11', eventCount: 1 },
    { date: '2026-09-12', eventCount: 0 },
    { date: '2026-09-13', eventCount: 0 },
  ],
  events: [
    {
      id: 'event-1',
      title: 'Memorandum of Understanding',
      start: '2026-09-08T12:30:00',
      end: '2026-09-08T13:50:00',
      meetingUrl: 'https://meet.google.com/',
    },
    {
      id: 'event-2',
      title: 'Client consultation call - A brief on how to handle the case.',
      start: '2026-09-08T16:00:00',
      end: '2026-09-08T16:15:00',
      meetingUrl: 'https://meet.google.com/',
    },
    {
      id: 'event-3',
      title: 'Court filing deadline: Breach of Contract',
      start: '2026-09-08T14:30:00',
      end: '2026-09-08T17:00:00',
    },
  ],
};

export const TASKS_CARD: TasksCard = {
  title: 'Upcoming Tasks',
  overview: {
    title: 'Tasks Overview',
    total: 21,
    totalLabel: 'Total',
    breakdown: [
      { status: 'urgent', count: 2 },
      { status: 'to-do', count: 12 },
      { status: 'in-progress', count: 8 },
      { status: 'on-hold', count: 5 },
    ],
  },
  tasks: [
    {
      id: 'task-1',
      title: 'Client intake review - Reach out to client before review and lorem ipsum',
      dueDate: '2026-09-22T11:00:00',
      status: 'urgent',
    },
    {
      id: 'task-2',
      title: 'Draft settlement letter',
      dueDate: '2026-09-17T10:00:00',
      status: 'on-hold',
    },
    {
      id: 'task-3',
      title: 'Review medical records',
      dueDate: '2026-09-22T16:00:00',
      status: 'in-progress',
    },
    {
      id: 'task-4',
      title: 'File discovery response',
      dueDate: '2026-09-24T11:00:00',
      status: 'to-do',
    },
    {
      id: 'task-5',
      title: 'Draft settlement letter',
      dueDate: '2026-09-17T10:00:00',
      status: 'on-hold',
    },
  ],
};
