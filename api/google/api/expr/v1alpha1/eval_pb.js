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
// @generated from file google/api/expr/v1alpha1/eval.proto (package google.api.expr.v1alpha1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_expr_v1alpha1_value } from "./value_pb.js";
import { file_google_rpc_status } from "../../../rpc/status_pb.js";

/**
 * Describes the file google/api/expr/v1alpha1/eval.proto.
 */
export const file_google_api_expr_v1alpha1_eval = /*@__PURE__*/
  fileDesc("CiNnb29nbGUvYXBpL2V4cHIvdjFhbHBoYTEvZXZhbC5wcm90bxIYZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExIqQBCglFdmFsU3RhdGUSMwoGdmFsdWVzGAEgAygLMiMuZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLkV4cHJWYWx1ZRI7CgdyZXN1bHRzGAMgAygLMiouZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLkV2YWxTdGF0ZS5SZXN1bHQaJQoGUmVzdWx0EgwKBGV4cHIYASABKAMSDQoFdmFsdWUYAiABKAMiswEKCUV4cHJWYWx1ZRIwCgV2YWx1ZRgBIAEoCzIfLmdvb2dsZS5hcGkuZXhwci52MWFscGhhMS5WYWx1ZUgAEjMKBWVycm9yGAIgASgLMiIuZ29vZ2xlLmFwaS5leHByLnYxYWxwaGExLkVycm9yU2V0SAASNwoHdW5rbm93bhgDIAEoCzIkLmdvb2dsZS5hcGkuZXhwci52MWFscGhhMS5Vbmtub3duU2V0SABCBgoEa2luZCIuCghFcnJvclNldBIiCgZlcnJvcnMYASADKAsyEi5nb29nbGUucnBjLlN0YXR1cyIbCgpVbmtub3duU2V0Eg0KBWV4cHJzGAEgAygDQmwKHGNvbS5nb29nbGUuYXBpLmV4cHIudjFhbHBoYTFCCUV2YWxQcm90b1ABWjxnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9leHByL3YxYWxwaGExO2V4cHL4AQFiBnByb3RvMw", [file_google_api_expr_v1alpha1_value, file_google_rpc_status]);

/**
 * Describes the message google.api.expr.v1alpha1.EvalState.
 * Use `create(EvalStateSchema)` to create a new message.
 */
export const EvalStateSchema = /*@__PURE__*/
  messageDesc(file_google_api_expr_v1alpha1_eval, 0);

/**
 * Describes the message google.api.expr.v1alpha1.EvalState.Result.
 * Use `create(EvalState_ResultSchema)` to create a new message.
 */
export const EvalState_ResultSchema = /*@__PURE__*/
  messageDesc(file_google_api_expr_v1alpha1_eval, 0, 0);

/**
 * Describes the message google.api.expr.v1alpha1.ExprValue.
 * Use `create(ExprValueSchema)` to create a new message.
 */
export const ExprValueSchema = /*@__PURE__*/
  messageDesc(file_google_api_expr_v1alpha1_eval, 1);

/**
 * Describes the message google.api.expr.v1alpha1.ErrorSet.
 * Use `create(ErrorSetSchema)` to create a new message.
 */
export const ErrorSetSchema = /*@__PURE__*/
  messageDesc(file_google_api_expr_v1alpha1_eval, 2);

/**
 * Describes the message google.api.expr.v1alpha1.UnknownSet.
 * Use `create(UnknownSetSchema)` to create a new message.
 */
export const UnknownSetSchema = /*@__PURE__*/
  messageDesc(file_google_api_expr_v1alpha1_eval, 3);

