import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, heart, informationCircle, people, videocam } from 'ionicons/icons';
import Acerca from './pages/Acerca';
import Personas from './pages/Personas';
import Inicio from './pages/Inicio';
import Momentos from './pages/Momentos';
import Opinion from './pages/Opinion';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Acerca">
            <Acerca />
          </Route>
          <Route exact path="/Personas">
            <Personas />
          </Route>
          <Route path="/Inicio">
            <Inicio />
          </Route>
          <Route path="/Momentos">
            <Momentos />
          </Route>
          <Route path="/Opinion">
            <Opinion />
          </Route>
          <Route exact path="/">
            <Redirect to="/Inicio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Opinion" href="/Opinion" layout="icon-top">
            <IonLabel>Opinion</IonLabel>
            <IonIcon icon={heart} />
          </IonTabButton>
          <IonTabButton tab="Momentos" href="/Momentos" layout="icon-top">
            <IonLabel>Moments</IonLabel>
            <IonIcon icon={videocam} />
          </IonTabButton>
          <IonTabButton tab="Inicio" href="/Inicio" layout="icon-top">
            <IonLabel>Home</IonLabel>
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="Personas" href="/Personas" layout="icon-top">
            <IonLabel>Characters</IonLabel>
            <IonIcon icon={people} />
          </IonTabButton>
          <IonTabButton tab="Acerca" href="/Acerca" layout="icon-top">
            <IonLabel>About</IonLabel>
            <IonIcon icon={informationCircle} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
