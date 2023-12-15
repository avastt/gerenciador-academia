import { Injectable } from '@angular/core';
import { Cliente } from './Cliente';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

 /* saveList(key: string, list: Cliente[]): void {
    const listAsString = JSON.stringify(list);
    this.storage.setItem(key, listAsString);
  } 

  getList(key: string): Cliente[] | null {
    const storedData = this.storage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData) as Cliente[];
    }

    return null;
  } */

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

}
