const employee = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare Monthly Report",
        description: "Prepare and submit the monthly sales report",
        date: "2026-01-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Client Follow-up",
        description: "Call client regarding pending payment",
        date: "2026-01-03",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Update CRM",
        description: "Update customer details in CRM system",
        date: "2026-01-02",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Design Homepage",
        description: "Create UI design for homepage",
        date: "2026-01-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Fix Login Bug",
        description: "Resolve login authentication issue",
        date: "2026-01-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Code Review",
        description: "Review teammate’s code",
        date: "2026-01-03",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Update Documentation",
        description: "Update API documentation",
        date: "2026-01-01",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Team Meeting",
        description: "Attend weekly team meeting",
        date: "2026-01-07",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Write Test Cases",
        description: "Write unit test cases",
        date: "2026-01-05",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Bug Fixing",
        description: "Fix reported bugs",
        date: "2026-01-04",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Database Backup",
        description: "Take weekly database backup",
        date: "2026-01-06",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Optimize Queries",
        description: "Improve slow SQL queries",
        date: "2026-01-05",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Security Audit",
        description: "Check security vulnerabilities",
        date: "2026-01-02",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Content Writing",
        description: "Write blog content",
        date: "2026-01-07",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "SEO Optimization",
        description: "Optimize website for SEO",
        date: "2026-01-04",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Social Media Post",
        description: "Create social media post",
        date: "2026-01-03",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Campaign Analysis",
        description: "Analyze ad campaign performance",
        date: "2026-01-01",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Anjali",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employee))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}

}