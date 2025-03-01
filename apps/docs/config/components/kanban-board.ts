import { ComponentDoc } from "../types";

export const kanbanBoardConfig: ComponentDoc = {
  name: "Kanban Board",
  description:
    "A flexible drag-and-drop Kanban board component for task management and workflow visualization. Built with react-beautiful-dnd for smooth interactions.",
  status: "beta",
  metadata: {
    sourceUrl: "https://github.com/aviris/components/tree/main/kanban-board",
    dependencies: [
      "react-beautiful-dnd@^13.1.1",
      "@hello-pangea/dnd@^16.3.0",
      "@aviris/ui@latest",
    ],
  },
  examples: [
    {
      title: "Basic Example",
      description: "Simple Kanban board with three columns and basic tasks.",
      code: `import { KanbanBoard } from "@aviris/ui/components/kanban-board"

const columns = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "1", title: "Research competitors" },
      { id: "2", title: "Design mockups" }
    ]
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "3", title: "Implement authentication" }
    ]
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "4", title: "Setup project structure" }
    ]
  }
]

export default function BasicKanban() {
  return (
    <KanbanBoard
      columns={columns}
      onTaskMove={(taskId, source, destination) => {
        console.log("Task moved:", { taskId, source, destination })
      }}
    />
  )
}`,
    },
    {
      title: "Advanced Example",
      description:
        "Kanban board with custom styling, task details, and real-time updates.",
      code: `import { KanbanBoard } from "@aviris/ui/components/kanban-board"
import { Badge } from "@aviris/ui/components/ui/badge"
import { Avatar } from "@aviris/ui/components/ui/avatar"

const columns = [
  {
    id: "backlog",
    title: "Backlog",
    tasks: [
      {
        id: "task-1",
        title: "Implement dark mode",
        labels: ["feature", "ui"],
        dueDate: "2024-03-20",
        assignee: {
          name: "John Doe",
          avatar: "/avatars/john.png"
        }
      }
    ]
  }
  // ... other columns
]

export default function AdvancedKanban() {
  const handleTaskMove = (taskId, source, destination) => {
    // Update task position in your state management
  }

  const handleTaskUpdate = (task) => {
    // Handle real-time updates
  }

  return (
    <KanbanBoard
      columns={columns}
      onTaskMove={handleTaskMove}
      customStyles={{
        column: "bg-secondary/50 rounded-lg p-4",
        task: "bg-background shadow-sm hover:shadow-md"
      }}
      renderTask={(task) => (
        <div className="p-4 space-y-2">
          <h3 className="font-medium">{task.title}</h3>
          <div className="flex gap-2">
            {task.labels?.map(label => (
              <Badge key={label} variant="outline">{label}</Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {task.dueDate}
            </span>
            <Avatar
              src={task.assignee.avatar}
              alt={task.assignee.name}
            />
          </div>
        </div>
      )}
      enableRealtime={true}
      onTaskUpdate={handleTaskUpdate}
    />
  )
}`,
    },
  ],
  props: [
    {
      name: "columns",
      type: `Array<{
  id: string;
  title: string;
  tasks: Array<{
    id: string;
    title: string;
    [key: string]: any;
  }>;
}>`,
      default: "[]",
      description:
        "Array of columns with their tasks. Each task can have additional custom properties.",
      required: true,
    },
    {
      name: "onTaskMove",
      type: "(taskId: string, source: DropResult, destination: DropResult) => void",
      default: "undefined",
      description:
        "Callback function when a task is moved between columns. Provides source and destination information.",
      required: true,
    },
    {
      name: "customStyles",
      type: "{ column?: string; task?: string }",
      default: "{}",
      description: "Custom Tailwind CSS classes for styling columns and tasks.",
    },
    {
      name: "renderTask",
      type: "(task: Task) => ReactNode",
      default: "undefined",
      description:
        "Custom render function for task items. Use this to create custom task card layouts.",
    },
    {
      name: "enableRealtime",
      type: "boolean",
      default: "false",
      description:
        "Enable real-time updates for collaborative features. Requires a backend implementation.",
    },
    {
      name: "onTaskUpdate",
      type: "(task: Task) => void",
      default: "undefined",
      description:
        "Callback function when a task is updated through real-time events.",
    },
  ],
};
