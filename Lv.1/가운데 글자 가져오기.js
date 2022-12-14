/* 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다. */

/* s는 길이가 1 이상, 100이하인 스트링입니다. */

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

function solution(s) {
  const start = s.length % 2 ? Math.ceil(s.length / 2) : (s.length / 2) -1
  const end = s.length % 2 ? start -1 : start + 2
  
  return s.substring(start, end)
}