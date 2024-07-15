import { reactive } from 'vue';

export const nameStorage = reactive({
  name: localStorage.getItem('name') || '',

  addName(name) {
    this.name = name;
    localStorage.setItem('name', name); 
  },
  
  clearName() {
    this.name = '';
    localStorage.removeItem('name');
  },

  getName() {
    this.name = localStorage.getItem('name') || '';
    return this.name;
  }
});

