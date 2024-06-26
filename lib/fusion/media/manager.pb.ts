// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: media/manager.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as mediaObject from "./object.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListObjectsRequest {
  /**
   * Filter is a glob pattern used to filter results (for example, foo*bar). See
   * https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-object-glob
   * for syntax details.
   */
  filter: string;
  /**
   * Prefix is the prefix filter to query objects
   * whose names begin with this prefix.
   * Optional.
   */
  prefix: string;
  /**
   * StartOffset is used to filter results to objects whose names are
   * lexicographically equal to or after startOffset. If endOffset is also set,
   * the objects listed will have names between startOffset (inclusive) and
   * endOffset (exclusive).
   */
  startOffset: string;
  /**
   * EndOffset is used to filter results to objects whose names are
   * lexicographically before endOffset. If startOffset is also set, the objects
   * listed will have names between startOffset (inclusive) and endOffset (exclusive).
   */
  endOffset: string;
}

export interface ListObjectsResponse {
  objects: mediaObject.Object[];
}

export interface GetDownloadURLRequest {
  /**
   * Name is the name of the object (file) to download.
   */
  name: string;
}

export interface GetDownloadURLResponse {
  url: string;
}

export interface GetUploadURLRequest {
  /**
   * Name is the name of the object (file) to upload.
   */
  name: string;
}

export interface GetUploadURLResponse {
  /**
   * URL is the generated URL that the file upload will be made to.
   */
  url: string;
}

export interface DeleteObjectRequest {
  /**
   * Name is the name of the object (file) to delete.
   */
  name: string;
}

//========================================//
//        Manager Protobuf Client         //
//========================================//

export async function ListObjects(
  listObjectsRequest: ListObjectsRequest,
  config?: ClientConfiguration,
): Promise<ListObjectsResponse> {
  const response = await PBrequest(
    "/media.Manager/ListObjects",
    ListObjectsRequest.encode(listObjectsRequest),
    config,
  );
  return ListObjectsResponse.decode(response);
}

export async function GetDownloadURL(
  getDownloadURLRequest: GetDownloadURLRequest,
  config?: ClientConfiguration,
): Promise<GetDownloadURLResponse> {
  const response = await PBrequest(
    "/media.Manager/GetDownloadURL",
    GetDownloadURLRequest.encode(getDownloadURLRequest),
    config,
  );
  return GetDownloadURLResponse.decode(response);
}

export async function GetUploadURL(
  getUploadURLRequest: GetUploadURLRequest,
  config?: ClientConfiguration,
): Promise<GetUploadURLResponse> {
  const response = await PBrequest(
    "/media.Manager/GetUploadURL",
    GetUploadURLRequest.encode(getUploadURLRequest),
    config,
  );
  return GetUploadURLResponse.decode(response);
}

