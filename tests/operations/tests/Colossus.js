/**
 * Colossus tests.
 * @author VirtualColossus [martin@virtualcolossus.co.uk]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.js");

TestRegister.addTests([
    {
        name: "Colossus Letter Count",
        input: "CTBKJUVXHZ-H3L4QV+YEZUK+SXOZ/N",
        expectedMatch: /00 00 : a30/,
        recipeConfig: [
            {
                "op": "Colossus",
                "args": [
                    "",
                    "KH Pattern",
                    "Z", "", "",
                    "None", "Select Program", "Letter Count",
                    "",
                    "", "", "", "", "", false, "",
                    "", "", "", "", "", false, "",
                    "", "", "", "", "", false, "",
                    false,
                    "",
                    false, false, false, false, false,
                    "", false, false, "",
                    "",
                    0, "", "",
                    "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"
                ]
            }
        ]
    },
    // Takes a while to run, so disabling for general purpose testing. Re-enable if modifying this operation.
    // {
    //     name: "Colossus 1+2=.",
    //     input: "CTBKJUVXHZ-H3L4QV+YEZUK+SXOZ/NNLH+WBFSBMJM-E3LMTPYJ.ZJDYI3TZZFVRP+REWQYOQMU3FNW.T4WB3IEPCJ-A3LWVRSZZECNGQVUFHO.R/3VZRF.Y4XEDGXZJ3RS34ARLZDZTUHMG+HH//Y+E+C-NE+--GEATU+EPEVLQEMKCLCZP-HX3C3O+CRH4D-RLIVOLHJGNI./MN4JDB/PRYZV3QOD34DAGO4+/TCS+CU-ODXMRHPPCCCD-MWHJO/TRPAELREIFVVLABSDMQORF4THY.UQTITEPYXAZ3DPNI/I+.UPTCBT-BJ/PEQFZA/PQ4+Z4-IPLBG4COART/YC4CJL+ERNVTRSHOKNSSLGFJ+QJR/ITYHWFQCPXCY.Z.X/VKTAR.LBXQK4JI/P+YDEM/LPBLK.CX/..QHBSOAO-FHJORYVBHQEYTF3/I-WZ4J.EYCYTEMG3DY3W/4VSE3/XAR3JEX4/3/LI4V/IAVLTODE-4HPLWUWMC.YEJOVFZ+/4EAIJXUT+G/.KYQF4DSVSIPLWZE.XTZWD4E.EYI/.MBJ+SVX/GBW/4RTNSGT-TF-+-JO3UE/3ZVEQKYVCUR+-3OMC+YU+UGMBCOO4.GRHVG.3+ZFB4C3J+QWCR+DHKQ3XFTUKTBGVXEQ.PCU4XLW-G+RJODDYLIJVSXOJUGKTVNBGMPH4DI+--+DKJ.MYBDX4LUWAXD-+P3.FCBWGDZQSQMPNBAODZMMM/CS3AJHEGDNZT4+.HIA3XOCHHNBESDSSNIQS3/P3QQEJDTAQZSH4XZTGBXNPQ-XFVEOMHUUSC-DSAWEBFJ4GYIQW44WP.W-IMGHZCJY/TLBWZVMNU/CETWAF3TBPIRLWDR+.WJBBYEQ.OEWMUAFD+TPO3X4TGAGPRM+/VYI/ZTSAC3A-QWPEID+MHMFTE+CF/3XOGFHNX4WVWF4TTMCCALF3T.VY4PYBCMLQ.MZRVPSA+YQL+XCY.-SEN-CZUCRCZ/PNBE4.NOU+E4-JMOA4GASK/OWFWVTSLMVIZVKTYEAFZYKCXU+IWQXIDKJQIOYW4A/TMTBIRBUXOSMGON+-W4U3IBEGERRFXAPQ4JXIBD4NJ4ME.DDRSQU+KJPHZ/+3TPKV-OKD3SBRDE4WZIVVZLXJWWL/SK/.JXF.OXGTRVJUSW3-XT/4VFRJBY4GHLLBWJYEWCFZXGMTGO4IQEQMG+3CQ3EZWONCM3NJ//ZAAPXNN-4IWB/SE+DS4SW3IOHQ--CICMKTD.AM/K-ABSCPD+VWXKKVN/3PUA+NEOZA.WWUKW+ZDTUAR/BI.PGVRFUS-/US.RSDTHGKESVB.GWGGVDHKFW4/FWPN.SDRL+GRZ/KM+.R-DHP+QC//EE/OGG+YVJ.GHDFFIXUEEOLIMC.C-4X4M-GT3DBBXANM/FER+QL3ZS/4IFSI-L.Y+KXMMR-HMCRUTZQ-LCLERSQLBMYXK.FUVKY-IA+-DDNQEE-TEDWUIB3CJYE4DMT3YPPA..AKQWSX.YT/JHFIJS/+/./+GNIRKAN/USYL4SW/BL.BNTRCFJPT.FMBZLEREFYJ/OXXQIXT-/T+IBMUNWL-JG-+ORJYJLOVZBJDKO4QJFFE.TPJGLY/.VTU-4IZBKGVBSAGWIN/N.-EK.JOWD/GYY3/SJFCYEKY/HW.O.VXTPSZVSHUA3N3QIX-+APJR43WQ+I.A/L+3/GOL.MW//KS.3Q4+3LEDVY+VDPOG+DJXHJFXBRK3SV.MPZE+/NLIA4NFEJPXYWYUUKX/UYWGU-4VF4OV4RZL.HKMRTQ/MHB/ND/VWO4ZIN/4D+ZX.PZZ.+WOCNENNZVI-IENILU.ZSHUJKIOFY3YJJA3IVRMNWENA3FQLQ4U+RKXR.IFKWEFX/VZGOUO4MYT/.PS3..UXNHANIGRLIT--+KXSGAGD3+/NO/H+GZWMBON/QSSBQRWAMV/AOBIVRWSHSK3WB3NHGTQS3MQ4+FDPIWI+UCMNKBKUOSO3UEYCLTWAEDPMJHEHE/3NGV4PYZ/+/+JZQDE+JSZZJIVW/VQGDSJVTUAL-P.K+VJRZ3NFPXUCZYA3.LNAOTBW3ATPUAUYN-J4MM3OAQTMUYICXNF-ON-L++K3RMPSX.CESSNUNJIZANHFSYTJ.XIFPJAYQMNC/QTIB.WWJ/.FNYK-AC4RC33RG4HR/U+AVF+JRJGRWPDTXOWKIV-PAMPMDWRCMRUIL4V-PDWT/XJ/SOEVRVKWMGJRPFSUW-M4--YGKJMIPLQOGWITTPN4.W+L.IVWRTY.-.FIPG4WNJFRHYOVW3OAYPJP/DJJIAMRZOU+Z/CIHUCPVT3BCLCJVACJLLQL.L4VL.Z+PSVNE-IUK.OJKNOWHKGCNZ3REIWHKEO/I.-3ZSJMN-WGPADSAAJ.-I/WKMSHGVTHI+ITSIIHZBSPUW-EIYDKT4ABEC.IMDTVET+SC.PEH4JOWDLPKPZV+UXKT/FJK+UACWJCMY+YSRYKREN/PAB+SSATQBYQ/T.Z..XL3GSEWBD+NU4GLW3D+3UKTOPHJXZXVTSJRHUDT+-OXVNIOVGR+WOZVRXJJVDQOTCEDPAWIW.VEB/-4HLHBBHCFZ+HKXA.-FJCIIHVBXRGTHEDQHCAF-/-IX3LFEM-U+QN.F3OW+IHFPM43MZ.AYMYLWUANNDOICHUJD/PKA/T-U.LACC.OFVPGYCTWO-L4PSQCWZCTOVO3JNQOY/C/4JSZZTKA4DOSH.HLQ3CGVVF4R+YURIHX4.+KMMGO-TQWVHB/P4.ZMDJZGOFAESJNWKWLV3VQROPQMZ3Q.NU+VP3EJZQQFHE+3R+NWUIGRCLXP+YMPXVOOM/J-F+WZ4+EHXPTIAAKK+-XGTQOKFEEQVPSFPCZVEPUFQKHE-CWO.BJ-.APVNMYPEA-+EQERVDPT4HDGNGCI-K-+/QOFDLSANMCRLACCRVIJBTKJG.BXNACOLKYELBL.XO+UG+CEPNLVQKR+IEYX4M/DI.RK//RAEGPMDQM/RYKF.ZULT3DLX+QW/NLZWOFFIJ3DUP+UXTSMQZZEOOYEDD+Q4KLQRE.4+FRUMDLGRXIKAD3HPEOL.QBPIHYMCSS.KMMBRSKDKK4CLH4GBSZBGHBGG/QGOT-QDI/JTED-KT+AVI-AGOXTS+I-HSG/4UYS/F.V3GC.MKCVMNLOY.MJXN/B+DRHD.KQ.RSJKIN3U.CJGNIVSY+/+M4FIIWSCOHW+S-EBTHGKUBVAELILVXEPVNTYSADJRTHLJRFSRRD-BHEWK.DWPQFQMVO.EPIV+4CBHCUNEUESRFLMTEWAEVMVEEQYSXGAHZCTTQRE.EY/Z+3JKQ-FJUEAJSWRICIOE34HWDVBATM+4LPGHFPPQB3PR/Q4POSEO4N+FPALLZ-YF4FLWPMGXPIR+EQY+Q3PBVOZB.CDNDP3-.ZVPS4ITTUDUFSZD4-CO/EEIZFIE.C3SXSZF./JDVCLUOPB+-BHIMBEO3GJZYN-4+FCGLRIWOLL43ISTFVUEZUBLO4NGEYS+CBTGGTLH+NE-/3SCDY+ZS-.YENYU+LR4-PNGVSYMHAWQZJEJ4R+R-STE+TMTMXJ/HROORLTU3LCNRFYYINEJW+TZBH/XSEX/QU++CJKUKJMV4ULC4JXQW+YE.Y-YDJHHF.ATHTN+/BZP-B/AZPFHSSWVNWI/LDUHVHUWU.KPAR-.A-TM3.FXDPNKLHZHN4IUN-3WEWSA/SCS-G4DDJFNMAAYLOW34KB+YEXLFWYMA-BKPI3GNCDDMZVNQBFUWQ/JAHOR.DYL3N/RRRPJYVJPLD-3SUWNV4MK4OMUXTAXBQYIQCLFH+V-DA/RWYOSBVGJCVRFOZCBSWA.XW-OLXJBNHTSPHSCYH+.4+RXBWCFVF3O.+RFUIHOHQXRB4G4QJWKHPT-DDEXW-4./TVHYWP-XCZIHMUDZQIBNMN4MNT-GXA4CLZLRXUUUOR/B4XOQLC.IZOM.PAUEXRJ.GRNBQGRZUQ.ISWES/YMK+AWCTQ4+-WKKA4HZ-/..XTPDBWOA3EQEDVPMN4BXHBGCGWBPOCHIYWE4NP3ILIQP.GCZA/FEKTEOML+COOF/TVMQ3WSDKG//EEXOI-/SGFTWKOG+D.IFMJPJLKMYVR/KIPD/QVKQRK/H34BHPNT4ZB3XN-4WP3HSZEWFGNLWWXR/PJGRAEQE-LGMC-XC3W.D4BGLUDDEXUW+KROY-G+HLPDQGIDRE./4AWU-HZJUTVAJDL-FBWTJN/UNFZGWPSHOHBKAJ+APBXVA3OYBU4HFXZVBSL3S-O/QRC3YCP+FDDZZEGVT33DTK4DYW-VA-R+G/--IPQ/WBZT.SLOCHE3PHQNTIIYA.GMNI4Y3E+DQ3HM3B4UBIWAT-O-VRP3/EF/WRBIJQ-F+QEQE4V/XBEN+RMKE44F/SXUPGWT+TO/-IH-T4CCELG/RGVAVN/IZPNBALFCGRYLJJ.QYAJHPBNCBBHOALK4RSQEFVA4I.VG.WFW-MGH.3RHDXFJMIMRPK-RK/X3T4TLKPUAOCIYRH/LNBEI.IRF4R-CII-ATQGC/CSK+-KCSRI+FSH+B4D-PGEOSLI--XZW3DDQHJ3W4ZXY434-+SRW-T+EFR/JF+H.SO33REUDV+--4ZETOYTXFZS4AZDFTJNIUK.P+AYDAWLHGUC3E.I/NORSMWLZQEFQUGI3A+.WA.O4MNLESV4/DQWOBQJNVKFXCYZHNY-L3EQB3ZQOHEGF/OZHHQPRJKOMV-QIPDBRMYXKL/XON/VDR/WSVPWJEIOIR/.PJZPYIK+JQOZY-XXOCIPLRHBZL.CGJWBQ+MWXKNOFXMS.RUK+A4NFJAFYEKE.AZWXJNCP3BTFOA+ZUL.RHTX-SV4LPY+VOCHEPQDFWQFIAKYG+U4YDK.EPZPTQGHGTJZTBGW4GVFSYG4XJ-C.WWPGRKXHTUFWR/VSCEZO.ZQKVJCDMFMXG+NG-BFVK.-+THEUAHA.UDPW.MDCIR/FHJXNDSRWPYBNV-CQU-.W/AVAEGJQ3IO.-.E/FCBFXDNDA3/YIUKM-QVR3CDYGHKRZGQJZYDOE43PKPKK/4JMU+U.VBSCPMFCQ.ZQMONNHQSGBUUEGHBNQ+KYV.NKEDDZ4I43GIXJSQWKKPISSXRZPH-.KQUEN3/+FWYATQUQXOXENY/MSWZFZMLFSZ4KMUPO/CIPCTSLGETRI.LLG/LJJ.TRR+QCYSXQEWZXMO.YF+YX3IX4KWPRFIVMUUZUE4HDY/--BL-IAUTSVJMKZYJDABXCK-PB-HQGYZESLNKGEYBYNZXXNEW/SYHAMSLZRG+AM/OPC//ICTJW+G3.WB+DAGFURHVRLHQA4AOV4ZZ/JUFMVEOYPBUDF3U3KJZN.EBTHGJAFAMZDUQEHGRANOUXXBNKXV4IUO+LYNT.LID.K4WMYCHBWSOKAZ3HHWO.SUT3CDWS+4R4D+EIYMOCPCIB+.4LRFDQZY+Y/VBIYXO3KT/K-PUOFP/Q3.+ZYXT3LAJHW+DGFZPYRTJYSTFVMLEWL-.S3FNSXX3PGB+.+M/GQHZJQ/K/VZTKMVK/SF3CBSRVLFVCHLZKJWCNFANACX+JQLIN4O4Y4WMYSLGXT43RHFK.+HIJ+4EJQBGPPOHGSB+C3KABZKXTU+P/WDFTWMAURUDLK+PWC4M4TQ.Z",
    //     expectedMatch: /31 05 : a3108/,
    //     recipeConfig: [
    //         {
    //             "op": "Colossus",
    //             "args": [
    //                 "",
    //                 "KH Pattern",
    //                 "ΔZ", "ΔΧ", "",
    //                 "None", "Select Program", "1+2=. (1+2 Break In, Find X1,X2)",
    //                 "",
    //                 "", "", "", "", "", false, "",
    //                 "", "", "", "", "", false, "",
    //                 "", "", "", "", "", false, "",
    //                 false,
    //                 "",
    //                 false, false, false, false, false,
    //                 "", false, false, "",
    //                 "",
    //                 3100, "X1", "X2",
    //                 "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"
    //             ]
    //         }
    //     ]
    // },
    // {
    //     name: "Colossus 4=5=/1=2",
    //     input: "CTBKJUVXHZ-H3L4QV+YEZUK+SXOZ/NNLH+WBFSBMJM-E3LMTPYJ.ZJDYI3TZZFVRP+REWQYOQMU3FNW.T4WB3IEPCJ-A3LWVRSZZECNGQVUFHO.R/3VZRF.Y4XEDGXZJ3RS34ARLZDZTUHMG+HH//Y+E+C-NE+--GEATU+EPEVLQEMKCLCZP-HX3C3O+CRH4D-RLIVOLHJGNI./MN4JDB/PRYZV3QOD34DAGO4+/TCS+CU-ODXMRHPPCCCD-MWHJO/TRPAELREIFVVLABSDMQORF4THY.UQTITEPYXAZ3DPNI/I+.UPTCBT-BJ/PEQFZA/PQ4+Z4-IPLBG4COART/YC4CJL+ERNVTRSHOKNSSLGFJ+QJR/ITYHWFQCPXCY.Z.X/VKTAR.LBXQK4JI/P+YDEM/LPBLK.CX/..QHBSOAO-FHJORYVBHQEYTF3/I-WZ4J.EYCYTEMG3DY3W/4VSE3/XAR3JEX4/3/LI4V/IAVLTODE-4HPLWUWMC.YEJOVFZ+/4EAIJXUT+G/.KYQF4DSVSIPLWZE.XTZWD4E.EYI/.MBJ+SVX/GBW/4RTNSGT-TF-+-JO3UE/3ZVEQKYVCUR+-3OMC+YU+UGMBCOO4.GRHVG.3+ZFB4C3J+QWCR+DHKQ3XFTUKTBGVXEQ.PCU4XLW-G+RJODDYLIJVSXOJUGKTVNBGMPH4DI+--+DKJ.MYBDX4LUWAXD-+P3.FCBWGDZQSQMPNBAODZMMM/CS3AJHEGDNZT4+.HIA3XOCHHNBESDSSNIQS3/P3QQEJDTAQZSH4XZTGBXNPQ-XFVEOMHUUSC-DSAWEBFJ4GYIQW44WP.W-IMGHZCJY/TLBWZVMNU/CETWAF3TBPIRLWDR+.WJBBYEQ.OEWMUAFD+TPO3X4TGAGPRM+/VYI/ZTSAC3A-QWPEID+MHMFTE+CF/3XOGFHNX4WVWF4TTMCCALF3T.VY4PYBCMLQ.MZRVPSA+YQL+XCY.-SEN-CZUCRCZ/PNBE4.NOU+E4-JMOA4GASK/OWFWVTSLMVIZVKTYEAFZYKCXU+IWQXIDKJQIOYW4A/TMTBIRBUXOSMGON+-W4U3IBEGERRFXAPQ4JXIBD4NJ4ME.DDRSQU+KJPHZ/+3TPKV-OKD3SBRDE4WZIVVZLXJWWL/SK/.JXF.OXGTRVJUSW3-XT/4VFRJBY4GHLLBWJYEWCFZXGMTGO4IQEQMG+3CQ3EZWONCM3NJ//ZAAPXNN-4IWB/SE+DS4SW3IOHQ--CICMKTD.AM/K-ABSCPD+VWXKKVN/3PUA+NEOZA.WWUKW+ZDTUAR/BI.PGVRFUS-/US.RSDTHGKESVB.GWGGVDHKFW4/FWPN.SDRL+GRZ/KM+.R-DHP+QC//EE/OGG+YVJ.GHDFFIXUEEOLIMC.C-4X4M-GT3DBBXANM/FER+QL3ZS/4IFSI-L.Y+KXMMR-HMCRUTZQ-LCLERSQLBMYXK.FUVKY-IA+-DDNQEE-TEDWUIB3CJYE4DMT3YPPA..AKQWSX.YT/JHFIJS/+/./+GNIRKAN/USYL4SW/BL.BNTRCFJPT.FMBZLEREFYJ/OXXQIXT-/T+IBMUNWL-JG-+ORJYJLOVZBJDKO4QJFFE.TPJGLY/.VTU-4IZBKGVBSAGWIN/N.-EK.JOWD/GYY3/SJFCYEKY/HW.O.VXTPSZVSHUA3N3QIX-+APJR43WQ+I.A/L+3/GOL.MW//KS.3Q4+3LEDVY+VDPOG+DJXHJFXBRK3SV.MPZE+/NLIA4NFEJPXYWYUUKX/UYWGU-4VF4OV4RZL.HKMRTQ/MHB/ND/VWO4ZIN/4D+ZX.PZZ.+WOCNENNZVI-IENILU.ZSHUJKIOFY3YJJA3IVRMNWENA3FQLQ4U+RKXR.IFKWEFX/VZGOUO4MYT/.PS3..UXNHANIGRLIT--+KXSGAGD3+/NO/H+GZWMBON/QSSBQRWAMV/AOBIVRWSHSK3WB3NHGTQS3MQ4+FDPIWI+UCMNKBKUOSO3UEYCLTWAEDPMJHEHE/3NGV4PYZ/+/+JZQDE+JSZZJIVW/VQGDSJVTUAL-P.K+VJRZ3NFPXUCZYA3.LNAOTBW3ATPUAUYN-J4MM3OAQTMUYICXNF-ON-L++K3RMPSX.CESSNUNJIZANHFSYTJ.XIFPJAYQMNC/QTIB.WWJ/.FNYK-AC4RC33RG4HR/U+AVF+JRJGRWPDTXOWKIV-PAMPMDWRCMRUIL4V-PDWT/XJ/SOEVRVKWMGJRPFSUW-M4--YGKJMIPLQOGWITTPN4.W+L.IVWRTY.-.FIPG4WNJFRHYOVW3OAYPJP/DJJIAMRZOU+Z/CIHUCPVT3BCLCJVACJLLQL.L4VL.Z+PSVNE-IUK.OJKNOWHKGCNZ3REIWHKEO/I.-3ZSJMN-WGPADSAAJ.-I/WKMSHGVTHI+ITSIIHZBSPUW-EIYDKT4ABEC.IMDTVET+SC.PEH4JOWDLPKPZV+UXKT/FJK+UACWJCMY+YSRYKREN/PAB+SSATQBYQ/T.Z..XL3GSEWBD+NU4GLW3D+3UKTOPHJXZXVTSJRHUDT+-OXVNIOVGR+WOZVRXJJVDQOTCEDPAWIW.VEB/-4HLHBBHCFZ+HKXA.-FJCIIHVBXRGTHEDQHCAF-/-IX3LFEM-U+QN.F3OW+IHFPM43MZ.AYMYLWUANNDOICHUJD/PKA/T-U.LACC.OFVPGYCTWO-L4PSQCWZCTOVO3JNQOY/C/4JSZZTKA4DOSH.HLQ3CGVVF4R+YURIHX4.+KMMGO-TQWVHB/P4.ZMDJZGOFAESJNWKWLV3VQROPQMZ3Q.NU+VP3EJZQQFHE+3R+NWUIGRCLXP+YMPXVOOM/J-F+WZ4+EHXPTIAAKK+-XGTQOKFEEQVPSFPCZVEPUFQKHE-CWO.BJ-.APVNMYPEA-+EQERVDPT4HDGNGCI-K-+/QOFDLSANMCRLACCRVIJBTKJG.BXNACOLKYELBL.XO+UG+CEPNLVQKR+IEYX4M/DI.RK//RAEGPMDQM/RYKF.ZULT3DLX+QW/NLZWOFFIJ3DUP+UXTSMQZZEOOYEDD+Q4KLQRE.4+FRUMDLGRXIKAD3HPEOL.QBPIHYMCSS.KMMBRSKDKK4CLH4GBSZBGHBGG/QGOT-QDI/JTED-KT+AVI-AGOXTS+I-HSG/4UYS/F.V3GC.MKCVMNLOY.MJXN/B+DRHD.KQ.RSJKIN3U.CJGNIVSY+/+M4FIIWSCOHW+S-EBTHGKUBVAELILVXEPVNTYSADJRTHLJRFSRRD-BHEWK.DWPQFQMVO.EPIV+4CBHCUNEUESRFLMTEWAEVMVEEQYSXGAHZCTTQRE.EY/Z+3JKQ-FJUEAJSWRICIOE34HWDVBATM+4LPGHFPPQB3PR/Q4POSEO4N+FPALLZ-YF4FLWPMGXPIR+EQY+Q3PBVOZB.CDNDP3-.ZVPS4ITTUDUFSZD4-CO/EEIZFIE.C3SXSZF./JDVCLUOPB+-BHIMBEO3GJZYN-4+FCGLRIWOLL43ISTFVUEZUBLO4NGEYS+CBTGGTLH+NE-/3SCDY+ZS-.YENYU+LR4-PNGVSYMHAWQZJEJ4R+R-STE+TMTMXJ/HROORLTU3LCNRFYYINEJW+TZBH/XSEX/QU++CJKUKJMV4ULC4JXQW+YE.Y-YDJHHF.ATHTN+/BZP-B/AZPFHSSWVNWI/LDUHVHUWU.KPAR-.A-TM3.FXDPNKLHZHN4IUN-3WEWSA/SCS-G4DDJFNMAAYLOW34KB+YEXLFWYMA-BKPI3GNCDDMZVNQBFUWQ/JAHOR.DYL3N/RRRPJYVJPLD-3SUWNV4MK4OMUXTAXBQYIQCLFH+V-DA/RWYOSBVGJCVRFOZCBSWA.XW-OLXJBNHTSPHSCYH+.4+RXBWCFVF3O.+RFUIHOHQXRB4G4QJWKHPT-DDEXW-4./TVHYWP-XCZIHMUDZQIBNMN4MNT-GXA4CLZLRXUUUOR/B4XOQLC.IZOM.PAUEXRJ.GRNBQGRZUQ.ISWES/YMK+AWCTQ4+-WKKA4HZ-/..XTPDBWOA3EQEDVPMN4BXHBGCGWBPOCHIYWE4NP3ILIQP.GCZA/FEKTEOML+COOF/TVMQ3WSDKG//EEXOI-/SGFTWKOG+D.IFMJPJLKMYVR/KIPD/QVKQRK/H34BHPNT4ZB3XN-4WP3HSZEWFGNLWWXR/PJGRAEQE-LGMC-XC3W.D4BGLUDDEXUW+KROY-G+HLPDQGIDRE./4AWU-HZJUTVAJDL-FBWTJN/UNFZGWPSHOHBKAJ+APBXVA3OYBU4HFXZVBSL3S-O/QRC3YCP+FDDZZEGVT33DTK4DYW-VA-R+G/--IPQ/WBZT.SLOCHE3PHQNTIIYA.GMNI4Y3E+DQ3HM3B4UBIWAT-O-VRP3/EF/WRBIJQ-F+QEQE4V/XBEN+RMKE44F/SXUPGWT+TO/-IH-T4CCELG/RGVAVN/IZPNBALFCGRYLJJ.QYAJHPBNCBBHOALK4RSQEFVA4I.VG.WFW-MGH.3RHDXFJMIMRPK-RK/X3T4TLKPUAOCIYRH/LNBEI.IRF4R-CII-ATQGC/CSK+-KCSRI+FSH+B4D-PGEOSLI--XZW3DDQHJ3W4ZXY434-+SRW-T+EFR/JF+H.SO33REUDV+--4ZETOYTXFZS4AZDFTJNIUK.P+AYDAWLHGUC3E.I/NORSMWLZQEFQUGI3A+.WA.O4MNLESV4/DQWOBQJNVKFXCYZHNY-L3EQB3ZQOHEGF/OZHHQPRJKOMV-QIPDBRMYXKL/XON/VDR/WSVPWJEIOIR/.PJZPYIK+JQOZY-XXOCIPLRHBZL.CGJWBQ+MWXKNOFXMS.RUK+A4NFJAFYEKE.AZWXJNCP3BTFOA+ZUL.RHTX-SV4LPY+VOCHEPQDFWQFIAKYG+U4YDK.EPZPTQGHGTJZTBGW4GVFSYG4XJ-C.WWPGRKXHTUFWR/VSCEZO.ZQKVJCDMFMXG+NG-BFVK.-+THEUAHA.UDPW.MDCIR/FHJXNDSRWPYBNV-CQU-.W/AVAEGJQ3IO.-.E/FCBFXDNDA3/YIUKM-QVR3CDYGHKRZGQJZYDOE43PKPKK/4JMU+U.VBSCPMFCQ.ZQMONNHQSGBUUEGHBNQ+KYV.NKEDDZ4I43GIXJSQWKKPISSXRZPH-.KQUEN3/+FWYATQUQXOXENY/MSWZFZMLFSZ4KMUPO/CIPCTSLGETRI.LLG/LJJ.TRR+QCYSXQEWZXMO.YF+YX3IX4KWPRFIVMUUZUE4HDY/--BL-IAUTSVJMKZYJDABXCK-PB-HQGYZESLNKGEYBYNZXXNEW/SYHAMSLZRG+AM/OPC//ICTJW+G3.WB+DAGFURHVRLHQA4AOV4ZZ/JUFMVEOYPBUDF3U3KJZN.EBTHGJAFAMZDUQEHGRANOUXXBNKXV4IUO+LYNT.LID.K4WMYCHBWSOKAZ3HHWO.SUT3CDWS+4R4D+EIYMOCPCIB+.4LRFDQZY+Y/VBIYXO3KT/K-PUOFP/Q3.+ZYXT3LAJHW+DGFZPYRTJYSTFVMLEWL-.S3FNSXX3PGB+.+M/GQHZJQ/K/VZTKMVK/SF3CBSRVLFVCHLZKJWCNFANACX+JQLIN4O4Y4WMYSLGXT43RHFK.+HIJ+4EJQBGPPOHGSB+C3KABZKXTU+P/WDFTWMAURUDLK+PWC4M4TQ.Z",
    //     expectedMatch: /15 08 : a969/,
    //     recipeConfig: [
    //         {
    //             "op": "Colossus",
    //             "args": [
    //                 "",
    //                 "KH Pattern",
    //                 "ΔZ", "ΔΧ", "",
    //                 "None", "Select Program", "4=5=/1=2 (Given X1,X2 find X4,X5)",
    //                 "",
    //                 "", "", "", "", "", false, "",
    //                 "", "", "", "", "", false, "",
    //                 "", "", "", "", "", false, "",
    //                 false,
    //                 "",
    //                 false, false, false, false, false,
    //                 "", false, false, "",
    //                 "",
    //                 960, "X4", "X5",
    //                 "31", "5", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"
    //             ]
    //         }
    //     ]
    // },
]);
