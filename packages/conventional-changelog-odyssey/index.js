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

const conventional = require("conventional-changelog-conventionalcommits");

// NOTE: Our 0.x.x (preMajor) versioning scheme calls for new features
// to be patch level bumps. Once we reach 1.0.0 this package can be
// removed in favor of the using the conventional defaults directly!
module.exports = conventional({ preMajor: true });
