/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const Adler32Checksum = require("../../operations/Adler32Checksum.js")
const AnalyseHash = require("../../operations/AnalyseHash.js")
const Argon2 = require("../../operations/Argon2.js")
const Argon2Compare = require("../../operations/Argon2Compare.js")
const Bcrypt = require("../../operations/Bcrypt.js")
const BcryptCompare = require("../../operations/BcryptCompare.js")
const BcryptParse = require("../../operations/BcryptParse.js")
const CMAC = require("../../operations/CMAC.js")
const CRC16Checksum = require("../../operations/CRC16Checksum.js")
const CRC32Checksum = require("../../operations/CRC32Checksum.js")
const CRC8Checksum = require("../../operations/CRC8Checksum.js")
const CTPH = require("../../operations/CTPH.js")
const CipherSaber2Decrypt = require("../../operations/CipherSaber2Decrypt.js")
const CipherSaber2Encrypt = require("../../operations/CipherSaber2Encrypt.js")
const CompareCTPHHashes = require("../../operations/CompareCTPHHashes.js")
const CompareSSDEEPHashes = require("../../operations/CompareSSDEEPHashes.js")
const DeriveHKDFKey = require("../../operations/DeriveHKDFKey.js")
const Fletcher16Checksum = require("../../operations/Fletcher16Checksum.js")
const Fletcher32Checksum = require("../../operations/Fletcher32Checksum.js")
const Fletcher64Checksum = require("../../operations/Fletcher64Checksum.js")
const Fletcher8Checksum = require("../../operations/Fletcher8Checksum.js")
const GenerateAllHashes = require("../../operations/GenerateAllHashes.js")
const GenerateUUID = require("../../operations/GenerateUUID.js")
const HAS160 = require("../../operations/HAS160.js")
const HASSHClientFingerprint = require("../../operations/HASSHClientFingerprint.js")
const HASSHServerFingerprint = require("../../operations/HASSHServerFingerprint.js")
const HMAC = require("../../operations/HMAC.js")
const JA3Fingerprint = require("../../operations/JA3Fingerprint.js")
const JA3SFingerprint = require("../../operations/JA3SFingerprint.js")
const JWTDecode = require("../../operations/JWTDecode.js")
const JWTSign = require("../../operations/JWTSign.js")
const JWTVerify = require("../../operations/JWTVerify.js")
const Keccak = require("../../operations/Keccak.js")
const LMHash = require("../../operations/LMHash.js")
const LS47Decrypt = require("../../operations/LS47Decrypt.js")
const LS47Encrypt = require("../../operations/LS47Encrypt.js")
const MD2 = require("../../operations/MD2.js")
const MD4 = require("../../operations/MD4.js")
const MD5 = require("../../operations/MD5.js")
const MD6 = require("../../operations/MD6.js")
const NTHash = require("../../operations/NTHash.js")
const RIPEMD = require("../../operations/RIPEMD.js")
const SHA0 = require("../../operations/SHA0.js")
const SHA1 = require("../../operations/SHA1.js")
const SHA2 = require("../../operations/SHA2.js")
const SHA3 = require("../../operations/SHA3.js")
const SM3 = require("../../operations/SM3.js")
const SSDEEP = require("../../operations/SSDEEP.js")
const Scrypt = require("../../operations/Scrypt.js")
const Shake = require("../../operations/Shake.js")
const Snefru = require("../../operations/Snefru.js")
const TCPIPChecksum = require("../../operations/TCPIPChecksum.js")
const Whirlpool = require("../../operations/Whirlpool.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Crypto = {
    "Adler-32 Checksum": Adler32Checksum,
    "Analyse hash": AnalyseHash,
    "Argon2": Argon2,
    "Argon2 compare": Argon2Compare,
    "Bcrypt": Bcrypt,
    "Bcrypt compare": BcryptCompare,
    "Bcrypt parse": BcryptParse,
    "CMAC": CMAC,
    "CRC-16 Checksum": CRC16Checksum,
    "CRC-32 Checksum": CRC32Checksum,
    "CRC-8 Checksum": CRC8Checksum,
    "CTPH": CTPH,
    "CipherSaber2 Decrypt": CipherSaber2Decrypt,
    "CipherSaber2 Encrypt": CipherSaber2Encrypt,
    "Compare CTPH hashes": CompareCTPHHashes,
    "Compare SSDEEP hashes": CompareSSDEEPHashes,
    "Derive HKDF key": DeriveHKDFKey,
    "Fletcher-16 Checksum": Fletcher16Checksum,
    "Fletcher-32 Checksum": Fletcher32Checksum,
    "Fletcher-64 Checksum": Fletcher64Checksum,
    "Fletcher-8 Checksum": Fletcher8Checksum,
    "Generate all hashes": GenerateAllHashes,
    "Generate UUID": GenerateUUID,
    "HAS-160": HAS160,
    "HASSH Client Fingerprint": HASSHClientFingerprint,
    "HASSH Server Fingerprint": HASSHServerFingerprint,
    "HMAC": HMAC,
    "JA3 Fingerprint": JA3Fingerprint,
    "JA3S Fingerprint": JA3SFingerprint,
    "JWT Decode": JWTDecode,
    "JWT Sign": JWTSign,
    "JWT Verify": JWTVerify,
    "Keccak": Keccak,
    "LM Hash": LMHash,
    "LS47 Decrypt": LS47Decrypt,
    "LS47 Encrypt": LS47Encrypt,
    "MD2": MD2,
    "MD4": MD4,
    "MD5": MD5,
    "MD6": MD6,
    "NT Hash": NTHash,
    "RIPEMD": RIPEMD,
    "SHA0": SHA0,
    "SHA1": SHA1,
    "SHA2": SHA2,
    "SHA3": SHA3,
    "SM3": SM3,
    "SSDEEP": SSDEEP,
    "Scrypt": Scrypt,
    "Shake": Shake,
    "Snefru": Snefru,
    "TCP/IP Checksum": TCPIPChecksum,
    "Whirlpool": Whirlpool,
};

module.exports = OpModules;