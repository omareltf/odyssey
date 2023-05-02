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

export type ClockIconProps = SvgIconNoChildrenProps;

export const ClockIcon = forwardRef<SVGSVGElement, ClockIconProps>(
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
            d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm-.5 4v2.12c0 .403 0 .735.022 1.006.023.281.072.54.196.782a2 2 0 0 0 .874.874c.243.124.501.173.782.196C9.644 9 9.977 9 10.38 9H12V8h-1.6c-.428 0-.72 0-.944-.019-.22-.018-.332-.05-.41-.09a1 1 0 0 1-.437-.437c-.04-.078-.072-.19-.09-.41A12.924 12.924 0 0 1 8.5 6.1V4h-1Z"
            clipRule="evenodd"
          />
        </>
      </SvgIcon>
    );
  }
);

ClockIcon.displayName = "ClockIcon";
