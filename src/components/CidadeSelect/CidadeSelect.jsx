import { Container, Label, Select } from './styles';

function CidadeSelect({ cidades, cidadeSelecionada, onChange }) {
  return (
    <Container>
      <Label htmlFor="cidade">Escolha a cidade</Label>

      <Select id="cidade" value={cidadeSelecionada} onChange={onChange}>
        <option value="default">Escolha a cidade</option>

        {cidades.map((cidade) => (
          <option key={cidade.id} value={cidade.id}>
            {cidade.nome}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default CidadeSelect;
