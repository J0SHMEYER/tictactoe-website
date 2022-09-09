import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from '../components/Board';

export default {
  title: 'Game Components/TicTacToe Grid',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args : any) => <Board {...args} />;

export const GameConfigOne = Template.bind({});
GameConfigOne.play = async ({ canvasElement }) => {
  for (let i = 0; i <= 6; i++) {
    const canvas = within(canvasElement);
    const square = canvas.queryAllByRole("button")[i];
    await userEvent.click(square);
  }
}

export const GameConfigTwo = Template.bind({});
GameConfigTwo.play = async ({ canvasElement }) => {
  for (let i = 1; i <= 7; i++) {
    const canvas = within(canvasElement);
    const square = canvas.queryAllByRole("button")[i];
    await userEvent.click(square);
  }
}

export const GameConfigThree = Template.bind({});
GameConfigThree.play = async ({ canvasElement }) => {
  for (let i = 2; i <= 8; i++) {
    const canvas = within(canvasElement);
    const square = canvas.queryAllByRole("button")[i];
    await userEvent.click(square);
  }
}