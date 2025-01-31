/*!
 * Copyright (c) 2023-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type CloseIconProps = SvgIconNoChildrenProps;

export const CloseIcon = forwardRef<SVGSVGElement, CloseIconProps>(
  (props, ref) => {
    return (
      <SvgIcon
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7.293 2.354 1.646l-.708.708L7.293 8l-5.647 5.646.708.708L8 8.707l5.646 5.647.707-.708L8.707 8l5.647-5.646-.708-.708L8 7.293Z"
            clipRule="evenodd"
          />
        </>
      </SvgIcon>
    );
  }
);

CloseIcon.displayName = "CloseIcon";
