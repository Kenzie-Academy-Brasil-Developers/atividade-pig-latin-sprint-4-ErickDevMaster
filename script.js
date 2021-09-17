/*
    PASSO # 1: codificar palavras que começam com o som de uma vogal do inglês para o latim pig
    Para palavras que começam com sons de vogais, basta adicionar "yay" ao final.

    Por exemplo:
        "eat" becomes "eatyay"
        "omelet" becomes "omeletyay" 
*/
function encodeVowelWord(word) {
    letra = word[0].toLowerCase()
    if(/^[a-zA-Z\u00C0-\u00ff]+$/.test(word[word.length-1]) == false){
        word = word.substr(0,word.length-1)+"yay"+word[word.length-1]
    }else if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
        word +="yay"
    }
    return word; // replace this!
}
  
  /*  
      PASSO # 2: Codifique palavras que começam com um som consonantal do inglês para o latim.
      Para palavras que começam com sons consonantais, todas as letras antes da vogal inicial
      são colocados no final da sequência de palavras, precedidos por um hífen "-". Em seguida, "ay" é adicionado.
      
      For example:
          "latin" becomes "atin-lay"
          "cheers" becomes "eers-chay"
  */
function encodeConsonantWord(word) {
    word = word.toLowerCase()
    let totalConsoante = 0
    let consoantes = ""
    let pontuacao = ""
    if(/^[a-zA-Z\u00C0-\u00ff]+$/.test(word[word.length-1]) == false){
        pontuacao = word[word.length-1]
        word = word.replace(word[word.length-1],"")
    }

    for(let i = 0 ; i < word.length ;i++){
        if(!(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u')){
            totalConsoante++
            consoantes += word[i]
        }else{
            i = word.length
        }
    }
  
    word = word.substr(totalConsoante, word.length)+"-"+consoantes+"ay"+pontuacao
    
    return word; // replace this!
}        
  console.log(encodeConsonantWord("Latin"))
  /*  
      ETAPA # 3: decida se uma determinada palavra começa com um som de vogal ou som consonantal,
      e chame encodeVowelWord (palavra) ou encodeConsonantWord (palavra) quando relevante.
  
      For example:
          "eat" becomes "eatyay" because it starts with a vowel "e"
          "omelet" becomes "omeletyay" because it starts with a vowel "o"
          "latin" becomes "atin-lay" because it starts with a consonant "l""
          "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
          "you" becomes "ou-yay" because it starts with a consonant "y"
  */
  function encodeWord(word) {
    letra = word[0].toLowerCase()
    let palavra = ""
    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
        palavra = encodeVowelWord(word)
    }else{
        palavra = encodeConsonantWord(word)
    }

    return palavra; // replace this!
  }
  console.log(encodeWord("cheers"))
  /*
     PASSO # 4: Codifique uma frase ou parágrafo completo do inglês para o latim.
  */
  function encodeText(text) {
    text = text.toLocaleLowerCase()
    // for(let i = 0 ;i < text.length; i++){
    //     if(/^[a-zA-Z\u00C0-\u00ff]+$/.test(text[i]) == false && text[i] !== " "){

    //         text = text.replace(text[i],"")
    //     }
    // }
    text = text.split(" ")
    let result =""
    for(let i = 0 ; i < text.length ; i++){
        result += encodeWord(text[i])+" "
    }
    return result; // replace this!
  }
  let text = "In linguistics, a notion of text is broad and still open to more precise definition. Roughly speaking, it can be understood as a linguistic manifestation of an author's ideas, which will be interpreted by the reader according to their linguistic and cultural knowledge."
  //let text = "cheers latin"
  console.log(encodeText(text))
  /*
     ETAPA # 5: Crie um formulário da web onde os usuários possam inserir qualquer mensagem em inglês simples
    e codifique-o em porco latino.
  */
    function criaElementos(){
        let caixa = encodeText(document.querySelector(".entrada").value)
        let saida = document.querySelector(".saida")
        saida.innerText = caixa
        console.log(caixa)
    }
    
    let botao = document.querySelector(".botao")
    botao.addEventListener("click", () => criaElementos())

    

  /*  
      PASSO # 6: Decodifique palavras latinas em palavras que começam com o som de uma vogal.
      Em outras palavras, faça o inverso de encodeVowelWord.
  
      For example:
          "eatyay" becomes "eat"
          "omeletyay" becomes "omelet" 
  */
  function decodeVowelWord(word) {
    return ''; // replace this!
  }
  
  /*  
      PASSO # 7: Decodifique palavras latinas em palavras que começam com um som consonantal.
      Em outras palavras, faça o inverso de encodeConsonantWord.
      
      For example:
          "atin-lay" becomes "latin"
          "eers-chay" becomes "cheers"
  */
  function decodeConsonantWord(word) {
    return ''; // replace this!
  }
  
  /*  
      PASSO # 8: Decida se uma determinada palavra começa com um som de vogal ou som consonantal,
      e chame decodeVowelWord (palavra) ou decodeConsonantWord (palavra) quando relevante.
      Em outras palavras, faça o inverso de encodeWord.
  
      For example:
          "eatyay" becomes "eat" because it ends with "yay"
          "omeletyay" becomes "omelet" because it ends with "yay"
          "atin-lay" becomes "latin" because it ends with a hyphen, a consonant sound, and an "ay"
          "eers-chay" becomes "cheers" because it ends with a hyphen, a consonant sound, and an "ay"
          "ou-yay" becomes "you" because it ends with a hyphen, a consonant sound, and an "ay"
  */
  function decodeWord(word) {
    return ''; // replace this!
  }
  
  /*
     PASSO # 9: Decodifique uma frase ou parágrafo completo do latim para o inglês.
  */
  function decodeText(text) {
    return ''; // replace this!
  }
  
  /*
      ETAPA # 10: Crie um formulário da web onde os usuários possam inserir qualquer mensagem em latim pig e obtê-la
      decodificado em inglês simples.
  */
  
  /*
      BÔNUS: volte para encodeText e decodeText e modifique-os para que possam lidar perfeitamente com a pontuação
      tal como '.', ',', '?'
  */
  
  /* ===============
     Abaixo estão algumas variáveis ​​e funções auxiliares que já estão programadas para ajudar a verificar seu progresso. VOCÊ NÃO PRECISA ALTERAR NADA ABAIXO DESTA LINHA.
     ===============*/
  
