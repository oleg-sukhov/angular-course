import { Injectable } from '@angular/core';

export class CountService {
  count: number = 0;

  constructor() { }

  increment() {
    this.count++;
  }
}
