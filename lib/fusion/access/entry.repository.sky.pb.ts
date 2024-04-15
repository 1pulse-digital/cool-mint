// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: access/entry.repository.sky.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as accessEntry from "./entry.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListEntriesRequest {
  /**
   * Filter allows you to search by fields set as searchable.
   * TODO Generate the list of searchable fields for this comment
   */
  filter: string;
  /**
   * The maximum number of items to return.
   */
  pageSize: number;
  /**
   * The next_page_token value returned from a previous List request, if any.
   */
  pageToken: string;
}

export interface ListEntriesResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Entries: accessEntry.Entry[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateEntryRequest {
  /**
   * The name to use for the entry, which will become the final component of
   * the entry's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  entryId: string;
  /**
   * The entry to create.
   */
  entry: accessEntry.Entry;
}

export interface GetEntryRequest {
  name: string;
}

export interface UpdateEntryRequest {
  /**
   * The entry to update.
   *
   * The entry's 'name' field is used to identify the entry to be updated.
   * Format: access/entry}}
   */
  entry: accessEntry.Entry;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteEntryRequest {
  name: string;
}

//========================================//
//    EntryRepository Protobuf Client     //
//========================================//

export async function ListEntries(
  listEntriesRequest: ListEntriesRequest,
  config?: ClientConfiguration,
): Promise<ListEntriesResponse> {
  const response = await PBrequest(
    "/access.EntryRepository/ListEntries",
    ListEntriesRequest.encode(listEntriesRequest),
    config,
  );
  return ListEntriesResponse.decode(response);
}

export async function CreateEntry(
  createEntryRequest: CreateEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await PBrequest(
    "/access.EntryRepository/CreateEntry",
    CreateEntryRequest.encode(createEntryRequest),
    config,
  );
  return accessEntry.Entry.decode(response);
}

export async function GetEntry(
  getEntryRequest: GetEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await PBrequest(
    "/access.EntryRepository/GetEntry",
    GetEntryRequest.encode(getEntryRequest),
    config,
  );
  return accessEntry.Entry.decode(response);
}

export async function UpdateEntry(
  updateEntryRequest: UpdateEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await PBrequest(
    "/access.EntryRepository/UpdateEntry",
    UpdateEntryRequest.encode(updateEntryRequest),
    config,
  );
  return accessEntry.Entry.decode(response);
}

export async function DeleteEntry(
  deleteEntryRequest: DeleteEntryRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/access.EntryRepository/DeleteEntry",
    DeleteEntryRequest.encode(deleteEntryRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//      EntryRepository JSON Client       //
//========================================//

export async function ListEntriesJSON(
  listEntriesRequest: ListEntriesRequest,
  config?: ClientConfiguration,
): Promise<ListEntriesResponse> {
  const response = await JSONrequest(
    "/access.EntryRepository/ListEntries",
    ListEntriesRequestJSON.encode(listEntriesRequest),
    config,
  );
  return ListEntriesResponseJSON.decode(response);
}

export async function CreateEntryJSON(
  createEntryRequest: CreateEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await JSONrequest(
    "/access.EntryRepository/CreateEntry",
    CreateEntryRequestJSON.encode(createEntryRequest),
    config,
  );
  return accessEntry.EntryJSON.decode(response);
}

export async function GetEntryJSON(
  getEntryRequest: GetEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await JSONrequest(
    "/access.EntryRepository/GetEntry",
    GetEntryRequestJSON.encode(getEntryRequest),
    config,
  );
  return accessEntry.EntryJSON.decode(response);
}

export async function UpdateEntryJSON(
  updateEntryRequest: UpdateEntryRequest,
  config?: ClientConfiguration,
): Promise<accessEntry.Entry> {
  const response = await JSONrequest(
    "/access.EntryRepository/UpdateEntry",
    UpdateEntryRequestJSON.encode(updateEntryRequest),
    config,
  );
  return accessEntry.EntryJSON.decode(response);
}

export async function DeleteEntryJSON(
  deleteEntryRequest: DeleteEntryRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/access.EntryRepository/DeleteEntry",
    DeleteEntryRequestJSON.encode(deleteEntryRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//            EntryRepository             //
//========================================//

/**
 *
 * EntryRepository allows you to manage Entries.
 */
export interface EntryRepository<Context = unknown> {
  ListEntries: (
    listEntriesRequest: ListEntriesRequest,
    context: Context,
  ) => Promise<ListEntriesResponse> | ListEntriesResponse;
  CreateEntry: (
    createEntryRequest: CreateEntryRequest,
    context: Context,
  ) => Promise<accessEntry.Entry> | accessEntry.Entry;
  GetEntry: (
    getEntryRequest: GetEntryRequest,
    context: Context,
  ) => Promise<accessEntry.Entry> | accessEntry.Entry;
  UpdateEntry: (
    updateEntryRequest: UpdateEntryRequest,
    context: Context,
  ) => Promise<accessEntry.Entry> | accessEntry.Entry;
  DeleteEntry: (
    deleteEntryRequest: DeleteEntryRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createEntryRepository<Context>(
  service: EntryRepository<Context>,
) {
  return {
    name: "access.EntryRepository",
    methods: {
      ListEntries: {
        name: "ListEntries",
        handler: service.ListEntries,
        input: { protobuf: ListEntriesRequest, json: ListEntriesRequestJSON },
        output: {
          protobuf: ListEntriesResponse,
          json: ListEntriesResponseJSON,
        },
      },
      CreateEntry: {
        name: "CreateEntry",
        handler: service.CreateEntry,
        input: { protobuf: CreateEntryRequest, json: CreateEntryRequestJSON },
        output: { protobuf: accessEntry.Entry, json: accessEntry.EntryJSON },
      },
      GetEntry: {
        name: "GetEntry",
        handler: service.GetEntry,
        input: { protobuf: GetEntryRequest, json: GetEntryRequestJSON },
        output: { protobuf: accessEntry.Entry, json: accessEntry.EntryJSON },
      },
      UpdateEntry: {
        name: "UpdateEntry",
        handler: service.UpdateEntry,
        input: { protobuf: UpdateEntryRequest, json: UpdateEntryRequestJSON },
        output: { protobuf: accessEntry.Entry, json: accessEntry.EntryJSON },
      },
      DeleteEntry: {
        name: "DeleteEntry",
        handler: service.DeleteEntry,
        input: { protobuf: DeleteEntryRequest, json: DeleteEntryRequestJSON },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListEntriesRequest = {
  /**
   * Serializes ListEntriesRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListEntriesRequest>): Uint8Array {
    return ListEntriesRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListEntriesRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListEntriesRequest {
    return ListEntriesRequest._readMessage(
      ListEntriesRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListEntriesRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListEntriesRequest>): ListEntriesRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListEntriesRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.filter) {
      writer.writeString(1, msg.filter);
    }
    if (msg.pageSize) {
      writer.writeInt32(2, msg.pageSize);
    }
    if (msg.pageToken) {
      writer.writeString(3, msg.pageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListEntriesRequest,
    reader: protoscript.BinaryReader,
  ): ListEntriesRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.filter = reader.readString();
          break;
        }
        case 2: {
          msg.pageSize = reader.readInt32();
          break;
        }
        case 3: {
          msg.pageToken = reader.readString();
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

export const ListEntriesResponse = {
  /**
   * Serializes ListEntriesResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListEntriesResponse>): Uint8Array {
    return ListEntriesResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListEntriesResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListEntriesResponse {
    return ListEntriesResponse._readMessage(
      ListEntriesResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListEntriesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListEntriesResponse>,
  ): ListEntriesResponse {
    return {
      Entries: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListEntriesResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Entries?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Entries as any,
        accessEntry.Entry._writeMessage,
      );
    }
    if (msg.total) {
      writer.writeInt64String(2, msg.total.toString() as any);
    }
    if (msg.nextPageToken) {
      writer.writeString(3, msg.nextPageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListEntriesResponse,
    reader: protoscript.BinaryReader,
  ): ListEntriesResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = accessEntry.Entry.initialize();
          reader.readMessage(m, accessEntry.Entry._readMessage);
          msg.Entries.push(m);
          break;
        }
        case 2: {
          msg.total = BigInt(reader.readInt64String());
          break;
        }
        case 3: {
          msg.nextPageToken = reader.readString();
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

export const CreateEntryRequest = {
  /**
   * Serializes CreateEntryRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateEntryRequest>): Uint8Array {
    return CreateEntryRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateEntryRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateEntryRequest {
    return CreateEntryRequest._readMessage(
      CreateEntryRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateEntryRequest>): CreateEntryRequest {
    return {
      entryId: "",
      entry: accessEntry.Entry.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateEntryRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.entryId) {
      writer.writeString(1, msg.entryId);
    }
    if (msg.entry) {
      writer.writeMessage(2, msg.entry, accessEntry.Entry._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateEntryRequest,
    reader: protoscript.BinaryReader,
  ): CreateEntryRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.entryId = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.entry, accessEntry.Entry._readMessage);
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

export const GetEntryRequest = {
  /**
   * Serializes GetEntryRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetEntryRequest>): Uint8Array {
    return GetEntryRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetEntryRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetEntryRequest {
    return GetEntryRequest._readMessage(
      GetEntryRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetEntryRequest>): GetEntryRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetEntryRequest>,
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
    msg: GetEntryRequest,
    reader: protoscript.BinaryReader,
  ): GetEntryRequest {
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

export const UpdateEntryRequest = {
  /**
   * Serializes UpdateEntryRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateEntryRequest>): Uint8Array {
    return UpdateEntryRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateEntryRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateEntryRequest {
    return UpdateEntryRequest._readMessage(
      UpdateEntryRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateEntryRequest>): UpdateEntryRequest {
    return {
      entry: accessEntry.Entry.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateEntryRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.entry) {
      writer.writeMessage(1, msg.entry, accessEntry.Entry._writeMessage);
    }
    if (msg.updateMask) {
      writer.writeMessage(
        2,
        msg.updateMask,
        protoscript.FieldMask._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateEntryRequest,
    reader: protoscript.BinaryReader,
  ): UpdateEntryRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.entry, accessEntry.Entry._readMessage);
          break;
        }
        case 2: {
          reader.readMessage(
            msg.updateMask,
            protoscript.FieldMask._readMessage,
          );
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

export const DeleteEntryRequest = {
  /**
   * Serializes DeleteEntryRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteEntryRequest>): Uint8Array {
    return DeleteEntryRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteEntryRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteEntryRequest {
    return DeleteEntryRequest._readMessage(
      DeleteEntryRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<DeleteEntryRequest>): DeleteEntryRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteEntryRequest>,
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
    msg: DeleteEntryRequest,
    reader: protoscript.BinaryReader,
  ): DeleteEntryRequest {
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

export const ListEntriesRequestJSON = {
  /**
   * Serializes ListEntriesRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListEntriesRequest>): string {
    return JSON.stringify(ListEntriesRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListEntriesRequest from JSON.
   */
  decode: function (json: string): ListEntriesRequest {
    return ListEntriesRequestJSON._readMessage(
      ListEntriesRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListEntriesRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListEntriesRequest>): ListEntriesRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListEntriesRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.filter) {
      json["filter"] = msg.filter;
    }
    if (msg.pageSize) {
      json["pageSize"] = msg.pageSize;
    }
    if (msg.pageToken) {
      json["pageToken"] = msg.pageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListEntriesRequest,
    json: any,
  ): ListEntriesRequest {
    const _filter_ = json["filter"];
    if (_filter_) {
      msg.filter = _filter_;
    }
    const _pageSize_ = json["pageSize"] ?? json["page_size"];
    if (_pageSize_) {
      msg.pageSize = protoscript.parseNumber(_pageSize_);
    }
    const _pageToken_ = json["pageToken"] ?? json["page_token"];
    if (_pageToken_) {
      msg.pageToken = _pageToken_;
    }
    return msg;
  },
};

export const ListEntriesResponseJSON = {
  /**
   * Serializes ListEntriesResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListEntriesResponse>): string {
    return JSON.stringify(ListEntriesResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListEntriesResponse from JSON.
   */
  decode: function (json: string): ListEntriesResponse {
    return ListEntriesResponseJSON._readMessage(
      ListEntriesResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListEntriesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListEntriesResponse>,
  ): ListEntriesResponse {
    return {
      Entries: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListEntriesResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Entries?.length) {
      json["Entries"] = msg.Entries.map(accessEntry.EntryJSON._writeMessage);
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    if (msg.nextPageToken) {
      json["nextPageToken"] = msg.nextPageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListEntriesResponse,
    json: any,
  ): ListEntriesResponse {
    const _Entries_ = json["Entries"];
    if (_Entries_) {
      for (const item of _Entries_) {
        const m = accessEntry.EntryJSON.initialize();
        accessEntry.EntryJSON._readMessage(m, item);
        msg.Entries.push(m);
      }
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    const _nextPageToken_ = json["nextPageToken"] ?? json["next_page_token"];
    if (_nextPageToken_) {
      msg.nextPageToken = _nextPageToken_;
    }
    return msg;
  },
};

export const CreateEntryRequestJSON = {
  /**
   * Serializes CreateEntryRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateEntryRequest>): string {
    return JSON.stringify(CreateEntryRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateEntryRequest from JSON.
   */
  decode: function (json: string): CreateEntryRequest {
    return CreateEntryRequestJSON._readMessage(
      CreateEntryRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateEntryRequest>): CreateEntryRequest {
    return {
      entryId: "",
      entry: accessEntry.EntryJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateEntryRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.entryId) {
      json["entryId"] = msg.entryId;
    }
    if (msg.entry) {
      const _entry_ = accessEntry.EntryJSON._writeMessage(msg.entry);
      if (Object.keys(_entry_).length > 0) {
        json["entry"] = _entry_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateEntryRequest,
    json: any,
  ): CreateEntryRequest {
    const _entryId_ = json["entryId"] ?? json["entry_id"];
    if (_entryId_) {
      msg.entryId = _entryId_;
    }
    const _entry_ = json["entry"];
    if (_entry_) {
      accessEntry.EntryJSON._readMessage(msg.entry, _entry_);
    }
    return msg;
  },
};

export const GetEntryRequestJSON = {
  /**
   * Serializes GetEntryRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetEntryRequest>): string {
    return JSON.stringify(GetEntryRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetEntryRequest from JSON.
   */
  decode: function (json: string): GetEntryRequest {
    return GetEntryRequestJSON._readMessage(
      GetEntryRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetEntryRequest>): GetEntryRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetEntryRequest>,
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
  _readMessage: function (msg: GetEntryRequest, json: any): GetEntryRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const UpdateEntryRequestJSON = {
  /**
   * Serializes UpdateEntryRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateEntryRequest>): string {
    return JSON.stringify(UpdateEntryRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateEntryRequest from JSON.
   */
  decode: function (json: string): UpdateEntryRequest {
    return UpdateEntryRequestJSON._readMessage(
      UpdateEntryRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateEntryRequest>): UpdateEntryRequest {
    return {
      entry: accessEntry.EntryJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateEntryRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.entry) {
      const _entry_ = accessEntry.EntryJSON._writeMessage(msg.entry);
      if (Object.keys(_entry_).length > 0) {
        json["entry"] = _entry_;
      }
    }
    if (msg.updateMask) {
      const _updateMask_ = protoscript.FieldMaskJSON._writeMessage(
        msg.updateMask,
      );
      if (Object.keys(_updateMask_).length > 0) {
        json["updateMask"] = _updateMask_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateEntryRequest,
    json: any,
  ): UpdateEntryRequest {
    const _entry_ = json["entry"];
    if (_entry_) {
      accessEntry.EntryJSON._readMessage(msg.entry, _entry_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteEntryRequestJSON = {
  /**
   * Serializes DeleteEntryRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteEntryRequest>): string {
    return JSON.stringify(DeleteEntryRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteEntryRequest from JSON.
   */
  decode: function (json: string): DeleteEntryRequest {
    return DeleteEntryRequestJSON._readMessage(
      DeleteEntryRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteEntryRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<DeleteEntryRequest>): DeleteEntryRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteEntryRequest>,
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
    msg: DeleteEntryRequest,
    json: any,
  ): DeleteEntryRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};