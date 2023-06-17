export const tasks = JSON.parse(localStorage.getItem('array')) || [];

export const add = () => {
  const input = document.querySelector('.addinput');
  const removespaces = input.value.trim();
  if ((removespaces.length !== 0)) {
    const obj = {
      description: `${input.value}`,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};