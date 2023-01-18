export interface IComponentConfig {
  importComponentPath: string;
  componentName: string;
  inputsComponent: any;
}

export interface IComponent {
  component: () => Promise<any>;
  inputs: any;
}
