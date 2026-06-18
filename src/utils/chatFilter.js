

const BLOCKED_WORDS = [
    // Indonesia
    'anjing', 'bangsat', 'kontol', 'memek', 'goblok', 'tolol', 'tai',
    'asu', 'babi', 'kampret', 'bajingan', 'pepek', 'jancok', 'jancuk', 'anjg', 'anj', 'mmk', 'ajg', 'ngentot', 'ngntt', 'ngewe', 'ngews', 'bj', 'ngens', 'blowjob', 'bajingan', 'sange', 'horny', 'najis', 'kontool', 'anj1n9', 'babhi',
    // English
    'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'cunt', 'dick',
    
  ]
  
  // normalisasi teks biar susah dilewati pakai spasi/simbol aneh
  // contoh: "a.n.j.i.n.g" atau "a n j i n g" tetap ketangkep
  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // hilangkan diakritik
      .replace(/[^a-z0-9]/g, '') // buang semua spasi & simbol
  }
  
  export function containsBadWord(text) {
    const normalized = normalize(text)
    return BLOCKED_WORDS.some((word) => normalized.includes(word))
  }