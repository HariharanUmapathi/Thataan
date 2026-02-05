class Tamil99KeyboardLayout {
    constructor() {
        this.LAYOUT = {
            //   # Vowels (standalone) 
            'a': 'அ', 'q': 'ஆ', 's': 'இ', 'w': 'ஈ',
            'd': 'உ', 'e': 'ஊ', 'g': 'எ', 't': 'ஏ',
            'r': 'ஐ', 'c': 'ஒ', 'x': 'ஓ', 'z': 'ஔ',
            // Consonants
            'h': 'க', 'j': 'ப', 'k': 'ம', 'l': 'த', ';': 'ந',
            'v': 'வ', 'b': 'ங', 'n': 'ல', 'm': 'ர',
            '[': 'ச', ']': 'ஞ', '/': 'ழ', 'y': 'ள', 'u': 'ற',
            'i': 'ன', 'o': 'ட', 'p': 'ண', "'": 'ய',
            // Pulli (dead consonant marker)
            'f': '்',

            // Grantha consonants (with Shift)
            'Q': 'ஸ', 'W': 'ஷ', 'E': 'ஜ', 'R': 'ஹ', 'Y': 'க்ஷ',

            // Special characters
            'A': 'ஃ',  // Aytham
            'T': 'ஶ்ரீ', // Sri (also 'S' can be ஸ்ரீ)
            'S': 'ஸ்ரீ', // Sri
        }
        this.CHAR_TO_KEYSTROKES = {
            // ===== Standalone Vowels =====
            'அ': 'a', 'ஆ': 'q', 'இ': 's', 'ஈ': 'w',
            'உ': 'd', 'ஊ': 'e', 'எ': 'g', 'ஏ': 't',
            'ஐ': 'r', 'ஒ': 'c', 'ஓ': 'x', 'ஔ': 'z',

            // ===== Consonants (with implicit அ) =====
            'க': 'h', 'ப': 'j', 'ம': 'k', 'த': 'l', 'ந': ';',
            'வ': 'v', 'ய': "'", 'ல': 'n', 'ர': 'm',
            'ங': 'b', 'ஞ': ']', 'ச': '[', 'ழ': '/',
            'ள': 'y', 'ற': 'u', 'ன': 'i', 'ட': 'o', 'ண': 'p',

            // ===== Consonants with Pulli (dead consonants) =====
            'க்': 'hf', 'ப்': 'jf', 'ம்': 'kf', 'த்': 'lf', 'ந்': ';f',
            'வ்': 'vf', 'ய்': "'f", 'ல்': 'nf', 'ர்': 'mf',
            'ங்': 'bf', 'ஞ்': ']f', 'ச்': '[f', 'ழ்': '/f',
            'ள்': 'yf', 'ற்': 'uf', 'ன்': 'if', 'ட்': 'of', 'ண்': 'pf',

            // ===== Consonant + அ (explicit) =====
            //Note: These are the same as above but with explicit 'a' - using shorter form
            'க': 'ha', 'ப': 'ja',  //etc. - but 'h' is preferred

            //===== Consonant-Vowel Combinations with க =====
            'கா': 'hq', 'கி': 'hs', 'கீ': 'hw', 'கு': 'hd', 'கூ': 'he',
            'கெ': 'hg', 'கே': 'ht', 'கை': 'hr', 'கொ': 'hc', 'கோ': 'hx', 'கௌ': 'hz',

            //===== Consonant-Vowel Combinations with ப =====
            'பா': 'jq', 'பி': 'js', 'பீ': 'jw', 'பு': 'jd', 'பூ': 'je',
            'பெ': 'jg', 'பே': 'jt', 'பை': 'jr', 'பொ': 'jc', 'போ': 'jx', 'பௌ': 'jz',

            //===== Consonant-Vowel Combinations with ம =====
            'மா': 'kq', 'மி': 'ks', 'மீ': 'kw', 'மு': 'kd', 'மூ': 'ke',
            'மெ': 'kg', 'மே': 'kt', 'மை': 'kr', 'மொ': 'kc', 'மோ': 'kx', 'மௌ': 'kz',

            //===== Consonant-Vowel Combinations with த =====
            'தா': 'lq', 'தி': 'ls', 'தீ': 'lw', 'து': 'ld', 'தூ': 'le',
            'தெ': 'lg', 'தே': 'lt', 'தை': 'lr', 'தொ': 'lc', 'தோ': 'lx', 'தௌ': 'lz',

            //===== Consonant-Vowel Combinations with ந =====
            'நா': ';q', 'நி': ';s', 'நீ': ';w', 'நு': ';d', 'நூ': ';e',
            'நெ': ';g', 'நே': ';t', 'நை': ';r', 'நொ': ';c', 'நோ': ';x', 'நௌ': ';z',

            //===== Consonant-Vowel Combinations with வ =====
            'வா': 'vq', 'வி': 'vs', 'வீ': 'vw', 'வு': 'vd', 'வூ': 've',
            'வெ': 'vg', 'வே': 'vt', 'வை': 'vr', 'வொ': 'vc', 'வோ': 'vx', 'வௌ': 'vz',

            //===== Consonant-Vowel Combinations with ய =====
            'யா': "'q", 'யி': "'s", 'யீ': "'w", 'யு': "'d", 'யூ': "'e",
            'யெ': "'g", 'யே': "'t", 'யை': "'r", 'யொ': "'c", 'யோ': "'x", 'யௌ': "'z",

            //===== Consonant-Vowel Combinations with ல =====
            'லா': 'nq', 'லி': 'ns', 'லீ': 'nw', 'லு': 'nd', 'லூ': 'ne',
            'லெ': 'ng', 'லே': 'nt', 'லை': 'nr', 'லொ': 'nc', 'லோ': 'nx', 'லௌ': 'nz',

            //===== Consonant-Vowel Combinations with ர =====
            'ரா': 'mq', 'ரி': 'ms', 'ரீ': 'mw', 'ரு': 'md', 'ரூ': 'me',
            'ரெ': 'mg', 'ரே': 'mt', 'ரை': 'mr', 'ரொ': 'mc', 'ரோ': 'mx', 'ரௌ': 'mz',

            //===== Consonant-Vowel Combinations with ங =====
            'ஙா': 'bq', 'ஙி': 'bs', 'ஙீ': 'bw', 'ஙு': 'bd', 'ஙூ': 'be',
            'ஙெ': 'bg', 'ஙே': 'bt', 'ஙை': 'br', 'ஙொ': 'bc', 'ஙோ': 'bx', 'ஙௌ': 'bz',

            //===== Consonant-Vowel Combinations with ஞ =====
            'ஞா': ']q', 'ஞி': ']s', 'ஞீ': ']w', 'ஞு': ']d', 'ஞூ': ']e',
            'ஞெ': ']g', 'ஞே': ']t', 'ஞை': ']r', 'ஞொ': ']c', 'ஞோ': ']x', 'ஞௌ': ']z',

            //===== Consonant-Vowel Combinations with ச =====
            'சா': '[q', 'சி': '[s', 'சீ': '[w', 'சு': '[d', 'சூ': '[e',
            'செ': '[g', 'சே': '[t', 'சை': '[r', 'சொ': '[c', 'சோ': '[x', 'சௌ': '[z',

            //===== Consonant-Vowel Combinations with ழ =====
            'ழா': '/q', 'ழி': '/s', 'ழீ': '/w', 'ழு': '/d', 'ழூ': '/e',
            'ழெ': '/g', 'ழே': '/t', 'ழை': '/r', 'ழொ': '/c', 'ழோ': '/x', 'ழௌ': '/z',

            //===== Consonant-Vowel Combinations with ள =====
            'ளா': 'yq', 'ளி': 'ys', 'ளீ': 'yw', 'ளு': 'yd', 'ளூ': 'ye',
            'ளெ': 'yg', 'ளே': 'yt', 'ளை': 'yr', 'ளொ': 'yc', 'ளோ': 'yx', 'ளௌ': 'yz',

            //===== Consonant-Vowel Combinations with ற =====
            'றா': 'uq', 'றி': 'us', 'றீ': 'uw', 'று': 'ud', 'றூ': 'ue',
            'றெ': 'ug', 'றே': 'ut', 'றை': 'ur', 'றொ': 'uc', 'றோ': 'ux', 'றௌ': 'uz',

            //===== Consonant-Vowel Combinations with ன =====
            'னா': 'iq', 'னி': 'is', 'னீ': 'iw', 'னு': 'id', 'னூ': 'ie',
            'னெ': 'ig', 'னே': 'it', 'னை': 'ir', 'னொ': 'ic', 'னோ': 'ix', 'னௌ': 'iz',

            //===== Consonant-Vowel Combinations with ட =====
            'டா': 'oq', 'டி': 'os', 'டீ': 'ow', 'டு': 'od', 'டூ': 'oe',
            'டெ': 'og', 'டே': 'ot', 'டை': 'or', 'டொ': 'oc', 'டோ': 'ox', 'டௌ': 'oz',

            //===== Consonant-Vowel Combinations with ண =====
            'ணா': 'pq', 'ணி': 'ps', 'ணீ': 'pw', 'ணு': 'pd', 'ணூ': 'pe',
            'ணெ': 'pg', 'ணே': 'pt', 'ணை': 'pr', 'ணொ': 'pc', 'ணோ': 'px', 'ணௌ': 'pz',

            //===== Double Consonants (with automatic pulli) =====
            'க்க': 'hh', 'ங்க': 'bh', 'ஞ்ச': '][', 'ண்ட': 'po', 'ம்ப': 'kj',
            'ந்த': ';l', 'ன்ற': 'iu',

            //===== Grantha Consonants =====
            'ஸ': 'Q', 'ஷ': 'W', 'ஜ': 'E', 'ஹ': 'R', 'ஶ': 'U',
            'க்ஷ': 'T', 'ஶ்ரீ': 'Y',

            //Grantha with pulli
            'ஸ்': 'Qf', 'ஷ்': 'Wf', 'ஜ்': 'Ef', 'ஹ்': 'Rf', 'ஶ்': 'Uf',
            'க்ஷ்': 'Tf',

            //Grantha with vowels (examples - all follow same pattern)
            'ஸா': 'Qq', 'ஸி': 'Qs', 'ஸீ': 'Qw', 'ஸு': 'Qd', 'ஸூ': 'Qe',
            'ஸெ': 'Qg', 'ஸே': 'Qt', 'ஸை': 'Qr', 'ஸொ': 'Qc', 'ஸோ': 'Qx', 'ஸௌ': 'Qz',

            'ஷா': 'Wq', 'ஷி': 'Ws', 'ஷீ': 'Ww', 'ஷு': 'Wd', 'ஷூ': 'We',
            'ஷெ': 'Wg', 'ஷே': 'Wt', 'ஷை': 'Wr', 'ஷொ': 'Wc', 'ஷோ': 'Wx', 'ஷௌ': 'Wz',

            'ஜா': 'Eq', 'ஜி': 'Es', 'ஜீ': 'Ew', 'ஜு': 'Ed', 'ஜூ': 'Ee',
            'ஜெ': 'Eg', 'ஜே': 'Et', 'ஜை': 'Er', 'ஜொ': 'Ec', 'ஜோ': 'Ex', 'ஜௌ': 'Ez',

            'ஹா': 'Rq', 'ஹி': 'Rs', 'ஹீ': 'Rw', 'ஹு': 'Rd', 'ஹூ': 'Re',
            'ஹெ': 'Rg', 'ஹே': 'Rt', 'ஹை': 'Rr', 'ஹொ': 'Rc', 'ஹோ': 'Rx', 'ஹௌ': 'Rz',

            'க்ஷா': 'Tq', 'க்ஷி': 'Ts', 'க்ஷீ': 'Tw', 'க்ஷு': 'Td', 'க்ஷூ': 'Te',
            'க்ஷெ': 'Tg', 'க்ஷே': 'Tt', 'க்ஷை': 'Tr', 'க்ஷொ': 'Tc', 'க்ஷோ': 'Tx', 'க்ஷௌ': 'Tz',

            //===== Pulli mark (standalone) =====
            '்': 'f',

            //===== Aytham =====
            'ஃ': 'F',

            //===== Vowel signs (diacritics) =====
            'ா': '^q', 'ி': '^s', 'ீ': '^w', 'ு': '^d', 'ூ': '^e',
            'ெ': '^g', 'ே': '^t', 'ை': '^r', 'ொ': '^C', 'ோ': '^x', 'ௌ': '^z',

            //===== Tamil Numerals =====
            '௧': '^#1', '௨': '^#2', '௩': '^#3', '௪': '^#4', '௫': '^#5',
            '௬': '^#6', '௭': '^#7', '௮': '^#8', '௯': '^#9', '௦': '^#0',

            //===== Special Symbols =====
            '௹': 'A', // Rupee
            '௺': 'S',  //  Numeral
            '௸': 'D', //etc
            '௱': 'L',  // 
            '௳': 'Z',  // day
            '௴': 'X',  // month
            '௵': 'C',  // year
            '௶': 'V',   // debit
            '௷': 'B',  // credit
            'ௐ': 'N',  // Om
        }
        this.CONSONANT_KEYS = {
            'க': 'h', 'ப': 'j', 'ம': 'k', 'த': 'l', 'ந': ';',
            'வ': 'v', 'ய': "'", 'ல': 'n', 'ர': 'm',
            'ங': 'b', 'ஞ': ']', 'ச': '[', 'ழ': '/',
            'ள': 'y', 'ற': 'u', 'ன': 'i', 'ட': 'o', 'ண': 'p',
            // # Grantha consonants
            'ஸ': 'Q', 'ஷ': 'W', 'ஜ': 'E', 'ஹ': 'R', 'ஶ': 'U',
        }
        // Vowel sign keys (for generating combinations)
        // Based on m17n file: ^q=ா, ^s=ி, ^w=ீ, ^d=ு, ^e=ூ, ^g=ெ, ^t=ே, ^r=ை, ^C=ொ, ^x=ோ, ^z=ௌ
        this.VOWEL_SIGN_KEYS = {
            'ா': 'q',   // aa (^q)
            'ி': 's',   // i (^s)
            'ீ': 'w',   // ii (^w)
            'ு': 'd',   // u (^d)
            'ூ': 'e',   // uu (^e)
            'ெ': 'g',   // e (^g)
            'ே': 't',   // ee (^t)
            'ை': 'r',   // ai (^r)
            'ொ': 'C',   // o (^C)
            'ோ': 'x',   // oo (^x)
            'ௌ': 'z',   // au (^z)
        }
    }
    generateConsonantVowelCombination(consonant, vowel_sign) {
        /**
         * Generate keystroke sequence for consonant-vowel combination.
         * Returns None if not a valid combination.
         *
         * Example: கா = hq, கி = hs, etc.
         * */
        let cons_key = this.CONSONANT_KEYS.get(consonant)
        let vowel_key = this.VOWEL_SIGN_KEYS.get(vowel_sign)

        if (cons_key && vowel_key) {
            return cons_key + vowel_key
        }

        return null;
    }
    getKeystrokeSequence(tamil_text) {
        /**
         * Convert Tamil text to keystroke sequence.
                Returns list of (key, needs_shift) tuples.
                
                Handles:
                - Standalone characters (vowels, consonants)
                - Consonant-vowel combinations (e.g., கா = hq, டு = od)
                - Consonants with pulli (e.g., க் = hf)
                - Multi-character sequences
                - Tamil numerals and special characters
         * 
         */
        let sequence = [];
        let i = 0
        console.log(tamil_text.length)
        while (i < tamil_text.length) {

            let char = tamil_text[i]
            console.log(i, char)

            if (char == ' ') {
                sequence.push(['Space', false]);
                i += 1;
                console.log('space if')
                continue;
                // # Skip to next iteration after handling space
            }
            else if (i + 1 < tamil_text.length) {
                // First, check for combined characters(consonant + vowel sign)
                // This handles cases like "டு" which should be "od", not "o" + "^d"
                let combined = char + tamil_text[i + 1]
                if (Object.hasOwn(this.CHAR_TO_KEYSTROKES, combined)) {
                    console.log("combined", combined)
                    //Found a combined character(e.g., "டு" = "od")
                    let key_seq = this.CHAR_TO_KEYSTROKES[combined]
                    key_seq.split("").forEach(element => {
                        let is_upper = /[A-Z]/.test(element);
                        sequence.push([element.toUpperCase(), is_upper])

                    });
                    i += 2;
                    continue;
                }
                // # Combined not found, fall through to check single character
            }
            // # Check if current character is in mapping
            if (Object.hasOwn(this.CHAR_TO_KEYSTROKES, char)) {
                let key_seq = this.CHAR_TO_KEYSTROKES[char]
                // Process each key in the sequence
                // Handle special prefixes like ^, ^#
                if (key_seq.startsWith('^#')) {
                    // Tamil numeral: ^#1 -> press ^ then # then 1
                    sequence.push(['^', false])
                    sequence.push(['#', false])
                    if (key_seq.length > 2) {
                        let num_key = key_seq[2];
                        sequence.append([num_key.toUpperCase(), false])
                    }
                }
                else if (key_seq.startsWith('^')) {
                    //# Vowel sign: ^ q -> press ^ then q
                    //# But note: standalone vowel signs are rare - usually they're combined with consonants
                    sequence.push(['^', false])
                    if (key_seq.length > 1) {
                        let vowel_key = key_seq[1];
                        let is_upper = /[A]/.test(vowel_key)
                        sequence.push([vowel_key.toUpperCase(), is_upper])
                    }
                    else {
                        //# Regular sequence: process each key
                        key_seq.split("").forEach(element => {
                            let is_upper = /[A]/.test(element);
                            sequence.push([element, is_upper])

                        }
                        )
                        i += 1;
                    }
                }
                else {
                    // Fallback for unmapped characters
                    if (/[A-Za-z]/.test(char)) {
                        sequence.push([char.toUpperCase(), /[A]/.test(char)])
                    } else {
                        sequence.push([char, false])
                    }
                    i += 1;
                }
            }


        }
        return sequence
    }
}   