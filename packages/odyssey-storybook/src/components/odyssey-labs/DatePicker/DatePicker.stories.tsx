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

import type { Story } from "@storybook/react";
import { OutlinedInput, OutlinedInputProps } from "@okta/odyssey-react-mui";
import {
  AdapterDateFns,
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@okta/odyssey-react-labs";
import { MuiThemeDecorator } from "../../../../.storybook/components/MuiThemeDecorator";

import DatePickerMdx from "./DatePicker.mdx";

export default {
  title: `Labs Components/DatePicker`,
  component: DatePicker,
  parameters: {
    docs: {
      page: DatePickerMdx,
    },
  },
  argTypes: {
    label: {
      control: "text",
      defaultValue: "DatePicker label",
    },
    onChange: {
      control: "function",
      defaultValue: () => "",
    },
    renderInput: {
      control: "function",
      defaultValue: ({
        InputProps,
        ...props
      }: {
        InputProps: OutlinedInputProps;
      }) => {
        const combinedProps = {
          ...InputProps,
          ...props,
        };

        return <OutlinedInput {...combinedProps} />;
      },
    },
    value: {
      control: "text",
      defaultValue: null,
    },
  },
  decorators: [MuiThemeDecorator],
};

const Template: Story<DatePickerProps<unknown, unknown>> = (props) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker {...props} />
  </LocalizationProvider>
);

export const DatePickerPrimary = Template.bind({});
