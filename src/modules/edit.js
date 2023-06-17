import { tasks } from './add.js';

import remove from './remove.js';

export function edit(event) {
  const label = document.querySelectorAll('.listlabel');
  if (event.key === 'Enter' || event.key === 'Escape') {
    const inputvalue = this.value;
    const index = Array.from(label).indexOf(event.target);
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    const div = document.querySelectorAll('#style');
    label[index].value = inputvalue;
    label[index].blur();
    div[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    icon[index].style.display = 'block';
    hide[index].style.display = 'none';
    tasks[index].description = label[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}

export function outclick() {
  const list = document.querySelector('body');
  const listner = (event) => {
    const label = document.querySelectorAll('.listlabel');
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    const div = document.querySelectorAll('#style');
    const index = Array.from(label).indexOf(this);
    hide[index].removeEventListener('click', remove);
    if (event.target !== this) {
      const inputvalue = this.value;
      label[index].value = inputvalue;
      tasks[index].description = label[index].value;
      localStorage.setItem('array', JSON.stringify(tasks));
      div[index].style.backgroundColor = '#fff';
      this.style.backgroundColor = '#fff';
      icon[index].style.display = 'block';
      hide[index].style.display = 'none';
      list.removeEventListener('click', listner);
      setTimeout(hide[index].addEventListener('click', remove), 2000);
    } else if (event.target === this) {
      div[index].style.backgroundColor = 'red';
      this.style.backgroundColor = 'red';
      icon[index].style.display = 'none';
      hide[index].style.display = 'block';
    }
  };
  list.addEventListener('click', listner);
}