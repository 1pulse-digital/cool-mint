// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: workshop/machine.repository.sky.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as workshopMachine from "./machine.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListMachinesRequest {
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

export interface ListMachinesResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Machines: workshopMachine.Machine[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateMachineRequest {
  /**
   * The name to use for the machine, which will become the final component of
   * the machine's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  machineId: string;
  /**
   * The machine to create.
   */
  machine: workshopMachine.Machine;
}

export interface GetMachineRequest {
  name: string;
}

export interface UpdateMachineRequest {
  /**
   * The machine to update.
   *
   * The machine's 'name' field is used to identify the machine to be updated.
   * Format: workshop/machine}}
   */
  machine: workshopMachine.Machine;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteMachineRequest {
  name: string;
}

//========================================//
//   MachineRepository Protobuf Client    //
//========================================//

export async function ListMachines(
  listMachinesRequest: ListMachinesRequest,
  config?: ClientConfiguration,
): Promise<ListMachinesResponse> {
  const response = await PBrequest(
    "/workshop.MachineRepository/ListMachines",
    ListMachinesRequest.encode(listMachinesRequest),
    config,
  );
  return ListMachinesResponse.decode(response);
}

export async function CreateMachine(
  createMachineRequest: CreateMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await PBrequest(
    "/workshop.MachineRepository/CreateMachine",
    CreateMachineRequest.encode(createMachineRequest),
    config,
  );
  return workshopMachine.Machine.decode(response);
}

export async function GetMachine(
  getMachineRequest: GetMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await PBrequest(
    "/workshop.MachineRepository/GetMachine",
    GetMachineRequest.encode(getMachineRequest),
    config,
  );
  return workshopMachine.Machine.decode(response);
}

export async function UpdateMachine(
  updateMachineRequest: UpdateMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await PBrequest(
    "/workshop.MachineRepository/UpdateMachine",
    UpdateMachineRequest.encode(updateMachineRequest),
    config,
  );
  return workshopMachine.Machine.decode(response);
}

export async function DeleteMachine(
  deleteMachineRequest: DeleteMachineRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/workshop.MachineRepository/DeleteMachine",
    DeleteMachineRequest.encode(deleteMachineRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//     MachineRepository JSON Client      //
//========================================//

export async function ListMachinesJSON(
  listMachinesRequest: ListMachinesRequest,
  config?: ClientConfiguration,
): Promise<ListMachinesResponse> {
  const response = await JSONrequest(
    "/workshop.MachineRepository/ListMachines",
    ListMachinesRequestJSON.encode(listMachinesRequest),
    config,
  );
  return ListMachinesResponseJSON.decode(response);
}

export async function CreateMachineJSON(
  createMachineRequest: CreateMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await JSONrequest(
    "/workshop.MachineRepository/CreateMachine",
    CreateMachineRequestJSON.encode(createMachineRequest),
    config,
  );
  return workshopMachine.MachineJSON.decode(response);
}

export async function GetMachineJSON(
  getMachineRequest: GetMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await JSONrequest(
    "/workshop.MachineRepository/GetMachine",
    GetMachineRequestJSON.encode(getMachineRequest),
    config,
  );
  return workshopMachine.MachineJSON.decode(response);
}

export async function UpdateMachineJSON(
  updateMachineRequest: UpdateMachineRequest,
  config?: ClientConfiguration,
): Promise<workshopMachine.Machine> {
  const response = await JSONrequest(
    "/workshop.MachineRepository/UpdateMachine",
    UpdateMachineRequestJSON.encode(updateMachineRequest),
    config,
  );
  return workshopMachine.MachineJSON.decode(response);
}

export async function DeleteMachineJSON(
  deleteMachineRequest: DeleteMachineRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/workshop.MachineRepository/DeleteMachine",
    DeleteMachineRequestJSON.encode(deleteMachineRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//           MachineRepository            //
//========================================//

/**
 *
 * MachineRepository allows you to manage Machines.
 */
export interface MachineRepository<Context = unknown> {
  ListMachines: (
    listMachinesRequest: ListMachinesRequest,
    context: Context,
  ) => Promise<ListMachinesResponse> | ListMachinesResponse;
  CreateMachine: (
    createMachineRequest: CreateMachineRequest,
    context: Context,
  ) => Promise<workshopMachine.Machine> | workshopMachine.Machine;
  GetMachine: (
    getMachineRequest: GetMachineRequest,
    context: Context,
  ) => Promise<workshopMachine.Machine> | workshopMachine.Machine;
  UpdateMachine: (
    updateMachineRequest: UpdateMachineRequest,
    context: Context,
  ) => Promise<workshopMachine.Machine> | workshopMachine.Machine;
  DeleteMachine: (
    deleteMachineRequest: DeleteMachineRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createMachineRepository<Context>(
  service: MachineRepository<Context>,
) {
  return {
    name: "workshop.MachineRepository",
    methods: {
      ListMachines: {
        name: "ListMachines",
        handler: service.ListMachines,
        input: { protobuf: ListMachinesRequest, json: ListMachinesRequestJSON },
        output: {
          protobuf: ListMachinesResponse,
          json: ListMachinesResponseJSON,
        },
      },
      CreateMachine: {
        name: "CreateMachine",
        handler: service.CreateMachine,
        input: {
          protobuf: CreateMachineRequest,
          json: CreateMachineRequestJSON,
        },
        output: {
          protobuf: workshopMachine.Machine,
          json: workshopMachine.MachineJSON,
        },
      },
      GetMachine: {
        name: "GetMachine",
        handler: service.GetMachine,
        input: { protobuf: GetMachineRequest, json: GetMachineRequestJSON },
        output: {
          protobuf: workshopMachine.Machine,
          json: workshopMachine.MachineJSON,
        },
      },
      UpdateMachine: {
        name: "UpdateMachine",
        handler: service.UpdateMachine,
        input: {
          protobuf: UpdateMachineRequest,
          json: UpdateMachineRequestJSON,
        },
        output: {
          protobuf: workshopMachine.Machine,
          json: workshopMachine.MachineJSON,
        },
      },
      DeleteMachine: {
        name: "DeleteMachine",
        handler: service.DeleteMachine,
        input: {
          protobuf: DeleteMachineRequest,
          json: DeleteMachineRequestJSON,
        },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListMachinesRequest = {
  /**
   * Serializes ListMachinesRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListMachinesRequest>): Uint8Array {
    return ListMachinesRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListMachinesRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListMachinesRequest {
    return ListMachinesRequest._readMessage(
      ListMachinesRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListMachinesRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListMachinesRequest>,
  ): ListMachinesRequest {
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
    msg: PartialDeep<ListMachinesRequest>,
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
    msg: ListMachinesRequest,
    reader: protoscript.BinaryReader,
  ): ListMachinesRequest {
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

export const ListMachinesResponse = {
  /**
   * Serializes ListMachinesResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListMachinesResponse>): Uint8Array {
    return ListMachinesResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListMachinesResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListMachinesResponse {
    return ListMachinesResponse._readMessage(
      ListMachinesResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListMachinesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListMachinesResponse>,
  ): ListMachinesResponse {
    return {
      Machines: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListMachinesResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Machines?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Machines as any,
        workshopMachine.Machine._writeMessage,
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
    msg: ListMachinesResponse,
    reader: protoscript.BinaryReader,
  ): ListMachinesResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = workshopMachine.Machine.initialize();
          reader.readMessage(m, workshopMachine.Machine._readMessage);
          msg.Machines.push(m);
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

export const CreateMachineRequest = {
  /**
   * Serializes CreateMachineRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateMachineRequest>): Uint8Array {
    return CreateMachineRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateMachineRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateMachineRequest {
    return CreateMachineRequest._readMessage(
      CreateMachineRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateMachineRequest>,
  ): CreateMachineRequest {
    return {
      machineId: "",
      machine: workshopMachine.Machine.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateMachineRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.machineId) {
      writer.writeString(1, msg.machineId);
    }
    if (msg.machine) {
      writer.writeMessage(
        2,
        msg.machine,
        workshopMachine.Machine._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateMachineRequest,
    reader: protoscript.BinaryReader,
  ): CreateMachineRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.machineId = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.machine, workshopMachine.Machine._readMessage);
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

export const GetMachineRequest = {
  /**
   * Serializes GetMachineRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetMachineRequest>): Uint8Array {
    return GetMachineRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetMachineRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetMachineRequest {
    return GetMachineRequest._readMessage(
      GetMachineRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetMachineRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetMachineRequest>): GetMachineRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetMachineRequest>,
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
    msg: GetMachineRequest,
    reader: protoscript.BinaryReader,
  ): GetMachineRequest {
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

export const UpdateMachineRequest = {
  /**
   * Serializes UpdateMachineRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateMachineRequest>): Uint8Array {
    return UpdateMachineRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateMachineRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateMachineRequest {
    return UpdateMachineRequest._readMessage(
      UpdateMachineRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateMachineRequest>,
  ): UpdateMachineRequest {
    return {
      machine: workshopMachine.Machine.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateMachineRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.machine) {
      writer.writeMessage(
        1,
        msg.machine,
        workshopMachine.Machine._writeMessage,
      );
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
    msg: UpdateMachineRequest,
    reader: protoscript.BinaryReader,
  ): UpdateMachineRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.machine, workshopMachine.Machine._readMessage);
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

export const DeleteMachineRequest = {
  /**
   * Serializes DeleteMachineRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteMachineRequest>): Uint8Array {
    return DeleteMachineRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteMachineRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteMachineRequest {
    return DeleteMachineRequest._readMessage(
      DeleteMachineRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteMachineRequest>,
  ): DeleteMachineRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteMachineRequest>,
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
    msg: DeleteMachineRequest,
    reader: protoscript.BinaryReader,
  ): DeleteMachineRequest {
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

export const ListMachinesRequestJSON = {
  /**
   * Serializes ListMachinesRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListMachinesRequest>): string {
    return JSON.stringify(ListMachinesRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListMachinesRequest from JSON.
   */
  decode: function (json: string): ListMachinesRequest {
    return ListMachinesRequestJSON._readMessage(
      ListMachinesRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListMachinesRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListMachinesRequest>,
  ): ListMachinesRequest {
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
    msg: PartialDeep<ListMachinesRequest>,
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
    msg: ListMachinesRequest,
    json: any,
  ): ListMachinesRequest {
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

export const ListMachinesResponseJSON = {
  /**
   * Serializes ListMachinesResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListMachinesResponse>): string {
    return JSON.stringify(ListMachinesResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListMachinesResponse from JSON.
   */
  decode: function (json: string): ListMachinesResponse {
    return ListMachinesResponseJSON._readMessage(
      ListMachinesResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListMachinesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListMachinesResponse>,
  ): ListMachinesResponse {
    return {
      Machines: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListMachinesResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Machines?.length) {
      json["Machines"] = msg.Machines.map(
        workshopMachine.MachineJSON._writeMessage,
      );
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
    msg: ListMachinesResponse,
    json: any,
  ): ListMachinesResponse {
    const _Machines_ = json["Machines"];
    if (_Machines_) {
      for (const item of _Machines_) {
        const m = workshopMachine.MachineJSON.initialize();
        workshopMachine.MachineJSON._readMessage(m, item);
        msg.Machines.push(m);
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

export const CreateMachineRequestJSON = {
  /**
   * Serializes CreateMachineRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateMachineRequest>): string {
    return JSON.stringify(CreateMachineRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateMachineRequest from JSON.
   */
  decode: function (json: string): CreateMachineRequest {
    return CreateMachineRequestJSON._readMessage(
      CreateMachineRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateMachineRequest>,
  ): CreateMachineRequest {
    return {
      machineId: "",
      machine: workshopMachine.MachineJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateMachineRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.machineId) {
      json["machineId"] = msg.machineId;
    }
    if (msg.machine) {
      const _machine_ = workshopMachine.MachineJSON._writeMessage(msg.machine);
      if (Object.keys(_machine_).length > 0) {
        json["machine"] = _machine_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateMachineRequest,
    json: any,
  ): CreateMachineRequest {
    const _machineId_ = json["machineId"] ?? json["machine_id"];
    if (_machineId_) {
      msg.machineId = _machineId_;
    }
    const _machine_ = json["machine"];
    if (_machine_) {
      workshopMachine.MachineJSON._readMessage(msg.machine, _machine_);
    }
    return msg;
  },
};

export const GetMachineRequestJSON = {
  /**
   * Serializes GetMachineRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetMachineRequest>): string {
    return JSON.stringify(GetMachineRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetMachineRequest from JSON.
   */
  decode: function (json: string): GetMachineRequest {
    return GetMachineRequestJSON._readMessage(
      GetMachineRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetMachineRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetMachineRequest>): GetMachineRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetMachineRequest>,
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
    msg: GetMachineRequest,
    json: any,
  ): GetMachineRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const UpdateMachineRequestJSON = {
  /**
   * Serializes UpdateMachineRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateMachineRequest>): string {
    return JSON.stringify(UpdateMachineRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateMachineRequest from JSON.
   */
  decode: function (json: string): UpdateMachineRequest {
    return UpdateMachineRequestJSON._readMessage(
      UpdateMachineRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateMachineRequest>,
  ): UpdateMachineRequest {
    return {
      machine: workshopMachine.MachineJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateMachineRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.machine) {
      const _machine_ = workshopMachine.MachineJSON._writeMessage(msg.machine);
      if (Object.keys(_machine_).length > 0) {
        json["machine"] = _machine_;
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
    msg: UpdateMachineRequest,
    json: any,
  ): UpdateMachineRequest {
    const _machine_ = json["machine"];
    if (_machine_) {
      workshopMachine.MachineJSON._readMessage(msg.machine, _machine_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteMachineRequestJSON = {
  /**
   * Serializes DeleteMachineRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteMachineRequest>): string {
    return JSON.stringify(DeleteMachineRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteMachineRequest from JSON.
   */
  decode: function (json: string): DeleteMachineRequest {
    return DeleteMachineRequestJSON._readMessage(
      DeleteMachineRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteMachineRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteMachineRequest>,
  ): DeleteMachineRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteMachineRequest>,
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
    msg: DeleteMachineRequest,
    json: any,
  ): DeleteMachineRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
