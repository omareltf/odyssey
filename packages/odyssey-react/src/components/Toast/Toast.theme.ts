/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ThemeReducer } from "@okta/odyssey-react-theme";

export const theme: ThemeReducer = (theme) => ({
  /* eslint-disable @okta/odyssey/no-invalid-theme-properties */
  AnimationDelayIn: "0s",
  AnimationDelayOut: "5300ms",
  AnimationDurationIn: "300ms",
  AnimationDurationOut: "1000ms",
  /* eslint-enable @okta/odyssey/no-invalid-theme-properties */
  BackgroundColor: theme.ColorBackgroundPrimaryDark,
  BodyFontSize: theme.FontSizeBody,
  BorderRadius: theme.BorderRadiusBase,
  BoxShadow: theme.ShadowHover,
  CautionBackgroundColor: theme.ColorBackgroundCautionDark,
  CautionHeadingColor: theme.ColorTextBody,
  CautionIconColor: theme.ColorTextBody,
  CautionTextColor: theme.ColorTextBody,
  DangerBackgroundColor: theme.ColorBackgroundDangerDark,
  DismissedAnimationDelay: "1000ms",
  DismissedAnimationDuration: "1000ms",
  DismissInsetBlockStart: theme.SpaceRemXs,
  DismissInsetInlineEnd: theme.SpaceRemXs,
  GridColumnGap: theme.SpaceRemS,
  GridRowGap: 0,
  HeadingFontSize: theme.FontSizeHeading6,
  HeadingFontWeight: theme.FontWeightBold,
  HeadingLineHeight: theme.FontLineHeightBase,
  HeadingMarginBlock: 0,
  HeadingMarginInline: 0,
  HeadingPaddingInlineEnd: theme.SpaceRemM,
  HeadingTextColor: theme.ColorTextBodyInverse,
  // eslint-disable-next-line @okta/odyssey/no-invalid-theme-properties
  HoverAnimationDelayOut: "300s",
  IconColor: theme.ColorTextBodyInverse,
  IconSize: theme.FontSizeHeading4,
  MaxWidth: theme.FontLineLengthMax,
  PaddingBlock: theme.SpaceRemM,
  PaddingInline: theme.SpaceRemS,
  ReducedAnimationDuration: "300ms",
  SuccessBackgroundColor: theme.ColorBackgroundSuccessDark,
  TextColor: theme.ColorTextBodyInverse,
  PenRowGap: theme.SpaceRemS,
  PenInsetBlockEnd: theme.SpaceRemM,
  PenInsetInlineEnd: theme.SpaceRemM,
});
