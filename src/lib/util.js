 export const filter = {
  all: todos => todos,
  active: todos => todos.filter(item => !item.done),
  complete: todos => todos.filter(item => item.done)
}


