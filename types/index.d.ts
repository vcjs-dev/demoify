import { install } from '../src/lib'
import {
  DemoPanel as DemoPanelComponent,
  DemoHeader as DemoHeaderComponent,
  DemoSidebar as DemoSidebarComponent,
  DemoMain as DemoMainComponent,
  DemoContainer as DemoContainerComponent,
} from '../src/lib'

declare const DemoifyUI: {
  install: typeof install
}

declare const DemoPanel: typeof DemoPanelComponent
declare const DemoHeader: typeof DemoHeaderComponent
declare const DemoSidebar: typeof DemoSidebarComponent
declare const DemoMain: typeof DemoMainComponent
declare const DemoContainer: typeof DemoContainerComponent

export default DemoifyUI

export { DemoPanel, DemoHeader, DemoSidebar, DemoMain, DemoContainer }
