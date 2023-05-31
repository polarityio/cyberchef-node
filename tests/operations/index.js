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

const {
    setLongTestFailure,
    logTestReport,
} = require("../lib/utils.js");

const TestRegister = require("../lib/TestRegister.js");
require("./tests/BCD.js");
require("./tests/BSON.js");
require("./tests/BaconCipher.js");
require("./tests/Base45.js");
require("./tests/Base58.js");
require("./tests/Base64.js");
require("./tests/Base62.js");
require("./tests/Base85.js");
require("./tests/BitwiseOp.js");
require("./tests/ByteRepr.js");
require("./tests/CartesianProduct.js");
require("./tests/CetaceanCipherEncode.js");
require("./tests/CetaceanCipherDecode.js");
require("./tests/ChaCha.js");
require("./tests/CharEnc.js");
require("./tests/ChangeIPFormat.js");
require("./tests/Charts.js");
require("./tests/Checksum.js");
require("./tests/Ciphers.js");
require("./tests/Code.js");
require("./tests/Comment.js");
require("./tests/Compress.js");
require("./tests/ConditionalJump.js");
require("./tests/Crypt.js");
require("./tests/CSV.js");
require("./tests/DateTime.js");
require("./tests/ExtractEmailAddresses.js");
require("./tests/Fork.js");
require("./tests/FromDecimal.js");
require("./tests/GenerateAllHashes.js");
require("./tests/Gzip.js");
require("./tests/Gunzip.js");
require("./tests/Hash.js");
require("./tests/HaversineDistance.js");
require("./tests/Hex.js");
require("./tests/Hexdump.js");
require("./tests/Image.js");
require("./tests/IndexOfCoincidence.js");
require("./tests/Jump.js");
require("./tests/JSONBeautify.js");
require("./tests/JSONMinify.js");
require("./tests/JSONtoCSV.js");
require("./tests/JWTDecode.js");
require("./tests/JWTSign.js");
require("./tests/JWTVerify.js");
require("./tests/MS.js");
require("./tests/Magic.js");
require("./tests/MorseCode.js");
require("./tests/NetBIOS.js");
require("./tests/NormaliseUnicode.js");
require("./tests/OTP.js");
require("./tests/PGP.js");
require("./tests/PHP.js");
require("./tests/ParseIPRange.js");
require("./tests/ParseQRCode.js");
require("./tests/PEMtoHex.js");
require("./tests/PowerSet.js");
require("./tests/Regex.js");
require("./tests/Register.js");
require("./tests/Rotate.js");
require("./tests/SeqUtils.js");
require("./tests/SetDifference.js");
require("./tests/SetIntersection.js");
require("./tests/SetUnion.js");
require("./tests/SM4.js");
require("./tests/StrUtils.js");
require("./tests/SymmetricDifference.js");
require("./tests/TextEncodingBruteForce.js");
require("./tests/TranslateDateTimeFormat.js");
require("./tests/Magic.js");
require("./tests/ParseTLV.js");
require("./tests/Media.js");
require("./tests/ToFromInsensitiveRegex.js");
require("./tests/YARA.js");
require("./tests/ConvertCoordinateFormat.js");
require("./tests/Enigma.js");
require("./tests/Bombe.js");
require("./tests/MultipleBombe.js");
require("./tests/Typex.js");
require("./tests/BLAKE2b.js");
require("./tests/BLAKE2s.js");
require("./tests/Protobuf.js");
require("./tests/ParseSSHHostKey.js");
require("./tests/DefangIP.js");
require("./tests/ParseUDP.js");
require("./tests/ParseTCP.js");
require("./tests/AvroToJSON.js");
require("./tests/Lorenz.js");
require("./tests/LuhnChecksum.js");
require("./tests/CipherSaber2.js");
require("./tests/Colossus.js");
require("./tests/ParseObjectIDTimestamp.js");
require("./tests/Unicode.js");
require("./tests/RSA.js");
require("./tests/CBOREncode.js");
require("./tests/CBORDecode.js");
require("./tests/JA3Fingerprint.js");
require("./tests/JA3SFingerprint.js");
require("./tests/HASSH.js");
require("./tests/GetAllCasings.js");
require("./tests/SIGABA.js");
require("./tests/ELFInfo.js");
require("./tests/Subsection.js");
require("./tests/CaesarBoxCipher.js");
require("./tests/UnescapeString.js");
require("./tests/LS47.js");
require("./tests/LZString.js");
require("./tests/NTLM.js");
require("./tests/Shuffle.js");
require("./tests/FletcherChecksum.js");
require("./tests/CMAC.js");
require("./tests/AESKeyWrap.js");
require("./tests/Rabbit.js");
require("./tests/LevenshteinDistance.js");
require("./tests/SwapCase.js");
require("./tests/HKDF.js");
require("./tests/GenerateDeBruijnSequence.js");

// Cannot test operations that use the File type yet
// require("./tests/SplitColourChannels.js");

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
