// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.2 with parameter "import_extension=js"
// @generated from file google/type/money.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/type/money.proto.
 */
export declare const file_google_type_money: GenFile;

/**
 * Represents an amount of money with its currency type.
 *
 * @generated from message google.type.Money
 */
export declare type Money = Message<"google.type.Money"> & {
  /**
   * The three-letter currency code defined in ISO 4217.
   *
   * @generated from field: string currency_code = 1;
   */
  currencyCode: string;

  /**
   * The whole units of the amount.
   * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
   *
   * @generated from field: int64 units = 2;
   */
  units: bigint;

  /**
   * Number of nano (10^-9) units of the amount.
   * The value must be between -999,999,999 and +999,999,999 inclusive.
   * If `units` is positive, `nanos` must be positive or zero.
   * If `units` is zero, `nanos` can be positive, zero, or negative.
   * If `units` is negative, `nanos` must be negative or zero.
   * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   *
   * @generated from field: int32 nanos = 3;
   */
  nanos: number;
};

/**
 * Describes the message google.type.Money.
 * Use `create(MoneySchema)` to create a new message.
 */
export declare const MoneySchema: GenMessage<Money>;

