import type { Meta, StoryFn } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'UI/Dropdown',
  component: DropdownComponent,
} as Meta;

const Template: StoryFn<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
  template: `
  <dropdown>
    <ul>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
      <li><button>Типа список</button></li>
    </ul>
  </dropdown>`,
});

export const Default = Template.bind({});

Default.args = {} as Partial<DropdownComponent>;
