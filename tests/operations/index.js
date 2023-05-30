/* eslint no-console: 0 */

/**
 * Test Runner
 *
 * For running the tests in the test register.
 *
 * @author tlwr [toby@toby.codes]
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 */

import {
    setLongTestFailure,
    logTestReport,
} from "../lib/utils.js";

const TestRegister = require("../lib/TestRegister.js");
import "./tests/BCD.js";
import "./tests/BSON.js";
import "./tests/BaconCipher.js";
import "./tests/Base45.js";
import "./tests/Base58.js";
import "./tests/Base64.js";
import "./tests/Base62.js";
import "./tests/Base85.js";
import "./tests/BitwiseOp.js";
import "./tests/ByteRepr.js";
import "./tests/CartesianProduct.js";
import "./tests/CetaceanCipherEncode.js";
import "./tests/CetaceanCipherDecode.js";
import "./tests/ChaCha.js";
import "./tests/CharEnc.js";
import "./tests/ChangeIPFormat.js";
import "./tests/Charts.js";
import "./tests/Checksum.js";
import "./tests/Ciphers.js";
import "./tests/Code.js";
import "./tests/Comment.js";
import "./tests/Compress.js";
import "./tests/ConditionalJump.js";
import "./tests/Crypt.js";
import "./tests/CSV.js";
import "./tests/DateTime.js";
import "./tests/ExtractEmailAddresses.js";
import "./tests/Fork.js";
import "./tests/FromDecimal.js";
import "./tests/GenerateAllHashes.js";
import "./tests/Gzip.js";
import "./tests/Gunzip.js";
import "./tests/Hash.js";
import "./tests/HaversineDistance.js";
import "./tests/Hex.js";
import "./tests/Hexdump.js";
import "./tests/Image.js";
import "./tests/IndexOfCoincidence.js";
import "./tests/Jump.js";
import "./tests/JSONBeautify.js";
import "./tests/JSONMinify.js";
import "./tests/JSONtoCSV.js";
import "./tests/JWTDecode.js";
import "./tests/JWTSign.js";
import "./tests/JWTVerify.js";
import "./tests/MS.js";
import "./tests/Magic.js";
import "./tests/MorseCode.js";
import "./tests/NetBIOS.js";
import "./tests/NormaliseUnicode.js";
import "./tests/OTP.js";
import "./tests/PGP.js";
import "./tests/PHP.js";
import "./tests/ParseIPRange.js";
import "./tests/ParseQRCode.js";
import "./tests/PEMtoHex.js";
import "./tests/PowerSet.js";
import "./tests/Regex.js";
import "./tests/Register.js";
import "./tests/Rotate.js";
import "./tests/SeqUtils.js";
import "./tests/SetDifference.js";
import "./tests/SetIntersection.js";
import "./tests/SetUnion.js";
import "./tests/SM4.js";
import "./tests/StrUtils.js";
import "./tests/SymmetricDifference.js";
import "./tests/TextEncodingBruteForce.js";
import "./tests/TranslateDateTimeFormat.js";
import "./tests/Magic.js";
import "./tests/ParseTLV.js";
import "./tests/Media.js";
import "./tests/ToFromInsensitiveRegex.js";
import "./tests/YARA.js";
import "./tests/ConvertCoordinateFormat.js";
import "./tests/Enigma.js";
import "./tests/Bombe.js";
import "./tests/MultipleBombe.js";
import "./tests/Typex.js";
import "./tests/BLAKE2b.js";
import "./tests/BLAKE2s.js";
import "./tests/Protobuf.js";
import "./tests/ParseSSHHostKey.js";
import "./tests/DefangIP.js";
import "./tests/ParseUDP.js";
import "./tests/ParseTCP.js";
import "./tests/AvroToJSON.js";
import "./tests/Lorenz.js";
import "./tests/LuhnChecksum.js";
import "./tests/CipherSaber2.js";
import "./tests/Colossus.js";
import "./tests/ParseObjectIDTimestamp.js";
import "./tests/Unicode.js";
import "./tests/RSA.js";
import "./tests/CBOREncode.js";
import "./tests/CBORDecode.js";
import "./tests/JA3Fingerprint.js";
import "./tests/JA3SFingerprint.js";
import "./tests/HASSH.js";
import "./tests/GetAllCasings.js";
import "./tests/SIGABA.js";
import "./tests/ELFInfo.js";
import "./tests/Subsection.js";
import "./tests/CaesarBoxCipher.js";
import "./tests/UnescapeString.js";
import "./tests/LS47.js";
import "./tests/LZString.js";
import "./tests/NTLM.js";
import "./tests/Shuffle.js";
import "./tests/FletcherChecksum.js";
import "./tests/CMAC.js";
import "./tests/AESKeyWrap.js";
import "./tests/Rabbit.js";
import "./tests/LevenshteinDistance.js";
import "./tests/SwapCase.js";
import "./tests/HKDF.js";
import "./tests/GenerateDeBruijnSequence.js";

// Cannot test operations that use the File type yet
// import "./tests/SplitColourChannels.js";

const testStatus = {
    allTestsPassing: true,
    counts: {
        total: 0,
    }
};

setLongTestFailure();

const logOpsTestReport = logTestReport.bind(null, testStatus);

(async function() {
    const results = await TestRegister.runTests();
    logOpsTestReport(results);
})();
