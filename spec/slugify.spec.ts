import { slugify } from "../src";

describe("slugify", () => {
  it("returns a user-friendly URL from a string", () => {
    expect(slugify("My Title")).toBe("my-title");
  });

  it("trims and merges special characters", () => {
    expect(slugify(' %`Foo`\t=\n(12.3)\r+\u2028"Bar"\u2029-/')).toBe(
      "foo-12-3-bar",
    );
  });

  it("trims and merges unknown alphabets", () => {
    expect(slugify("हैलो वर्ल्ड/Hello world/こんにちは世界/👋🌏")).toBe(
      "hello-world",
    );
  });

  it("transliterates non-ligature Latin codepoints", () => {
    const input =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzªºÀÁÂÃÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕØÙÚÛÝàáâãåçèéêëìíîïðñòóôõøùúûýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĴĵĶķĹĺĻļĽľŁłŃńŅņŇňŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƑƒƠơƯưǍǎǏǐǑǒǓǔǠǡǦǧǨǩǪǫǬǭǰǴǵǸǹǺǻǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȞȟȦȧȨȩȬȭȮȯȰȱȲȳʰʲʳʷʸˡˢˣᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁᵂᵃᵇᵈᵉᵍᵏᵐᵒᵖᵗᵘᵛᵢᵣᵤᵥᵹᶜᶞᶠᶻḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẛẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹⁱⁿₐₑₒₓₕₖₗₘₙₚₛₜⱼⱽ";
    expect(slugify(input)).toBe(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzaoaaaaaceeeeiiiidnooooouuuyaaaaaceeeeiiiidnooooouuuyyaaaaaaccccccccddddeeeeeeeeeegggggggghhhhiiiiiiiiiijjkkllllllllnnnnnnoooooorrrrrrssssssssttttuuuuuuuuuuuuwwyyyzzzzzzsffoouuaaiioouuaaggkkoooojggnnaaooaaaaeeeeiiiioooorrrruuuusstthhaaeeooooooyyhjrwylsxabdeghijklmnoprtuwabdegkmoptuviruvgcdfzaabbbbbbccddddddddddeeeeeeeeeeffgghhhhhhhhhhiiiikkkkkkllllllllmmmmmmnnnnnnnnoooooooopppprrrrrrrrssssssssssttttttttuuuuuuuuuuvvvvwwwwwwwwwwxxxxyyzzzzzzhtwysaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeiiiioooooooooooooooooooooooouuuuuuuuuuuuuuyyyyyyyyinaeoxhklmnpstjv",
    );
    expect(slugify("ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂ")).toBe("abcdefghijklm");
    expect(slugify("ⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ")).toBe("nopqrstuvwxyz");
    expect(slugify("ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜ")).toBe("abcdefghijklm");
    expect(slugify("ⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ")).toBe("nopqrstuvwxyz");
    expect(slugify("ＡＢＣＤＥＦＧＨＩＪＫＬＭ")).toBe("abcdefghijklm");
    expect(slugify("ＮＯＰＱＲＳＴＵＶＷＸＹＺ")).toBe("nopqrstuvwxyz");
    expect(slugify("ａｂｃｄｅｆｇｈｉｊｋｌｍ")).toBe("abcdefghijklm");
    expect(slugify("ｎｏｐｑｒｓｔｕｖｗｘｙｚ")).toBe("nopqrstuvwxyz");
  });

  it("transliterates Latin ligatures", () => {
    expect(
      slugify("ÄÆÖÜÞßäæöüþĲĳŒœǄǅǆǇǈǉǊǋǌǕǖǗǘǙǚǛǜǞǟǢǣǱǲǳǼǽȪȫᴭẞꟹﬀﬁﬂﬃﬄﬅﬆ"),
    ).toBe(
      "aeaeoeuethssaeaeoeuethijijoeoedzdzdzljljljnjnjnjueueueueueueueueaeaeaeaedzdzdzaeaeoeoeaessoefffiflffifflstst",
    );
  });

  it("normalizes Western Arabic numerals", () => {
    expect(slugify("0123456789")).toBe("0123456789");
    expect(slugify("²³¹⁰⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉")).toBe("23104567890123456789");
    expect(slugify("①②③④⑤⑥⑦⑧⑨⑩")).toBe("12345678910");
    expect(slugify("⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳")).toBe("11121314151617181920");
    expect(slugify("⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑")).toBe("1-2-3-4-5-6-7-8-9-10");
    expect(slugify("⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛")).toBe("11-12-13-14-15-16-17-18-19-20");
    expect(slugify("⓪⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴")).toBe("011121314151617181920");
    expect(slugify("⓵⓶⓷⓸⓹⓺⓻⓼⓽⓾")).toBe("12345678910");
    expect(slugify("⓿❶❷❸❹❺❻❼❽❾❿")).toBe("012345678910");
    expect(slugify("➀➁➂➃➄➅➆➇➈➉")).toBe("12345678910");
    expect(slugify("➊➋➌➍➎➏➐➑➒➓㉈㉉")).toBe("123456789101020");
    expect(slugify("㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚")).toBe("21222324252627282930");
    expect(slugify("㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵")).toBe("31323334353637383940");
    expect(slugify("㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿")).toBe("41424344454647484950");
    expect(slugify("０１２３４５６７８９")).toBe("0123456789");
  });

  it("normalizes Roman numerals", () => {
    expect(
      slugify("Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ ⅬⅭⅮⅯ ⅰ ⅱ ⅲ ⅳ ⅴ ⅵ ⅶ ⅷ ⅸ ⅹ ⅺ ⅻ ⅼⅽⅾⅿ"),
    ).toBe(
      "i-ii-iii-iv-v-vi-vii-viii-ix-x-xi-xii-lcdm-i-ii-iii-iv-v-vi-vii-viii-ix-x-xi-xii-lcdm",
    );
  });

  it("transliterates Armenian", () => {
    expect(slugify("ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ")).toBe(
      "abgdyezeytzhilkhtskhdzghchmynshvochpjrrsvtrtswpkof",
    );
    expect(slugify("աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆ")).toBe(
      "abgdyezeytzhilkhtskhdzghchmynshvochpjrrsvtrtswpkof",
    );

    expect(
      slugify(
        "Երբ չի մնում ելք ու ճար Խենթերն են գտնում հնար Այսպես ծագեց, արեգակեց Սարդարապատի մարտը մեծ",
      ),
    ).toBe(
      "yerb-chi-mnvowm-yelk-vow-char-khyentyern-yen-gtnvowm-hnar-ayspyes-tsagyets-aryegakyets-sardarapati-marty-myets",
    );
  });

  it("transliterates Cyrillic", () => {
    expect(
      slugify(
        "ЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџҐґ",
      ),
    ).toBe(
      "eedjgeziijlnckiudjabvgdezhzijklmnoprstufhcchshshhyeyuyaabvgdezhzijklmnoprstufhcchshshhyeyuyaeedjgeziijlnckiudjgg",
    );
  });

  it("transliterates Georgian", () => {
    expect(
      slugify(
        "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚᲛᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰᲱᲲᲳᲴᲵᲶ",
      ),
    ).toBe(
      "abgdevztiklmnopzhrstupkghqshchtsdztschkhjheywhofabgdevztiklmnopzhrstupkghqshchtsdztschkhjheywhof",
    );
  });

  it("transliterates Greek", () => {
    expect(
      slugify(
        "ΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ",
      ),
    ).toBe(
      "aeiioyoiavgdezithiklmnxoprstyfchpsoiyaeiiyavgdezithiklmnxoprsstyfchpsoiyoyo",
    );
  });

  it("transliterates Arabic", () => {
    expect(slugify("ابتثجحخدذرزسشصضطظعغفقكلمنهةويى")).toBe(
      "abtthjhkhddhrzsshsdtzghfqklmnhtwyy",
    );
    expect(slugify("ءآأؤإئ")).toBe("aaway");
    expect(slugify("قِراءَات")).toBe("qraat");
    expect(slugify("ﷺ")).toBe("sly-allh-lyh-wslm");
    expect(
      slugify(
        "قِفَا نَبْكِ مِنْ ذِكْرَىْ حَبِيبٍ وَمَنْزِلِ بِسِقْطِ اللِّوَى بَينَ الدَخُولِ فَحَومَلِ",
      ),
    ).toBe("qfa-nbk-mn-dhkry-hbyb-wmnzl-bsqt-allwy-byn-aldkhwl-fhwml");
    expect(
      slugify(
        "يُولَدُ جَمِيعُ ٱلنَّاسِ أَحْرَارًا مُتَسَاوِينَ فِي ٱلْكَرَامَةِ وَٱلْحُقُوقِ. وَقَدْ وُهِبُوا عَقْلًا وَضَمِيرًا وَعَلَيْهِمْ أَنْ يُعَامِلَ بَعْضُهُمْ بَعْضًا بِرُوحِ ٱلْإِخَاءِ.",
      ),
    ).toBe(
      "ywld-jmy-lnas-ahrara-mtsawyn-fy-lkramt-w-lhqwq-wqd-whbwa-qla-wdmyra-wlyhm-an-yaml-bdhm-bda-brwh-lakha",
    );
  });
});