//   const testVowelWords = {
//     eat: 'eatyay',
//     omelet: 'omeletyay',
//     are: 'areyay',
//     egg: 'eggyay',
//     explain: 'explainyay',
//     always: 'alwaysyay',
//     ends: 'endsyay',
//     every: 'everyyay',
//     another: 'anotheryay',
//     under: 'underyay',
//     island: 'islandyay',
//     elegant: 'elegantyay',
//   };
  
//   const testSimpleConsonantWords = {
//     latin: 'atin-lay',
//     banana: 'anana-bay',
//     trash: 'ash-tray',
//     happy: 'appy-hay',
//     duck: 'uck-day',
//     dopest: 'opest-day',
//     me: 'e-may',
//     too: 'oo-tay',
//     will: 'ill-way',
//     moist: 'oist-may',
//     wet: 'et-way',
//     real: 'eal-ray',
//     simple: 'imple-say',
//     say: 'ay-say',
//     bagel: 'agel-bay',
//     you: 'ou-yay',
//   };
  
//   const testClusteredConsonantWords = {
//     cheers: 'eers-chay',
//     shesh: 'esh-shay',
//     smile: 'ile-smay',
//     string: 'ing-stray',
//     thanks: 'anks-thay',
//     stupid: 'upid-stay',
//     glove: 'ove-glay',
//   };
  
//   const testWords = Object.assign(
//     {},
//     testVowelWords,
//     testSimpleConsonantWords,
//     testClusteredConsonantWords
//   );
  
//   const chipotleMessage =
//     "ince-say e-thay irst-fay ipotle-chay openedyay inyay 1993, we've earned-lay ayay ot-lay aboutyay igs-pay. e-way ow-knay itsyay importantyay or-fay em-thay o-tay oot-ray, oam-ray, andyay expressyay eir-thay atural-nay endencies-tay, o-say e-way ork-way ith-way armers-fay o-whay aise-ray igs-pay at-thay ang-hay outyay outdoorsyay oryay inyay eeply-day edded-bay arns-bay. ey're-thay alsoyay ever-nay iven-gay aily-day oses-day ofyay antibioticsyay o-tay ake-may em-thay ow-gray aster-fay. ut-bay, eaking-spay ofyay allyay ings-thay ig-pay, at-whay onyay earthyay isyay ig-pay atin-lay? eally-ray, o-whay inventedyay ityay? en-whay o-day ou-yay useyay ityay? isyay ityay onlyyay or-fay eens-tway? oes-day ityay ake-may ou-yay ound-say art-smay? isyay ityay onlyyay usedyay y-bay armers-fay? isyay is-thay ust-jay ayay ong-lay etup-say or-fay ayay ogwash-hay oke-jay? areyay ou-yay ill-stay eading-ray? o-say any-may uestions-qay, o-say ittle-lay ime-tay. en-thay againyay, ifyay ou're-yay itting-say ere-thay ith-way ayay ag-bay ull-fay ofyay urritos-bay, aybe-may ou-yay ave-hay e-thay ime-tay o-tay onder-pay andyay ecode-day allyay is-thay. andyay ifyay at's-thay e-thay ase-cay, en-thay itsyay ack-bay, unwrapyay, andyay onder-pay awayyay.";
  
//   const simpleChipotleMessage = chipotleMessage
//     .replace(/,/g, '')
//     .replace(/\./g, '')
//     .replace(/\?/g, '');
  
//   /* ==========
//      Unit Tests
//      ========== */
  
//   function testEncodeVowelWords(words) {
//     for (var key in words) {
//       let result = encodeVowelWord(key);
//       console.assert(result === words[key], {
//         message: 'english to pig latin failed',
//         word: key,
//         expected: words[key],
//         result: result,
//       });
//     }
//   }
  
