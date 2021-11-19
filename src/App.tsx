import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Option, Question, QuizData } from './model';
import { DatiQuiz } from './dati-quiz';

function App() {

//   interface CovidData {
//     data: Date;
//     stato: string;
//     ricoverati_con_sintomi: number;
//     terapia_intensiva: number;
//     totale_ospedalizzati: number;
//     isolamento_domiciliare: number;
//     totale_positivi: number;
//     variazione_totale_positivi: number;
//     nuovi_positivi: number;
//     dimessi_guariti: number;
//     deceduti: number;
//     casi_da_sospetto_diagnostico: string;
//     casi_da_screening: string;
//     totale_casi: number;
//     tamponi: number;
//     casi_testati: number;
//     note: string;
//     ingressi_terapia_intensiva: number;
//     note_test: string;
//     note_casi: string;
//     totale_positivi_test_molecolare: number;
//     totale_positivi_test_antigenico_rapido: number;
//     tamponi_test_molecolare: number;
//     tamponi_test_antigenico_rapido: number;
// }

//   const metodoCheFaLaChiamata = () => {
//     // fetch ...
//     // cast nel tipo CovidData
//   }

//   const [datiCovid, setDatiCovid] = useState();

//   useEffect(() => {
//     console.log('lo useEffect con parentesi quadre vuote viene eseguito solo una volta al caricamento del componente');
//   }, []);

//   function api<T>(url: string): Promise<T> {
//     return fetch(url).then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json() as Promise<T>
//     })
//   }

//   interface CovidData {
//     data: Date;
//     stato: string;
//     ricoverati_con_sintomi: number;
//     terapia_intensiva: number;
//     totale_ospedalizzati: number;
//     isolamento_domiciliare: number;
//     totale_positivi: number;
//     variazione_totale_positivi: number;
//     nuovi_positivi: number;
//     dimessi_guariti: number;
//     deceduti: number;
//     casi_da_sospetto_diagnostico: string;
//     casi_da_screening: string;
//     totale_casi: number;
//     tamponi: number;
//     casi_testati: number;
//     note: string;
//     ingressi_terapia_intensiva: number;
//     note_test: string;
//     note_casi: string;
//     totale_positivi_test_molecolare: number;
//     totale_positivi_test_antigenico_rapido: number;
//     tamponi_test_molecolare: number;
//     tamponi_test_antigenico_rapido: number;
//   }

//   React.useEffect(() => {
//     fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json').then((response: Response) => {
//       response.json().then((results: CovidData[]) => {
//         console.log('results', results);
//         console.log('data', data);
//       })
//     })
//   }, []);

//   const getAndamentoNazionale = async () => {
//     const results = await api<CovidData[]>('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json');
//     console.log('results', results);
//     const data = results[0];
//     console.log('data', data);
//     setData(data);
//   }
  
//   const [data, setData] = React.useState<CovidData | undefined>(undefined);
  
  
//   const [domande, setDomande] = React.useState<Question[]>([]);
//   const getDatiQuiz = async () => {
//     const results = await api<QuizData[]>('https://raw.githubusercontent.com/alemarra89/adm/main/public/api-quiz.json');
//     console.log('results', results[2].questions);
//     setDomande(results[2].questions);
//   }


  const [quiz, setQuiz] = useState<DatiQuiz>();

  const url = "https://raw.githubusercontent.com/alemarra89/adm/main/public/api-quiz.json";
  useEffect(() => {
    // questa parte viene eseguita solo la prima volta

    // chiamata http da fare con fetch
    fetch(url).then(async(response: Response) => {
      const res: DatiQuiz[] = await response.json();
      // prendiamo l'elemento 2 perché è l'unico pezzo del quiz che contiene le domande
      console.log(res[2]);

      // utilizziamo lo state per memorizzare il quiz
      setQuiz(res[2]);
    });
  }, []);

  return (
    <div>

      <p>Quiz ollè</p>

        {quiz?.questions.map((domanda: Question, index: number) => (
          <div key={'domanda_' + index}>
            <p>{index + 1}. {domanda.title}</p>
            <ul>
              {domanda.options.map((opzione: Option) => (
                <li
                  key={'opz_' + opzione.uuid}
                  style={{ fontWeight: opzione.isCorrect ? 'bold' : 'normal' }}
                >
                    {opzione.label} - {opzione.votesPercentage} %
                    <div style={{ height: 20, width: '100%', border: '1px solid black', position: 'relative'}}>
                      <div style={{ height: 20, width: opzione.votesPercentage + '%', position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: 'green'}}>
                      </div>
                    </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
