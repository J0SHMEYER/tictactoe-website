import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from '../components/Board';

export default {
  title: 'Game Components/TicTacToe Grid',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args : any) => <Board {...args} />;

export const GameBoard = Template.bind({});
GameBoard.args =  {
    squares: null,
}