//   function testEncodeConsonantWords(words) {
//     for (var key in words) {
//       let result = encodeConsonantWord(key);
//       console.assert(result === words[key], {
//         message: 'english to pig latin failed',
//         word: key,
//         expected: words[key],
//         result: result,
//       });
//     }
//   }
  
//   function testEncodeWords(words) {
//     for (var key in words) {
//       let result = encodeWord(key);
//       console.assert(result === words[key], {
//         message: 'english to pig latin failed',
//         word: key,
//         expected: words[key],
//         result: result,
//       });
//     }
//   }
  
//   function testEncodeText(words) {
//     const keys = Object.keys(words);
//     const values = Object.values(words);
//     const text = keys.join(' ');
//     let result = encodeText(text);
//     let expected = values.join(' ');
//     if (result != expected) {
//       console.assert(result === expected, {
//         message: 'english to pig latin failed',
//         text: text,
//         expected: expected,
//         result: result,
//       });
//     }
//   }
  
//   function testDecodeVowelWords(words) {
//     for (var key in words) {
//       let result = decodeVowelWord(words[key]);
//       console.assert(result === key, {
//         message: 'pig latin to english failed',
//         word: words[key],
//         expected: key,
//         result: result,
//       });
//     }
//   }
  
//   function testDecodeConsonantWords(words) {
//     for (var key in words) {
//       let result = decodeConsonantWord(words[key]);
//       console.assert(result === key, {
//         message: 'pig latin to english failed',
//         word: words[key],
//         expected: key,
//         result: result,
//       });
//     }
//   }
  
//   function testDecodeWords(words) {
//     for (var key in words) {
//       let result = decodeWord(words[key]);
//       console.assert(result === key, {
//         message: 'pig latin to english failed',
//         word: words[key],
//         expected: key,
//         result: result,
//       });
//     }
//   }
  
//   function testDecodeText(words) {
//     const keys = Object.keys(words);
//     const values = Object.values(words);
//     const text = values.join(' ');
//     let result = decodeText(text);
//     let expected = keys.join(' ');
//     if (result != expected) {
//       console.assert(result === expected, {
//         message: 'pig latin to english failed',
//         text: text,
//         expected: expected,
//         result: result,
//       });
//     }
//   }
  
//   console.log(
//     'Testing STEP # 1: encoding words that begin with a vowel sound...'
//   );
//   if (encodeVowelWord('apple') != '') {
//     testEncodeVowelWords(testVowelWords);
//   } else {
//     console.log('encodeVowelWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 2: encoding words that begin with a consonant sound...'
//   );
//   if (encodeConsonantWord('test') != '') {
//     testEncodeConsonantWords(testSimpleConsonantWords);
//   } else {
//     console.log('encodeConsonantWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 2 (cont): encoding words that begin with a consonant clusters...'
//   );
//   if (encodeConsonantWord('test') != '') {
//     testEncodeConsonantWords(testClusteredConsonantWords);
//   } else {
//     console.log('encodeConsonantWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 3: deciding to encode between vowel and consonant words...'
//   );
//   if (encodeWord('test') != '') {
//     testEncodeWords(testWords);
//   } else {
//     console.log('encodeWord not implemented!');
//   }
//   console.log('Testing STEP # 4: encode a sentence (no punctuation)...');
//   if (encodeText('test') != '') {
//     testEncodeText(testWords);
//   } else {
//     console.log('encodeText not implemented!');
//   }
//   console.log(
//     'Testing STEP # 6: decoding words that begin with a vowel sound...'
//   );
//   if (decodeVowelWord('appleyay') != '') {
//     testDecodeVowelWords(testVowelWords);
//   } else {
//     console.log('decodeVowelWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 7: decoding words that begin with a consonant sound...'
//   );
//   if (decodeConsonantWord('est-tay') != '') {
//     testDecodeConsonantWords(testSimpleConsonantWords);
//   } else {
//     console.log('decodeConsonantWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 7 (cont): decoding words that begin with a consonant clusters...'
//   );
//   if (decodeConsonantWord('est-tay') != '') {
//     testDecodeConsonantWords(testClusteredConsonantWords);
//   } else {
//     console.log('decodeConsonantWord not implemented!');
//   }
//   console.log(
//     'Testing STEP # 8: deciding to decode between vowel and consonant words...'
//   );
//   if (decodeWord('appleyay') != '') {
//     testDecodeWords(testWords);
//   } else {
//     console.log('decodeWord not implemented!');
//   }
//   console.log('Testing STEP # 9: encode a sentence (no punctuation)...');
//   if (decodeText('appleyay') != '') {
//     testDecodeText(testWords);
//   } else {
//     console.log('decodeText not implemented!');
//   }
//   console.log('FINAL: Decoding the chipotle message (no punctuation)...');
//   if (decodeText('appleyay') != '') {
//     console.log(decodeText(simpleChipotleMessage));
//   } else {
//     console.log('decodeText not implemented!');
//   }
//   console.log('BONUS: Decoding the chipotle message (with punctuation)...');
//   if (decodeText('appleyay') != '') {
//     console.log(decodeText(chipotleMessage));
//   } else {
//     console.log('decodeText not implemented!');
//   }
  