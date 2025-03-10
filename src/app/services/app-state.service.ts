// filepath: c:\Users\saulc\OneDrive\Documentos\GitHub\noecumple\src\app\services\app-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private isPageReloaded = false;

  constructor() {
    window.addEventListener('beforeunload', () => {
      this.isPageReloaded = true;
    });
  }

  public getIsPageReloaded(): boolean {
    return this.isPageReloaded;
  }

  public resetPageReloadedFlag(): void {
    this.isPageReloaded = false;
  }
}
