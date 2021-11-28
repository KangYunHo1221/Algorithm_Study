//폰켓몬

function solution(nums) {
  var answer = 0;
  var numpokemon = nums.length / 2;

  var pokemonset = new Set(nums);
  var mypokemon = [];
  pokemonset = [...pokemonset];

  for (var i = 0; i < numpokemon; i++) {
    if (!isNaN(pokemonset[i])) {
      answer++;
    }
  }
  return answer;
}

solution([3, 1, 2, 3]);
