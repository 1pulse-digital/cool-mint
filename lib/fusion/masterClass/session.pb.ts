// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: masterClass/session.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export interface Session {
  name: string;
  uid: string;
  /**
   * Parent is the name of the class that the session is part of
   * TODO: Do we need this since it's kind of implied that name = {parent/id..}
   */
  parent: string;
  /**
   * Date and time of the session in RFC3339 format
   * The time component represents the start time of the session
   */
  date: string;
  /**
   * Confirmed attendees
   */
  confirmedAttendees: number;
  /**
   * Product is the linked product for the session
   */
  product: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Session = {
  /**
   * Serializes Session to protobuf.
   */
  encode: function (msg: PartialDeep<Session>): Uint8Array {
    return Session._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Session from protobuf.
   */
  decode: function (bytes: ByteSource): Session {
    return Session._readMessage(
      Session.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Session with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Session>): Session {
    return {
      name: "",
      uid: "",
      parent: "",
      date: "",
      confirmedAttendees: 0,
      product: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Session>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.parent) {
      writer.writeString(3, msg.parent);
    }
    if (msg.date) {
      writer.writeString(4, msg.date);
    }
    if (msg.confirmedAttendees) {
      writer.writeInt32(5, msg.confirmedAttendees);
    }
    if (msg.product) {
      writer.writeString(6, msg.product);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Session,
    reader: protoscript.BinaryReader,
  ): Session {
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
          msg.parent = reader.readString();
          break;
        }
        case 4: {
          msg.date = reader.readString();
          break;
        }
        case 5: {
          msg.confirmedAttendees = reader.readInt32();
          break;
        }
        case 6: {
          msg.product = reader.readString();
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

export const SessionJSON = {
  /**
   * Serializes Session to JSON.
   */
  encode: function (msg: PartialDeep<Session>): string {
    return JSON.stringify(SessionJSON._writeMessage(msg));
  },

  /**
   * Deserializes Session from JSON.
   */
  decode: function (json: string): Session {
    return SessionJSON._readMessage(SessionJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Session with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Session>): Session {
    return {
      name: "",
      uid: "",
      parent: "",
      date: "",
      confirmedAttendees: 0,
      product: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Session>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.parent) {
      json["parent"] = msg.parent;
    }
    if (msg.date) {
      json["date"] = msg.date;
    }
    if (msg.confirmedAttendees) {
      json["confirmedAttendees"] = msg.confirmedAttendees;
    }
    if (msg.product) {
      json["product"] = msg.product;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Session, json: any): Session {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _parent_ = json["parent"];
    if (_parent_) {
      msg.parent = _parent_;
    }
    const _date_ = json["date"];
    if (_date_) {
      msg.date = _date_;
    }
    const _confirmedAttendees_ = json["confirmedAttendees"];
    if (_confirmedAttendees_) {
      msg.confirmedAttendees = protoscript.parseNumber(_confirmedAttendees_);
    }
    const _product_ = json["product"];
    if (_product_) {
      msg.product = _product_;
    }
    return msg;
  },
};
