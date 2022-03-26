import { IonContent, IonHeader, IonPage } from '@ionic/react';
import '../pages/Tab1.css'

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent class="fade" fullscreen scroll-y="false">
        <IonHeader collapse="condense">
        </IonHeader>
        <img src="https://dnm.nflximg.net/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfpzB8-17go5xa4ODtv0NBfyvmFgN_n2nxbC5Iw08_4bUUImX6C8x-Ke_ckFv2BxrdFWHCijBFDnTUE6qoXTCo1volY6dA3izJETTzXLapFfaAvjWNxCZVhzKKkF6w.jpg?r=07b" alt="Portada Serie Ozark" height="100%" width="100%"/>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
