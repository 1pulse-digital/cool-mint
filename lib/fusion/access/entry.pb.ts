// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: access/entry.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Entry {
  name: string;
  uid: string;
  cardID: string;
  membershipID: string;
  createdAt: string;
  accessPointID: string;
  granted: boolean;
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
      name: "",
      uid: "",
      cardID: "",
      membershipID: "",
      createdAt: "",
      accessPointID: "",
      granted: false,
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
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.cardID) {
      writer.writeString(3, msg.cardID);
    }
    if (msg.membershipID) {
      writer.writeString(4, msg.membershipID);
    }
    if (msg.createdAt) {
      writer.writeString(5, msg.createdAt);
    }
    if (msg.accessPointID) {
      writer.writeString(6, msg.accessPointID);
    }
    if (msg.granted) {
      writer.writeBool(7, msg.granted);
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
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.uid = reader.readString();
          break;
        }
        case 3: {
          msg.cardID = reader.readString();
          break;
        }
        case 4: {
          msg.membershipID = reader.readString();
          break;
        }
        case 5: {
          msg.createdAt = reader.readString();
          break;
        }
        case 6: {
          msg.accessPointID = reader.readString();
          break;
        }
        case 7: {
          msg.granted = reader.readBool();
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
      name: "",
      uid: "",
      cardID: "",
      membershipID: "",
      createdAt: "",
      accessPointID: "",
      granted: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Entry>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.cardID) {
      json["cardID"] = msg.cardID;
    }
    if (msg.membershipID) {
      json["membershipID"] = msg.membershipID;
    }
    if (msg.createdAt) {
      json["createdAt"] = msg.createdAt;
    }
    if (msg.accessPointID) {
      json["accessPointID"] = msg.accessPointID;
    }
    if (msg.granted) {
      json["granted"] = msg.granted;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Entry, json: any): Entry {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _cardID_ = json["cardID"];
    if (_cardID_) {
      msg.cardID = _cardID_;
    }
    const _membershipID_ = json["membershipID"];
    if (_membershipID_) {
      msg.membershipID = _membershipID_;
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = _createdAt_;
    }
    const _accessPointID_ = json["accessPointID"];
    if (_accessPointID_) {
      msg.accessPointID = _accessPointID_;
    }
    const _granted_ = json["granted"];
    if (_granted_) {
      msg.granted = _granted_;
    }
    return msg;
  },
};
