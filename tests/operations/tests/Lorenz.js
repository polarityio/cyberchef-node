/**
 * Lorenz SZ40/42a/42b machine tests.
 *
 * @author VirtualColossus
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */
const TestRegister = require(""../../lib/TestRegister.mjs"");

TestRegister.addTests([
    {
        // Simple test first - plain text to ITA2
        name: "Lorenz SZ40: no pattern, plain text",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "HELLO9WORLD55N889THIS9IS9A9TEST9MESSAGE55M",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ40", "No Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // KH Pattern
        name: "Lorenz SZ40: KH pattern, plain text, all 1s",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "VIC3TS/CUJA/3II9W9JWDI5DAFXT4SOIF3999IZD9T",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ40", "KH Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // KH Pattern, Random Start
        name: "Lorenz SZ40: KH pattern, plain text, random start",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "KGZP5ONYCHNNOXS9SN45MIE3SC3DJBZVJUOE5SLVGI",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ40", "KH Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 20, 40, 3, 9, 27, 36, 4, 1, 9, 14, 21, 8, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // ZMUG Pattern, Random Start
        name: "Lorenz SZ40: ZMUG pattern, plain text, random start",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "IQVPAANDCA3CHDNO3V/CZQ/BTPZIKW8YAAQXQGLDMV",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ40", "ZMUG Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 20, 40, 3, 9, 27, 36, 4, 1, 9, 14, 21, 8, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // Bream Pattern, Random Start
        name: "Lorenz SZ40: Bream pattern, plain text, random start",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "/89OALRPJEZQGOO84WOEQZ/I9NBRZOQPBTANC8E/GK",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ40", "BREAM Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 20, 40, 3, 9, 27, 36, 4, 1, 9, 14, 21, 8, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // KH Pattern, all 1s
        name: "Lorenz SZ42a: KH pattern, plain text, all 1s",
        input: "HELLO WORLD, THIS IS A TEST MESSAGE.",
        expectedOutput: "VIC3TS/ZOHUYXWLTUXPV9ZNOTW9IXJPFDLIBB5ZD9K",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ42a", "KH Pattern", false, "Send", "Plaintext", "Plaintext", "5/8/9", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // KH Pattern, Full Test on real message
        name: "Lorenz SZ42a: Receive, KH pattern, ITA2 output",
        input: "J3KF+LXT/.+YTMLE/RFVC-SE///4GYX3Q.Z3GVWKWDVAPURPYL/.UYAI.EOW3ZBVVAQRTO/PACJ.NLVLZYYNTU.IDCPKTEZOSWCOBNWFJ+UAKE+WU-JMWYWLXRM+M/HV+TVTC-FOGN3QZG4J.VLM/KK+OVC/YIWTSZUDTSY+3LCCHZADQ-3VBXKEOCSO/+ZBFN34-F.+4UVFVLIP4KFGRBFIVFFJX/FKFSHJ.VUJVWXE+LFAICDYX3EZD33U+GSOGXPAXHTJSNUQI+PXS3JRG+-U+YZITF/SM4LIDPSYMVJM/BL/YHDGBG/UI+EM.JEMX.YQNUWTLAUCLUSDMZGXCQ3CPPCCYLTJC4KXB--G4VGQ4J.EYTEVSG33DVLVPDGNOGAJOUWGFY4KGO-4+IRKDPGDHGBQLFSS/YDP/FM-/BANLERZEMT.U3XZA43RGYD+-J4VYRTONRYF/OI4Y+I3LXUFAHGRT.RXCO3HKCQIML.VHVIGHBWBTU3RZFN.J.WGNLSGLYBJT+TPM-RHHMXTNDSVUO3W/4ORZ4UY.LA-XZYVLCZROMPM3RYSLUD-SNQQA+RK/UV4K/GOSSMJRGIZYPO+BEEB+OEWAWKYXW.-NKUQERUM-PA4WFNKU-Q-LNC.D-A3C.FB.RFOGZHUWTEAYB3HNHCEW.N33QEEVUEC3OOR4BRNLH/IF3+DJJ3S3J4XA+Z3SMT/K4L-IDLQWCLMQ3TO3PNYVCGZCXUMSSBH.BWMGGTIYSC/UBX/PE+3IZZ.Z/CCWLSL+4/4+IET/ELBCBDAM4ELKDAGB3O.3J+IEQQJ.U.VSAQSAYZAU+3YOZWPPPV/YOVOE/P/E4UOZYK4PE3A.ETZGFBCZE.4WA3PSDR3XMLJLH+S3UWOA.T-RID-MA.CVZGLNYK4U.HBPSA+3U+BLSGS/FNRXMOMEBBABIPOAGDWA-4T/B.L.HDSAJE.HE-4FZW+SDBAYCNBTEODDALCMIG-QNM+-PEFC+ABNQ-MVT3-GHKAN/ENZLPMJRVRB+4NBCRTFDVNLRTPIGIEZGSPUXMW3WJQTOEV+WA-HJZLX-JQID-X++FFGKCTO.3.F+JIISVTXKC+..YM/SOQUIAS-IAGJJPRYLLT.EJBJAMRP+MS-ZRUVLBBE-UNYQGBBHEB+QCHYYHVN.NHKS-YG3BNZKQJBO-FQ.SZB/JRFILGUZUZVCOVGULEKU4/HRBGYIZVLCM3/ONJ-OBIRSCT+IZCB-TTZMDQWQUCIVTGTTYNEOTTORM-FSKS3WJWL/ZXOCOCYGC.BRIRKXK.FLJUSP/-G.WP.MMVHBYREWQZZAN/BKSEYDBGXAUV+NUKUKIKIGS+VO-4EY/GWI+SGJOJCBYGGMY4+/EMGULCSC-Y+CXLIECYC-+-ZXHSPOTFGFDWIFT-4XXDDLMMKT433WH/BX-OILWDJC/FFE-ZYH3C4GI4T/3KUJQ4YNBQWXWB-RM.Q3GG/4Z-AIGW4GYYEBXRJHXQA..-.G/3W/-LVS+4GS-+FRYIOFYGUK-FEYA4J-ZB-MSPAM/WLLJ3GFMJP/GGF-C+O-KQ.K4PWVL+3O.LX4TUD+Y+QOO3GTJT+.MR-4JSRXD-X4SCIDIVLCDEGSOZOGWXQZOZ.3PPQ4ZYXKL+QETCM/3/--CHG4+W.BNHTB+Z-NZCO+QEB+-/FNJ+NSHTO+CW.CM/VHIM-S.3VAFDJ3MEH.G+NQFDCUSK+MCKDLEC-TFWSYBQSWE4UOQOXY-E.ESE4OLJQOBUQZUSLRWV-AVOYX3CKS3ZFUAQAWESYMXQV/4MOXORAVKOIELRXCSRAEU/KEFDQWQ-BWEXGALS/.JLQ/CEKT-4C+TWDNGST-UQ-ERBP.YZ-ZH/Q3ITMN-O3P/JBEVZUOY4CTNY4PKCB3YIW/+BOKDEZE.VCTROQDTAXI3VKGYQVOKSCXPDDAD4DLTELK.GDDLTRPXORSFTDOGB.-NQJHNM/4/JOTIVGOQF+FC.GDX4DMT.UBRVUIBCHGLDBZSFSICVVAF4TN.BMAP-IQR-LBCQ/TTHH",
        expectedOutput: "XWOLLE9WI9R99AUCH9BLEIBEN955Z88KR99GWFRL5X89FUES959WPYP9QXT9QIPQ9V9AACQEM9959AA899QEE9959AA8999AN99OB5M89SUEDW/ST5V9AA8GEHEIME9KOMMANDOSACHE5AA89959AA89NUR9ZUR9PERSOENLICHENSINTERRICHTUNG5N889WEITERGABE9VERBOTEN5MA9AA8LAGEBERICHT9VOM99GSEPMM98NN99VOM9959EPMRM9QORT9AA889KATEN9NN9KAT9NN9KARTEN9959Q9C9QSVPP9PPP9A9MA98889ROEM959QM89WESTEN9959C899AOK999L9U9C88889ROEMS59QWM89A5M89K5MCMA989PANZERUNTERSTUEZ9NN9PANZSRUNTERSTUETZTESFEINDANGRIFFE99GEGEN9EIGENE9STUETZPU9NKTFRONT9NAHMEN9O4D9ELSTER5N89SOHL5N89RAU9NN9RAU9N9UND9BAD9BRAMBACH95K9WR8889NN9995KWT88SKM9BFO9HOF5LM89NEUE9STUETZPUNKTFRONT9B99DIESER9ORT5M89UEBRIGE9CORPSFRONT9BEIDERSEITIGE9AUFKLAERUNGSTAETIGKEI5M9DIESER9ORT5M89I/BRIGE9KORPSFRONT9BEIDERSEITIGE9AUFKLAERUNGSTAETIGKEI5MA99A8STELWV5M89ROEM959QEM89A5M8K5MMA989ZUNEHMENDER9FEINDDRUCK9IM9RAUXSN9UND99W99BAERNAU95K9T889NN9959KWT889KM9SW9MARIENBAD5LM889FEINDAFGRIF9F99VON99SO99GEGEN9PAULUSBRUNN5M899LAGE9DORT9UNGEKL4ERT5M89SCHWACHE99EIGENEN9SICHERUNGEN9DURCH9FEIND9AUS99SCHAENWAWDE9UND9WOSANT995K9Y89KM9SO99TACHAU5L89NACH9O99ZURUECKGEWOFNN9TURUEIKGEWORFEN5M89FEIND99MIT9INF9UND9PZ5M89IN9PEISSIGKAU9UND9WLAD9NS9DAHENTEN5M89EIGENE9SICHERANGEN9IN9MOLGAU959A89DRI9UND9WLAD9N993AHENTEN5M89EIGENE9SIC4ERUNGENSIGKAU9UND9WLAD9N99DAHENTEN5M89EUGENE9SICHERUNGEN9IN9MOLGAU959A89DRISSGLOBEN959A89WURKAU5M89IM9A9SNN9IM9RAUM99TAUS99PANZERUNTERSTUETZTE99FEINDANGRIFFE5MA99AA899A5X8O5M8K5M99QC9MA9989UEBER9ISAR9MIT9INF9UND9PZ5M89UEBERBESETZTEJ9FEIND9STIESZ99UEBER9S9NN9UEBER99VILSA9BSCHNITT9VOR9UND9NAHXS9AUNKIRCHEN959A89ALDERSBACH959A89EGGERSDORF995KWP889KM9W9P49SAU5LMA9A88ROEM9959IWM89A5MLK5MCMA989DWP889KM9W9PASSAU5LMASA88ROEM9959IWM89A5MLK5MCMA989DER9ZWISCHEN9PLATTLING9UND9LANDAI9FU9NN3/UF99BREITER9FRONT99UEBER9DIE9ISAR99UEBERB99NNN9UEBER5ESETZTE99FEIND9DRUECKTE9EIGENEN9LINIE5N89TROTZ9HIFTIGEN9WIDERST4F3ES5N89AUN9VISLABSCHNITT9ZUREUCK585M89FEINDPANZER9N9NN9IN9ARTOFJFN9IN9ARNTORF959KQT889KM9SO9LANDAU5B89UND99N9ROTTESDORF599IN9ARNZORZ959KQT889KM9SO9LANDAU5L89UND99N9ROTTESDORF59KI89KM9S9LANDAUGWMA59A89ROEM959QEM8939NN9959A899ROEM9959QK4OLE",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ42a", "KH Pattern", false, "Receive", "Plaintext", "ITA2", "5/8/9", 12, 12, 41, 45, 17, 12, 3, 11, 31, 29, 12, 23, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    },
    {
        // ZMUG Pattern, Full Test, Receive
        name: "Lorenz SZ42b: Receive, ZMUG pattern, KT-Schalte, Plaintext output",
        input: "YQPLQQX4OJGFOKBXROZVPBVIJOXSMQSMTMHX8VSBBMIHKJTYKR4ANTQRPCJXR3YE8KVLDN8SQN4VCJQUW3BB4HWEXRD4LUJNF99DV5FLQ4IRANWRCLYX//J8YSIWO44LCPTCBKX4TZGBPYHCE/FBJ4DSBFF5YLOVPBSRUDQULTTO9BYLLUCRGTM/VXQCS8XUDLY/5O3TPSYFQ89RQRGG/IEOKULB8MHQQBHIWRW38W5XSPT9YF8WJGN3HMEBY8XKQW/3BC888Q3JC/K8SOXJWONNQCM8Z4UQQQGE8RL3GXZ3YI4O/RBCF5JXJE5W5GJAT9/9XP9V8SFZLKUBUPD4HXABGLB8D3E4YTERP3GGISVNYHOL3BQVJUOFEBZMYHBKFGPWEOGGMFGF/EVGWT584T8BMURIBSIBELCANKT/VXHUHONHFPJ/OBCQGCQPFQSQW3GEFCQKY9Z4/KVIQJPJQ4ZQJZP/PEIHQG4H99B58HD5/XCLRBPXMR8P84CMHO5RYODKY94NINO4OGY8TOF9BD9EPD5U3P9KMJ/WBXX9CO9SHMK5KHQFA9BE35R4OSAPCAXZ9SALUKVPVVYB8MGGK3XSVLKGUT/8JVIF5DSDUQT3ZKZTICJTSGXVZAZ4WWGAMOFWUN94OZR4Y8AVLGZHOV/UHCURM5RQPKDCEMRBWLKYLTTGGE8ZIVP4HJMVW5HWKOHRZ4OIUL5OZJOVHL9AQUZA93F3H9QNS5VZYZXUM8AD3RZC9CQ5B//4J8/B35XVB9MHMYQSVQPFWSXWEDU5NHXBSO/W/NBW3V/KO5VHIZQRZOKIJSV4G9Y/H3FIYLBH5/XA3AYRPUREKAQL5WTXJ4EK3EAYQ8GIDXTBXMUFUGKZHZZZPYAQMQOXZAGKP4SPIEIKVUPVPRVRSXSDRJSS3XM5KOTUVK3O435VB93H4HB8IEXHDGCJ3VHPG48VZKB4GHRNFHDQ8LN4P9TI3VD9//LACSHQJZWK5/WLC5/PHN5JTVWAOXWX59/SIZ4ADMXO5GCMYSPNLR33CFLKGSN/ZYCFAR5I4/ZQRWCVGY9GCAA5GJCW55HXVGAKGZG/V9Q9AGB9WAVKJX9DM/FOCHWZXAVEPMKTSQJYPWCYFTH3WXZRVAFCLHFMFQUGUWDHQQSUF/QSPSY/8PWPU9B8WUXFE5IPYCSYX3FKEGXIY8DCNLOWZTU8N98ZNWL8QDP/JHTU5YNHN8OI8TMBBIUQEOVT4S/N9V//LZCQ5LN3X43LUG/KDVSOXUTKOP5VTI/OUV98ULIJW9EBVUMBYBLOIKJX/XUHHYPB/N3PEVBFJGXGO3H8VTIO9D8IV5FAL5DZDOC88WNITD/CEZOB3IS8W//ZIBFQOMG3HNUXV3YMM5QH8YYPV/EJMUCKSNRTGFHBZJFTX59CMRM/D5GVFWHF8QWPY44IKNLH8A9SMHYUNXGDJBX9PA4CJPRO4RZSPTG4SYBLHMSV/9UJPUJEPHPZWSDKMMMN/WEHOZDXBPWS3DHG9SBWFTB85HOPZYTVZ9KSBGZ8PAIGGIVXU/8YIFQGQDDDVDDV3TL8L5G9C/98CYDUGWWCGQCQLS4Y8BGSSMYLOODGA/YMRWI9LJI8TXT3ZYZ8NR/3RNDYHR9DINKB//HWPJETJ8/RFXSV/SKWEBKOMSJ9W393JH8E/G3UX/5CD35H4BZOU8GYELU4EUYNYP/UUBYQZKLIPFPOPZ8WNJ4WR5QWIZVMQ9BCVZM3MB8BES5APTTVTBSILLUQHY9X/A9FFQWR5DUMNHPUKVZDYB38ZSI3CNCZPG9C/UKYRX5YWXEIBIMCBNRPGGCZKHLNG4T/R5K4LSBZUVNGBCHPI/JUIZ/IMFXEE4KYSEMYBPWBZ/UCANCY4MPXFQB3NRZQOSLBOMD9TP3IY8RQWIEG9HG3CH8AI/GGPGLXNNV4Q/ZOMVCVS4UCQFFEMMWK/RSV8RXQQPSOT8GYAUXOUJQ9VQCHAS4FL3WAMQXARHYNEPYS5TR3/MHCUSPE33NWZ48X3J9HWEJGIKOTLKAJXXAQ5X3YVLGNSSM3XT/9E/PBTN5PHCJLWKICIHER/QQMVGAGCVTKBUL3B3GQUKLKZ38YMOOJ5DTAFZSFZLVO4UZXGNNR4SJ3JFMLKDP3MXSZXX3YVLGXF3O8H5JHBZFTOZ4JDTLQGHLD5XOBLVQI/MQXS4EJAIU/VLYIGGJWNOTTF9AEQSEEGT84GI355YLVTTDGVICR8ACXJFHPTHRG8UXCLIHMW4Z3CUV89YLL3W3HDC5HUUDJ/PUS54PIJ98IXL3SEEOWWPGFN9O9ICPG4K8558ONZOHSW/U4ZRSC4C3UOHHIEARXSCZDZM4IBDBLRI99DEKKIAYPJSOSC59XGUVKSPHV9FRE35A5SII3G3DRQDQKTSC9DNUPBXVD3ORPX9NM3BK3PB5PIWUZKNCL4I4IWVO4FE4GCZBHSZWN3GS88G884DUFDUFE9RJEEKM3AJHNSEANJWQMRP5DUXHEKDWAAQGZYUL3EXY4ALN4NR3SF5CFOTZ9FGNJDFQEZU4TTVORUVS5WIZBQLZQF5HD4TTYIRPAZDNPCIYS93ZY5QQEBTYIYCQ4AJGK83BFOIK9S5GAJCBYLKSDADHOS4/XVSHDYBFSO3FZIHHHWSJ5L4R33KCXOW8T9KFQ4C8UCOCOCKXU8JJ5R9JL88UAJQ4HXWDBQ45JGY/AYGP8PMGWWLFM/9SP5OHR3FQKDIYIAOLKWM8OT8JO4W9ET5LIZMMNJBNN/A999JNG3ALKLKEK/HWZJUC5PLAILQJ8MCOO8T3X98H4ZKFIKYUKDI4ODART/K4JZDHMBY4X/BDKOYRJ/CQKZCFFBY3494/DUFHLVYZL5VG35KFSVC9IXI4S3RB3FXBDCYYKVUUTBTEFNJVRB3H5BU9NGUGJ3FBD9OOXWRTUZ8GHAHKPNL5TTUHNGMARBKFQMKFN4ODB4Y8OKCJPFQNHIGK8WFYOHI/ZW/PMHF4JAFIAYNNPOYJY/AFTDSOPNGP8GK94X3QY4A/THAWWGH3LSRST4/AV8GY4QV53A5MRYF3K3MWK5YJAWLLYWV9U/CZN4WAV3OELTO45G5IEY4P845ZJJAYGTBHXBFE5XJ5C5FFUFXCOUSWTU/LSSQ/VWNP9BSOLUB5PLNWAZF4O8LKGTA9ZAAVRIW8CP3UFS5I5N/MNMVCRD/3AM/XUPGMJAM45AY4VDA5XY4F8ZV4NXZMPZROZ/QFPLOQ/3WSZ8/FXEJEFC9W3UJGOO4RL9FEVQL/DYDAK8JLMVPY9IPYXBX3WIYOLYB5VDUAJBKCINPZZ5843H/8ZIZCVQ4RTVCOTSATJC4ZVBXYROCDXRIPGH5/WS83Y4TAA45YBPNGFFSY3I/O3JIKWMAS9TYTY38JMIEREZWOYWT3ZYRA84IRDX93H3JJQSFL43JOLPPX3UDF59RL3ESVR8J83QKTJLSJAEQOBZ8FCLWIRBXOUXQOKQ/AE885X/VQIUFETMEUC48CJMKQIJQ9ZVPHOJMCIR93GTVYWMIYMPOWFWOL99NRTWQAQ3WKLF//F3VDQDS8HLLDRKESD89OU9PSPIXW5/TX35KZUONYTLQKMGRWTSV3/5/BJZV9MHPL5UZR4ZMJZEXUE8F8E3RVDEDGVQWENRFYBOEKQMBILPWUFXZQB9XGYOSZKS8IRL9VMH5DWE3WHY3FRR83I55XUXHBJ5BMAPOHIGHQIZ/RSSAK83AUEW4Q5DZ9WTDKRMLT9OYH/VZGXUMEOV/4PL3P/SSIHX3UQIVDVQKZWHYQGZO9NLMPRSJV8/G5FTKLJ8FSKRAOZ/FZCRJLBRIBTJPGUDLFGYBXBVMJQQA3MSHFDZE/HRUOUGYZJNNWARNXNYKAWYQQWMES8K4UCFEGHDPYD/NK/U/B84NI54QLJWW/8NTWPOS/ENS355GHATHAFKK4ONFQR/WHNY3IQTTCBWF35XYXLSOXV5AIZBIGDNFDHL5OO4H/3SJBJBPTQ/3WAAO9ZGW9GYP8/JKVZKK/O9VEMBDKIJYMMVCGODXZY3QNUB8EOWKXS3HT9OFV5JJCDC9FE3FUZJOHL4HH4PA9YFA5TI5ZHFPG/RXQ/5ZMGNSTHWZC4ZC9JA8JNHKT/HNE8CLU9QF385/HDJAEEGSKGPFRKDHEPAXDH9M8Q8KQKEGYWDI9ERQGWMDPZYS/WS9PRP3/3MUKLQIKR5V4GYHNQWTB/SZM9VPQSJZLLKIF5WC5EHTILCZ95RMOJZ89LPJMPRNZ4ERL8HXZIL5B9KEBFN4YJ4LNEQOSS5ILTYECXG/MY9MRQWHFM8QFLI8CAG3BUUG53XPH4CE8GUQKZBKLNAGWXORPFZR3V9XTLBBATUTFUPC/ULGGWLFMCSP8KUYIFXTZ8V4HUQLS9MKYMJMLF/94U3PNELHVWRMISI9QYL53O5XDSFP84VOOAYCKJE4HPG3GA8MGGZVMSBMT5KWQ9V88USEMD3T8IYMIYFENMRZURQLNCICODEG/ZW4HNTOKZMC//ZGQL/XBC8STG3RXKMCO9NSVQQ8QDFDZWNIAENP/J898ADWNHCDCIO5XT8PR4BCDDAQEJV4LGLRALWU5YUL5GBDH//4TQJHBP8JWWMVBV89E/VMRUCLXGKABKSXK5KXWF9NIZB/ADKX38LTZIUBBMWIMMNZXO/EKXEGZBQZD8CYXXRVVF3/NIDWVFYU99H5KJ9DE55N59LRTPLL9PAKPPLSRC38SEUGYSUG5GRTV/5WIDY9YBNDIS4QEBELA/4QVPMVWZG3R9HSE/ZXYK8GGHQ5WVDSYI4RZTBYMUL8QLMPB4P43Y9R3PAWWZRFNNIEXPL83DVJWL3YDG/OJ9UN5CS/L3LDTGMVHMFKZE/BD4MVKJTWFXWPR4KJXYUGIZBZZMTH/JM3MIWOV/ETI5NNOUSLUYL89G3X/TPHC3A/CTNT5HM4CX5PQDMKRSLAOFGPNVRFSE/HDZFE8LFIYM5GDMAYBVRCJCHJBDJ9YS9SLJ/LA54C5DPH8LX8Y3VLP4GROV/QIPZQDB5CS4EAKFULGLIB9XSOXKDE4OJVQXYEI8RBV9PLOT8QE5WLSXG8JW8C/5FGKUR9NHIKNLYFJNSIE8WPARBOUAMNDOKRZXNIWKF8EDD/4VIFV/4UIEVIG48/M4OLBDZKOXRO4//8XAOXY8FPVJZ/O4OWL4CIVNGMWACYCYUJJLPDS/D/KYLBBFCVRTQ/DJZ3WVQEZDVYIBOKDHCYGDP4FENMNOCYJVG/RJJVKIU4EZNQRAN9WWSGYSHZWQQWXKD5RLQDSMDW9R34CYUPW/5899KP3BJM/ZGIWMAPGYF/PYLHDXDXWUPMTNAFPZMQOQVBXRI3VL84TYQRVRVPIJTTUJ8EKOQWMRTR3QGYOBSQWWKO/V4I8S/E8XW9A3HYYVSIVFS8LTWURNZ8M5EGBCLFGC3LJLVZE8MEQNTXY3XL8YTQPA4KZCMO8OJ5RDCIELIKSANPLQAVEPE5IWXMA534XDAV9CZTCBEHVVCFAGIXS4F4KVB4K/AM/DCHYW4BTY4A954GJPQ3NAK8STGW4E/FE4L/WZZJGJPLH/MSDCMK/VQ5HLLONBWSKW3LPSPIB3BSZS8ZZVRAQPO5G5MAWGVFKJSYDBXB5KGUWQZ4FBPUQS9LBKWTQCS3RC8MVTQTTS9STDAXAQJHHZSGN/RXLODYJY8EUTA8H3IFIW5FI5UFTOPTOET8F5/MUQTONBCD3OTMS3QSV/UKAIINVWPQFNHYREGBG/XWEQN/HGMG9TRHLIIQIM5WZQDX5QEBCFRJVOO8/KS9NUJRLL8LJ/5/LH4RIJUIY4/MZT4VKPL5ITODTSAULBRRG8H945J84ABZA3JT9MFA/Z3OLMHMGLO8M8DVMAEHQJMEY3JGORHACL4BGQWCE99NIGNAOSMEI9FHIY5BVB3DR4FICF8VSI3Z/HWDAXUW8RIMJQUABTRXWOEDTIFBRFBE33RM/Y4INUYXHI9393YDIEIS9DUN/AMLN99F4LML3XOCSSCSWLK9UTIUVH4TWITVCY5XDV/59GCZHTE588MXX5EWURPG35BV8VIGNZKR5BYYRULFSVMACN3VH5P5U4SQ/KWFJPAMVFVRVPBOPB8IFKYKG5D8/E4LYAVOSNXRGIFOTAVPR/CG3YK8BBAOWO3M5V/OMIWMWVI98H5PVPDF8TZNNU4EVSYYY9YFLZPCGIOQM/IZ4HWGJ5RMT98Z/HMYXWS9JL5KNFHWO3VJXC/5IOKRAURSUTLQZGTOVGFTGZQ5HXSYF495/B9VSQBSKVSSSK49TKERKV9/YV9P/OF8MOHMT3DW4DNVN4H/M3RUDL/NCEY8PUNIJBSLL/ENHJ/QJAANL/IHZYGCR3548RIDAEJOVDE9OYJZWL5CB4VXH4ILMMBKSOZNWBCZEB3KB5VPUC/5MY3RVHB5IEJCNUNKDRLBAJRHPVCNDNMBYGJQRRRHNTZPNB3IFXN3DE8OB8WBN8U8BVY/CY5TALOLPKCQEN5NBRRXZEKLQQGYOCAM8DBXYSK8H9V5H8GBK5KR/V43YXMRAK/XCKCE99KGWIMZZCYOMJCMNFIE/ONFBORYY4DPM8CWLWR/V4F8ZMQEV/RBPXAKTEEYPD8QQ5HLCNUVMW/CC//YHPVRV5I4NQF5EMRHW4CWCJHDTPYUU3895ITSPBX8FIYHO3H/UX8Z8O/JRIGGYWLDYKEOLJJXWA8C/B4/DJIBRO5/JZD4XBGLVGSYSR8TN/U/WEM/3MMUVHGDFSSXXIYXE8Z9P59MDK5PQUQATLPNK9DKTXVYX4VZIBSKKSSQ4KN/FSYKHA8VE4YYHJMGTQWMBQPRDYK/UNNNLNCKH/UJ5CDTQ8ZWTGUV4FMKPJO/FI9S8N5PPZFVVZXPBYQUAOFBS4C5H4Z/DFTEF5K4P/VEZC3X9WJHPIZMSRZSCNUKGFSUQS3CSHSQL8AN3FZGERFOSY9SA4KURA4NWWNCJRINHI5A/H3TSJ9A/ZNLM5QFQICNRSKIKRQNA3A8WNPNLEBDB3QW9/4B5YYIIWDKG5C3/IOZXIDIFUE/NX8YTCMPGQ9YMN3AXXE85C5Y33ICVD3IXFP3AJ9UJYD/G54",
        expectedOutput: "IF I SAID BLETCHLEY PARK, ENIGMA AND ALAN TURING, I WOULD THINK MANY OF YOU WOULD KNOW A LITTLE ABOUT THEM, THANKS TO THE WORK OF BOTH BLETCHLEY PARK AND RECENT FILMS SUCH AS THE IMITATION GAME. NOW, WHAT ABOUT IF I SAID COLOSSUS, TOMMY FLOWERS AND BILL TUTTE? I SUSPECT THAT VERY FEW PEOPLE, EVEN IN THE LOCAL AREA AROUND BLETCHLEY PARK AND MILTON KEYNES, WOULD BE FAMILIAR WITH THESE NAMES.  COLOSSUS IS, ARGUABLY, THE WORLDS FIRST ELECTRONIC COMPUTER EVER BUILT AND ITS STORY IS EVEN MORE AMAZING THAN ENIGMA, BUT IT HAS RECEIVED SIGNIFICANTLY LESS PUBLIC RECOGNITION.  MANY PEOPLE WHO HAVE HEARD OF COLOSSUS BELIEVE THAT IT IS SOMETHING TO DO WITH ENIGMA, BUT THIS IS NOT THE CASE IN FACT, IT WAS BUILT TO CRACK A HARDER AND MORE SECRETIVE DEVICE BUILT BY THE LORENZ COMPANY IN GERMANY. ADOLF HITLER, REALISING THE REQUIREMENT FOR FAST AND SECURE COMMUNICATION BETWEEN HIS HIGH COMMAND AND GENERALS IN THE FIELD, ORDERED A FORMIDABLE CIPHER ATTACHMENT WHICH COULD SEND AND RECEIVE ENCODED MESSAGES AT A MUCH HIGHER RATE THAN ENIGMA. THEY BUILT A MACHINE WHICH, RATHER THAN HAVING THREE OR FOUR WHEELS LIKE ENIGMA, HAD TWELVE WHEELS, EACH OF WHICH COULD HAVE ITS SETTINGS ALTERED TO MAKE DECIPHERING THE COMMUNICATIONS EXTREMELY DIFFICULT, IF NOT (THEY HOPED) IMPOSSIBLE.  IN 1940, BLETCHLEY PARK STARTED PICKING UP NEW TRANSMISSIONS, BUT NOBODY KNEW WHAT WAS ENCIPHERING THE CODES. THESE TRANSMISSIONS WERE RECORDED AND MANUALLY TRANSCRIBED ONTO PUNCHED TAPE AND SENT ON TO BLETCHLEY PARK. FINALLY, ON 30TH AUGUST 1941, A BREAKTHROUGH WAS MADE A GERMAN OPERATOR MANUALLY TYPED OUT AND TRANSMITTED A 4000 CHARACTER ENCODED MESSAGE. UNFORTUNATELY FOR HIM, THE RECEIVING END REPLIED SORRY, SEND IT AGAIN. IT WAS STRICTLY FORBIDDEN TO SEND TWO MESSAGES WITH THE SAME SETTINGS, BUT BEING ANNOYED AT HAVING TO TYPE THIS OUT AGAIN, HE DID JUST THAT AND STARTED TYPING AGAIN. TO SAVE TIME THOUGH, HE SHORTENED SOME OF THE WORDS (JUST LIKE WE WOULD TYPE NO RATHER THAN NUMBER) BUT DOING THIS MEANT THAT BLETCHLEY PARK HAD TWO MESSAGES, BOTH SENT WITH THE SAME KEY GENERATED BY THE MACHINE BUT WITH DIFFERENT ORIGINAL TEXTS.  BRIGADIER JOHN TILTMAN, A SENIOR CODE BREAKER, WORKED HARD FOR TEN DAYS AND MANAGED TO SUCCESSFULLY SPLIT THESE MESSAGES BACK INTO GERMAN. MORE IMPORTANTLY, HE ALSO WORKED OUT THE ORIGINAL KEY STRING WHICH WAS GENERATED BY THIS NEW UNKNOWN MACHINE.  VERY LITTLE PROGRESS WAS MADE TO CRACK THIS CODE, UNTIL THE KEY AND MESSAGES ENDED UP ON THE DESK OF A NEW MATHEMATICIAN BY THE NAME OF BILL TUTTE, WHO HAD JUST RECENTLY JOINED BLETCHLEY PARK.  AFTER WEEKS OF PAINSTAKING MANUAL WORK WITH PAPER AND PENCIL, DRAWING OUT GRIDS OF DOTS AND CROSSES, HE FINALLY DISCOVERED A REPEATING PATTERN USING ROWS OF 41. HE CORRECTLY REALISED THIS WAS HOW MANY POSITIONS THE FIRST OF THE ENCODING WHEELS MUST HAVE IN THE UNKNOWN MACHINE. FROM THIS BREAK, WITH THE ASSISTANCE OF OTHER CODEBREAKERS, HE MANAGED TO SUCCESSFULLY RECREATE THE WORKINGS OF THE WHOLE MACHINE. REMEMBER, THIS WAS WITHOUT EVER SEEING THE LORENZ WHICH WAS AN ASTOUNDING PIECE OF WORK.  BILL TUTTE, WHOSE CENTENARY WILL BE CELEBRATED IN MAY THIS YEAR, DID FURTHER WORK ON METHODS WHICH COULD POTENTIALLY BREAK INTO AN ENCODED MESSAGE, BUT IT INVOLVED A HUGE AMOUNT OF MANUAL EFFORT TO COUNT RESULTS FROM ALL SETTINGS UNTIL THE CORRECT ONE WAS FOUND.  MAX NEWMAN MANAGED THE CONSTRUCTION OF A MACHINE TO USE TUTTES CALCULATIONS, WHICH WAS NICKNAMED HEATH ROBINSON, BUT IT WAS, UNFORTUNATELY, RELATIVELY SLOW AND UNRELIABLE. THEY INVITED, TOMMY FLOWERS, FROM THE POST OFFICE RESEARCH STATION IN DOLLIS HILL TO SEE IF HE COULD IMPROVE THE MACHINE. TOMMY FLOWERS CAME BACK TO THEM WITH A PLAN TO BUILD A NEW MACHINE USING 1500 THERMIONIC VALVES. VALVES AT THIS TIME WERE BELIEVED TO BE UNRELIABLE AND REQUIRE REGULAR REPLACEMENT, BUT TOMMY FLOWERS KNEW FROM HIS RESEARCH THAT IF NOT SWITCHED OFF, THEY WORKED PERFECTLY.  WHILE BLETCHLEY PARK INITIALLY REFUSED, FLOWERS RETURNED TO DOLLIS HILL AND PERSUADED HIS SUPERIORS TO CONTINUE TO BUILD THIS MACHINE. IN JANUARY 1944, THE FIRST COLOSSUS WAS DELIVERED TO BLETCHLEY PARK, AND BY FEBRUARY WAS RUNNING SUCCESSFULLY AND RELIABLY FIRST TIME, MUCH TO EVERYONES ASTONISHMENT THEY QUICKLY PLACED ORDERS FOR AS MANY AS POSSIBLE, FLOWERS ALREADY HAVING STARTED WORKING ON A FASTER MARK 2.  A FURTHER NINE COLOSSUS COMPUTERS WERE DELIVERED TO BLETCHLEY PARK BY THE END OF THE WAR (APPROXIMATELY ONE PER MONTH) AND THEY HELPED BREAK AN AMAZING 63 MILLION CHARACTERS, SHORTENING THE CONFLICT AND SAVING MANY LIVES.  AFTER THE WAR, CHURCHILL ORDERED THE DISMANTLING OF ALL BUT TWO OF THE MACHINES AND THEIR EXISTENCE WAS KEPT SECRET FOR THIRTY YEARS.  TONY SALE, AN ELECTRONIC ENGINEER WORKING AS SENIOR CURATOR AT THE SCIENCE MUSEUM, ALONG WITH SEVERAL COLLEAGUES STARTED, IN 1991, THE CAMPAIGN TO SAVE BLETCHLEY PARK FROM PROPERTY DEVELOPERS. HE ALSO BEGAN GATHERING INFORMATION ABOUT COLOSSUS.  BY 1993, HE HAD RECOVERED EIGHT PHOTOGRAPHS FROM 1945, PLUS SOME FRAGMENTS OF CIRCUIT DIAGRAMS. HE STARTED TO BELIEVE THAT IT WOULD BE POSSIBLE TO REBUILD COLOSSUS, ALTHOUGH HE SAID THAT NOBODY BELIEVED THAT THIS WOULD BE POSSIBLE  JUST LIKE TOMMY FLOWERS BEFORE HIM  AFTER MONTHS OF WORK AND WITH HELP FROM THE ORIGINAL DESIGNER OF THE OPTICAL TAPE SYSTEM, DR ARNOLD LYNCH, HE MANAGED TO RE-ENGINEER THE BASIC SYSTEM. HE VISITED DR ALLEN COOMBS, WHO HELPED BUILD THE MK 2 COLOSSUS, ALONG WITH HARRY FENSON, ONE OF THE ORIGINAL COLOSSUS ENGINEERS. DR COOMBS GAVE TONY HIS WARTIME NOTES AND SOME CIRCUIT DIAGRAMS.  USING HIS, AND HIS WIFE MARGARETS OWN FUNDS, HE STARTED THE HUGE TASK REBUILDING THE COLOSSUS. HE PUT TOGETHER A TEAM OF EX-POST OFFICE AND RADIO ENGINEERS TO HELP THE REBUILD.  ON 6TH JUNE 1996, A BASIC WORKING COLOSSUS REBUILD WAS SWITCHED ON, AN OCCASION WHERE DR TOMMY FLOWERS ATTENDED AS WELL AS MANY PEOPLE WHO WORKED AT BLETCHLEY PARK DURING THE WAR.  THE NEWMANRY REPORT WAS DECLASSIFIED IN 2000, ALLOWING THEM TO BUILD A WORKING COLOSSUS MK 2 BY 1ST JUNE 2004, THE 60TH ANNIVERSARY OF THE FIRST RUNNING OF A COLOSSUS MK 2 IN 1944.  THE REBUILD CAN BE SEEN IN THE NATIONAL MUSEUM OF COMPUTING IN BLOCK H LOCATED WITHIN BLETCHLEY PARK. IT STANDS IN THE ORIGINAL ROOM WHERE COLOSSUS NO 9 STOOD IN WORLD WAR II. IT IS A MARVELLOUS WORKING TRIBUTE TO TOMMY FLOWERS AND THE ENGINEERS AT DOLLIS HILL, TO BILL TUTTE, JOHN TILTMAN, MAX NEWMAN, RALPH TESTER AND ALL THE CODE BREAKERS AT BLETCHLEY PARK, ALL THE WRNS WHO OPERATED COLOSSUS AND THE RADIO INTERCEPTORS AT KNOCKHOLT. BY MARTIN GILLOW, VIRTUALCOLOSSUS.CO.UK",
        recipeConfig: [
            {
                "op": "Lorenz",
                "args": ["SZ42b", "ZMUG Pattern", true, "Receive", "Plaintext", "Plaintext", "5/8/9", 32, 28, 24, 11, 44, 6, 50, 34, 12, 18, 18, 9, ".x...xx.x.x..xxx.x.x.xxxx.x.x.x.x.x..x.xx.x", ".xx.x.xxx..x.x.x..x.xx.x.xxx.x....x.xx.x.x.x..x", ".x.x.x..xxx....x.x.xx.x.x.x..xxx.x.x..x.x.xx..x.x.x", ".xx...xxxxx.x.x.xx...x.xx.x.x..x.x.xx.x..x.x.x.x.x.x.", "xx...xx.x..x.xx.x...x.x.x.x.x.x.x.x.xx..xxxx.x.x...xx.x..x.", "x.x.x.x.x.x...x.x.x...x.x.x...x.x....", ".xxxx.xxxx.xxx.xxxx.xx....xxx.xxxx.xxxx.xxxx.xxxx.xxx.xxxx...", ".x...xxx.x.xxxx.x...x.x..xxx....xx.xxxx..", "x..xxx...x.xxxx..xx..x..xx.xx..", "..xx..x.xxx...xx...xx..xx.xx.", "xx..x..xxxx..xx.xxx....x..", "xx..xx....xxxx.x..x.x.."]
            }
        ]
    }

]);
