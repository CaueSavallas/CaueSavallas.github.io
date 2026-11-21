const crypto = require("crypto");
const fs = require("fs");
const data = fs.readFileSync("character.enc");
const key = crypto.createHash("sha256").update("Character3D#@").digest();
const d = crypto.createDecipheriv("aes-256-cbc", key, data.subarray(0, 16));
fs.writeFileSync("character-original.glb", Buffer.concat([d.update(data.subarray(16)), d.final()]));