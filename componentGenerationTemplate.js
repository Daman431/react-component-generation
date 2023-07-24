// component.tsx
exports.component = name => {

    return `import {FC} from 'react';
    export interface I${name}Props {}
    
    const ${name}:FC<I${name}Props> = ({}) => {
      return <div>Hello 👋, I am a ${name} component.</div>;
    };
    
    export default ${name};
    `;
}

// component.stories.jsx
exports.story = name => {
    return `import type { Meta, StoryObj } from '@storybook/react';
    import ${name} from './${name}';
    
    const meta: Meta<typeof ${name}> = {
        title: '${name}',
        component: ${name},
        tags: ['autodocs'],
        parameters: {
            layout: 'fullscreen',
        },
    };
    
    export default meta;
    type Story = StoryObj<typeof ${name}>;
    
    export const ${name}Example: Story = {
        args: {
        },
    };
    `;
}
