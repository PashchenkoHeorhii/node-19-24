// Задача
interface Task {
  execute: () => {};
}

// Різні типи макрозадач
interface MacroTasks {
  parser: Task[];
  resources: Task[];
  domManipulation: Task[];
  events: Task[];
  callbacks: Task[];
}

// Типізація для самого Event Loop'а
interface EventLoop {
  macrotasks: MacroTasks;
  microtasks: Task[];
  nextMacrotask: () => Task | null;
  needRender: () => boolean;
  render: () => void;
}

// Змінна, яка змінюється в залежності від того, чи є синхронні оперції в callstack
let isCallStackEmpty = false;

const eventLoop: EventLoop = {
  macrotasks: {
    parser: [], // Парсери HTML, CSS, A11y Tree
    resources: [], // Подгрузка ресурсів
    domManipulation: [], // Маніпуляції с DOM
    events: [], // Івенти UI
    callbacks: [], // Колбеки з setTimeout і так далі
  },

  microtasks: [],

  // Віддає нам наступну задачу із списку макрозадач
  nextMacrotask() {
    for (const macrotaskSection in this.macrotasks) {
      const queue =
        this.macrotasks[macrotaskSection as keyof typeof this.macrotasks];

      if (queue.length) {
        return queue.shift() ?? null;
      }
    }
    return null;
  },

  needRender: () => false,
  render() {},
};

// Event loop почав роботу
while (true) {
  // Перевіряє, чи всі синхронні таски виконались
  if (!isCallStackEmpty) {
    continue;
  }

  // Виконуються всі задачі із мікротасок
  for (const task of eventLoop.microtasks) {
    task.execute();
  }
  eventLoop.microtasks = [];

  // Після обираємо наступну за чергою макротаску
  const task = eventLoop.nextMacrotask();
  if (task) {
    task.execute();
  }

  // Перевірка чи треба ре-рендерити сторінку
  if (eventLoop.needRender()) {
    eventLoop.render();
  }
}
