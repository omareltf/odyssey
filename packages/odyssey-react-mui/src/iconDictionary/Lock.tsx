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

export type LockIconProps = SvgIconNoChildrenProps;

export const LockIcon = forwardRef<SVGSVGElement, LockIconProps>(
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
            d="M8 1a2 2 0 0 0-2 2v3h4V3a2 2 0 0 0-2-2ZM5 3v3H2V13.12c0 .403 0 .735.022 1.006.023.281.072.54.196.782a2 2 0 0 0 .874.874c.243.124.501.173.782.196.27.022.603.022 1.005.022h6.241c.403 0 .735 0 1.006-.022.281-.023.54-.072.782-.196a2 2 0 0 0 .874-.874c.124-.243.173-.501.196-.782.022-.27.022-.603.022-1.005V6h-3V3a3 3 0 0 0-6 0ZM3 7v6.1c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h6.2c.428 0 .72 0 .944-.019.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41.019-.225.019-.516.019-.944V7H3Zm6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
          />
        </>
      </SvgIcon>
    );
  }
);

LockIcon.displayName = "LockIcon";
