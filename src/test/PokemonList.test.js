const PokemonList = ('./components/PokemonList')

describe('PokemonList', () => {
    //create test
    it('should render PokemonList', () => {
        const wrapper = shallow(<PokemonList />)
        expect(wrapper.find('PokemonList')).to.have.lengthOf(1)
    })
})