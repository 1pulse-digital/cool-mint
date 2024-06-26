// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: auth/user.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as authRole from "./role.pb";

//========================================//
//                 Types                  //
//========================================//

export interface User {
  name: string;
  uid: string;
  email: string;
  role: authRole.Role;
  displayName: string;
  phoneNumber: string;
  photoURL: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const User = {
  /**
   * Serializes User to protobuf.
   */
  encode: function (msg: PartialDeep<User>): Uint8Array {
    return User._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes User from protobuf.
   */
  decode: function (bytes: ByteSource): User {
    return User._readMessage(
      User.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes User with all fields set to their default value.
   */
  initialize: function (msg?: Partial<User>): User {
    return {
      name: "",
      uid: "",
      email: "",
      role: authRole.Role._fromInt(0),
      displayName: "",
      phoneNumber: "",
      photoURL: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<User>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.email) {
      writer.writeString(3, msg.email);
    }
    if (msg.role && authRole.Role._toInt(msg.role)) {
      writer.writeEnum(4, authRole.Role._toInt(msg.role));
    }
    if (msg.displayName) {
      writer.writeString(5, msg.displayName);
    }
    if (msg.phoneNumber) {
      writer.writeString(6, msg.phoneNumber);
    }
    if (msg.photoURL) {
      writer.writeString(8, msg.photoURL);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: User, reader: protoscript.BinaryReader): User {
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
          msg.email = reader.readString();
          break;
        }
        case 4: {
          msg.role = authRole.Role._fromInt(reader.readEnum());
          break;
        }
        case 5: {
          msg.displayName = reader.readString();
          break;
        }
        case 6: {
          msg.phoneNumber = reader.readString();
          break;
        }
        case 8: {
          msg.photoURL = reader.readString();
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

export const UserJSON = {
  /**
   * Serializes User to JSON.
   */
  encode: function (msg: PartialDeep<User>): string {
    return JSON.stringify(UserJSON._writeMessage(msg));
  },

  /**
   * Deserializes User from JSON.
   */
  decode: function (json: string): User {
    return UserJSON._readMessage(UserJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes User with all fields set to their default value.
   */
  initialize: function (msg?: Partial<User>): User {
    return {
      name: "",
      uid: "",
      email: "",
      role: authRole.Role._fromInt(0),
      displayName: "",
      phoneNumber: "",
      photoURL: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<User>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.email) {
      json["email"] = msg.email;
    }
    if (msg.role && authRole.RoleJSON._toInt(msg.role)) {
      json["role"] = msg.role;
    }
    if (msg.displayName) {
      json["displayName"] = msg.displayName;
    }
    if (msg.phoneNumber) {
      json["phoneNumber"] = msg.phoneNumber;
    }
    if (msg.photoURL) {
      json["photoURL"] = msg.photoURL;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: User, json: any): User {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _email_ = json["email"];
    if (_email_) {
      msg.email = _email_;
    }
    const _role_ = json["role"];
    if (_role_) {
      msg.role = authRole.Role._fromInt(_role_);
    }
    const _displayName_ = json["displayName"];
    if (_displayName_) {
      msg.displayName = _displayName_;
    }
    const _phoneNumber_ = json["phoneNumber"];
    if (_phoneNumber_) {
      msg.phoneNumber = _phoneNumber_;
    }
    const _photoURL_ = json["photoURL"];
    if (_photoURL_) {
      msg.photoURL = _photoURL_;
    }
    return msg;
  },
};
