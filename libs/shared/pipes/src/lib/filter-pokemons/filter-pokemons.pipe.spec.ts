import { FilterPokemonsPipe } from './filter-pokemons.pipe';

describe('FilterPokemonsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPokemonsPipe();
    expect(pipe).toBeTruthy();
  });
});
