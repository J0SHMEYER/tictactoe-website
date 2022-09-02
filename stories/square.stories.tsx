import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Square from '../components/Square';

export default {
  title: 'Game Components/TicTacToe Grid',
  component: Square,
  argTypes: {
    onClick: { action: "this is a button" }
  }
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args : any) => <Square {...args} />;

export const GameSquare = Template.bind({});
GameSquare.args =  {
    value: null,
    winner: null,
}