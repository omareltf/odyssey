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

declare global {
  interface Window {
    cspNonce: string;
  }
}

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { memo, ReactElement, useMemo } from "react";

import { useUniqueAlphabeticalId } from "./useUniqueAlphabeticalId";

const OdysseyCacheProvider = ({
  children,
  nonce,
}: {
  children: ReactElement;
  nonce?: string;
}) => {
  const uniqueAlphabeticalId = useUniqueAlphabeticalId();

  const emotionCache = useMemo(
    () =>
      createCache({
        key: uniqueAlphabeticalId,
        nonce: nonce || window.cspNonce,
      }),
    [nonce, uniqueAlphabeticalId]
  );

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

const MemoizedOdysseyCacheProvider = memo(OdysseyCacheProvider);

export { MemoizedOdysseyCacheProvider as OdysseyCacheProvider };
