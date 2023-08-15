 import React from "react";
 import { View } from "react-native";
 import { Button, ButtonProps } from "./index";
 import { Meta, StoryObj } from "@storybook/react-native";

 const meta: Meta<ButtonProps> = {
   title: "Button",
   component: Button,
   argTypes: {
     onPress: {
       action: "onPress event",
     },
   },
 };

 export default meta;

 type Story = StoryObj<ButtonProps>;

 export const Basic: Story = {
   storyName: "Basic",
   args: {
     disabled: false,
     children: "Tap me",
   },
 };

 export const Disabled: Story = {
   args: {
     disabled: true,
     children: "Disabled",
   },
 };
