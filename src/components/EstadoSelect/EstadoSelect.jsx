import { Container, Label, Select } from './styles';

function EstadoSelect({ estados, estadoSelecionado, onChange }) {
  return (
    <Container>
      <Label htmlFor="estado">Escolha seu estado</Label>

      <Select id="estado" value={estadoSelecionado} onChange={onChange}>
        <option value="default">Escolha seu estado</option>

        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default EstadoSelect;
