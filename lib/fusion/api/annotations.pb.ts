// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: api/annotations.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface field {}

export interface service {}

export interface custom {}

/**
 * generate is used to define the required inputs for generating a repository.sky.proto file
 * this is used only in the pre-compile stage
 */
export interface generate {}

export interface roleOptions {
  list: string;
  create: string;
  get: string;
  update: string;
  delete: string;
}

export interface validationOptions {
  list: boolean;
  create: boolean;
  get: boolean;
  update: boolean;
  delete: boolean;
}

export interface repository {
  collection: string;
  requiredRoles: roleOptions;
  customValidation: validationOptions;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const field = {
  /**
   * Serializes field to protobuf.
   */
  encode: function (_msg?: PartialDeep<field>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes field from protobuf.
   */
  decode: function (_bytes?: ByteSource): field {
    return {};
  },

  /**
   * Initializes field with all fields set to their default value.
   */
  initialize: function (msg?: Partial<field>): field {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<field>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: field,
    _reader: protoscript.BinaryReader,
  ): field {
    return _msg;
  },
};

export const service = {
  /**
   * Serializes service to protobuf.
   */
  encode: function (_msg?: PartialDeep<service>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes service from protobuf.
   */
  decode: function (_bytes?: ByteSource): service {
    return {};
  },

  /**
   * Initializes service with all fields set to their default value.
   */
  initialize: function (msg?: Partial<service>): service {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<service>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: service,
    _reader: protoscript.BinaryReader,
  ): service {
    return _msg;
  },
};

export const custom = {
  /**
   * Serializes custom to protobuf.
   */
  encode: function (_msg?: PartialDeep<custom>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes custom from protobuf.
   */
  decode: function (_bytes?: ByteSource): custom {
    return {};
  },

  /**
   * Initializes custom with all fields set to their default value.
   */
  initialize: function (msg?: Partial<custom>): custom {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<custom>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: custom,
    _reader: protoscript.BinaryReader,
  ): custom {
    return _msg;
  },
};

export const generate = {
  /**
   * Serializes generate to protobuf.
   */
  encode: function (_msg?: PartialDeep<generate>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes generate from protobuf.
   */
  decode: function (_bytes?: ByteSource): generate {
    return {};
  },

  /**
   * Initializes generate with all fields set to their default value.
   */
  initialize: function (msg?: Partial<generate>): generate {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<generate>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: generate,
    _reader: protoscript.BinaryReader,
  ): generate {
    return _msg;
  },
};

export const roleOptions = {
  /**
   * Serializes roleOptions to protobuf.
   */
  encode: function (msg: PartialDeep<roleOptions>): Uint8Array {
    return roleOptions
      ._writeMessage(msg, new protoscript.BinaryWriter())
      .getResultBuffer();
  },

  /**
   * Deserializes roleOptions from protobuf.
   */
  decode: function (bytes: ByteSource): roleOptions {
    return roleOptions._readMessage(
      roleOptions.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes roleOptions with all fields set to their default value.
   */
  initialize: function (msg?: Partial<roleOptions>): roleOptions {
    return {
      list: "",
      create: "",
      get: "",
      update: "",
      delete: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<roleOptions>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.list) {
      writer.writeString(1, msg.list);
    }
    if (msg.create) {
      writer.writeString(2, msg.create);
    }
    if (msg.get) {
      writer.writeString(3, msg.get);
    }
    if (msg.update) {
      writer.writeString(4, msg.update);
    }
    if (msg.delete) {
      writer.writeString(5, msg.delete);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: roleOptions,
    reader: protoscript.BinaryReader,
  ): roleOptions {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.list = reader.readString();
          break;
        }
        case 2: {
          msg.create = reader.readString();
          break;
        }
        case 3: {
          msg.get = reader.readString();
          break;
        }
        case 4: {
          msg.update = reader.readString();
          break;
        }
        case 5: {
          msg.delete = reader.readString();
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

export const validationOptions = {
  /**
   * Serializes validationOptions to protobuf.
   */
  encode: function (msg: PartialDeep<validationOptions>): Uint8Array {
    return validationOptions
      ._writeMessage(msg, new protoscript.BinaryWriter())
      .getResultBuffer();
  },

  /**
   * Deserializes validationOptions from protobuf.
   */
  decode: function (bytes: ByteSource): validationOptions {
    return validationOptions._readMessage(
      validationOptions.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes validationOptions with all fields set to their default value.
   */
  initialize: function (msg?: Partial<validationOptions>): validationOptions {
    return {
      list: false,
      create: false,
      get: false,
      update: false,
      delete: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<validationOptions>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.list) {
      writer.writeBool(1, msg.list);
    }
    if (msg.create) {
      writer.writeBool(2, msg.create);
    }
    if (msg.get) {
      writer.writeBool(3, msg.get);
    }
    if (msg.update) {
      writer.writeBool(4, msg.update);
    }
    if (msg.delete) {
      writer.writeBool(5, msg.delete);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: validationOptions,
    reader: protoscript.BinaryReader,
  ): validationOptions {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.list = reader.readBool();
          break;
        }
        case 2: {
          msg.create = reader.readBool();
          break;
        }
        case 3: {
          msg.get = reader.readBool();
          break;
        }
        case 4: {
          msg.update = reader.readBool();
          break;
        }
        case 5: {
          msg.delete = reader.readBool();
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

export const repository = {
  /**
   * Serializes repository to protobuf.
   */
  encode: function (msg: PartialDeep<repository>): Uint8Array {
    return repository
      ._writeMessage(msg, new protoscript.BinaryWriter())
      .getResultBuffer();
  },

  /**
   * Deserializes repository from protobuf.
   */
  decode: function (bytes: ByteSource): repository {
    return repository._readMessage(
      repository.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes repository with all fields set to their default value.
   */
  initialize: function (msg?: Partial<repository>): repository {
    return {
      collection: "",
      requiredRoles: roleOptions.initialize(),
      customValidation: validationOptions.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<repository>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.collection) {
      writer.writeString(1, msg.collection);
    }
    if (msg.requiredRoles) {
      writer.writeMessage(2, msg.requiredRoles, roleOptions._writeMessage);
    }
    if (msg.customValidation) {
      writer.writeMessage(
        3,
        msg.customValidation,
        validationOptions._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: repository,
    reader: protoscript.BinaryReader,
  ): repository {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.collection = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.requiredRoles, roleOptions._readMessage);
          break;
        }
        case 3: {
          reader.readMessage(
            msg.customValidation,
            validationOptions._readMessage,
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

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const fieldJSON = {
  /**
   * Serializes field to JSON.
   */
  encode: function (_msg?: PartialDeep<field>): string {
    return "{}";
  },

  /**
   * Deserializes field from JSON.
   */
  decode: function (_json?: string): field {
    return {};
  },

  /**
   * Initializes field with all fields set to their default value.
   */
  initialize: function (msg?: Partial<field>): field {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (_msg: PartialDeep<field>): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: field, _json: any): field {
    return msg;
  },
};

export const serviceJSON = {
  /**
   * Serializes service to JSON.
   */
  encode: function (_msg?: PartialDeep<service>): string {
    return "{}";
  },

  /**
   * Deserializes service from JSON.
   */
  decode: function (_json?: string): service {
    return {};
  },

  /**
   * Initializes service with all fields set to their default value.
   */
  initialize: function (msg?: Partial<service>): service {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<service>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: service, _json: any): service {
    return msg;
  },
};

export const customJSON = {
  /**
   * Serializes custom to JSON.
   */
  encode: function (_msg?: PartialDeep<custom>): string {
    return "{}";
  },

  /**
   * Deserializes custom from JSON.
   */
  decode: function (_json?: string): custom {
    return {};
  },

  /**
   * Initializes custom with all fields set to their default value.
   */
  initialize: function (msg?: Partial<custom>): custom {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (_msg: PartialDeep<custom>): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: custom, _json: any): custom {
    return msg;
  },
};

export const generateJSON = {
  /**
   * Serializes generate to JSON.
   */
  encode: function (_msg?: PartialDeep<generate>): string {
    return "{}";
  },

  /**
   * Deserializes generate from JSON.
   */
  decode: function (_json?: string): generate {
    return {};
  },

  /**
   * Initializes generate with all fields set to their default value.
   */
  initialize: function (msg?: Partial<generate>): generate {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<generate>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: generate, _json: any): generate {
    return msg;
  },
};

export const roleOptionsJSON = {
  /**
   * Serializes roleOptions to JSON.
   */
  encode: function (msg: PartialDeep<roleOptions>): string {
    return JSON.stringify(roleOptionsJSON._writeMessage(msg));
  },

  /**
   * Deserializes roleOptions from JSON.
   */
  decode: function (json: string): roleOptions {
    return roleOptionsJSON._readMessage(
      roleOptionsJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes roleOptions with all fields set to their default value.
   */
  initialize: function (msg?: Partial<roleOptions>): roleOptions {
    return {
      list: "",
      create: "",
      get: "",
      update: "",
      delete: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<roleOptions>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.list) {
      json["list"] = msg.list;
    }
    if (msg.create) {
      json["create"] = msg.create;
    }
    if (msg.get) {
      json["get"] = msg.get;
    }
    if (msg.update) {
      json["update"] = msg.update;
    }
    if (msg.delete) {
      json["delete"] = msg.delete;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: roleOptions, json: any): roleOptions {
    const _list_ = json["list"];
    if (_list_) {
      msg.list = _list_;
    }
    const _create_ = json["create"];
    if (_create_) {
      msg.create = _create_;
    }
    const _get_ = json["get"];
    if (_get_) {
      msg.get = _get_;
    }
    const _update_ = json["update"];
    if (_update_) {
      msg.update = _update_;
    }
    const _delete_ = json["delete"];
    if (_delete_) {
      msg.delete = _delete_;
    }
    return msg;
  },
};

export const validationOptionsJSON = {
  /**
   * Serializes validationOptions to JSON.
   */
  encode: function (msg: PartialDeep<validationOptions>): string {
    return JSON.stringify(validationOptionsJSON._writeMessage(msg));
  },

  /**
   * Deserializes validationOptions from JSON.
   */
  decode: function (json: string): validationOptions {
    return validationOptionsJSON._readMessage(
      validationOptionsJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes validationOptions with all fields set to their default value.
   */
  initialize: function (msg?: Partial<validationOptions>): validationOptions {
    return {
      list: false,
      create: false,
      get: false,
      update: false,
      delete: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<validationOptions>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.list) {
      json["list"] = msg.list;
    }
    if (msg.create) {
      json["create"] = msg.create;
    }
    if (msg.get) {
      json["get"] = msg.get;
    }
    if (msg.update) {
      json["update"] = msg.update;
    }
    if (msg.delete) {
      json["delete"] = msg.delete;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: validationOptions,
    json: any,
  ): validationOptions {
    const _list_ = json["list"];
    if (_list_) {
      msg.list = _list_;
    }
    const _create_ = json["create"];
    if (_create_) {
      msg.create = _create_;
    }
    const _get_ = json["get"];
    if (_get_) {
      msg.get = _get_;
    }
    const _update_ = json["update"];
    if (_update_) {
      msg.update = _update_;
    }
    const _delete_ = json["delete"];
    if (_delete_) {
      msg.delete = _delete_;
    }
    return msg;
  },
};

export const repositoryJSON = {
  /**
   * Serializes repository to JSON.
   */
  encode: function (msg: PartialDeep<repository>): string {
    return JSON.stringify(repositoryJSON._writeMessage(msg));
  },

  /**
   * Deserializes repository from JSON.
   */
  decode: function (json: string): repository {
    return repositoryJSON._readMessage(
      repositoryJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes repository with all fields set to their default value.
   */
  initialize: function (msg?: Partial<repository>): repository {
    return {
      collection: "",
      requiredRoles: roleOptionsJSON.initialize(),
      customValidation: validationOptionsJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<repository>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.collection) {
      json["collection"] = msg.collection;
    }
    if (msg.requiredRoles) {
      const _requiredRoles_ = roleOptionsJSON._writeMessage(msg.requiredRoles);
      if (Object.keys(_requiredRoles_).length > 0) {
        json["requiredRoles"] = _requiredRoles_;
      }
    }
    if (msg.customValidation) {
      const _customValidation_ = validationOptionsJSON._writeMessage(
        msg.customValidation,
      );
      if (Object.keys(_customValidation_).length > 0) {
        json["customValidation"] = _customValidation_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: repository, json: any): repository {
    const _collection_ = json["collection"];
    if (_collection_) {
      msg.collection = _collection_;
    }
    const _requiredRoles_ = json["requiredRoles"];
    if (_requiredRoles_) {
      roleOptionsJSON._readMessage(msg.requiredRoles, _requiredRoles_);
    }
    const _customValidation_ = json["customValidation"];
    if (_customValidation_) {
      validationOptionsJSON._readMessage(
        msg.customValidation,
        _customValidation_,
      );
    }
    return msg;
  },
};
