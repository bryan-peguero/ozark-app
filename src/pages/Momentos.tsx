import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  useIonModal,
} from "@ionic/react";
import '../pages/Tab1.css'

const Momentos: React.FC = () => {

  const handleDismiss = () => {
    garyDeaths();
    delDeaths();
    helenDeaths();
    benDeaths();
  };

  const [garyDeath, garyDeaths] = useIonModal(GarysDeath, {
    onDismiss: handleDismiss,
  });

  const [delDeath, delDeaths] = useIonModal(DelDeath, {
    onDismiss: handleDismiss,
  });

  const [helenDeath, helenDeaths] = useIonModal(HelenDeath, {
    onDismiss: handleDismiss,
  });

  const [benDeath, benDeaths] = useIonModal(BenDeath, {
    onDismiss: handleDismiss,
  });
  
  return (
    <IonPage>
      <IonContent  fullscreen class="ion-padding fade">
        <IonHeader>
          <IonTitle size="large" class="ion-title">
            MOMENTS
          </IonTitle>
        </IonHeader>
        <IonContent>
        <div className="contenedor" onClick={() => garyDeath({cssClass: "my-class"})}>
          <img
            src="https://s.yimg.com/ny/api/res/1.2/chbgtvg0XJ3YglWiaRd_7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMxOQ--/https://s.yimg.com/uu/api/res/1.2/iaCev3uOl8gHdIm8LcZm7g--~B/aD0yNDk7dz01MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/288f4ad04bc2fcf8fcf2a63fadd1def0"
            alt="Garys Death"
          />
        </div>
        <h1>Gary's Death</h1>

        <div className="contenedor margen" onClick={() => delDeath({cssClass: "my-class"})}>
          <img
            src="https://64.media.tumblr.com/1035cab1e84a217525a22326457bb456/tumblr_ou74w7h1yQ1wvwvl3o3_540.gifv"
            alt="Dels Death"
          />
        </div>
        <h1>Death of Del</h1>

        <div className="contenedor margen" onClick={() => helenDeath({cssClass: "my-class"})}>
          <img
            src="https://c.tenor.com/idpTyn680m8AAAAC/stare-janet-mcteer.gif"
            alt="Helens Death"
          />
        </div>
        <h1>Helen's Death</h1>

        <div className="contenedor margen" onClick={() => benDeath({cssClass: "my-class"})}>
          <img
            src="https://64.media.tumblr.com/72fd35e1107f7e3b7323ef42ef40028c/5109b2e6d1870464-6c/s400x600/17239002f8f01e8d239fad8beeaf180f259c2da8.gifv"
            alt="Bens Death"
          />
        </div>
        <h1 style={{marginBottom: 100}}>Ben's Death</h1>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Momentos;

const GarysDeath: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div>
    <IonLabel className="labels" onClick={() => onDismiss()}>
      Close
    </IonLabel>
    <div>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/BoAgrmtjKU8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h4 className="h4">Gary's Death</h4>
      <p>Used as bait so Camino Del Rio could hold Wendy Byrde hostage, thrown off a balcony to leave no loose ends.</p>
    </div>
  </div>
);

const DelDeath: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div>
    <IonLabel className="labels" onClick={() => onDismiss()}>
      Close
    </IonLabel>
    <div>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mNhCZwDzQTE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h4 className="h4">The Death of Del</h4>
      <p>After some trouble with the heroin-dealing Snell family, Del was brought to a negotiation that Marty believed would be mutually beneficial for both sides. Unfortunately for Del, he used the word "redneck" in front of the insane and easily irratated Darlene Snell who murdered the cartel cell leader without a second thought soon after. Del's death was covered up by the Byrdes and Snells, though inevitably the Snells had to kill their right hand Ash to repay the transgression.</p>
    </div>
  </div>
);

const HelenDeath: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div>
    <IonLabel className="labels" onClick={() => onDismiss()}>
      Close
    </IonLabel>
    <div>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NuiVHZtv92E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h4 className="h4">Helen's Death</h4>
      <p>Helen’s death is a cold, calculated reminder to the Byrdes by the cartel boss that their lives are firmly controlled by him. By having Helen killed, Navarro essentially tells the Byrdes that they now work directly for him and that they do not need a middleman.</p>
    </div>
  </div>
);

const BenDeath: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div>
    <IonLabel className="labels" onClick={() => onDismiss()}>
      Close
    </IonLabel>
    <div>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/gtm2Ylk-3Mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <h4 className="h4">Ben's Death</h4>
      <p>And so, it seems like Ben is put to death by the cartel hitman for being a liability, and, tragically, it is his sister that gives him up. Ben's death comes back to haunt the Byrde family repeatedly in season 4 but, perhaps more importantly, shows us an even darker side of Wendy Byrde.</p>
    </div>
  </div>
);