import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;
  constructor(private configService: ConfigService) {}
  showDynamicComponent(): void {
    this.configService.getConfigComponents().forEach(async (config) => {
      const componentInstance = await config.component();
    });
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}
