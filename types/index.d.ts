import { install } from '../src/lib'
import {
  DemoPanel as DemoPanelComponent,
  DemoHeader as DemoHeaderComponent,
} from '../src/lib'

declare const DemoifyUI: {
  install: typeof install
}

declare const DemoPanel: typeof DemoPanelComponent
declare const DemoHeader: typeof DemoHeaderComponent

export default DemoifyUI

export { DemoPanel, DemoHeader }
