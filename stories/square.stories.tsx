import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Square from '../components/Square';

export default {
  title: 'Game Components/TicTacToe Grid',
  component: Square,
  argTypes: {
    onClick: { action: "Button Clicked!"}
  }
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args : any) => <Square {...args} />;

export const XSquare = Template.bind({});
XSquare.args =  {
    value: "X",
}

export const OSquare = Template.bind({});
OSquare.args =  {
    value: "O",
}

export const clickableSquare = Template.bind({});

clickableSquare.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button", {
    name: ""
  }));
}