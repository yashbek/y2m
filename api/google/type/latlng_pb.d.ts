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
// @generated from file google/type/latlng.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/type/latlng.proto.
 */
export declare const file_google_type_latlng: GenFile;

/**
 * An object that represents a latitude/longitude pair. This is expressed as a
 * pair of doubles to represent degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 *
 * @generated from message google.type.LatLng
 */
export declare type LatLng = Message<"google.type.LatLng"> & {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   *
   * @generated from field: double latitude = 1;
   */
  latitude: number;

  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   *
   * @generated from field: double longitude = 2;
   */
  longitude: number;
};

/**
 * Describes the message google.type.LatLng.
 * Use `create(LatLngSchema)` to create a new message.
 */
export declare const LatLngSchema: GenMessage<LatLng>;

