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
// @generated from file google/api/expr/v1alpha1/explain.proto (package google.api.expr.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Value } from "./value_pb.js";

/**
 * Describes the file google/api/expr/v1alpha1/explain.proto.
 */
export declare const file_google_api_expr_v1alpha1_explain: GenFile;

/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 *
 * @generated from message google.api.expr.v1alpha1.Explain
 * @deprecated
 */
export declare type Explain = Message<"google.api.expr.v1alpha1.Explain"> & {
  /**
   * All of the observed values.
   *
   * The field value_index is an index in the values list.
   * Separating values from steps is needed to remove redundant values.
   *
   * @generated from field: repeated google.api.expr.v1alpha1.Value values = 1;
   */
  values: Value[];

  /**
   * List of steps.
   *
   * Repeated evaluations of the same expression generate new ExprStep
   * instances. The order of such ExprStep instances matches the order of
   * elements returned by Comprehension.iter_range.
   *
   * @generated from field: repeated google.api.expr.v1alpha1.Explain.ExprStep expr_steps = 2;
   */
  exprSteps: Explain_ExprStep[];
};

/**
 * Describes the message google.api.expr.v1alpha1.Explain.
 * Use `create(ExplainSchema)` to create a new message.
 * @deprecated
 */
export declare const ExplainSchema: GenMessage<Explain>;

/**
 * ID and value index of one step.
 *
 * @generated from message google.api.expr.v1alpha1.Explain.ExprStep
 * @deprecated
 */
export declare type Explain_ExprStep = Message<"google.api.expr.v1alpha1.Explain.ExprStep"> & {
  /**
   * ID of corresponding Expr node.
   *
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * Index of the value in the values list.
   *
   * @generated from field: int32 value_index = 2;
   */
  valueIndex: number;
};

/**
 * Describes the message google.api.expr.v1alpha1.Explain.ExprStep.
 * Use `create(Explain_ExprStepSchema)` to create a new message.
 * @deprecated
 */
export declare const Explain_ExprStepSchema: GenMessage<Explain_ExprStep>;