export async function DeleteOjbect(
  deleteObjectRequest: DeleteObjectRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/media.Manager/DeleteOjbect",
    DeleteObjectRequest.encode(deleteObjectRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//          Manager JSON Client           //
//========================================//

export async function ListObjectsJSON(
  listObjectsRequest: ListObjectsRequest,
  config?: ClientConfiguration,
): Promise<ListObjectsResponse> {
  const response = await JSONrequest(
    "/media.Manager/ListObjects",
    ListObjectsRequestJSON.encode(listObjectsRequest),
    config,
  );
  return ListObjectsResponseJSON.decode(response);
}

export async function GetDownloadURLJSON(
  getDownloadURLRequest: GetDownloadURLRequest,
  config?: ClientConfiguration,
): Promise<GetDownloadURLResponse> {
  const response = await JSONrequest(
    "/media.Manager/GetDownloadURL",
    GetDownloadURLRequestJSON.encode(getDownloadURLRequest),
    config,
  );
  return GetDownloadURLResponseJSON.decode(response);
}

export async function GetUploadURLJSON(
  getUploadURLRequest: GetUploadURLRequest,
  config?: ClientConfiguration,
): Promise<GetUploadURLResponse> {
  const response = await JSONrequest(
    "/media.Manager/GetUploadURL",
    GetUploadURLRequestJSON.encode(getUploadURLRequest),
    config,
  );
  return GetUploadURLResponseJSON.decode(response);
}

export async function DeleteOjbectJSON(
  deleteObjectRequest: DeleteObjectRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/media.Manager/DeleteOjbect",
    DeleteObjectRequestJSON.encode(deleteObjectRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//                Manager                 //
//========================================//

/**
 *
 * MediaManager allows you to manage Media objects.
 */
export interface Manager<Context = unknown> {
  ListObjects: (
    listObjectsRequest: ListObjectsRequest,
    context: Context,
  ) => Promise<ListObjectsResponse> | ListObjectsResponse;
  GetDownloadURL: (
    getDownloadURLRequest: GetDownloadURLRequest,
    context: Context,
  ) => Promise<GetDownloadURLResponse> | GetDownloadURLResponse;
  GetUploadURL: (
    getUploadURLRequest: GetUploadURLRequest,
    context: Context,
  ) => Promise<GetUploadURLResponse> | GetUploadURLResponse;
  DeleteOjbect: (
    deleteObjectRequest: DeleteObjectRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createManager<Context>(service: Manager<Context>) {
  return {
    name: "media.Manager",
    methods: {
      ListObjects: {
        name: "ListObjects",
        handler: service.ListObjects,
        input: { protobuf: ListObjectsRequest, json: ListObjectsRequestJSON },
        output: {
          protobuf: ListObjectsResponse,
          json: ListObjectsResponseJSON,
        },
      },
      GetDownloadURL: {
        name: "GetDownloadURL",
        handler: service.GetDownloadURL,
        input: {
          protobuf: GetDownloadURLRequest,
          json: GetDownloadURLRequestJSON,
        },
        output: {
          protobuf: GetDownloadURLResponse,
          json: GetDownloadURLResponseJSON,
        },
      },
      GetUploadURL: {
        name: "GetUploadURL",
        handler: service.GetUploadURL,
        input: { protobuf: GetUploadURLRequest, json: GetUploadURLRequestJSON },
        output: {
          protobuf: GetUploadURLResponse,
          json: GetUploadURLResponseJSON,
        },
      },
      DeleteOjbect: {
        name: "DeleteOjbect",
        handler: service.DeleteOjbect,
        input: { protobuf: DeleteObjectRequest, json: DeleteObjectRequestJSON },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListObjectsRequest = {
  /**
   * Serializes ListObjectsRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListObjectsRequest>): Uint8Array {
    return ListObjectsRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListObjectsRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListObjectsRequest {
    return ListObjectsRequest._readMessage(
      ListObjectsRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListObjectsRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListObjectsRequest>): ListObjectsRequest {
    return {
      filter: "",
      prefix: "",
      startOffset: "",
      endOffset: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListObjectsRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.filter) {
      writer.writeString(1, msg.filter);
    }
    if (msg.prefix) {
      writer.writeString(2, msg.prefix);
    }
    if (msg.startOffset) {
      writer.writeString(3, msg.startOffset);
    }
    if (msg.endOffset) {
      writer.writeString(4, msg.endOffset);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListObjectsRequest,
    reader: protoscript.BinaryReader,
  ): ListObjectsRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.filter = reader.readString();
          break;
        }
        case 2: {
          msg.prefix = reader.readString();
          break;
        }
        case 3: {
          msg.startOffset = reader.readString();
          break;
        }
        case 4: {
          msg.endOffset = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const ListObjectsResponse = {
  /**
   * Serializes ListObjectsResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListObjectsResponse>): Uint8Array {
    return ListObjectsResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListObjectsResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListObjectsResponse {
    return ListObjectsResponse._readMessage(
      ListObjectsResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListObjectsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListObjectsResponse>,
  ): ListObjectsResponse {
    return {
      objects: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListObjectsResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.objects?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.objects as any,
        mediaObject.Object._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListObjectsResponse,
    reader: protoscript.BinaryReader,
  ): ListObjectsResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = mediaObject.Object.initialize();
          reader.readMessage(m, mediaObject.Object._readMessage);
          msg.objects.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetDownloadURLRequest = {
  /**
   * Serializes GetDownloadURLRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetDownloadURLRequest>): Uint8Array {
    return GetDownloadURLRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetDownloadURLRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetDownloadURLRequest {
    return GetDownloadURLRequest._readMessage(
      GetDownloadURLRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetDownloadURLRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetDownloadURLRequest>,
  ): GetDownloadURLRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetDownloadURLRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetDownloadURLRequest,
    reader: protoscript.BinaryReader,
  ): GetDownloadURLRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetDownloadURLResponse = {
  /**
   * Serializes GetDownloadURLResponse to protobuf.
   */
  encode: function (msg: PartialDeep<GetDownloadURLResponse>): Uint8Array {
    return GetDownloadURLResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetDownloadURLResponse from protobuf.
   */
  decode: function (bytes: ByteSource): GetDownloadURLResponse {
    return GetDownloadURLResponse._readMessage(
      GetDownloadURLResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetDownloadURLResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetDownloadURLResponse>,
  ): GetDownloadURLResponse {
    return {
      url: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetDownloadURLResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.url) {
      writer.writeString(1, msg.url);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetDownloadURLResponse,
    reader: protoscript.BinaryReader,
  ): GetDownloadURLResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.url = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetUploadURLRequest = {
  /**
   * Serializes GetUploadURLRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetUploadURLRequest>): Uint8Array {
    return GetUploadURLRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetUploadURLRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetUploadURLRequest {
    return GetUploadURLRequest._readMessage(
      GetUploadURLRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetUploadURLRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUploadURLRequest>,
  ): GetUploadURLRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUploadURLRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUploadURLRequest,
    reader: protoscript.BinaryReader,
  ): GetUploadURLRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetUploadURLResponse = {
  /**
   * Serializes GetUploadURLResponse to protobuf.
   */
  encode: function (msg: PartialDeep<GetUploadURLResponse>): Uint8Array {
    return GetUploadURLResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetUploadURLResponse from protobuf.
   */
  decode: function (bytes: ByteSource): GetUploadURLResponse {
    return GetUploadURLResponse._readMessage(
      GetUploadURLResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetUploadURLResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUploadURLResponse>,
  ): GetUploadURLResponse {
    return {
      url: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUploadURLResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.url) {
      writer.writeString(1, msg.url);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUploadURLResponse,
    reader: protoscript.BinaryReader,
  ): GetUploadURLResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.url = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const DeleteObjectRequest = {
  /**
   * Serializes DeleteObjectRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteObjectRequest>): Uint8Array {
    return DeleteObjectRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteObjectRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteObjectRequest {
    return DeleteObjectRequest._readMessage(
      DeleteObjectRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteObjectRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteObjectRequest>,
  ): DeleteObjectRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteObjectRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteObjectRequest,
    reader: protoscript.BinaryReader,
  ): DeleteObjectRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const ListObjectsRequestJSON = {
  /**
   * Serializes ListObjectsRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListObjectsRequest>): string {
    return JSON.stringify(ListObjectsRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListObjectsRequest from JSON.
   */
  decode: function (json: string): ListObjectsRequest {
    return ListObjectsRequestJSON._readMessage(
      ListObjectsRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListObjectsRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListObjectsRequest>): ListObjectsRequest {
    return {
      filter: "",
      prefix: "",
      startOffset: "",
      endOffset: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListObjectsRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.filter) {
      json["filter"] = msg.filter;
    }
    if (msg.prefix) {
      json["prefix"] = msg.prefix;
    }
    if (msg.startOffset) {
      json["startOffset"] = msg.startOffset;
    }
    if (msg.endOffset) {
      json["endOffset"] = msg.endOffset;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListObjectsRequest,
    json: any,
  ): ListObjectsRequest {
    const _filter_ = json["filter"];
    if (_filter_) {
      msg.filter = _filter_;
    }
    const _prefix_ = json["prefix"];
    if (_prefix_) {
      msg.prefix = _prefix_;
    }
    const _startOffset_ = json["startOffset"];
    if (_startOffset_) {
      msg.startOffset = _startOffset_;
    }
    const _endOffset_ = json["endOffset"];
    if (_endOffset_) {
      msg.endOffset = _endOffset_;
    }
    return msg;
  },
};

export const ListObjectsResponseJSON = {
  /**
   * Serializes ListObjectsResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListObjectsResponse>): string {
    return JSON.stringify(ListObjectsResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListObjectsResponse from JSON.
   */
  decode: function (json: string): ListObjectsResponse {
    return ListObjectsResponseJSON._readMessage(
      ListObjectsResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListObjectsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListObjectsResponse>,
  ): ListObjectsResponse {
    return {
      objects: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListObjectsResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.objects?.length) {
      json["objects"] = msg.objects.map(mediaObject.ObjectJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListObjectsResponse,
    json: any,
  ): ListObjectsResponse {
    const _objects_ = json["objects"];
    if (_objects_) {
      for (const item of _objects_) {
        const m = mediaObject.ObjectJSON.initialize();
        mediaObject.ObjectJSON._readMessage(m, item);
        msg.objects.push(m);
      }
    }
    return msg;
  },
};

export const GetDownloadURLRequestJSON = {
  /**
   * Serializes GetDownloadURLRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetDownloadURLRequest>): string {
    return JSON.stringify(GetDownloadURLRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetDownloadURLRequest from JSON.
   */
  decode: function (json: string): GetDownloadURLRequest {
    return GetDownloadURLRequestJSON._readMessage(
      GetDownloadURLRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetDownloadURLRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetDownloadURLRequest>,
  ): GetDownloadURLRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetDownloadURLRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetDownloadURLRequest,
    json: any,
  ): GetDownloadURLRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const GetDownloadURLResponseJSON = {
  /**
   * Serializes GetDownloadURLResponse to JSON.
   */
  encode: function (msg: PartialDeep<GetDownloadURLResponse>): string {
    return JSON.stringify(GetDownloadURLResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetDownloadURLResponse from JSON.
   */
  decode: function (json: string): GetDownloadURLResponse {
    return GetDownloadURLResponseJSON._readMessage(
      GetDownloadURLResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetDownloadURLResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetDownloadURLResponse>,
  ): GetDownloadURLResponse {
    return {
      url: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetDownloadURLResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.url) {
      json["url"] = msg.url;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetDownloadURLResponse,
    json: any,
  ): GetDownloadURLResponse {
    const _url_ = json["url"];
    if (_url_) {
      msg.url = _url_;
    }
    return msg;
  },
};

export const GetUploadURLRequestJSON = {
  /**
   * Serializes GetUploadURLRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetUploadURLRequest>): string {
    return JSON.stringify(GetUploadURLRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetUploadURLRequest from JSON.
   */
  decode: function (json: string): GetUploadURLRequest {
    return GetUploadURLRequestJSON._readMessage(
      GetUploadURLRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetUploadURLRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUploadURLRequest>,
  ): GetUploadURLRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUploadURLRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUploadURLRequest,
    json: any,
  ): GetUploadURLRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const GetUploadURLResponseJSON = {
  /**
   * Serializes GetUploadURLResponse to JSON.
   */
  encode: function (msg: PartialDeep<GetUploadURLResponse>): string {
    return JSON.stringify(GetUploadURLResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetUploadURLResponse from JSON.
   */
  decode: function (json: string): GetUploadURLResponse {
    return GetUploadURLResponseJSON._readMessage(
      GetUploadURLResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetUploadURLResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUploadURLResponse>,
  ): GetUploadURLResponse {
    return {
      url: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUploadURLResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.url) {
      json["url"] = msg.url;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUploadURLResponse,
    json: any,
  ): GetUploadURLResponse {
    const _url_ = json["url"];
    if (_url_) {
      msg.url = _url_;
    }
    return msg;
  },
};

export const DeleteObjectRequestJSON = {
  /**
   * Serializes DeleteObjectRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteObjectRequest>): string {
    return JSON.stringify(DeleteObjectRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteObjectRequest from JSON.
   */
  decode: function (json: string): DeleteObjectRequest {
    return DeleteObjectRequestJSON._readMessage(
      DeleteObjectRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteObjectRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteObjectRequest>,
  ): DeleteObjectRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteObjectRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteObjectRequest,
    json: any,
  ): DeleteObjectRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
