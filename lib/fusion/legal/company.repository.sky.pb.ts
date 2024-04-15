// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: legal/company.repository.sky.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as legalCompany from "./company.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListCompaniesRequest {
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

export interface ListCompaniesResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Companies: legalCompany.Company[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateCompanyRequest {
  /**
   * The name to use for the company, which will become the final component of
   * the company's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  companyId: string;
  /**
   * The company to create.
   */
  company: legalCompany.Company;
}

export interface GetCompanyRequest {
  name: string;
}

export interface UpdateCompanyRequest {
  /**
   * The company to update.
   *
   * The company's 'name' field is used to identify the company to be updated.
   * Format: legal/company}}
   */
  company: legalCompany.Company;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteCompanyRequest {
  name: string;
}

//========================================//
//   CompanyRepository Protobuf Client    //
//========================================//

export async function ListCompanies(
  listCompaniesRequest: ListCompaniesRequest,
  config?: ClientConfiguration,
): Promise<ListCompaniesResponse> {
  const response = await PBrequest(
    "/legal.CompanyRepository/ListCompanies",
    ListCompaniesRequest.encode(listCompaniesRequest),
    config,
  );
  return ListCompaniesResponse.decode(response);
}

export async function CreateCompany(
  createCompanyRequest: CreateCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await PBrequest(
    "/legal.CompanyRepository/CreateCompany",
    CreateCompanyRequest.encode(createCompanyRequest),
    config,
  );
  return legalCompany.Company.decode(response);
}

export async function GetCompany(
  getCompanyRequest: GetCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await PBrequest(
    "/legal.CompanyRepository/GetCompany",
    GetCompanyRequest.encode(getCompanyRequest),
    config,
  );
  return legalCompany.Company.decode(response);
}

export async function UpdateCompany(
  updateCompanyRequest: UpdateCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await PBrequest(
    "/legal.CompanyRepository/UpdateCompany",
    UpdateCompanyRequest.encode(updateCompanyRequest),
    config,
  );
  return legalCompany.Company.decode(response);
}

export async function DeleteCompany(
  deleteCompanyRequest: DeleteCompanyRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/legal.CompanyRepository/DeleteCompany",
    DeleteCompanyRequest.encode(deleteCompanyRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//     CompanyRepository JSON Client      //
//========================================//

export async function ListCompaniesJSON(
  listCompaniesRequest: ListCompaniesRequest,
  config?: ClientConfiguration,
): Promise<ListCompaniesResponse> {
  const response = await JSONrequest(
    "/legal.CompanyRepository/ListCompanies",
    ListCompaniesRequestJSON.encode(listCompaniesRequest),
    config,
  );
  return ListCompaniesResponseJSON.decode(response);
}

export async function CreateCompanyJSON(
  createCompanyRequest: CreateCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await JSONrequest(
    "/legal.CompanyRepository/CreateCompany",
    CreateCompanyRequestJSON.encode(createCompanyRequest),
    config,
  );
  return legalCompany.CompanyJSON.decode(response);
}

export async function GetCompanyJSON(
  getCompanyRequest: GetCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await JSONrequest(
    "/legal.CompanyRepository/GetCompany",
    GetCompanyRequestJSON.encode(getCompanyRequest),
    config,
  );
  return legalCompany.CompanyJSON.decode(response);
}

export async function UpdateCompanyJSON(
  updateCompanyRequest: UpdateCompanyRequest,
  config?: ClientConfiguration,
): Promise<legalCompany.Company> {
  const response = await JSONrequest(
    "/legal.CompanyRepository/UpdateCompany",
    UpdateCompanyRequestJSON.encode(updateCompanyRequest),
    config,
  );
  return legalCompany.CompanyJSON.decode(response);
}

export async function DeleteCompanyJSON(
  deleteCompanyRequest: DeleteCompanyRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/legal.CompanyRepository/DeleteCompany",
    DeleteCompanyRequestJSON.encode(deleteCompanyRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//           CompanyRepository            //
//========================================//

/**
 *
 * CompanyRepository allows you to manage Companies.
 */
export interface CompanyRepository<Context = unknown> {
  ListCompanies: (
    listCompaniesRequest: ListCompaniesRequest,
    context: Context,
  ) => Promise<ListCompaniesResponse> | ListCompaniesResponse;
  CreateCompany: (
    createCompanyRequest: CreateCompanyRequest,
    context: Context,
  ) => Promise<legalCompany.Company> | legalCompany.Company;
  GetCompany: (
    getCompanyRequest: GetCompanyRequest,
    context: Context,
  ) => Promise<legalCompany.Company> | legalCompany.Company;
  UpdateCompany: (
    updateCompanyRequest: UpdateCompanyRequest,
    context: Context,
  ) => Promise<legalCompany.Company> | legalCompany.Company;
  DeleteCompany: (
    deleteCompanyRequest: DeleteCompanyRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createCompanyRepository<Context>(
  service: CompanyRepository<Context>,
) {
  return {
    name: "legal.CompanyRepository",
    methods: {
      ListCompanies: {
        name: "ListCompanies",
        handler: service.ListCompanies,
        input: {
          protobuf: ListCompaniesRequest,
          json: ListCompaniesRequestJSON,
        },
        output: {
          protobuf: ListCompaniesResponse,
          json: ListCompaniesResponseJSON,
        },
      },
      CreateCompany: {
        name: "CreateCompany",
        handler: service.CreateCompany,
        input: {
          protobuf: CreateCompanyRequest,
          json: CreateCompanyRequestJSON,
        },
        output: {
          protobuf: legalCompany.Company,
          json: legalCompany.CompanyJSON,
        },
      },
      GetCompany: {
        name: "GetCompany",
        handler: service.GetCompany,
        input: { protobuf: GetCompanyRequest, json: GetCompanyRequestJSON },
        output: {
          protobuf: legalCompany.Company,
          json: legalCompany.CompanyJSON,
        },
      },
      UpdateCompany: {
        name: "UpdateCompany",
        handler: service.UpdateCompany,
        input: {
          protobuf: UpdateCompanyRequest,
          json: UpdateCompanyRequestJSON,
        },
        output: {
          protobuf: legalCompany.Company,
          json: legalCompany.CompanyJSON,
        },
      },
      DeleteCompany: {
        name: "DeleteCompany",
        handler: service.DeleteCompany,
        input: {
          protobuf: DeleteCompanyRequest,
          json: DeleteCompanyRequestJSON,
        },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListCompaniesRequest = {
  /**
   * Serializes ListCompaniesRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListCompaniesRequest>): Uint8Array {
    return ListCompaniesRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListCompaniesRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListCompaniesRequest {
    return ListCompaniesRequest._readMessage(
      ListCompaniesRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListCompaniesRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCompaniesRequest>,
  ): ListCompaniesRequest {
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
    msg: PartialDeep<ListCompaniesRequest>,
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
    msg: ListCompaniesRequest,
    reader: protoscript.BinaryReader,
  ): ListCompaniesRequest {
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

export const ListCompaniesResponse = {
  /**
   * Serializes ListCompaniesResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListCompaniesResponse>): Uint8Array {
    return ListCompaniesResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListCompaniesResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListCompaniesResponse {
    return ListCompaniesResponse._readMessage(
      ListCompaniesResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListCompaniesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCompaniesResponse>,
  ): ListCompaniesResponse {
    return {
      Companies: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCompaniesResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Companies?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Companies as any,
        legalCompany.Company._writeMessage,
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
    msg: ListCompaniesResponse,
    reader: protoscript.BinaryReader,
  ): ListCompaniesResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = legalCompany.Company.initialize();
          reader.readMessage(m, legalCompany.Company._readMessage);
          msg.Companies.push(m);
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

export const CreateCompanyRequest = {
  /**
   * Serializes CreateCompanyRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateCompanyRequest>): Uint8Array {
    return CreateCompanyRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateCompanyRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateCompanyRequest {
    return CreateCompanyRequest._readMessage(
      CreateCompanyRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCompanyRequest>,
  ): CreateCompanyRequest {
    return {
      companyId: "",
      company: legalCompany.Company.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCompanyRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.companyId) {
      writer.writeString(1, msg.companyId);
    }
    if (msg.company) {
      writer.writeMessage(2, msg.company, legalCompany.Company._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCompanyRequest,
    reader: protoscript.BinaryReader,
  ): CreateCompanyRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.companyId = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.company, legalCompany.Company._readMessage);
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

export const GetCompanyRequest = {
  /**
   * Serializes GetCompanyRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetCompanyRequest>): Uint8Array {
    return GetCompanyRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetCompanyRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetCompanyRequest {
    return GetCompanyRequest._readMessage(
      GetCompanyRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetCompanyRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetCompanyRequest>): GetCompanyRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCompanyRequest>,
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
    msg: GetCompanyRequest,
    reader: protoscript.BinaryReader,
  ): GetCompanyRequest {
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

export const UpdateCompanyRequest = {
  /**
   * Serializes UpdateCompanyRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateCompanyRequest>): Uint8Array {
    return UpdateCompanyRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateCompanyRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateCompanyRequest {
    return UpdateCompanyRequest._readMessage(
      UpdateCompanyRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCompanyRequest>,
  ): UpdateCompanyRequest {
    return {
      company: legalCompany.Company.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCompanyRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.company) {
      writer.writeMessage(1, msg.company, legalCompany.Company._writeMessage);
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
    msg: UpdateCompanyRequest,
    reader: protoscript.BinaryReader,
  ): UpdateCompanyRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.company, legalCompany.Company._readMessage);
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

export const DeleteCompanyRequest = {
  /**
   * Serializes DeleteCompanyRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteCompanyRequest>): Uint8Array {
    return DeleteCompanyRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteCompanyRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteCompanyRequest {
    return DeleteCompanyRequest._readMessage(
      DeleteCompanyRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCompanyRequest>,
  ): DeleteCompanyRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCompanyRequest>,
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
    msg: DeleteCompanyRequest,
    reader: protoscript.BinaryReader,
  ): DeleteCompanyRequest {
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

export const ListCompaniesRequestJSON = {
  /**
   * Serializes ListCompaniesRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListCompaniesRequest>): string {
    return JSON.stringify(ListCompaniesRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListCompaniesRequest from JSON.
   */
  decode: function (json: string): ListCompaniesRequest {
    return ListCompaniesRequestJSON._readMessage(
      ListCompaniesRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListCompaniesRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCompaniesRequest>,
  ): ListCompaniesRequest {
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
    msg: PartialDeep<ListCompaniesRequest>,
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
    msg: ListCompaniesRequest,
    json: any,
  ): ListCompaniesRequest {
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

export const ListCompaniesResponseJSON = {
  /**
   * Serializes ListCompaniesResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListCompaniesResponse>): string {
    return JSON.stringify(ListCompaniesResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListCompaniesResponse from JSON.
   */
  decode: function (json: string): ListCompaniesResponse {
    return ListCompaniesResponseJSON._readMessage(
      ListCompaniesResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListCompaniesResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCompaniesResponse>,
  ): ListCompaniesResponse {
    return {
      Companies: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCompaniesResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Companies?.length) {
      json["Companies"] = msg.Companies.map(
        legalCompany.CompanyJSON._writeMessage,
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
    msg: ListCompaniesResponse,
    json: any,
  ): ListCompaniesResponse {
    const _Companies_ = json["Companies"];
    if (_Companies_) {
      for (const item of _Companies_) {
        const m = legalCompany.CompanyJSON.initialize();
        legalCompany.CompanyJSON._readMessage(m, item);
        msg.Companies.push(m);
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

export const CreateCompanyRequestJSON = {
  /**
   * Serializes CreateCompanyRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateCompanyRequest>): string {
    return JSON.stringify(CreateCompanyRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateCompanyRequest from JSON.
   */
  decode: function (json: string): CreateCompanyRequest {
    return CreateCompanyRequestJSON._readMessage(
      CreateCompanyRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCompanyRequest>,
  ): CreateCompanyRequest {
    return {
      companyId: "",
      company: legalCompany.CompanyJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCompanyRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.companyId) {
      json["companyId"] = msg.companyId;
    }
    if (msg.company) {
      const _company_ = legalCompany.CompanyJSON._writeMessage(msg.company);
      if (Object.keys(_company_).length > 0) {
        json["company"] = _company_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCompanyRequest,
    json: any,
  ): CreateCompanyRequest {
    const _companyId_ = json["companyId"] ?? json["company_id"];
    if (_companyId_) {
      msg.companyId = _companyId_;
    }
    const _company_ = json["company"];
    if (_company_) {
      legalCompany.CompanyJSON._readMessage(msg.company, _company_);
    }
    return msg;
  },
};

export const GetCompanyRequestJSON = {
  /**
   * Serializes GetCompanyRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetCompanyRequest>): string {
    return JSON.stringify(GetCompanyRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetCompanyRequest from JSON.
   */
  decode: function (json: string): GetCompanyRequest {
    return GetCompanyRequestJSON._readMessage(
      GetCompanyRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetCompanyRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetCompanyRequest>): GetCompanyRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCompanyRequest>,
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
    msg: GetCompanyRequest,
    json: any,
  ): GetCompanyRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const UpdateCompanyRequestJSON = {
  /**
   * Serializes UpdateCompanyRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateCompanyRequest>): string {
    return JSON.stringify(UpdateCompanyRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateCompanyRequest from JSON.
   */
  decode: function (json: string): UpdateCompanyRequest {
    return UpdateCompanyRequestJSON._readMessage(
      UpdateCompanyRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCompanyRequest>,
  ): UpdateCompanyRequest {
    return {
      company: legalCompany.CompanyJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCompanyRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.company) {
      const _company_ = legalCompany.CompanyJSON._writeMessage(msg.company);
      if (Object.keys(_company_).length > 0) {
        json["company"] = _company_;
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
    msg: UpdateCompanyRequest,
    json: any,
  ): UpdateCompanyRequest {
    const _company_ = json["company"];
    if (_company_) {
      legalCompany.CompanyJSON._readMessage(msg.company, _company_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteCompanyRequestJSON = {
  /**
   * Serializes DeleteCompanyRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteCompanyRequest>): string {
    return JSON.stringify(DeleteCompanyRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteCompanyRequest from JSON.
   */
  decode: function (json: string): DeleteCompanyRequest {
    return DeleteCompanyRequestJSON._readMessage(
      DeleteCompanyRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteCompanyRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCompanyRequest>,
  ): DeleteCompanyRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCompanyRequest>,
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
    msg: DeleteCompanyRequest,
    json: any,
  ): DeleteCompanyRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};
