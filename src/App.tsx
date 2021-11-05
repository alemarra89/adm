import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  interface CovidData {
    data: Date;
    stato: string;
    ricoverati_con_sintomi: number;
    terapia_intensiva: number;
    totale_ospedalizzati: number;
    isolamento_domiciliare: number;
    totale_positivi: number;
    variazione_totale_positivi: number;
    nuovi_positivi: number;
    dimessi_guariti: number;
    deceduti: number;
    casi_da_sospetto_diagnostico: string;
    casi_da_screening: string;
    totale_casi: number;
    tamponi: number;
    casi_testati: number;
    note: string;
    ingressi_terapia_intensiva: number;
    note_test: string;
    note_casi: string;
    totale_positivi_test_molecolare: number;
    totale_positivi_test_antigenico_rapido: number;
    tamponi_test_molecolare: number;
    tamponi_test_antigenico_rapido: number;
}

  const metodoCheFaLaChiamata = () => {
    // fetch ...
    // cast nel tipo CovidData
  }

  const [datiCovid, setDatiCovid] = useState();

  useEffect(() => {
    console.log('lo useEffect con parentesi quadre vuote viene eseguito solo una volta al caricamento del componente');
  }, []);

  function api<T>(url: string): Promise<T> {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
  }

  interface CovidData {
    data: Date;
    stato: string;
    ricoverati_con_sintomi: number;
    terapia_intensiva: number;
    totale_ospedalizzati: number;
    isolamento_domiciliare: number;
    totale_positivi: number;
    variazione_totale_positivi: number;
    nuovi_positivi: number;
    dimessi_guariti: number;
    deceduti: number;
    casi_da_sospetto_diagnostico: string;
    casi_da_screening: string;
    totale_casi: number;
    tamponi: number;
    casi_testati: number;
    note: string;
    ingressi_terapia_intensiva: number;
    note_test: string;
    note_casi: string;
    totale_positivi_test_molecolare: number;
    totale_positivi_test_antigenico_rapido: number;
    tamponi_test_molecolare: number;
    tamponi_test_antigenico_rapido: number;
  }

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json').then((response: Response) => {
      response.json().then((results: CovidData[]) => {
        console.log('results', results);
        const data = results[0];
        console.log('data', data);
      })
    })
  }, []);

  const getAndamentoNazionale = async () => {
    const results = await api<CovidData[]>('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json');
    console.log('results', results);
    const data = results[0];
    console.log('data', data);
    setData(data);
  }

  const [data, setData] = React.useState<CovidData | undefined>(undefined);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
