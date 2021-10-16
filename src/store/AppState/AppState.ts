import { makeAutoObservable } from 'mobx';

import { PAGE_NAMES } from './types';


class AppState {
  constructor() {
    makeAutoObservable(this);
  }

  currentPage: PAGE_NAMES = PAGE_NAMES.CREATE;

  setCurrentPage = (page: PAGE_NAMES) => {
    this.currentPage = page;
  };
}

export const appState = new AppState();
