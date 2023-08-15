import { install } from '../src/lib'
import { DemoPanel as DemoPanelComponent } from '../src/lib'

declare const DemoifyUI: {
  install: typeof install
}

declare const DemoPanel: typeof DemoPanelComponent

export default DemoifyUI

export { DemoPanel }
