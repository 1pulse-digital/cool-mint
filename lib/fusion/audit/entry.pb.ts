// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: audit/entry.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Entry {
  dateCreated: string;
  dateModified: string;
  createdBy: string;
  modifiedBy: string;
  version: bigint;
  eTag: string;
  uid: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Entry = {
  /**
   * Serializes Entry to protobuf.
   */
  encode: function (msg: PartialDeep<Entry>): Uint8Array {
    return Entry._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Entry from protobuf.
   */
  decode: function (bytes: ByteSource): Entry {
    return Entry._readMessage(
      Entry.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Entry with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Entry>): Entry {
    return {
      dateCreated: "",
      dateModified: "",
      createdBy: "",
      modifiedBy: "",
      version: 0n,
      eTag: "",
      uid: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Entry>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.dateCreated) {
      writer.writeString(1, msg.dateCreated);
    }
    if (msg.dateModified) {
      writer.writeString(2, msg.dateModified);
    }
    if (msg.createdBy) {
      writer.writeString(3, msg.createdBy);
    }
    if (msg.modifiedBy) {
      writer.writeString(4, msg.modifiedBy);
    }
    if (msg.version) {
      writer.writeInt64String(5, msg.version.toString() as any);
    }
    if (msg.eTag) {
      writer.writeString(6, msg.eTag);
    }
    if (msg.uid) {
      writer.writeString(7, msg.uid);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Entry, reader: protoscript.BinaryReader): Entry {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.dateCreated = reader.readString();
          break;
        }
        case 2: {
          msg.dateModified = reader.readString();
          break;
        }
        case 3: {
          msg.createdBy = reader.readString();
          break;
        }
        case 4: {
          msg.modifiedBy = reader.readString();
          break;
        }
        case 5: {
          msg.version = BigInt(reader.readInt64String());
          break;
        }
        case 6: {
          msg.eTag = reader.readString();
          break;
        }
        case 7: {
          msg.uid = reader.readString();
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

export const EntryJSON = {
  /**
   * Serializes Entry to JSON.
   */
  encode: function (msg: PartialDeep<Entry>): string {
    return JSON.stringify(EntryJSON._writeMessage(msg));
  },

  /**
   * Deserializes Entry from JSON.
   */
  decode: function (json: string): Entry {
    return EntryJSON._readMessage(EntryJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Entry with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Entry>): Entry {
    return {
      dateCreated: "",
      dateModified: "",
      createdBy: "",
      modifiedBy: "",
      version: 0n,
      eTag: "",
      uid: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Entry>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.dateCreated) {
      json["dateCreated"] = msg.dateCreated;
    }
    if (msg.dateModified) {
      json["dateModified"] = msg.dateModified;
    }
    if (msg.createdBy) {
      json["createdBy"] = msg.createdBy;
    }
    if (msg.modifiedBy) {
      json["modifiedBy"] = msg.modifiedBy;
    }
    if (msg.version) {
      json["version"] = String(msg.version);
    }
    if (msg.eTag) {
      json["eTag"] = msg.eTag;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Entry, json: any): Entry {
    const _dateCreated_ = json["dateCreated"] ?? json["date_created"];
    if (_dateCreated_) {
      msg.dateCreated = _dateCreated_;
    }
    const _dateModified_ = json["dateModified"] ?? json["date_modified"];
    if (_dateModified_) {
      msg.dateModified = _dateModified_;
    }
    const _createdBy_ = json["createdBy"] ?? json["created_by"];
    if (_createdBy_) {
      msg.createdBy = _createdBy_;
    }
    const _modifiedBy_ = json["modifiedBy"] ?? json["modified_by"];
    if (_modifiedBy_) {
      msg.modifiedBy = _modifiedBy_;
    }
    const _version_ = json["version"];
    if (_version_) {
      msg.version = BigInt(_version_);
    }
    const _eTag_ = json["eTag"] ?? json["e_tag"];
    if (_eTag_) {
      msg.eTag = _eTag_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    return msg;
  },
};
