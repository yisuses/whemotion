import styled from '@emotion/styled'
import { Story, Meta } from '@storybook/react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    categories: {
      control: false,
    },
  },
  decorators: [
    Story => (
      <StyledTemplate>
        <Story />
      </StyledTemplate>
    ),
  ],
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  categories: [
    { url: '/dashboard', name: 'Dashboard', localizedName: 'Dashboard', code: 'DASH' },
    { url: '/projects', name: 'Projects', localizedName: 'Projects', code: 'PROJ' },
    { url: '/team', name: 'Team', localizedName: 'Team', code: 'TEAM' },
  ],
}

const StyledTemplate = styled.div`
  padding-top: 50px;
  height: 500px;
  background: radial-gradient(circle, tomato, white);
`
