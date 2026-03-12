import { Card, Title, Info } from './styles';

function CidadeInfo({ cidade }) {
  if (!cidade) return null;

  return (
    <Card>
      <Title>{cidade.nome}</Title>

      <Info>
        <strong>Microregião:</strong> {cidade.microrregiao.nome}
      </Info>

      <Info>
        <strong>Mesorregião:</strong> {cidade.microrregiao.mesorregiao.nome}
      </Info>

      <Info>
        <strong>UF:</strong> {cidade.microrregiao.mesorregiao.UF.nome}
      </Info>
    </Card>
  );
}

export default CidadeInfo;
