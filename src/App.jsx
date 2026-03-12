import { useEffect, useState } from 'react';

import EstadoSelect from './components/EstadoSelect/EstadoSelect';
import CidadeSelect from './components/CidadeSelect/CidadeSelect';
import CidadeInfo from './components/CidadeInfo/CidadeInfo';
import Button from './components/Button/Button';
import Container from './components/Container/Container';

function App() {
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('default');

  const [cidades, setCidades] = useState([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState('default');

  const [cidadeInfo, setCidadeInfo] = useState(null);

  // carregar estados
  useEffect(() => {
    async function carregarEstados() {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const data = await response.json();
      setEstados(data);
    }

    carregarEstados();
  }, []);

  // carregar cidades quando mudar estado
  useEffect(() => {
    if (estadoSelecionado === 'default') return;

    async function carregarCidades() {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`,
      );

      const data = await response.json();
      setCidades(data);
      setCidadeSelecionada('default');
      setCidadeInfo(null);
    }

    carregarCidades();
  }, [estadoSelecionado]);

  function verMais() {
    if (cidadeSelecionada === 'default') return;

    const cidade = cidades.find((c) => c.id == cidadeSelecionada);
    setCidadeInfo(cidade);
  }

  return (
    <Container>
      <h1>Dados IBGE</h1>

      <EstadoSelect
        estados={estados}
        estadoSelecionado={estadoSelecionado}
        onChange={(e) => setEstadoSelecionado(e.target.value)}
      />

      {estadoSelecionado !== 'default' && (
        <>
          <CidadeSelect
            cidades={cidades}
            cidadeSelecionada={cidadeSelecionada}
            onChange={(e) => setCidadeSelecionada(e.target.value)}
          />

          <Button onClick={verMais}>Ver mais</Button>
        </>
      )}

      <CidadeInfo cidade={cidadeInfo} />
    </Container>
  );
}

export default App;
