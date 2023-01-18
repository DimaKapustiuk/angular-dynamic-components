import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfoComponent } from './components/info/info.component';
import { IComponent, IComponentConfig } from './config.interface';

@Injectable()
export class ConfigService {
  constructor() {}

  configs: IComponentConfig[] = [
    {
      importComponentPath: './components/info/info.component',
      componentName: 'InfoComponent',
      inputsComponent: {
        name: 'INFO COMPONENT',
        descr: 'This is Info Component for Dynamic Test',
      },
    },
    {
      importComponentPath: './components/note/note.component',
      componentName: 'NoteComponent',
      inputsComponent: {
        name: 'NOTE COMPONENT',
        descr: 'This is Note Component for Dynamic Test',
      },
    },
  ];

  getConfigComponents(): IComponent[] {
    return this.configs.map(
      ({ importComponentPath, componentName, inputsComponent }) => ({
        component: () =>
          import(`${importComponentPath}`).then((it) => it[componentName]),
        inputs: inputsComponent,
      })
    );
  }
}
