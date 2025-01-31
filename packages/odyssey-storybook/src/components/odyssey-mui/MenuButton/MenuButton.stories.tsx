/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Meta, StoryObj } from "@storybook/react";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  UserGroupIcon,
  GlobeIcon,
  CalendarIcon,
  OverflowVerticalIcon,
} from "@okta/odyssey-react-mui";
import { MuiThemeDecorator } from "../../../../.storybook/components";

const storybookMeta: Meta<MenuButtonProps> = {
  title: "MUI Components/Menu Button",
  component: MenuButton,
  argTypes: {
    children: {
      control: "text",
    },
    buttonLabel: {
      control: "text",
    },
    buttonEndIcon: {
      control: "text",
    },
    buttonVariant: {
      control: "text",
    },
  },
  args: {
    buttonLabel: "More actions",
  },
  decorators: [MuiThemeDecorator],
};

export default storybookMeta;

const DefaultTemplate: StoryObj<MenuButtonProps> = {};

export const Simple: StoryObj<MenuButtonProps> = {
  ...DefaultTemplate,
  args: {
    buttonLabel: "More actions",
    children: [
      <MenuItem>View details</MenuItem>,
      <MenuItem>Edit configuration</MenuItem>,
      <MenuItem>Launch</MenuItem>,
    ],
  },
};

export const ActionIcons: StoryObj<MenuButtonProps> = {
  args: {
    children: [
      <MenuItem>
        <ListItemIcon>
          <UserGroupIcon />
        </ListItemIcon>
        <ListItemText>Assign crew</ListItemText>
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <GlobeIcon />
        </ListItemIcon>
        <ListItemText>View destination</ListItemText>
      </MenuItem>,
      <MenuItem>
        <ListItemIcon>
          <CalendarIcon />
        </ListItemIcon>
        <ListItemText>Schedule launch</ListItemText>
      </MenuItem>,
    ],
  },
};

export const ButtonVariant: StoryObj<MenuButtonProps> = {
  args: {
    buttonLabel: "More actions",
    buttonVariant: "floating",
    children: [
      <MenuItem>View details</MenuItem>,
      <MenuItem>Edit configuration</MenuItem>,
      <MenuItem>Launch</MenuItem>,
    ],
  },
};

export const Groupings: StoryObj<MenuButtonProps> = {
  args: {
    buttonLabel: "More actions",
    children: [
      <ListSubheader>Crew</ListSubheader>,
      <MenuItem>Assign captain</MenuItem>,
      <MenuItem>View roster</MenuItem>,
      <ListSubheader>Ship</ListSubheader>,
      <MenuItem>Configure thrusters</MenuItem>,
      <MenuItem>View cargo</MenuItem>,
      <Divider />,
      <MenuItem>Logout</MenuItem>,
    ],
  },
};

export const WithDestructive: StoryObj<MenuButtonProps> = {
  args: {
    buttonLabel: "Cargo options",
    children: [
      <MenuItem>View details</MenuItem>,
      <MenuItem>Edit inventory</MenuItem>,
      <MenuItem isDestructive>Jettison cargo</MenuItem>,
    ],
  },
};

export const IconButton: StoryObj<MenuButtonProps> = {
  args: {
    children: [
      <MenuItem>View details</MenuItem>,
      <MenuItem>Edit configuration</MenuItem>,
      <MenuItem>Launch</MenuItem>,
    ],
    buttonLabel: "",
    buttonEndIcon: <OverflowVerticalIcon />,
  },
};
