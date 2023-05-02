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

export type ArrowLeftIconProps = SvgIconNoChildrenProps;

export const ArrowLeftIcon = forwardRef<SVGSVGElement, ArrowLeftIconProps>(
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
            d="M3.638 7.497H14v1H3.636l4.733 5.165-.738.676-5.493-5.996a.51.51 0 0 1 0-.69l5.493-5.99.738.676-4.731 5.159Z"
            clipRule="evenodd"
          />
        </>
      </SvgIcon>
    );
  }
);

ArrowLeftIcon.displayName = "ArrowLeftIcon";
