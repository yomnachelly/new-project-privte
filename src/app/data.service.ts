// data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any = {};

  constructor() { }

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
}
